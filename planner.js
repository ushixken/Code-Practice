/* ===== Floating Code Planner (flowchart) =====
   Drop-in feature: lets a programmer sketch program logic
   (Start/End, Input/Output, Process, Decision, Function, Loop)
   before writing code. No dependencies.
*/
(function () {
  const NODE_TYPES = [
    { type: "terminal", label: "Start/End", icon: "⬭", text: "Start" },
    { type: "io", label: "Input/Output", icon: "▱", text: "Read input" },
    { type: "process", label: "Process", icon: "▭", text: "Do something" },
    { type: "decision", label: "Decision", icon: "◇", text: "condition?" },
    { type: "function", label: "Function", icon: "ƒ", text: "callFunction()" },
    { type: "loop", label: "Loop", icon: "↻", text: "for / while" },
  ];

  // Fixed-but-generous canvas extent (PureRef/AutoCAD-style bounded "infinite" plane).
  // Raise these later if plans get much bigger.
  const CANVAS_W = 6000;
  const CANVAS_H = 4000;
  const CANVAS_ORIGIN_X = CANVAS_W / 2;
  const CANVAS_ORIGIN_Y = CANVAS_H / 2;

  let state = {
    nodes: [],   // {id, type, text, x, y} — x/y are canvas coords (0..CANVAS_W/H)
    edges: [],   // {id, from, to, label}
    nextId: 1,
    selected: null,
    zoom: 1,
  };

  // Navigation modifier keys
  const nav = { space: false, ctrl: false };
  // Live node-socket connection drag (Nuke-style). Dragging from an output
  // socket sets fromId (line follows the mouse as the "to" end); dragging
  // from an input socket sets toId instead (line follows the mouse as the
  // "from" end) — same live-preview/drop logic, just mirrored.
  const linking = { active: false, fromId: null, toId: null };
  // Detaching an existing edge: grab the end nearest the cursor and drag it
  // loose, Nuke-style — drop on another node to rewire, or on empty canvas
  // to disconnect.
  const detaching = { active: false, edgeId: null, movingEnd: null, fixedId: null, label: "" };
  function resetDetaching() {
    detaching.active = false;
    detaching.edgeId = null;
    detaching.movingEnd = null;
    detaching.fixedId = null;
    detaching.label = "";
  }

  function uid() { return "n" + state.nextId++; }

  // ---------- Build DOM shell ----------
  function buildShell() {
    const panel = document.createElement("div");
    panel.className = "planner-float";
    panel.id = "codePlanner";
    panel.innerHTML = `
      <div class="planner-titlebar" id="plannerDrag">
        <div class="planner-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="8.5" y="14" width="7" height="7" rx="1.5"></rect>
            <path d="M6.5 10v2a2 2 0 0 0 2 2h2"></path>
            <path d="M17.5 10v2a2 2 0 0 0-2 2h-2"></path>
          </svg>
          CODE PLANNER — flowchart
        </div>
        <div class="planner-zoom-badge" id="plannerZoomLabel">100%</div>
        <button class="planner-close-btn" id="plannerCloseBtn" title="Close">✕</button>
      </div>
      <div class="planner-toolbar" id="plannerToolbar"></div>
      <div class="planner-canvas-wrap" id="plannerCanvasWrap">
        <div class="planner-canvas-inner" id="plannerCanvasInner">
          <svg class="planner-svg" id="plannerSvg">
            <defs>
              <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                <path d="M0,0 L8,3 L0,6 Z" fill="#8a8a8a"></path>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    // Toolbar buttons
    const toolbar = panel.querySelector("#plannerToolbar");
    NODE_TYPES.forEach((nt) => {
      const btn = document.createElement("button");
      btn.textContent = `${nt.icon} ${nt.label}`;
      btn.title = `Add ${nt.label} node (or drag onto the canvas to place it)`;
      btn.draggable = true;
      btn.addEventListener("click", () => addNode(nt.type, nt.text));
      btn.addEventListener("dragstart", (e) => {
        e.dataTransfer.effectAllowed = "copy";
        e.dataTransfer.setData("application/x-planner-node-type", nt.type);
        e.dataTransfer.setData("text/plain", nt.type);
      });
      toolbar.appendChild(btn);
    });

    const sep1 = document.createElement("div");
    sep1.className = "planner-sep";
    toolbar.appendChild(sep1);

    const templateBtn = document.createElement("button");
    templateBtn.textContent = "✨ Basic template";
    templateBtn.title = "Insert Start → Input → Process → Decision → Output → End";
    templateBtn.addEventListener("click", insertTemplate);
    toolbar.appendChild(templateBtn);

    const centerBtn = document.createElement("button");
    centerBtn.textContent = "⊙ Center view";
    centerBtn.title = "Re-center the canvas on your nodes";
    centerBtn.addEventListener("click", () => centerOnNodes(true));
    toolbar.appendChild(centerBtn);

    const spacer = document.createElement("div");
    spacer.className = "planner-spacer";
    toolbar.appendChild(spacer);

    const exportBtn = document.createElement("button");
    exportBtn.textContent = "⬇ Export JSON";
    exportBtn.addEventListener("click", exportPlan);
    toolbar.appendChild(exportBtn);

    const clearBtn = document.createElement("button");
    clearBtn.className = "danger";
    clearBtn.textContent = "🗑 Clear";
    clearBtn.addEventListener("click", () => {
      if (confirm("Clear the whole plan?")) {
        state.nodes = [];
        state.edges = [];
        render();
      }
    });
    toolbar.appendChild(clearBtn);

    panel.querySelector("#plannerCloseBtn").addEventListener("click", () => {
      panel.classList.remove("open");
    });

    makeDraggablePanel(panel, panel.querySelector("#plannerDrag"));
    makeResizablePanel(panel);
    return panel;
  }

  // ---------- Resizing the floating panel from any edge/corner ----------
  function makeResizablePanel(panel) {
    const MIN_W = 480, MIN_H = 360;
    const dirs = ["n", "s", "e", "w", "ne", "nw", "se", "sw"];
    dirs.forEach((dir) => {
      const handle = document.createElement("div");
      handle.className = "planner-resize-handle handle-" + dir;
      panel.appendChild(handle);

      handle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX, startY = e.clientY;
        const rect = panel.getBoundingClientRect();
        const startW = rect.width, startH = rect.height;
        const startLeft = rect.left, startTop = rect.top;

        // Lock in absolute position (panel may still be using the initial
        // translateX(-50%) centering) so edges resize from a fixed frame.
        panel.style.transform = "none";
        panel.style.left = startLeft + "px";
        panel.style.top = startTop + "px";

        function onMove(ev) {
          const dx = ev.clientX - startX;
          const dy = ev.clientY - startY;

          if (dir.includes("e")) {
            panel.style.width = Math.max(MIN_W, startW + dx) + "px";
          }
          if (dir.includes("s")) {
            panel.style.height = Math.max(MIN_H, startH + dy) + "px";
          }
          if (dir.includes("w")) {
            const newW = Math.max(MIN_W, startW - dx);
            panel.style.width = newW + "px";
            panel.style.left = startLeft + (startW - newW) + "px";
          }
          if (dir.includes("n")) {
            const newH = Math.max(MIN_H, startH - dy);
            panel.style.height = newH + "px";
            panel.style.top = startTop + (startH - newH) + "px";
          }
        }
        function onUp() {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);
        }
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      });
    });
  }

  // ---------- Toggle button in activity bar (fallback: bottom-right button) ----------
  function buildToggleButton(panel) {
    let hostBar = document.querySelector(".activitybar");
    let btn = document.createElement("button");
    btn.id = "plannerToggleBtn";
    btn.title = "Code Planner (flowchart)";
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="14" width="7" height="7" rx="1"></rect>
        <path d="M6.5 10v4a2 2 0 0 0 2 2h5"></path>
      </svg>`;
    btn.addEventListener("click", () => {
      const wasClosed = !panel.classList.contains("open");
      panel.classList.toggle("open");
      if (panel.classList.contains("open") && state.nodes.length === 0) {
        insertTemplate();
      } else if (wasClosed) {
        requestAnimationFrame(() => centerOnNodes());
      }
    });

    if (hostBar) {
      hostBar.appendChild(btn);
    } else {
      // Fallback floating launcher if no .activitybar exists on the page
      btn.style.cssText =
        "position:fixed;bottom:20px;right:20px;z-index:9998;width:44px;height:44px;" +
        "border-radius:50%;background:#e3a13f;border:none;color:#1e1e1e;cursor:pointer;" +
        "box-shadow:0 4px 14px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;";
      document.body.appendChild(btn);
    }
  }

  // ---------- Dragging the whole floating panel ----------
  function makeDraggablePanel(panel, handle) {
    let dx, dy, dragging = false;
    handle.addEventListener("mousedown", (e) => {
      if (e.target.closest("button")) return;
      dragging = true;
      const rect = panel.getBoundingClientRect();
      dx = e.clientX - rect.left;
      dy = e.clientY - rect.top;
      panel.style.transform = "none";
      document.body.style.userSelect = "none";
    });
    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      panel.style.left = e.clientX - dx + "px";
      panel.style.top = e.clientY - dy + "px";
    });
    window.addEventListener("mouseup", () => {
      dragging = false;
      document.body.style.userSelect = "";
    });
  }

  // ---------- Node CRUD ----------
  function currentViewCenter() {
    const wrap = document.getElementById("plannerCanvasWrap");
    if (!wrap) return { x: CANVAS_ORIGIN_X, y: CANVAS_ORIGIN_Y };
    const z = state.zoom || 1;
    return {
      x: (wrap.scrollLeft + wrap.clientWidth / 2) / z,
      y: (wrap.scrollTop + wrap.clientHeight / 2) / z,
    };
  }

  function addNode(type, defaultText, x, y) {
    const center = currentViewCenter();
    const jitter = () => (Math.random() - 0.5) * 60;
    const node = {
      id: uid(),
      type,
      text: defaultText,
      x: x != null ? x : center.x - 70 + jitter(),
      y: y != null ? y : center.y - 30 + jitter(),
    };
    state.nodes.push(node);
    render();
  }

  function removeNode(id) {
    state.nodes = state.nodes.filter((n) => n.id !== id);
    state.edges = state.edges.filter((e) => e.from !== id && e.to !== id);
    render();
  }

  function insertTemplate() {
    state.nodes = [];
    state.edges = [];
    const baseX = CANVAS_ORIGIN_X - 100, baseY = CANVAS_ORIGIN_Y - 340;
    const seq = [
      { type: "terminal", text: "Start", x: baseX + 60, y: baseY + 0 },
      { type: "io", text: "Read input", x: baseX + 40, y: baseY + 100 },
      { type: "process", text: "Validate / parse data", x: baseX + 20, y: baseY + 200 },
      { type: "decision", text: "Valid?", x: baseX + 40, y: baseY + 310 },
      { type: "process", text: "Handle error", x: baseX + 320, y: baseY + 310 },
      { type: "process", text: "Run core logic", x: baseX + 20, y: baseY + 450 },
      { type: "io", text: "Print / return output", x: baseX + 20, y: baseY + 560 },
      { type: "terminal", text: "End", x: baseX + 60, y: baseY + 660 },
    ];
    const ids = seq.map((n) => {
      const id = uid();
      state.nodes.push({ id, ...n });
      return id;
    });
    const link = (a, b, label) => state.edges.push({ id: uid() + "e", from: a, to: b, label });
    link(ids[0], ids[1]);
    link(ids[1], ids[2]);
    link(ids[2], ids[3]);
    link(ids[3], ids[4], "no");
    link(ids[3], ids[5], "yes");
    link(ids[5], ids[6]);
    link(ids[6], ids[7]);
    link(ids[4], ids[7]);
    render();
    requestAnimationFrame(() => centerOnNodes());
  }

  // ---------- Centering / view ----------
  function centerOnNodes(smooth) {
    const wrap = document.getElementById("plannerCanvasWrap");
    if (!wrap) return;
    const z = state.zoom || 1;
    let targetX = CANVAS_ORIGIN_X, targetY = CANVAS_ORIGIN_Y;
    if (state.nodes.length) {
      const xs = state.nodes.map((n) => n.x);
      const ys = state.nodes.map((n) => n.y);
      targetX = (Math.min(...xs) + Math.max(...xs)) / 2 + 80;
      targetY = (Math.min(...ys) + Math.max(...ys)) / 2 + 40;
    }
    const left = targetX * z - wrap.clientWidth / 2;
    const top = targetY * z - wrap.clientHeight / 2;
    if (smooth && "scrollTo" in wrap) {
      wrap.scrollTo({ left, top, behavior: "smooth" });
    } else {
      wrap.scrollLeft = left;
      wrap.scrollTop = top;
    }
  }

  // ---------- Export ----------
  function exportPlan() {
    const data = JSON.stringify({ nodes: state.nodes, edges: state.edges }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code-plan.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  // ---------- Rendering ----------
  function render() {
    const inner = document.getElementById("plannerCanvasInner");
    const svg = document.getElementById("plannerSvg");
    if (!inner || !svg) return;

    inner.querySelectorAll(".pnode").forEach((el) => el.remove());

    inner.style.width = CANVAS_W + "px";
    inner.style.height = CANVAS_H + "px";
    svg.setAttribute("width", CANVAS_W);
    svg.setAttribute("height", CANVAS_H);

    state.nodes.forEach((n) => renderNode(inner, n));
    requestAnimationFrame(drawEdges);
  }

  function renderNode(inner, n) {
    const el = document.createElement("div");
    el.className = "pnode";
    el.dataset.type = n.type;
    el.dataset.id = n.id;
    el.style.left = n.x + "px";
    el.style.top = n.y + "px";
    if (state.selected === n.id) el.classList.add("selected");

    const inSocket = document.createElement("div");
    inSocket.className = "pnode-socket socket-in";
    inSocket.title = "Drag to another node to connect";
    if (state.edges.some((e) => e.to === n.id)) inSocket.classList.add("has-link");
    inSocket.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      e.preventDefault();
      linking.active = true;
      linking.toId = n.id;
      el.classList.add("linking-source");
      inSocket.classList.add("socket-drag-hide");
      drawEdges();
    });
    el.appendChild(inSocket);

    const del = document.createElement("div");
    del.className = "pnode-delete";
    del.textContent = "✕";
    del.title = "Delete node";
    del.addEventListener("mousedown", (e) => e.stopPropagation());
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      removeNode(n.id);
    });
    el.appendChild(del);

    const txt = document.createElement("div");
    txt.className = "pnode-text";
    txt.textContent = n.text;
    el.appendChild(txt);

    txt.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      const input = document.createElement("textarea");
      input.className = "pnode-edit";
      input.value = n.text;
      input.rows = 2;
      el.replaceChild(input, txt);
      input.focus();
      input.select();
      const commit = () => {
        n.text = input.value.trim() || n.text;
        render();
      };
      input.addEventListener("blur", commit);
      input.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" && !ev.shiftKey) {
          ev.preventDefault();
          commit();
        }
      });
    });

    const outSocket = document.createElement("div");
    outSocket.className = "pnode-socket socket-out";
    outSocket.title = "Drag to another node to connect";
    if (state.edges.some((e) => e.from === n.id)) outSocket.classList.add("has-link");
    outSocket.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      e.preventDefault();
      linking.active = true;
      linking.fromId = n.id;
      el.classList.add("linking-source");
      outSocket.classList.add("socket-drag-hide");
      drawEdges();
    });
    el.appendChild(outSocket);

    el.addEventListener("click", (e) => {
      e.stopPropagation();
      state.selected = n.id;
      render();
    });

    // Dropping a connection onto this node's body (or its sockets)
    el.addEventListener("mouseup", (e) => {
      if (linking.active && linking.fromId && linking.fromId !== n.id) {
        state.edges.push({ id: uid() + "e", from: linking.fromId, to: n.id, label: "" });
      }
      if (linking.active && linking.toId && linking.toId !== n.id) {
        state.edges.push({ id: uid() + "e", from: n.id, to: linking.toId, label: "" });
      }
      if (detaching.active && detaching.fixedId && detaching.fixedId !== n.id) {
        const from = detaching.movingEnd === "from" ? n.id : detaching.fixedId;
        const to = detaching.movingEnd === "to" ? n.id : detaching.fixedId;
        state.edges.push({ id: uid() + "e", from, to, label: detaching.label || "" });
        resetDetaching();
      }
    });

    makeNodeDraggable(el, n);
    inner.appendChild(el);
  }

  function makeNodeDraggable(el, n) {
    let sx, sy, ox, oy, dragging = false;
    el.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("pnode-delete")) return;
      if (e.target.classList.contains("pnode-edit")) return;
      if (e.target.classList.contains("pnode-socket")) return;
      dragging = true;
      sx = e.clientX;
      sy = e.clientY;
      ox = n.x;
      oy = n.y;
      e.stopPropagation();
    });
    window.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      n.x = Math.min(CANVAS_W - 40, Math.max(0, ox + (e.clientX - sx) / state.zoom));
      n.y = Math.min(CANVAS_H - 40, Math.max(0, oy + (e.clientY - sy) / state.zoom));
      el.style.left = n.x + "px";
      el.style.top = n.y + "px";
      drawEdges();
    });
    window.addEventListener("mouseup", () => {
      dragging = false;
    });
  }

  // ---------- Pan (middle-click / Space + right-drag) & Zoom (Ctrl+Space + left-drag) ----------
  function setZoom(z) {
    state.zoom = Math.min(2.5, Math.max(0.25, z));
    const inner = document.getElementById("plannerCanvasInner");
    if (inner) inner.style.transform = `scale(${state.zoom})`;
    const label = document.getElementById("plannerZoomLabel");
    if (label) label.textContent = Math.round(state.zoom * 100) + "%";
    drawEdges();
  }

  function setupPanZoom(wrap) {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        nav.space = true;
        if (!e.target.closest(".pnode-edit")) e.preventDefault();
        wrap.classList.add("panning");
      }
      if (e.key === "Control") {
        nav.ctrl = true;
        if (nav.space) wrap.classList.add("zooming");
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.code === "Space") {
        nav.space = false;
        wrap.classList.remove("panning", "panning-active");
      }
      if (e.key === "Control") {
        nav.ctrl = false;
        wrap.classList.remove("zooming");
      }
    });
    wrap.addEventListener("contextmenu", (e) => {
      if (nav.space) e.preventDefault();
    });

    let panning = false, panStartX, panStartY, panScrollX, panScrollY;
    let zooming = false, zoomStartX, zoomStartZoom;
    let zoomAnchorScreenX, zoomAnchorScreenY, zoomAnchorContentX, zoomAnchorContentY;

    wrap.addEventListener("mousedown", (e) => {
      const isCtrlSpaceLeftClick = nav.space && nav.ctrl && e.button === 0;
      const isMiddleClick = e.button === 1;
      const isSpaceRightClick = nav.space && !nav.ctrl && e.button === 2;
      const isSpaceLeftClick = nav.space && !nav.ctrl && e.button === 0;

      if (isCtrlSpaceLeftClick) {
        zooming = true;
        zoomStartX = e.clientX;
        zoomStartZoom = state.zoom;
        // Anchor the zoom on the cursor position at the moment the drag starts,
        // so zooming grows/shrinks around that point instead of the top-left corner.
        const wrapRect = wrap.getBoundingClientRect();
        zoomAnchorScreenX = e.clientX - wrapRect.left;
        zoomAnchorScreenY = e.clientY - wrapRect.top;
        zoomAnchorContentX = (wrap.scrollLeft + zoomAnchorScreenX) / state.zoom;
        zoomAnchorContentY = (wrap.scrollTop + zoomAnchorScreenY) / state.zoom;
        e.preventDefault();
      } else if (isMiddleClick || isSpaceRightClick || isSpaceLeftClick) {
        panning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        panScrollX = wrap.scrollLeft;
        panScrollY = wrap.scrollTop;
        wrap.classList.add("panning-active");
        e.preventDefault();
      }
    });
    window.addEventListener("mousemove", (e) => {
      if (panning) {
        wrap.scrollLeft = panScrollX - (e.clientX - panStartX);
        wrap.scrollTop = panScrollY - (e.clientY - panStartY);
      }
      if (zooming) {
        const delta = e.clientX - zoomStartX;
        setZoom(zoomStartZoom + delta * 0.006);
        const z = state.zoom;
        // Re-anchor so the original cursor point stays under the cursor as zoom changes
        wrap.scrollLeft = zoomAnchorContentX * z - zoomAnchorScreenX;
        wrap.scrollTop = zoomAnchorContentY * z - zoomAnchorScreenY;
      }
      if (linking.active) drawEdges(e);
      if (detaching.active) drawEdges(e);
    });
    window.addEventListener("mouseup", () => {
      panning = false;
      zooming = false;
      wrap.classList.remove("panning-active");
      if (linking.active) {
        linking.active = false;
        linking.fromId = null;
        linking.toId = null;
        document.querySelectorAll(".pnode.linking-source").forEach((el) => el.classList.remove("linking-source"));
        render();
      }
      if (detaching.active) {
        // Not resolved by a node's own mouseup handler, so the drop was on
        // empty canvas: the edge was already pulled from state, so this
        // just cleans up the live preview line (i.e. disconnects it).
        resetDetaching();
        render();
      }
    });
  }

  function nodeRectCanvas(el) {
    const inner = document.getElementById("plannerCanvasInner");
    const innerRect = inner.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const z = state.zoom || 1;
    return {
      left: (r.left - innerRect.left) / z,
      top: (r.top - innerRect.top) / z,
      width: r.width / z,
      height: r.height / z,
    };
  }

  function nodeCenterCanvas(el) {
    const r = nodeRectCanvas(el);
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // Nuke-style adaptive port: the anchor point isn't pinned to a fixed
  // top/bottom position — it's wherever a line from the node's center toward
  // the other node crosses the node's own border. So a node beside another
  // one connects side-to-side, a node above connects top-to-bottom, and a
  // diagonal neighbor connects corner-to-corner — it always faces the thing
  // it's plugged into instead of bending awkwardly out of a fixed socket.
  // slotIndex/slotCount nudge the point sideways along whichever edge it
  // lands on, so multiple connections on the same side don't stack.
  function edgeAnchor(el, towardX, towardY, slotIndex, slotCount) {
    const rect = nodeRectCanvas(el);
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const hw = rect.width / 2;
    const hh = rect.height / 2;
    let dx = towardX - cx;
    let dy = towardY - cy;
    if (dx === 0 && dy === 0) dy = 1; // degenerate case: default to facing down

    // Multiple connections on the same node used to be spread out by nudging
    // the resolved boundary point sideways in a straight line — which works
    // for a flat rectangle edge, but slides a diamond's point clean off its
    // slanted surface (that's the stray gap / "teleporting" line). Instead,
    // rotate the aim angle itself per slot, then solve for the boundary
    // along *that* angle — the result always lands exactly on the shape.
    const SLOT_ANGLE = 0.22; // radians between adjacent connection points
    if (slotCount > 1) {
      const angle = Math.atan2(dy, dx) + (slotIndex - (slotCount - 1) / 2) * SLOT_ANGLE;
      dx = Math.cos(angle);
      dy = Math.sin(angle);
    }

    // A decision node's diamond is inscribed in its bounding box (vertices at
    // the midpoint of each side), not the box itself — so the rectangle
    // formula below would land the anchor off in empty space near a corner.
    // Solve |x|/hw + |y|/hh = 1 for the diamond's actual edge instead.
    const isDiamond = el.dataset.type === "decision";
    let x, y;
    if (isDiamond) {
      const denom = Math.abs(dx) / hw + Math.abs(dy) / hh;
      const t = denom > 0 ? 1 / denom : 0;
      x = cx + dx * t;
      y = cy + dy * t;
    } else {
      const tx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
      const ty = dy !== 0 ? hh / Math.abs(dy) : Infinity;
      const t = Math.min(tx, ty);
      x = cx + dx * t;
      y = cy + dy * t;
    }

    // Nudge the point outward past the node's own border by a small gap.
    // A marker-end arrowhead is centered exactly on this coordinate, so
    // landing it precisely on the border lets the node's opaque background
    // (which paints on top of the SVG in stacking order) swallow half the
    // arrowhead — it reads as a "stuck", barely-visible stub. Pushing it out
    // clears the node entirely so the whole rotated arrowhead is visible.
    const GAP = 8;
    const mag = Math.hypot(dx, dy) || 1;
    x += (dx / mag) * GAP;
    y += (dy / mag) * GAP;

    return { x, y };
  }

  function drawEdges(liveMouseEvent) {
    const svg = document.getElementById("plannerSvg");
    const inner = document.getElementById("plannerCanvasInner");
    if (!svg || !inner) return;
    svg.querySelectorAll(".pedge, .pedge-hit, .pedge-label, .pedge-live").forEach((e) => e.remove());
    const z = state.zoom || 1;

    // Group edges sharing a source (its own output arrows) and edges sharing
    // a destination (its own input arrows) so multiple connections on the
    // same side of a node spread out instead of stacking.
    const outGroups = new Map();
    const inGroups = new Map();
    state.edges.forEach((edge) => {
      if (!outGroups.has(edge.from)) outGroups.set(edge.from, []);
      outGroups.get(edge.from).push(edge);
      if (!inGroups.has(edge.to)) inGroups.set(edge.to, []);
      inGroups.get(edge.to).push(edge);
    });

    state.edges.forEach((edge) => {
      const fromEl = inner.querySelector(`.pnode[data-id="${edge.from}"]`);
      const toEl = inner.querySelector(`.pnode[data-id="${edge.to}"]`);
      if (!fromEl || !toEl) return;

      const fromCenter = nodeCenterCanvas(fromEl);
      const toCenter = nodeCenterCanvas(toEl);
      const outList = outGroups.get(edge.from) || [edge];
      const inList = inGroups.get(edge.to) || [edge];
      const p1 = edgeAnchor(fromEl, toCenter.x, toCenter.y, outList.indexOf(edge), outList.length);
      const p2 = edgeAnchor(toEl, fromCenter.x, fromCenter.y, inList.indexOf(edge), inList.length);

      drawBezier(svg, p1.x, p1.y, p2.x, p2.y, "pedge", edge.label, false, (e) => startDetach(e, edge, p1, p2));
    });

    // Live line while dragging a new connection from a socket, Nuke-style
    if (linking.active && (linking.fromId || linking.toId) && liveMouseEvent) {
      const innerRect = inner.getBoundingClientRect();
      const mouseP = {
        x: (liveMouseEvent.clientX - innerRect.left) / z,
        y: (liveMouseEvent.clientY - innerRect.top) / z,
      };
      if (linking.fromId) {
        const fromEl = inner.querySelector(`.pnode[data-id="${linking.fromId}"]`);
        if (fromEl) {
          const outList = outGroups.get(linking.fromId) || [];
          const p1 = edgeAnchor(fromEl, mouseP.x, mouseP.y, outList.length, outList.length + 1);
          drawBezier(svg, p1.x, p1.y, mouseP.x, mouseP.y, "pedge-live", "", true);
        }
      } else if (linking.toId) {
        const toEl = inner.querySelector(`.pnode[data-id="${linking.toId}"]`);
        if (toEl) {
          const inList = inGroups.get(linking.toId) || [];
          const p2 = edgeAnchor(toEl, mouseP.x, mouseP.y, inList.length, inList.length + 1);
          drawBezier(svg, mouseP.x, mouseP.y, p2.x, p2.y, "pedge-live", "", true);
        }
      }
    }

    // Live line while an existing edge's end is being dragged loose. The end
    // that stays put keeps acting as its original role (tail stays a plain
    // tail, head stays the arrowhead — just rotating to track the cursor);
    // only the grabbed end's position actually moves.
    if (detaching.active && liveMouseEvent) {
      const fixedEl = inner.querySelector(`.pnode[data-id="${detaching.fixedId}"]`);
      if (fixedEl) {
        const isOutputEnd = detaching.movingEnd === "to"; // fixed end is the source (tail)
        const group = isOutputEnd ? outGroups.get(detaching.fixedId) || [] : inGroups.get(detaching.fixedId) || [];
        const innerRect = inner.getBoundingClientRect();
        const mouseP = {
          x: (liveMouseEvent.clientX - innerRect.left) / z,
          y: (liveMouseEvent.clientY - innerRect.top) / z,
        };
        const fixedP = edgeAnchor(fixedEl, mouseP.x, mouseP.y, group.length, group.length + 1);
        const p1 = isOutputEnd ? fixedP : mouseP;
        const p2 = isOutputEnd ? mouseP : fixedP;
        drawBezier(svg, p1.x, p1.y, p2.x, p2.y, "pedge-live", "", true);
      }
    }
  }

  // Shared teardown: pull the edge out of state and mark one end as the
  // "moving" end being dragged loose, the other as the fixed anchor.
  function beginDetach(edge, movingEnd) {
    detaching.active = true;
    detaching.edgeId = edge.id;
    detaching.movingEnd = movingEnd;
    detaching.fixedId = movingEnd === "to" ? edge.from : edge.to;
    detaching.label = edge.label || "";
    state.edges = state.edges.filter((ed) => ed.id !== edge.id);
    render();
  }

  // Grab whichever end of an existing edge is nearer the click and start
  // dragging it loose (Nuke's "grab the arrow tail/head to disconnect").
  // The whole line (via the invisible wide hit-path) and the arrowhead
  // itself are both grabbable — whichever end is closer to the click wins.
  function startDetach(e, edge, p1, p2) {
    e.stopPropagation();
    e.preventDefault();
    const inner = document.getElementById("plannerCanvasInner");
    const innerRect = inner.getBoundingClientRect();
    const z = state.zoom || 1;
    const mx = (e.clientX - innerRect.left) / z;
    const my = (e.clientY - innerRect.top) / z;
    const dFrom = Math.hypot(mx - p1.x, my - p1.y);
    const dTo = Math.hypot(mx - p2.x, my - p2.y);
    beginDetach(edge, dTo <= dFrom ? "to" : "from");
  }

  function drawBezier(svg, x1, y1, x2, y2, cls, label, isLive, onGrab) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // Nuke draws connections as plain straight lines between ports, not an
    // S-curve — a straight segment always points directly at both nodes, so
    // it never looks disconnected regardless of their relative position.
    const d = `M ${x1} ${y1} L ${x2} ${y2}`;
    path.setAttribute("d", d);
    path.setAttribute("class", cls);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", isLive ? "#6ab0f3" : "#8a8a8a");
    path.setAttribute("stroke-width", "1.6");
    if (isLive) path.setAttribute("stroke-dasharray", "5,4");
    path.setAttribute("marker-end", "url(#arrowHead)");
    svg.appendChild(path);

    // A wide, invisible path on top of the visible one makes the thin line
    // much easier to grab for detaching, without changing how it looks.
    if (onGrab) {
      const hit = document.createElementNS("http://www.w3.org/2000/svg", "path");
      hit.setAttribute("d", d);
      hit.setAttribute("class", "pedge-hit");
      hit.setAttribute("fill", "none");
      hit.setAttribute("stroke", "transparent");
      hit.setAttribute("stroke-width", "14");
      hit.style.cursor = "grab";
      hit.addEventListener("mousedown", onGrab);
      svg.appendChild(hit);
    }

    if (label) {
      const midY = (y1 + y2) / 2;
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", (x1 + x2) / 2 + 6);
      text.setAttribute("y", midY - 4);
      text.setAttribute("fill", "#e3a13f");
      text.setAttribute("font-size", "10.5");
      text.setAttribute("font-family", "JetBrains Mono, monospace");
      text.setAttribute("class", "pedge-label");
      text.textContent = label;
      svg.appendChild(text);
    }
  }

  // ---------- Drag-and-drop a toolbar button straight onto the canvas ----------
  function setupNodeDrop(wrap) {
    const inner = document.getElementById("plannerCanvasInner");

    wrap.addEventListener("dragover", (e) => {
      if (!e.dataTransfer.types.includes("application/x-planner-node-type")) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });

    wrap.addEventListener("drop", (e) => {
      const type = e.dataTransfer.getData("application/x-planner-node-type");
      if (!type) return;
      e.preventDefault();

      const nt = NODE_TYPES.find((t) => t.type === type);
      if (!nt) return;

      const z = state.zoom || 1;
      const innerRect = inner.getBoundingClientRect();
      const x = Math.min(CANVAS_W - 40, Math.max(0, (e.clientX - innerRect.left) / z - 70));
      const y = Math.min(CANVAS_H - 40, Math.max(0, (e.clientY - innerRect.top) / z - 30));

      addNode(nt.type, nt.text, x, y);
    });
  }

  // ---------- Init ----------
  function init() {
    const panel = buildShell();
    buildToggleButton(panel);
    setupPanZoom(document.getElementById("plannerCanvasWrap"));
    setupNodeDrop(document.getElementById("plannerCanvasWrap"));
    render();
    centerOnNodes();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();