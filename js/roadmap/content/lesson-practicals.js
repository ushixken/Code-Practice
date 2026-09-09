// Add more practicals by appending an item to a lesson's array.
// Keep every example different from its main lesson exercise.
window.ROADMAP_PRACTICALS = {
  firstProgram: [
    {
      title: "Print a welcome",
      prompt: "Print a short welcome for a new learner.",
      code: 'console.log("Welcome to JavaScript!");',
    },
  ],
  consolePractice: [
    {
      title: "Inspect a number",
      prompt: "Use the console to inspect a score.",
      code: "console.log(100);",
    },
  ],
  values: [
    {
      title: "Update a score",
      prompt: "Use let for a score that changes, then print the new value.",
      code: "let score = 5;\nscore = score + 3;\nconsole.log(score);",
    },
  ],
  variables: [
    {
      title: "Print a user",
      prompt: "Store a learner name in a constant, then print the variable.",
      code: 'const learner = "Sam";\nconsole.log(learner);',
    },
  ],
  dataTypes: [
    {
      title: "Check text",
      prompt: "Inspect the type of a piece of text.",
      code: 'const label = "Start";\nconsole.log(typeof label);',
    },
  ],
  operators: [
    {
      title: "Calculate a total",
      prompt: "Add two prices and print the total.",
      code: "const total = 12 + 8;\nconsole.log(total);",
    },
  ],
  conditionals: [
    {
      title: "Choose a message",
      prompt: "Print a message only when a task is complete.",
      code: 'const isComplete = true;\nif (isComplete) {\n  console.log("Done!");\n}',
    },
  ],
  functions: [
    {
      title: "Make a reusable total",
      prompt: "Write a function that adds a service fee.",
      code: "function addFee(price) {\n  return price + 5;\n}\n\nconsole.log(addFee(20));",
    },
  ],
  arrowFunctions: [
    {
      title: "Shorten a function",
      prompt: "Use an arrow function to triple a number.",
      code: "const triple = number => number * 3;\nconsole.log(triple(4));",
    },
  ],
  arrays: [
    {
      title: "Read a list item",
      prompt: "Print the first item in a shopping list.",
      code: 'const groceries = ["milk", "bread", "fruit"];\nconsole.log(groceries[0]);',
    },
  ],
  loops: [
    {
      title: "Print each task",
      prompt: "Use a loop to print every item in a list.",
      code: 'const tasks = ["plan", "code", "test"];\nfor (const task of tasks) {\n  console.log(task);\n}',
    },
  ],
  fizzBuzz: [
    {
      title: "Mark even numbers",
      prompt: "Loop from 1 to 5 and print only the even numbers.",
      code: "for (let number = 1; number <= 5; number++) {\n  if (number % 2 === 0) {\n    console.log(number);\n  }\n}",
    },
  ],
  objects: [
    {
      title: "Describe a project",
      prompt: "Store related project details in an object.",
      code: 'const project = { name: "Planner", status: "draft" };\nconsole.log(project.name);',
    },
  ],
  scope: [
    {
      title: "Keep a value local",
      prompt: "Create a value inside a function and return it.",
      code: 'function getStatus() {\n  const status = "ready";\n  return status;\n}\n\nconsole.log(getStatus());',
    },
  ],
  scopeClosures: [
    {
      title: "Remember a discount",
      prompt: "Create a function that remembers a discount amount.",
      code: "function makeDiscount(amount) {\n  return price => price - amount;\n}\n\nconst saveTen = makeDiscount(10);\nconsole.log(saveTen(50));",
    },
  ],
  arrayMethods: [
    {
      title: "Keep ready tasks",
      prompt: "Filter a list to keep only ready tasks.",
      code: 'const tasks = ["ready", "waiting", "ready"];\nconst readyTasks = tasks.filter(task => task === "ready");\nconsole.log(readyTasks);',
    },
  ],
  es6: [
    {
      title: "Copy settings",
      prompt: "Create a new settings object without changing the original.",
      code: 'const settings = { theme: "dark" };\nconst updatedSettings = { ...settings, fontSize: 16 };\nconsole.log(updatedSettings);',
    },
  ],
  stringMethods: [
    {
      title: "Normalize a name",
      prompt: "Turn a name into uppercase text.",
      code: 'const name = "ada";\nconsole.log(name.toUpperCase());',
    },
  ],
  domEvents: [
    {
      title: "React to a click",
      prompt: "Connect a button click to a console message.",
      code: 'button.addEventListener("click", () => {\n  console.log("Button clicked");\n});',
    },
  ],
  formsValidation: [
    {
      title: "Check a name",
      prompt: "Show an error when a name field is empty.",
      code: 'const name = "";\nif (name === "") {\n  console.log("Enter your name");\n}',
    },
  ],
  async: [
    {
      title: "Wait for a result",
      prompt: "Use async and await with a Promise.",
      code: 'async function showMessage() {\n  const message = await Promise.resolve("Loaded");\n  console.log(message);\n}',
    },
  ],
  modulesErrors: [
    {
      title: "Handle a risky action",
      prompt: "Use try/catch around code that might fail.",
      code: 'try {\n  JSON.parse("not json");\n} catch (error) {\n  console.log("Could not read data");\n}',
    },
  ],
  apisData: [
    {
      title: "Read API data",
      prompt: "Read one value from API-style data.",
      code: "const data = { weather: { temperature: 29 } };\nconsole.log(data.weather.temperature);",
    },
  ],
  browserStorage: [
    {
      title: "Save a preference",
      prompt: "Save a small setting in the browser.",
      code: 'localStorage.setItem("theme", "dark");\nconsole.log(localStorage.getItem("theme"));',
    },
  ],
  objectsPrototypes: [
    {
      title: "Create a class instance",
      prompt: "Create a class for a simple task.",
      code: 'class Task {\n  constructor(title) {\n    this.title = title;\n  }\n}\n\nconst task = new Task("Write notes");\nconsole.log(task.title);',
    },
  ],
  foundationProjects: [
    {
      title: "Plan a small app",
      prompt: "Write the first three tasks for a todo app before coding it.",
      code: "// 1. Show an input\n// 2. Add a task to a list\n// 3. Mark a task complete",
    },
  ],
  professionalPractice: [
    {
      title: "Test a utility",
      prompt: "Write a small test for a function you created.",
      code: "const add = (a, b) => a + b;\nexpect(add(2, 3)).toBe(5);",
    },
  ],
}
