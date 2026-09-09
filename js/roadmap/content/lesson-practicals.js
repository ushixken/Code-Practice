// Add more practicals by appending an item to a lesson's array.
// Keep every example different from its main lesson exercise.
window.ROADMAP_PRACTICALS = {
  firstProgram: [
    {
      title: "Print a welcome",
      prompt: "Print a short welcome for a new learner.",
      code: 'console.log("Welcome to JavaScript!");',
      expectedOutput: ["Welcome to JavaScript!"],
    },
  ],
  consolePractice: [
    {
      title: "Inspect a number",
      prompt: "Use the console to inspect a score.",
      code: "console.log(100);",
      expectedOutput: ["100"],
    },
  ],
  values: [
    {
      title: "Update a score",
      prompt: "Use let for a score that changes, then print the new value.",
      code: "let score = 5;\nscore = score + 3;\nconsole.log(score);",
      expectedOutput: ["8"],
    },
  ],
  variables: [
    {
      title: "Print a user",
      prompt: "Store a learner name in a constant, then print the variable.",
      code: 'const learner = "Sam";\nconsole.log(learner);',
      expectedOutput: ["Sam"],
    },
  ],
  dataTypes: [
    {
      title: "Check text",
      prompt: "Inspect the type of a piece of text.",
      code: 'const label = "Start";\nconsole.log(typeof label);',
      expectedOutput: ["string"],
    },
  ],
  operators: [
    {
      title: "Calculate a total",
      prompt: "Add two prices and print the total.",
      code: "const total = 12 + 8;\nconsole.log(total);",
      expectedOutput: ["20"],
    },
  ],
  conditionals: [
    {
      title: "Choose a message",
      prompt: "Print a message only when a task is complete.",
      code: 'const isComplete = true;\nif (isComplete) {\n  console.log("Done!");\n}',
      expectedOutput: ["Done!"],
    },
  ],
  functions: [
    {
      title: "Make a reusable total",
      prompt: "Write a function that adds a service fee.",
      code: "function addFee(price) {\n  return price + 5;\n}\n\nconsole.log(addFee(20));",
      expectedOutput: ["25"],
    },
  ],
  arrowFunctions: [
    {
      title: "Shorten a function",
      prompt: "Use an arrow function to triple a number.",
      code: "const triple = number => number * 3;\nconsole.log(triple(4));",
      expectedOutput: ["12"],
    },
  ],
  arrays: [
    {
      title: "Read a list item",
      prompt: "Print the first item in a shopping list.",
      code: 'const groceries = ["milk", "bread", "fruit"];\nconsole.log(groceries[0]);',
      expectedOutput: ["milk"],
    },
  ],
  loops: [
    {
      title: "Print each task",
      prompt: "Use a loop to print every item in a list.",
      code: 'const tasks = ["plan", "code", "test"];\nfor (const task of tasks) {\n  console.log(task);\n}',
      expectedOutput: ["plan", "code", "test"],
    },
  ],
  fizzBuzz: [
    {
      title: "Mark even numbers",
      prompt: "Loop from 1 to 5 and print only the even numbers.",
      code: "for (let number = 1; number <= 5; number++) {\n  if (number % 2 === 0) {\n    console.log(number);\n  }\n}",
      expectedOutput: ["2", "4"],
    },
  ],
  objects: [
    {
      title: "Describe a project",
      prompt: "Store related project details in an object.",
      code: 'const project = { name: "Planner", status: "draft" };\nconsole.log(project.name);',
      expectedOutput: ["Planner"],
    },
  ],
  scope: [
    {
      title: "Keep a value local",
      prompt: "Create a value inside a function and return it.",
      code: 'function getStatus() {\n  const status = "ready";\n  return status;\n}\n\nconsole.log(getStatus());',
      expectedOutput: ["ready"],
    },
  ],
  scopeClosures: [
    {
      title: "Remember a discount",
      prompt: "Create a function that remembers a discount amount.",
      code: "function makeDiscount(amount) {\n  return price => price - amount;\n}\n\nconst saveTen = makeDiscount(10);\nconsole.log(saveTen(50));",
      expectedOutput: ["40"],
    },
  ],
  arrayMethods: [
    {
      title: "Keep ready tasks",
      prompt: "Filter a list to keep only ready tasks.",
      code: 'const tasks = ["ready", "waiting", "ready"];\nconst readyTasks = tasks.filter(task => task === "ready");\nconsole.log(readyTasks);',
      expectedOutput: ['["ready","ready"]'],
    },
  ],
  es6: [
    {
      title: "Copy settings",
      prompt: "Create a new settings object without changing the original.",
      code: 'const settings = { theme: "dark" };\nconst updatedSettings = { ...settings, fontSize: 16 };\nconsole.log(updatedSettings);',
      expectedOutput: ['{"theme":"dark","fontSize":16}'],
    },
  ],
  stringMethods: [
    {
      title: "Normalize a name",
      prompt: "Turn a name into uppercase text.",
      code: 'const name = "ada";\nconsole.log(name.toUpperCase());',
      expectedOutput: ["ADA"],
    },
  ],
  domEvents: [
    {
      title: "React to a click",
      prompt: "Scenario: while testing a click handler, print \"Button clicked\" to the console.",
      code: 'console.log("Button clicked");',
      expectedOutput: ["Button clicked"],
    },
  ],
  formsValidation: [
    {
      title: "Check a name",
      prompt: "Show an error when a name field is empty.",
      code: 'const name = "";\nif (name === "") {\n  console.log("Enter your name");\n}',
      expectedOutput: ["Enter your name"],
    },
  ],
  async: [
    {
      title: "Wait for a result",
      prompt: "Scenario: data finished loading. Use a Promise to print \"Loaded\" when it resolves.",
      code: 'return Promise.resolve("Loaded").then(message => console.log(message));',
      expectedOutput: ["Loaded"],
    },
  ],
  modulesErrors: [
    {
      title: "Handle a risky action",
      prompt: "Use try/catch around code that might fail.",
      code: 'try {\n  JSON.parse("not json");\n} catch (error) {\n  console.log("Could not read data");\n}',
      expectedOutput: ["Could not read data"],
    },
  ],
  apisData: [
    {
      title: "Read API data",
      prompt: "Read one value from API-style data.",
      code: "const data = { weather: { temperature: 29 } };\nconsole.log(data.weather.temperature);",
      expectedOutput: ["29"],
    },
  ],
  browserStorage: [
    {
      title: "Save a preference",
      prompt: "Scenario: save the theme \"dark\" in browser storage, then print the saved theme.",
      code: 'localStorage.setItem("theme", "dark");\nconsole.log(localStorage.getItem("theme"));',
      expectedOutput: ["dark"],
    },
  ],
  objectsPrototypes: [
    {
      title: "Create a class instance",
      prompt: "Create a class for a simple task.",
      code: 'class Task {\n  constructor(title) {\n    this.title = title;\n  }\n}\n\nconst task = new Task("Write notes");\nconsole.log(task.title);',
      expectedOutput: ["Write notes"],
    },
  ],
  foundationProjects: [
    {
      title: "Plan a small app",
      prompt: "Scenario: before coding a todo app, print its first step: \"Show an input\".",
      code: 'console.log("Show an input");',
      expectedOutput: ["Show an input"],
    },
  ],
  professionalPractice: [
    {
      title: "Test a utility",
      prompt: "Scenario: test your add function by printing the result of 2 plus 3.",
      code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));",
      expectedOutput: ["5"],
    },
  ],
}
