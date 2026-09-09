# JavaScript structure

Use this map to find the right area before changing code:

```
js/
├─ app/
│  └─ app.js                  Main page behavior: Roadmap and Problems views
├─ shared/
│  └─ editor-tools.js         Syntax colors, indentation, quotes, and brackets
├─ roadmap/
│  ├─ course-order.js         Lesson order and prerequisite progression
│  ├─ practical-renderer.js   Practical-example cards shown after completion
│  └─ content/
│     └─ lesson-practicals.js Practical titles, prompts, and code samples
└─ planner/
   ├─ planner.js              Planner canvas, nodes, arrows, history, and controls
   └─ config.js               Planner node labels, statuses, and canvas limits
```

Quick guide:

- A Roadmap lesson, button, test, or completion issue: start in `app/app.js`.
- A practical example is wrong or needs another example: edit `roadmap/content/lesson-practicals.js`.
- Syntax coloring, auto-indent, or paired quote/bracket issue: edit `shared/editor-tools.js`.
- Planner node labels or canvas dimensions: edit `planner/config.js`.
- Planner drag, arrows, templates, undo, or canvas behavior: edit `planner/planner.js`.
