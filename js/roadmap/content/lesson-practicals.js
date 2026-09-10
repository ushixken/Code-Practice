// Add more practicals by appending an item to a lesson's array.
// Keep every example different from its main lesson exercise.
//
// `requirements` (optional) lists the syntax/approach the prompt asks for.
// Each entry is { test: (code) => boolean, message: string }. A practical
// only passes when its console output matches AND every requirement's
// `test` returns true against the submitted source code. This stops
// "right answer, wrong technique" submissions (e.g. printing a value from
// a bare string literal instead of storing it in a constant first).
// Keep `message` strings description-only — name the missing concept,
// don't spell out literal code, since these are meant to be practiced,
// not copied.
window.ROADMAP_PRACTICALS = {
  firstProgram: [
    {
      title: "Print a welcome",
      prompt: "Print a short welcome for a new learner.",
      code: 'console.log("Welcome to JavaScript!");',
      expectedOutput: ["Welcome to JavaScript!"],
      requirements: [
        {
          test: (code) => /console\.log\s*\(/.test(code),
          message: "Print the welcome message to the console.",
        },
      ],
    },
  ],
  consolePractice: [
    {
      title: "Inspect a number",
      prompt: "Use the console to inspect a score.",
      code: "console.log(100);",
      expectedOutput: ["100"],
      requirements: [
        {
          test: (code) => /console\.log\s*\(/.test(code),
          message: "Print the score to the console.",
        },
      ],
    },
  ],
  values: [
    {
      title: "Update a score",
      prompt: "Start a score at 3 and print it. Then add 5 points and print the updated score.",
      code: "let score = 3;\nconsole.log(score);\n\nscore = score + 5;\nconsole.log(score);",
      expectedOutput: ["3", "8"],
      requirements: [
        {
          test: (code) => /\blet\s+\w+\s*=/.test(code),
          message: "Declare the score with let, since its value changes.",
        },
        {
          test: (code) => {
            const declared = code.match(/\blet\s+(\w+)\s*=/)
            if (!declared) return false
            const name = declared[1]
            const reassign = new RegExp(`(?<!\\b(let|const|var)\\s)\\b${name}\\s*=`)
            return reassign.test(code)
          },
          message: "Reassign the same variable to update its value.",
        },
        {
          test: (code) => {
            const declared = code.match(/\blet\s+(\w+)\s*=\s*3\b/)
            if (!declared) return false
            const name = declared[1]
            const firstLog = new RegExp(`console\\.log\\s*\\(\\s*${name}\\s*\\)`).exec(code)
            const update = new RegExp(`\\b${name}\\s*=\\s*${name}\\s*\\+\\s*5\\b`).exec(code)
            return Boolean(firstLog && update && firstLog.index < update.index)
          },
          message: "Print the starting score before adding its points.",
        },
        {
          test: (code) => !/\bconst\s+\w+\s*=\s*\d/.test(code),
          message: "Don't use const for a value that gets reassigned — use let instead.",
        },
      ],
    },
  ],
  variables: [
    {
      title: "Print a user",
      prompt: "Store a learner name in a constant, then print the variable.",
      code: 'const learner = "Sam";\nconsole.log(learner);',
      expectedOutput: ["Sam"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=\s*["'`]/.test(code),
          message: "Store the name in a constant first.",
        },
        {
          test: (code) => !/console\.log\s*\(\s*["'`]/.test(code),
          message: "Print the variable itself, not the string typed directly into console.log.",
        },
      ],
    },
  ],
  dataTypes: [
    {
      title: "Check text",
      prompt: "Inspect the type of a piece of text.",
      code: 'const label = "Start";\nconsole.log(typeof label);',
      expectedOutput: ["string"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=\s*["'`]/.test(code),
          message: "Store the text in a constant before checking its type.",
        },
        {
          test: (code) => /\btypeof\s+\w+/.test(code),
          message: "Use the typeof operator on your variable, not on a literal.",
        },
      ],
    },
  ],
  operators: [
    {
      title: "Calculate a total",
      prompt: "Scenario: two items cost 10 each. Store their sum in a constant, then print that constant.",
      code: "const total = 12 + 8;\nconsole.log(total);",
      expectedOutput: ["20"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=\s*[^;\n]*\+[^;\n]*(?:;|\n|$)/.test(code),
          message: "Store the sum of the two prices in a constant.",
        },
        {
          test: (code) => !/console\.log\s*\(\s*\d/.test(code),
          message: "Print the total variable, not a hardcoded number.",
        },
      ],
    },
  ],
  conditionals: [
    {
      title: "Choose a message",
      prompt: "Print a message only when a task is complete.",
      code: 'const isComplete = true;\nif (isComplete) {\n  console.log("Done!");\n}',
      expectedOutput: ["Done!"],
      requirements: [
        {
          test: (code) => /\bif\s*\(/.test(code),
          message: "Use an if statement so the message only prints when complete.",
        },
        {
          test: (code) => !/console\.log\s*\(\s*["'`][^"'`]*["'`]\s*\)\s*;?\s*$/m.test(code.split("if")[0] || ""),
          message: "The message should be guarded by the if condition, not printed unconditionally.",
        },
      ],
    },
  ],
  functions: [
    {
      title: "Make a reusable total",
      prompt: "Write a function that adds a service fee.",
      code: "function addFee(price) {\n  return price + 5;\n}\n\nconsole.log(addFee(20));",
      expectedOutput: ["25"],
      requirements: [
        {
          test: (code) => /\bfunction\s+\w+\s*\(/.test(code),
          message: "Declare a named function to do the calculation.",
        },
        {
          test: (code) => /\breturn\b/.test(code),
          message: "Return the calculated value from the function.",
        },
      ],
    },
  ],
  arrowFunctions: [
    {
      title: "Shorten a function",
      prompt: "Use an arrow function to triple a number.",
      code: "const triple = number => number * 3;\nconsole.log(triple(4));",
      expectedOutput: ["12"],
      requirements: [
        {
          test: (code) => /=>/.test(code),
          message: "Use arrow function syntax instead of the function keyword.",
        },
        {
          test: (code) => !/\bfunction\b/.test(code),
          message: "This practical asks for an arrow function, not a regular function.",
        },
      ],
    },
  ],
  arrays: [
    {
      title: "Read a list item",
      prompt: "Print the first item in a shopping list.",
      code: 'const groceries = ["milk", "bread", "fruit"];\nconsole.log(groceries[0]);',
      expectedOutput: ["milk"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=\s*\[/.test(code),
          message: "Store the shopping list in an array.",
        },
        {
          test: (code) => /\w+\s*\[\s*0\s*\]/.test(code),
          message: "Access the first item using its index.",
        },
      ],
    },
  ],
  loops: [
    {
      title: "Print each task",
      prompt: "Use a loop to print every item in a list.",
      code: 'const tasks = ["plan", "code", "test"];\nfor (const task of tasks) {\n  console.log(task);\n}',
      expectedOutput: ["plan", "code", "test"],
      requirements: [
        {
          test: (code) => /\bfor\s*\(/.test(code) || /\.forEach\s*\(/.test(code),
          message: "Use a loop instead of printing each item manually.",
        },
        {
          test: (code) => (code.match(/console\.log\s*\(/g) || []).length <= 1,
          message: "Print with one console.log inside the loop, not one per item.",
        },
      ],
    },
  ],
  fizzBuzz: [
    {
      title: "Mark even numbers",
      prompt: "Loop from 1 to 5 and print only the even numbers.",
      code: "for (let number = 1; number <= 5; number++) {\n  if (number % 2 === 0) {\n    console.log(number);\n  }\n}",
      expectedOutput: ["2", "4"],
      requirements: [
        {
          test: (code) => /\bfor\s*\(/.test(code),
          message: "Use a for loop to go from 1 to 5.",
        },
        {
          test: (code) => /%\s*2/.test(code),
          message: "Use the remainder operator to test for even numbers.",
        },
        {
          test: (code) => (code.match(/console\.log\s*\(/g) || []).length <= 1,
          message: "Print with one console.log inside the loop, not one per number.",
        },
      ],
    },
  ],
  objects: [
    {
      title: "Describe a project",
      prompt: "Store related project details in an object.",
      code: 'const project = { name: "Planner", status: "draft" };\nconsole.log(project.name);',
      expectedOutput: ["Planner"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=\s*\{/.test(code),
          message: "Store the details in an object literal.",
        },
        {
          test: (code) => /\w+\.\w+/.test(code) || /\w+\[["'`]\w+["'`]\]/.test(code),
          message: "Read the value off the object with dot or bracket notation.",
        },
      ],
    },
  ],
  scope: [
    {
      title: "Keep a value local",
      prompt: "Create a value inside a function and return it.",
      code: 'function getStatus() {\n  const status = "ready";\n  return status;\n}\n\nconsole.log(getStatus());',
      expectedOutput: ["ready"],
      requirements: [
        {
          test: (code) => /\bfunction\s+\w+\s*\(/.test(code),
          message: "Declare a function to hold the local value.",
        },
        {
          test: (code) => {
            const fnBody = code.split(/\breturn\b/)[0]
            return /\bconst\s+\w+\s*=/.test(fnBody)
          },
          message: "Create the constant inside the function, before returning it.",
        },
      ],
    },
  ],
  scopeClosures: [
    {
      title: "Remember a discount",
      prompt: "Create a function that remembers a discount amount.",
      code: "function makeDiscount(amount) {\n  return price => price - amount;\n}\n\nconst saveTen = makeDiscount(10);\nconsole.log(saveTen(50));",
      expectedOutput: ["40"],
      requirements: [
        {
          test: (code) => /\bfunction\s+\w+\s*\([^)]*\)\s*\{[\s\S]*(function|=>)/.test(code),
          message: "Return a function from inside the outer function to form a closure.",
        },
        {
          test: (code) => /\bconst\s+\w+\s*=\s*\w+\s*\(/.test(code),
          message: "Call the outer function once and store the returned function in a constant.",
        },
      ],
    },
  ],
  arrayMethods: [
    {
      title: "Keep ready tasks",
      prompt: "Filter a list to keep only ready tasks.",
      code: 'const tasks = ["ready", "waiting", "ready"];\nconst readyTasks = tasks.filter(task => task === "ready");\nconsole.log(readyTasks);',
      expectedOutput: ['["ready","ready"]'],
      requirements: [
        {
          test: (code) => /\.filter\s*\(/.test(code),
          message: "Use the array's filter method instead of a manual loop.",
        },
      ],
    },
  ],
  es6: [
    {
      title: "Copy settings",
      prompt: "Create a new settings object without changing the original.",
      code: 'const settings = { theme: "dark" };\nconst updatedSettings = { ...settings, fontSize: 16 };\nconsole.log(updatedSettings);',
      expectedOutput: ['{"theme":"dark","fontSize":16}'],
      requirements: [
        {
          test: (code) => /\.\.\.\w+/.test(code),
          message: "Use the spread operator to copy the original object.",
        },
        {
          test: (code) => {
            const original = code.match(/const\s+(\w+)\s*=\s*\{[^}]*\}/)
            if (!original) return false
            const name = original[1]
            const mutation = new RegExp(`${name}\\.\\w+\\s*=`)
            return !mutation.test(code)
          },
          message: "Don't modify the original object directly — build a new one instead.",
        },
      ],
    },
  ],
  stringMethods: [
    {
      title: "Normalize a name",
      prompt: "Turn a name into uppercase text.",
      code: 'const name = "ada";\nconsole.log(name.toUpperCase());',
      expectedOutput: ["ADA"],
      requirements: [
        {
          test: (code) => /\.toUpperCase\s*\(\s*\)/.test(code),
          message: "Use the toUpperCase string method.",
        },
        {
          test: (code) => !/console\.log\s*\(\s*["'`]/.test(code),
          message: "Print the transformed variable, not a hardcoded uppercase string.",
        },
      ],
    },
  ],
  domEvents: [
    {
      title: "React to a click",
      prompt: "Scenario: while testing a click handler, print \"Button clicked\" to the console.",
      code: 'console.log("Button clicked");',
      expectedOutput: ["Button clicked"],
      requirements: [
        {
          test: (code) => /console\.log\s*\(/.test(code),
          message: "Print the click handler's output to the console.",
        },
      ],
    },
  ],
  formsValidation: [
    {
      title: "Check a name",
      prompt: "Show an error when a name field is empty.",
      code: 'const name = "";\nif (name === "") {\n  console.log("Enter your name");\n}',
      expectedOutput: ["Enter your name"],
      requirements: [
        {
          test: (code) => /\bif\s*\(/.test(code),
          message: "Use an if statement to check whether the field is empty.",
        },
        {
          test: (code) => /===\s*["'`]\s*["'`]/.test(code) || /\.length\s*===\s*0/.test(code),
          message: 'Check for an empty value using a proper comparison.',
        },
      ],
    },
  ],
  async: [
    {
      title: "Wait for a result",
      prompt: "Scenario: data finished loading. Use a Promise to print \"Loaded\" when it resolves.",
      code: 'return Promise.resolve("Loaded").then(message => console.log(message));',
      expectedOutput: ["Loaded"],
      requirements: [
        {
          test: (code) => /\bPromise\b/.test(code),
          message: "Use a Promise rather than a plain console.log.",
        },
        {
          test: (code) => /\.then\s*\(/.test(code) || /\bawait\b/.test(code),
          message: "Handle the resolved value with then or await.",
        },
      ],
    },
  ],
  modulesErrors: [
    {
      title: "Handle a risky action",
      prompt: "Use try/catch around code that might fail.",
      code: 'try {\n  JSON.parse("not json");\n} catch (error) {\n  console.log("Could not read data");\n}',
      expectedOutput: ["Could not read data"],
      requirements: [
        {
          test: (code) => /\btry\s*\{/.test(code) && /\bcatch\s*\(/.test(code),
          message: "Wrap the risky code in a try/catch block.",
        },
        {
          test: (code) => {
            const catchBlock = code.split(/\bcatch\s*\([^)]*\)\s*\{/)[1] || ""
            return /console\.log\s*\(/.test(catchBlock)
          },
          message: "Print the fallback message from inside the catch block.",
        },
      ],
    },
  ],
  apisData: [
    {
      title: "Read API data",
      prompt: "Read one value from API-style data.",
      code: "const data = { weather: { temperature: 29 } };\nconsole.log(data.weather.temperature);",
      expectedOutput: ["29"],
      requirements: [
        {
          test: (code) => /\w+\.\w+\.\w+/.test(code) || /\w+\[["'`]\w+["'`]\]\[["'`]\w+["'`]\]/.test(code),
          message: "Access the nested value through the object's structure.",
        },
      ],
    },
  ],
  browserStorage: [
    {
      title: "Save a preference",
      prompt: "Scenario: save the theme \"dark\" in browser storage, then print the saved theme.",
      code: 'localStorage.setItem("theme", "dark");\nconsole.log(localStorage.getItem("theme"));',
      expectedOutput: ["dark"],
      requirements: [
        {
          test: (code) => /localStorage\.setItem\s*\(/.test(code),
          message: "Save the value using localStorage.",
        },
        {
          test: (code) => /localStorage\.getItem\s*\(/.test(code),
          message: "Read the value back from localStorage instead of printing a literal.",
        },
      ],
    },
  ],
  objectsPrototypes: [
    {
      title: "Create a class instance",
      prompt: "Create a class for a simple task.",
      code: 'class Task {\n  constructor(title) {\n    this.title = title;\n  }\n}\n\nconst task = new Task("Write notes");\nconsole.log(task.title);',
      expectedOutput: ["Write notes"],
      requirements: [
        {
          test: (code) => /\bclass\s+\w+/.test(code),
          message: "Define a class for the task.",
        },
        {
          test: (code) => /\bconstructor\s*\(/.test(code),
          message: "Give the class a constructor that sets its properties.",
        },
        {
          test: (code) => /\bnew\s+\w+\s*\(/.test(code),
          message: "Create an instance of the class with new.",
        },
      ],
    },
  ],
  foundationProjects: [
    {
      title: "Plan a small app",
      prompt: "Scenario: before coding a todo app, print its first step: \"Show an input\".",
      code: 'console.log("Show an input");',
      expectedOutput: ["Show an input"],
      requirements: [
        {
          test: (code) => /console\.log\s*\(/.test(code),
          message: "Print the planning step to the console.",
        },
      ],
    },
  ],
  professionalPractice: [
    {
      title: "Test a utility",
      prompt: "Scenario: test your add function by printing the result of 2 plus 3.",
      code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));",
      expectedOutput: ["5"],
      requirements: [
        {
          test: (code) => /=>/.test(code),
          message: "Define add as an arrow function.",
        },
        {
          test: (code) => /\badd\s*\(\s*2\s*,\s*3\s*\)/.test(code),
          message: "Call the function with the given values rather than printing the hardcoded result.",
        },
      ],
    },
  ],
  debuggingTools: [
    {
      title: "Inspect a calculation",
      prompt: "Scenario: two tickets cost 15 each. Calculate the total, inspect it in the console, then print it.",
      code: "const price = 15;\nconst quantity = 2;\nconst total = price * quantity;\nconsole.log(total);",
      expectedOutput: ["30"],
      requirements: [
        {
          test: (code) => /\bconst\s+total\s*=/.test(code) && /console\.log\s*\(\s*total\s*\)/.test(code),
          message: "Store the calculation in total, then inspect that variable.",
        },
      ],
    },
  ],
  jsonData: [
    {
      title: "Round-trip a profile",
      prompt: "Scenario: convert a learner profile to JSON text, restore it, then print the restored role.",
      code: 'const profile = { role: "learner" };\nconst text = JSON.stringify(profile);\nconst restored = JSON.parse(text);\nconsole.log(restored.role);',
      expectedOutput: ["learner"],
      requirements: [
        {
          test: (code) => /JSON\.stringify\s*\(/.test(code) && /JSON\.parse\s*\(/.test(code),
          message: "Convert the profile to JSON text and parse it back.",
        },
        {
          test: (code) => /console\.log\s*\(\s*restored\.role\s*\)/.test(code),
          message: "Print the role from the restored object.",
        },
      ],
    },
  ],
  thisKeyword: [
    {
      title: "Introduce a team member",
      prompt: "Scenario: make a team member object whose introduce method uses this.name, then print its introduction.",
      code: 'const member = {\n  name: "Mina",\n  introduce() {\n    return "I am " + this.name;\n  },\n};\nconsole.log(member.introduce());',
      expectedOutput: ["I am Mina"],
      requirements: [
        {
          test: (code) => /this\.name/.test(code),
          message: "Use this.name inside the object's method.",
        },
        {
          test: (code) => /console\.log\s*\(\s*member\.introduce\s*\(\s*\)\s*\)/.test(code),
          message: "Call the object's method and print its result.",
        },
      ],
    },
  ],
  gitBasics: [
    {
      title: "Name a focused change",
      prompt: "Scenario: you fixed an empty form submission. Store an action-style commit message, then print it for review.",
      code: 'const message = "Fix empty form submission";\nconsole.log(message);',
      expectedOutput: ["Fix empty form submission"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=\s*["']Fix\s+empty\s+form\s+submission["']/.test(code),
          message: "Store a concise action-style commit message in a constant.",
        },
        {
          test: (code) => /console\.log\s*\(\s*\w+\s*\)/.test(code),
          message: "Print the message variable for review.",
        },
      ],
    },
  ],
  foundationRecap: [
    {
      title: "Choose a study step",
      prompt: "Scenario: store whether a learner is ready, use a function and an if statement to choose a study message, then print it.",
      code: 'const isReady = true;\n\nfunction studyStep() {\n  if (isReady) {\n    return "Start the next lesson";\n  }\n  return "Review the last lesson";\n}\n\nconsole.log(studyStep());',
      expectedOutput: ["Start the next lesson"],
      requirements: [
        {
          test: (code) => /\bconst\s+\w+\s*=/.test(code),
          message: "Store the readiness value in a constant.",
        },
        {
          test: (code) => /\bfunction\s+\w+\s*\(/.test(code) && /\bif\s*\(/.test(code),
          message: "Use a function with an if statement to make the decision.",
        },
      ],
    },
  ],
  webAppRecap: [
    {
      title: "Recover from a failed request",
      prompt: "Scenario: a request fails. Await the rejected Promise inside try/catch, then print the fallback message from catch.",
      code: 'async function showStatus() {\n  try {\n    await Promise.reject(new Error("offline"));\n  } catch (error) {\n    console.log("Try again");\n  }\n}\n\nreturn showStatus();',
      expectedOutput: ["Try again"],
      requirements: [
        {
          test: (code) => /\btry\s*\{/.test(code) && /\bcatch\s*(?:\([^)]*\))?\s*\{/.test(code),
          message: "Handle the failed request with try/catch.",
        },
        {
          test: (code) => /\bawait\s+Promise\.reject\s*\(/.test(code),
          message: "Await a rejected Promise inside the try block.",
        },
        {
          test: (code) => /console\.log\s*\(\s*["']Try again["']\s*\)/.test(code),
          message: "Print the fallback message from the catch block.",
        },
      ],
    },
  ],
}

// Interview-style checkpoints combine several completed lessons. Add a new
// checkpoint after a lesson when the next group should stay locked until the
// learner can use the earlier ideas together.
window.ROADMAP_MAIN_PRACTICALS = {
  values: {
    title: "Interview checkpoint: learner score",
    prompt: "Interview scenario: A learner named Ada starts at score 0 and earns 10 points. Create the requested constant and changing score, then print Ada followed by the final score.",
    expectedOutput: ["Ada", "10"],
    hints: ["First make one constant for Ada. Then use let for the value that changes from 0 to 10."],
    requirements: [
      { test: (code) => {
        const learner = code.match(/\bconst\s+([A-Za-z_$][\w$]*)\s*=\s*["']Ada["']/)
        if (!learner) return false
        const name = learner[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        return new RegExp(`console\\.log\\s*\\(\\s*${name}\\s*\\)`).test(code)
      }, message: "Store Ada in a constant, then print that same variable." },
      { test: (code) => {
        const score = code.match(/\blet\s+([A-Za-z_$][\w$]*)\s*=\s*0\b/)
        if (!score) return false
        const name = score[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        return new RegExp(`\\b${name}\\s*=\\s*${name}\\s*\\+\\s*10\\b`).test(code) && new RegExp(`console\\.log\\s*\\(\\s*${name}\\s*\\)`).test(code)
      }, message: "Use let to update a score from 0 by 10, then print that same variable." },
    ],
  },
  functions: {
    title: "Interview checkpoint: access decision",
    prompt: "Interview scenario: Write a function named getAccessMessage. It receives a score and returns \"Pass\" when the score is 10 or more; otherwise return \"Keep practicing\". Print the result for 12.",
    expectedOutput: ["Pass"],
    hints: ["Write the function header first. Inside it, compare score with 10, then return one message for true and another for false."],
    requirements: [
      { test: (code) => /\bfunction\s+getAccessMessage\s*\(\s*score\s*\)/.test(code), message: "Create the function with the requested name and parameter." },
      { test: (code) => /\bif\s*\(\s*score\s*>=\s*10\s*\)/.test(code), message: "Use the requested score comparison inside an if statement." },
      { test: (code) => /\breturn\s+["']Pass["']/.test(code) && /\breturn\s+["']Keep practicing["']/.test(code), message: "Return the requested message for each decision." },
      { test: (code) => /console\.log\s*\(\s*getAccessMessage\s*\(\s*12\s*\)\s*\)/.test(code), message: "Print the function result for the interview input." },
    ],
  },
}
