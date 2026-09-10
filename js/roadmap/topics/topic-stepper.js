// Topic Stepper — renders a topic (window.TOPIC_VARIABLES-shaped object) as:
//   1. Chunked lesson steps, one at a time, with a "Continue" button.
//      Steps with `requiresRun: true` disable Continue until the learner
//      actually clicks "Run Code" on that step at least once.
//   2. A sequence of small challenges, one at a time, with an editable
//      starter (often already broken — real thrown errors are surfaced
//      verbatim when `showRealError` is set).
//
// Usage:
//   renderTopicStepper(document.getElementById("topicRoot"), window.TOPIC_VARIABLES)
//
// Depends on: topic-stepper.css for styling. No other app.js globals required,
// so this can be dropped in and wired up independently before touching the
// existing ROADMAP/app.js lesson flow.

function renderTopicStepper(root, topic) {
  const state = {
    stepIndex: 0,
    hasRunCurrentStep: false,
    challengeIndex: 0,
    stepOutputs: new Map(),
    challengeKeyboardAbort: null,
    lessonKeyboardAbort: null,
  }

  function runSnippetCode(code) {
    const output = []
    let error = null
    const originalLog = console.log
    console.log = (...values) => output.push(values.map(formatValue).join(" "))
    try {
      new Function(code)()
    } catch (e) {
      error = e
    } finally {
      console.log = originalLog
    }
    return { output, error }
  }

  function formatValue(value) {
    if (typeof value === "string") return value
    if (value === undefined) return "undefined"
    if (value && typeof value === "object") {
      try { return JSON.stringify(value) } catch { return String(value) }
    }
    return String(value)
  }

  function highlightedCode(code) {
    return typeof highlightCode === "function"
      ? highlightCode(code, { dimUnused: false })
      : escapeHtml(code)
  }

  // ---------------------------------------------------------------
  // LESSON STEPS
  // ---------------------------------------------------------------
  function renderStep() {
    state.lessonKeyboardAbort?.abort()
    state.lessonKeyboardAbort = new AbortController()
    const step = topic.steps[state.stepIndex]
    state.hasRunCurrentStep = false

    const progressPct = Math.round((state.stepIndex / topic.steps.length) * 100)

    root.innerHTML = `
      <div class="topic-stepper">
        <div class="topic-stepper-header">
          <div class="topic-stepper-crumbs"><span>Home</span><span>${topic.title}</span></div>
          <h1 class="topic-stepper-title">${topic.title}</h1>
          <div class="topic-stepper-progress-track">
            <div class="topic-stepper-progress-fill" style="width:${progressPct}%"></div>
          </div>
        </div>
        <div class="topic-stepper-body topic-stepper-lesson-body" id="topicStepBody"></div>
        <div class="topic-stepper-footer">
          <button class="topic-continue-btn topic-step-next" id="topicContinueBtn" aria-label="Continue" title="Continue" ${step.requiresRun ? "disabled" : ""}>↓</button>
        </div>
      </div>
    `

    const body = root.querySelector("#topicStepBody")
    const track = document.createElement("div")
    track.className = "topic-step-track"
    body.appendChild(track)

    // Keep the completed step above the active one. Snippets remain visible
    // as code cards, so the learner sees a continuous lesson instead of a
    // card disappearing at every click.
    if (state.stepIndex > 0) {
      const previous = topic.steps[state.stepIndex - 1]
      if (previous.type === "text") {
        const previousBullet = document.createElement("div")
        previousBullet.className = "topic-step-bullet topic-step-previous"
        previousBullet.innerHTML = `<span>${previous.text}</span>`
        track.appendChild(previousBullet)
      } else {
        const previousResult =
          state.stepOutputs.get(state.stepIndex - 1) ||
          previous.lastRunResult ||
          (previous.requiresRun ? runSnippetCode(previous.code) : null)
        const previousConsole = previousResult
          ? `<div class="topic-step-console topic-step-history-console">
              <div class="topic-step-console-label">Console</div>
              <div class="topic-step-console-output">${previousResult.error
                ? `<span class="is-error">${previousResult.error.name}: ${escapeHtml(previousResult.error.message)}</span>`
                : previousResult.output.map((line) => `<span class="is-value">${escapeHtml(line)}</span>`).join("<br>")}</div>
            </div>`
          : ""
        const history = document.createElement("div")
        history.className = "topic-step-history"
        history.innerHTML = `
          <div class="topic-step-bullet"><span>${previous.text}</span></div>
          <div class="topic-step-snippet topic-step-history-snippet">
            <div class="topic-step-snippet-code">${highlightedCode(previous.code)}</div>
            <div class="topic-step-snippet-footer">
              <span class="topic-step-snippet-label">JavaScript</span>
            </div>
            ${previousConsole}
          </div>
        `
        track.appendChild(history)
      }
    }

    const currentContent = document.createElement("div")
    currentContent.className = "topic-step-current"
    track.appendChild(currentContent)
    const stepDistance = 200
    let trackOffset = 0
    let activeDistance = stepDistance
    let waitingPreview = null

    function reserveConsoleSpace(consoleBox) {
      if (!waitingPreview) return
      activeDistance = stepDistance + consoleBox.offsetHeight
      waitingPreview.style.top = `calc(50% + ${trackOffset + activeDistance}px)`
    }

    // One focused idea at a time keeps the active step at the screen center.
    const visibleSteps = [step]

    visibleSteps.forEach((s) => {
      if (s.type === "text") {
        const bullet = document.createElement("div")
        bullet.className = "topic-step-bullet"
        bullet.innerHTML = `<span>${s.text}</span>`
        currentContent.appendChild(bullet)
      }
      if (s.type === "snippet") {
        const isCurrent = s === step
        const wrap = document.createElement("div")
        wrap.className = "topic-step-bullet"
        wrap.innerHTML = `<span>${s.text}</span>`
        currentContent.appendChild(wrap)

        const box = document.createElement("div")
        box.className = "topic-step-snippet" + (s.requiresRun ? " needs-run" : "")
        box.innerHTML = `
          <div class="topic-step-snippet-code">${highlightedCode(s.code)}</div>
          <div class="topic-step-snippet-footer">
            <span class="topic-step-snippet-label">JavaScript</span>
            ${s.requiresRun ? '<button class="topic-run-btn" type="button">Run Code</button>' : ""}
          </div>
          ${s.requiresRun ? `<div class="topic-step-console" hidden>
            <div class="topic-step-console-label">Console</div>
            <div class="topic-step-console-output"></div>
          </div>` : ""}
        `
        currentContent.appendChild(box)

        if (isCurrent && s.requiresRun) {
          const hint = document.createElement("div")
          hint.className = "topic-step-run-hint"
          hint.textContent = "Run code example to continue!"
          currentContent.appendChild(hint)
        }

        box.querySelector(".topic-run-btn")?.addEventListener("click", () => {
          const { output, error } = runSnippetCode(s.code)
          const consoleBox = box.querySelector(".topic-step-console")
          const outEl = box.querySelector(".topic-step-console-output")
          consoleBox.hidden = false
          box.classList.add("has-console-output")
          if (error) {
            outEl.innerHTML = `<span class="is-error">${error.name}: ${escapeHtml(error.message)}</span>`
          } else {
            outEl.innerHTML = output.map((line) => `<span class="is-value">${escapeHtml(line)}</span>`).join("<br>")
          }
          reserveConsoleSpace(consoleBox)
          state.stepOutputs.set(state.stepIndex, { output, error })
          s.lastRunResult = { output, error }
          if (isCurrent && s.requiresRun) {
            state.hasRunCurrentStep = true
            const continueBtn = root.querySelector("#topicContinueBtn")
            continueBtn.disabled = false
            const runHint = body.querySelector(".topic-step-run-hint")
            if (runHint) runHint.style.visibility = "hidden"
          }
        })
      }
    })

    // Park the next step below the viewport before the learner advances.
    // The track can then scroll it into place instead of inserting it late.
    function createWaitingStep(nextStep, offset) {
      if (!nextStep) return null
      const preview = document.createElement("div")
      preview.className = "topic-step-next-preview"
      preview.setAttribute("aria-hidden", "true")
      preview.style.top = `calc(50% + ${offset}px)`
      if (nextStep.type === "text") {
        preview.innerHTML = `<div class="topic-step-bullet"><span>${nextStep.text}</span></div>`
      } else {
        preview.innerHTML = `
          <div class="topic-step-bullet"><span>${nextStep.text}</span></div>
          <div class="topic-step-snippet${nextStep.requiresRun ? " needs-run" : ""}">
            <div class="topic-step-snippet-code">${highlightedCode(nextStep.code)}</div>
            <div class="topic-step-snippet-footer">
              <span class="topic-step-snippet-label">JavaScript</span>
              ${nextStep.requiresRun ? '<button class="topic-run-btn" type="button" tabindex="-1">Run Code</button>' : ""}
            </div>
          </div>
          ${nextStep.requiresRun ? '<div class="topic-step-run-hint">Run code example to continue!</div>' : ""}
        `
      }
      track.appendChild(preview)
      return preview
    }

    function activateWaitingStep(preview, activeStep) {
      preview.classList.add("is-active")
      preview.setAttribute("aria-hidden", "false")
      const runButton = preview.querySelector(".topic-run-btn")
      if (!runButton) return

      const box = preview.querySelector(".topic-step-snippet")
      box.insertAdjacentHTML("beforeend", `
        <div class="topic-step-console" hidden>
          <div class="topic-step-console-label">Console</div>
          <div class="topic-step-console-output"></div>
        </div>
      `)
      runButton.addEventListener("click", () => {
        const { output, error } = runSnippetCode(activeStep.code)
        const consoleBox = box.querySelector(".topic-step-console")
        const outEl = box.querySelector(".topic-step-console-output")
        consoleBox.hidden = false
        box.classList.add("has-console-output")
        outEl.innerHTML = error
          ? `<span class="is-error">${error.name}: ${escapeHtml(error.message)}</span>`
          : output.map((line) => `<span class="is-value">${escapeHtml(line)}</span>`).join("<br>")
        reserveConsoleSpace(consoleBox)
        state.stepOutputs.set(state.stepIndex, { output, error })
        activeStep.lastRunResult = { output, error }
        if (activeStep.requiresRun) {
          root.querySelector("#topicContinueBtn").disabled = false
          const hint = preview.querySelector(".topic-step-run-hint")
          if (hint) hint.style.visibility = "hidden"
        }
      })
    }

    let activeContent = currentContent
    let activeIndex = state.stepIndex
    waitingPreview = createWaitingStep(topic.steps[activeIndex + 1], stepDistance)

    body.scrollTop = 0

    root.querySelector("#topicContinueBtn").addEventListener("click", () => {
      const continueButton = root.querySelector("#topicContinueBtn")
      continueButton.disabled = true
      if (!waitingPreview) {
        state.challengeIndex = 0
        renderChallenge()
        return
      }

      activeContent.classList.add("is-scrolling-past")
      waitingPreview.classList.add("is-promoting")
      const nextOffset = trackOffset + activeDistance
      const scroll = track.animate(
        [
          { transform: `translateY(${-trackOffset}px)` },
          { transform: `translateY(${-nextOffset}px)` },
        ],
        { duration: 720, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" },
      )
      scroll.onfinish = () => {
        track.style.transform = `translateY(${-nextOffset}px)`
        trackOffset = nextOffset
        activeContent = waitingPreview
        activeIndex += 1
        state.stepIndex = activeIndex
        state.hasRunCurrentStep = false
        activeDistance = stepDistance
        activeContent.classList.remove("is-promoting")
        activateWaitingStep(activeContent, topic.steps[activeIndex])
        root.querySelector(".topic-stepper-progress-fill").style.width = `${Math.round((activeIndex / topic.steps.length) * 100)}%`
        waitingPreview = createWaitingStep(topic.steps[activeIndex + 1], trackOffset + stepDistance)
        continueButton.disabled = Boolean(topic.steps[activeIndex].requiresRun)
      }
    })

    document.addEventListener("keydown", (event) => {
      if (event.key !== " " && event.key !== "Enter") return
      if (event.ctrlKey || event.metaKey || event.altKey) return
      if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return
      const continueButton = root.querySelector("#topicContinueBtn")
      const runButton = activeContent.querySelector(".topic-run-btn")
      event.preventDefault()
      if (runButton && continueButton.disabled) {
        runButton.click()
      } else if (!continueButton.disabled) {
        continueButton.click()
      }
    }, { signal: state.lessonKeyboardAbort.signal })
  }

  // ---------------------------------------------------------------
  // CHALLENGES
  // ---------------------------------------------------------------
  function renderChallenge() {
    state.lessonKeyboardAbort?.abort()
    state.challengeKeyboardAbort?.abort()
    state.challengeKeyboardAbort = new AbortController()
    const challenge = topic.challenges[state.challengeIndex]
    const progressPct = Math.round(((state.challengeIndex) / topic.challenges.length) * 100)

    root.innerHTML = `
      <div class="topic-stepper">
        <div class="topic-stepper-header">
          <div class="topic-stepper-crumbs"><span>Home</span><span>${topic.title}</span><span>Challenge</span></div>
          <h1 class="topic-stepper-title">${challenge.title}</h1>
          <div class="topic-stepper-progress-track">
            <div class="topic-stepper-progress-fill" style="width:${progressPct}%"></div>
          </div>
        </div>
        <div class="topic-stepper-body">
          <p class="topic-challenge-task">${challenge.task}</p>
          <div class="topic-challenge-editor">
            <div class="topic-challenge-editor-wrap">
              <pre class="topic-challenge-gutter" id="challengeGutter">1</pre>
              <div class="topic-challenge-code-area">
                <pre class="topic-challenge-highlight" id="challengeHighlight" aria-hidden="true"></pre>
                <textarea class="topic-challenge-textarea" id="challengeCode" spellcheck="false" aria-label="JavaScript challenge editor">${escapeHtml(challenge.starter)}</textarea>
              </div>
            </div>
            <div class="topic-challenge-editor-footer">
              <button class="topic-reset-link" id="challengeReset" type="button">reset</button>
            </div>
          </div>
          <div class="topic-challenge-console">
            <div class="topic-challenge-panel-label">Console output</div>
            <div id="challengeConsole">Console output will appear here.</div>
          </div>
          <div class="topic-challenge-check">
            <div class="topic-challenge-panel-label">Lesson check</div>
            <div id="challengeVerdict">Run your code to check the result.</div>
          </div>
          <div class="topic-challenge-nav">
            <span class="topic-challenge-progress">Challenge ${state.challengeIndex + 1} / ${topic.challenges.length}</span>
            <button class="topic-continue-btn" id="challengeNext">Run Code</button>
          </div>
        </div>
      </div>
    `

    const codeEl = root.querySelector("#challengeCode")
    const consoleEl = root.querySelector("#challengeConsole")
    const verdictEl = root.querySelector("#challengeVerdict")
    const nextBtn = root.querySelector("#challengeNext")
    const highlightEl = root.querySelector("#challengeHighlight")
    const gutterEl = root.querySelector("#challengeGutter")

    function refreshChallengeEditor() {
      let html = highlightCode(codeEl.value)
      if (codeEl.value.endsWith("\n")) html += " "
      highlightEl.innerHTML = html
      const lines = codeEl.value.split("\n").length
      gutterEl.textContent = Array.from({ length: lines }, (_, index) => index + 1).join("\n")
      highlightEl.scrollTop = codeEl.scrollTop
      highlightEl.scrollLeft = codeEl.scrollLeft
      gutterEl.scrollTop = codeEl.scrollTop
    }

    root.querySelector("#challengeReset").addEventListener("click", () => {
      codeEl.value = challenge.starter
      consoleEl.textContent = "Console output will appear here."
      verdictEl.textContent = "Run your code to check the result."
      nextBtn.dataset.passed = "false"
      nextBtn.textContent = "Run Code"
      refreshChallengeEditor()
    })

    function runChallenge() {
      const { output, error } = runSnippetCode(codeEl.value)

      if (error) {
        // Real errors are shown verbatim, not replaced — this is intentional
        // per the "showRealError" teaching pattern (SyntaxError, ReferenceError,
        // TypeError all read exactly as they would in a real browser console).
        consoleEl.innerHTML = `<span class="is-error">${error.name}: ${escapeHtml(error.message)}</span>`
        verdictEl.innerHTML = `<div class="topic-challenge-verdict is-fail">✗ Not quite — read the error above and try again.</div>`
        nextBtn.dataset.passed = "false"
        nextBtn.textContent = "Run Code"
        return
      }

      consoleEl.innerHTML = output.length
        ? output.map((line) => `<span class="is-value">${escapeHtml(line)}</span>`).join("<br>")
        : "(no console output)"

      const passed = challenge.check(output.join("\n"))
      if (passed) {
        verdictEl.innerHTML = `<div class="topic-challenge-verdict is-pass">✓ Correct!</div>`
        nextBtn.dataset.passed = "true"
        nextBtn.textContent = "Next Challenge"
      } else {
        verdictEl.innerHTML = `<div class="topic-challenge-verdict is-fail">✗ Not quite yet.</div>` +
          (challenge.hint ? `<div class="topic-challenge-hint">Hint: <code>${escapeHtml(challenge.hint)}</code></div>` : "")
        nextBtn.dataset.passed = "false"
        nextBtn.textContent = "Run Code"
      }
    }

    codeEl.addEventListener("input", refreshChallengeEditor)
    codeEl.addEventListener("scroll", refreshChallengeEditor)
    codeEl.addEventListener("keydown", (event) => {
      const value = codeEl.value
      const start = codeEl.selectionStart
      const end = codeEl.selectionEnd
      const hasSelection = start !== end
      const update = (nextValue, nextStart, nextEnd = nextStart) => {
        codeEl.value = nextValue
        codeEl.selectionStart = nextStart
        codeEl.selectionEnd = nextEnd
        refreshChallengeEditor()
      }

      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        event.preventDefault()
        const changed = toggleLineComment(value, start, end)
        update(changed.value, changed.selectionStart, changed.selectionEnd)
        return
      }
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault()
        nextBtn.click()
        return
      }
      if (event.key === "Tab") {
        event.preventDefault()
        update(value.slice(0, start) + "  " + value.slice(end), start + 2)
        return
      }
      if (PAIRS[event.key] && !event.ctrlKey && !event.metaKey && !event.altKey) {
        const close = PAIRS[event.key]
        const nextChar = value[end]
        const isQuote = event.key === "'" || event.key === '"' || event.key === "`"
        if (hasSelection) {
          event.preventDefault()
          update(value.slice(0, start) + event.key + value.slice(start, end) + close + value.slice(end), start + 1, end + 1)
          return
        }
        if (isQuote && nextChar === event.key) {
          event.preventDefault()
          codeEl.selectionStart = codeEl.selectionEnd = start + 1
          return
        }
        if (isQuote && /[A-Za-z0-9_]/.test(value[start - 1] || "")) return
        event.preventDefault()
        update(value.slice(0, start) + event.key + close + value.slice(end), start + 1)
        return
      }
      if (!hasSelection && CLOSERS.has(event.key) && value[end] === event.key) {
        event.preventDefault()
        codeEl.selectionStart = codeEl.selectionEnd = end + 1
      }
    })
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Tab" || event.target === codeEl) return
      if (document.getElementById("challengeCode") !== codeEl) return
      event.preventDefault()
      codeEl.focus()
    }, { signal: state.challengeKeyboardAbort.signal })
    refreshChallengeEditor()

    nextBtn.addEventListener("click", () => {
      if (nextBtn.dataset.passed !== "true") {
        runChallenge()
        return
      }
      if (state.challengeIndex < topic.challenges.length - 1) {
        state.challengeIndex += 1
        renderChallenge()
      } else {
        renderDone()
      }
    })
  }

  // ---------------------------------------------------------------
  // DONE
  // ---------------------------------------------------------------
  function renderDone() {
    state.challengeKeyboardAbort?.abort()
    state.lessonKeyboardAbort?.abort()
    root.innerHTML = `
      <div class="topic-stepper">
        <div class="topic-stepper-done">
          <h2>Topic complete!</h2>
          <p>You finished every step and challenge in "${topic.title}".</p>
          <button class="topic-continue-btn" id="topicDoneBtn">Back to topics</button>
        </div>
      </div>
    `
    root.querySelector("#topicDoneBtn").addEventListener("click", () => {
      root.dispatchEvent(new CustomEvent("topic-complete", { detail: { topicId: topic.id } }))
    })
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
  }

  renderStep()
}
