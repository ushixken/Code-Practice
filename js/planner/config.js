// Planner-only configuration. Keep node labels and canvas limits separate
// from the planner's rendering and interaction behavior.
window.PLANNER_CONFIG = {
  nodeTypes: [
    {
      type: "problem",
      label: "Problem / Goal",
      icon: "◎",
      text: "Describe the problem or goal",
      description:
        "Defines what this plan is trying to solve before you break it into steps.",
    },
    {
      type: "terminal",
      label: "Start/End",
      icon: "⬭",
      text: "Start",
      description: "Marks where a plan begins or the result that finishes it.",
    },
    {
      type: "io",
      label: "Input/Output",
      icon: "▱",
      text: "Read input",
      description: "Shows information entering or leaving the plan.",
    },
    {
      type: "process",
      label: "Process",
      icon: "▭",
      text: "Do something",
      description: "A single action to take or piece of work to do.",
    },
    {
      type: "decision",
      label: "Decision",
      icon: "◇",
      text: "condition?",
      description:
        "A question that splits the plan into different paths, such as yes and no.",
    },
    {
      type: "function",
      label: "Function",
      icon: "ƒ",
      text: "callFunction()",
      description:
        "A named piece of code or reusable operation involved in the plan.",
    },
    {
      type: "loop",
      label: "Loop",
      icon: "↻",
      text: "for / while",
      description: "A step or set of steps that may need repeating.",
    },
    {
      type: "task",
      label: "Task / Sub-problem",
      icon: "☐",
      text: "Break this into a smaller piece",
      description:
        "A small, concrete part of the problem to think through or solve.",
    },
    {
      type: "blocked",
      label: "Blocked / Question",
      icon: "?",
      text: "What needs to be answered?",
      description:
        "Records an unknown, decision, or missing information that prevents the plan from moving forward.",
    },
    {
      type: "note",
      label: "Note",
      icon: "🗒",
      text: "Note / assumption / TODO",
      description:
        "Context, an assumption, a question, or an idea that should not become a task.",
    },
  ],
  statusOrder: ["none", "next", "progress", "solved", "stuck"],
  statusLabels: {
    none: "Not started",
    next: "Next step",
    progress: "In progress",
    solved: "Solved",
    stuck: "Stuck",
  },
  canvas: { width: 6000, height: 4000 },
}
