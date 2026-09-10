// PILOT — "variables" topic rebuilt in the JSchallenger-style micro-structure.
// Source material pulled from the current `variables` and `values` lessons in app.js.
//
// Two new concepts replace the old single "content + one exercise" lesson object:
//
// 1. `steps`      — the LESSON screen. Revealed one chunk at a time via "Continue".
//                   A step with `code` shows a Run Code button. If `requiresRun: true`,
//                   "Continue" stays disabled until that step's code has been run once.
//
// 2. `challenges` — the CHALLENGE screens. One tiny task each, shown one at a time
//                   after the lesson steps finish. `starter` varies: blank, partially
//                   filled, or intentionally BROKEN (to practice reading real errors).
//                   `showRealError: true` means: don't replace the thrown error with a
//                   custom message — display error.message verbatim in the terminal.

window.TOPIC_VARIABLES = {
  id: "variables",
  title: "Variables",

  // ---------------------------------------------------------------------
  // LESSON: chunked, run-to-continue where a snippet appears
  // ---------------------------------------------------------------------
  steps: [
    {
      type: "text",
      text: "Before we talk about variables, we have to talk about the console.log() statement.",
    },
    {
      type: "snippet",
      text: "Press the button to run the following code.",
      code: 'console.log("Hello, JavaScript!");',
      requiresRun: true,
    },
    {
      type: "text",
      text: "As you can see, console.log() simply displays information in your console — in this case the text you gave it.",
    },
    {
      type: "text",
      text: "We will use console.log() throughout this course to check what our code is actually doing.",
    },
    {
      type: "text",
      text: "Now, let's talk about variables. A variable is a named box that holds one value, so you can use it again without retyping it.",
    },
    {
      type: "snippet",
      text: "Let's create our first variable, using const:",
      code: 'const language = "JavaScript";',
    },
    {
      type: "text",
      text: "We use the const keyword to declare a variable named language. Declaring a variable is JavaScript's word for creating one.",
    },
    {
      type: "snippet",
      text: "Now let's print the value stored inside it.",
      code: 'const language = "JavaScript";\nconsole.log(language);',
      requiresRun: true,
    },
    {
      type: "text",
      text: "const means the variable's name cannot be reassigned later. Use const by default — you'll meet let, for values that need to change, right after this.",
    },
    {
      type: "snippet",
      text: "Watch out: const still lets you use let elsewhere for values that change. Here's the difference side by side.",
      code: 'const language = "JavaScript"; // stays the same\nlet score = 0;                 // can change later\nscore = score + 10;\nconsole.log(score);',
      requiresRun: true,
    },
  ],

  // ---------------------------------------------------------------------
  // CHALLENGES: small, varied, escalating — run after the lesson steps
  // ---------------------------------------------------------------------
  challenges: [
    {
      title: "Declare a variable",
      task: "Declare a constant named user and set it to \"Ada\". Then print it.",
      starter: "// Declare user here\n\nconsole.log(user);",
      check: (output) => output.includes("Ada"),
      hint: "const user = \"Ada\";",
    },
    {
      title: "Assign a value to a variable",
      task: "Here, we declare the variable num. But it has no value yet. Assign a value to it and run the code.",
      starter: "let num;\n\nconsole.log(num);",
      check: (output) => output.trim() !== "undefined" && output.trim() !== "",
      hint: "num = 5;",
    },
    {
      title: "Assign the value of another variable",
      task: "Here we have two variables, numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne.",
      starter: "let numOne = 5;\nlet numTwo;\nconsole.log(numTwo);",
      check: (output) => output.trim() === "5",
      hint: "numTwo = numOne;",
    },
    {
      title: "Create the missing variable",
      task: "Below, we try to assign the value of a variable named numOne to numTwo. But numOne was never declared. Declare it and run the code.",
      starter: "let numTwo = numOne;\nconsole.log(numTwo);",
      showRealError: true, // will throw ReferenceError: numOne is not defined
      check: (output) => !output.includes("ReferenceError"),
      hint: "let numOne = 5;\nlet numTwo = numOne;",
    },
    {
      title: "Fix the redeclaration bug",
      // Starter code is intentionally BROKEN — practicing reading a real error.
      task: "This code will not run as-is. Find the mistake and fix it, then run the corrected code.",
      starter: "let num = 1;\nlet num = 2;\nconsole.log(num);",
      showRealError: true, // will throw SyntaxError: Identifier 'num' has already been declared
      check: (output) => output.trim() === "2",
      hint: "Only declare num once — use num = 2; for the second line instead of let num = 2;.",
    },
    {
      title: "Reassign a const (see the real error)",
      task: "Try to give language a new value below. Run the code and read what JavaScript tells you, then fix it using the right keyword.",
      starter: 'const language = "JavaScript";\nlanguage = "Python";\nconsole.log(language);',
      showRealError: true, // will throw TypeError: Assignment to constant variable.
      check: (output) => output.trim() === "Python",
      hint: "Change const language to let language, since this value needs to change.",
    },
  ],
}

// ---------------------------------------------------------------------
// WHAT STILL NEEDS BUILDING (UI layer — not included in this data pilot):
//
// 1. A stepper renderer for `steps`:
//    - shows one step at a time, "Continue" button, per-topic progress bar
//    - if step.requiresRun, disable "Continue" until that step's Run Code
//      button has been clicked at least once (track per-step, reset on topic entry)
//
// 2. A challenge renderer for `challenges`:
//    - one challenge at a time, "Run Code" + "reset" buttons
//    - runs `starter` (or the learner's edited version) in a sandboxed Function/iframe
//    - if showRealError, DO NOT catch-and-replace the error message — print
//      error.name + ": " + error.message verbatim to the terminal, exactly
//      like a real browser console would
//    - `check(output)` receives the captured console output string(s) and
//      returns true/false to mark the challenge complete
//
// 3. Wiring: after all `steps` finish -> show challenges[0] -> on pass -> challenges[1] -> ...
//    -> after last challenge passes -> mark topic complete, return to topic list
// ---------------------------------------------------------------------