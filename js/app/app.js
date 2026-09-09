/* ============ PROBLEM SET ============ */
const PROBLEMS = [
  // ---------------- EASY ----------------
  {
    id: "sleepIn",
    difficulty: "easy",
    name: "sleepIn",
    signature: "function sleepIn(weekday, vacation) {\n  \n}",
    desc: `<p>The parameter <b>weekday</b> is true if it is a weekday, and the parameter <b>vacation</b> is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation.</p><p>Return true if we sleep in.</p>`,
    examples: [
      ["sleepIn(false, false)", "true"],
      ["sleepIn(true, false)", "false"],
      ["sleepIn(false, true)", "true"],
    ],
    hint: 'Translate the sentence directly: "not a weekday OR on vacation" → <code>!weekday || vacation</code>. No if/else needed — the expression already is the boolean.',
    tests: [
      [[false, false], true],
      [[true, false], false],
      [[false, true], true],
      [[true, true], true],
    ],
  },
  {
    id: "monkeyTrouble",
    difficulty: "easy",
    name: "monkeyTrouble",
    signature: "function monkeyTrouble(aSmile, bSmile) {\n  \n}",
    desc: `<p>We have two monkeys, <b>a</b> and <b>b</b>, and the parameters <b>aSmile</b> and <b>bSmile</b> indicate if each is smiling.</p><p>We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.</p>`,
    examples: [
      ["monkeyTrouble(true, true)", "true"],
      ["monkeyTrouble(true, false)", "false"],
      ["monkeyTrouble(false, false)", "true"],
    ],
    hint: "Trouble happens exactly when the two values are the <em>same</em>. Compare with <code>===</code>: <code>return aSmile === bSmile;</code>",
    tests: [
      [[true, true], true],
      [[true, false], false],
      [[false, false], true],
      [[false, true], false],
    ],
  },
  {
    id: "sumDouble",
    difficulty: "easy",
    name: "sumDouble",
    signature: "function sumDouble(a, b) {\n  \n}",
    desc: `<p>Given two int values, return their sum. Unless the two values are the same, then return double their sum.</p>`,
    examples: [
      ["sumDouble(1, 2)", "3"],
      ["sumDouble(3, 2)", "5"],
      ["sumDouble(2, 2)", "8"],
    ],
    hint: "Check equality first as the special case: <code>if (a === b) return (a+b)*2;</code> then just <code>return a+b;</code> after.",
    tests: [
      [[1, 2], 3],
      [[3, 2], 5],
      [[2, 2], 8],
      [[-1, -1], -4],
    ],
  },
  {
    id: "diff21",
    difficulty: "easy",
    name: "diff21",
    signature: "function diff21(n) {\n  \n}",
    desc: `<p>Given an int <b>n</b>, return the absolute difference between <b>n</b> and 21, except return double the absolute difference if <b>n</b> is over 21.</p>`,
    examples: [
      ["diff21(19)", "2"],
      ["diff21(10)", "11"],
      ["diff21(21)", "0"],
      ["diff21(25)", "8"],
    ],
    hint: "Use <code>Math.abs(n - 21)</code> to get the distance regardless of sign, then double it only when <code>n &gt; 21</code>.",
    tests: [
      [[19], 2],
      [[10], 11],
      [[21], 0],
      [[25], 8],
      [[22], 2],
    ],
  },
  {
    id: "makes10",
    difficulty: "easy",
    name: "makes10",
    signature: "function makes10(a, b) {\n  \n}",
    desc: `<p>Given 2 ints, <b>a</b> and <b>b</b>, return true if one of them is 10 or if their sum is 10.</p>`,
    examples: [
      ["makes10(9, 10)", "true"],
      ["makes10(9, 9)", "false"],
      ["makes10(1, 9)", "true"],
    ],
    hint: 'Watch operator precedence — you need <code>a === 10</code>, not just <code>a</code>, since a truthy number isn\'t the same as "equals 10".',
    tests: [
      [[9, 10], true],
      [[9, 9], false],
      [[1, 9], true],
      [[5, 5], true],
      [[6, 2], false],
    ],
  },
  {
    id: "nearHundred",
    difficulty: "easy",
    name: "nearHundred",
    signature: "function nearHundred(n) {\n  \n}",
    desc: `<p>Given an int <b>n</b>, return true if it is within 10 of 100 or 200. Note: <code>Math.abs(num)</code> computes the absolute value of a number.</p>`,
    examples: [
      ["nearHundred(93)", "true"],
      ["nearHundred(90)", "true"],
      ["nearHundred(89)", "false"],
      ["nearHundred(205)", "true"],
    ],
    hint: '"Within 10 of X" means the distance is 10 or less: <code>Math.abs(n - X) &lt;= 10</code>. Combine both targets with <code>||</code>.',
    tests: [
      [[93], true],
      [[90], true],
      [[89], false],
      [[205], true],
      [[211], false],
    ],
  },
  {
    id: "notString",
    difficulty: "easy",
    name: "notString",
    signature: "function notString(str) {\n  \n}",
    desc: `<p>Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.</p>`,
    examples: [
      ["notString('candy')", "'not candy'"],
      ["notString('not candy')", "'not candy'"],
      ["notString('is not')", "'not is not'"],
    ],
    hint: "<code>includes()</code> checks anywhere in the string. You need <code>str.startsWith('not')</code> to check the beginning specifically — that's the trap in <code>'is not'</code>.",
    tests: [
      [["candy"], "not candy"],
      [["not candy"], "not candy"],
      [["is not"], "not is not"],
      [[""], "not "],
    ],
  },
  {
    id: "removeChar",
    difficulty: "easy",
    name: "removeChar",
    signature: "function removeChar(str, n) {\n  \n}",
    desc: `<p>Given a non-empty string and an int <b>n</b>, return a new string where the char at index <b>n</b> has been removed. The value of <b>n</b> will be a valid index of a char in the original string.</p>`,
    examples: [
      ["removeChar('hello', 2)", "'helo'"],
      ["removeChar('hello', 0)", "'ello'"],
      ["removeChar('hello', 4)", "'hell'"],
    ],
    hint: "Split the string into two slices, skipping index n: <code>str.slice(0, n) + str.slice(n + 1)</code>.",
    tests: [
      [["hello", 2], "helo"],
      [["hello", 0], "ello"],
      [["hello", 4], "hell"],
      [["at", 0], "t"],
    ],
  },
  // ---------------- MEDIUM ----------------
  {
    id: "posNeg",
    difficulty: "medium",
    name: "posNeg",
    signature: "function posNeg(a, b, negative) {\n  \n}",
    desc: `<p>Given 2 int values, return true if one is negative and one is positive. Except if the parameter <b>negative</b> is true, then return true only if both are negative.</p>`,
    examples: [
      ["posNeg(1, -1, false)", "true"],
      ["posNeg(-1, 1, false)", "true"],
      ["posNeg(-4, -5, true)", "true"],
      ["posNeg(-4, 5, true)", "false"],
    ],
    hint: 'Two branches: when <code>negative</code> is true, check both are negative. Otherwise check opposite signs — remember "one negative, one positive" can happen two ways, so combine with <code>||</code>.',
    tests: [
      [[1, -1, false], true],
      [[-1, 1, false], true],
      [[-4, -5, true], true],
      [[-4, 5, true], false],
      [[1, 2, false], false],
      [[1, 2, true], false],
    ],
  },
  {
    id: "caughtSpeeding",
    difficulty: "medium",
    name: "caughtSpeeding",
    signature: "function caughtSpeeding(speed, isBirthday) {\n  \n}",
    desc: `<p>You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.</p><p>If speed is 60 or less, result is 0. If speed is between 61 and 80 inclusive, result is 1. If speed is 81 or more, result is 2. Unless it is your birthday — on that day, your speed can be 5 higher in all cases.</p>`,
    examples: [
      ["caughtSpeeding(60, false)", "0"],
      ["caughtSpeeding(65, false)", "1"],
      ["caughtSpeeding(65, true)", "0"],
      ["caughtSpeeding(90, true)", "2"],
    ],
    hint: "Shift the thresholds up by 5 when it's your birthday. Try subtracting 5 from speed first if it's your birthday, then apply the normal thresholds to that adjusted number.",
    tests: [
      [[60, false], 0],
      [[65, false], 1],
      [[65, true], 0],
      [[90, true], 2],
      [[81, false], 2],
      [[85, true], 1],
    ],
  },
  {
    id: "cigarParty",
    difficulty: "medium",
    name: "cigarParty",
    signature: "function cigarParty(cigars, isWeekend) {\n  \n}",
    desc: `<p>When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is a weekend, in which case there is no upper bound on the number of cigars.</p><p>Return true if the party with the given values is successful.</p>`,
    examples: [
      ["cigarParty(30, false)", "false"],
      ["cigarParty(50, false)", "true"],
      ["cigarParty(70, true)", "true"],
    ],
    hint: "Two separate rules to OR together: weekday needs <code>cigars &gt;= 40 &amp;&amp; cigars &lt;= 60</code>; weekend only needs <code>cigars &gt;= 40</code>.",
    tests: [
      [[30, false], false],
      [[50, false], true],
      [[70, true], true],
      [[70, false], false],
      [[40, false], true],
      [[35, true], false],
    ],
  },
  {
    id: "dateFashion",
    difficulty: "medium",
    name: "dateFashion",
    signature: "function dateFashion(you, date) {\n  \n}",
    desc: `<p>You and your date are trying to get a table at a restaurant. The parameter <b>you</b> is the stylishness of your clothes, in the range 0..10, and <b>date</b> is the stylishness of your date's clothes.</p><p>If either of you is 2 or less, the result is 0 (you can't get in). If either of you is 8 or more, the result is 2 (you get the best table). Otherwise the result is 1.</p>`,
    examples: [
      ["dateFashion(5, 10)", "2"],
      ["dateFashion(5, 2)", "0"],
      ["dateFashion(5, 5)", "1"],
    ],
    hint: 'Check the "either is 2 or less" rule first (it should win even if the other is 8+), then check "either is 8 or more", then default to 1.',
    tests: [
      [[5, 10], 2],
      [[5, 2], 0],
      [[5, 5], 1],
      [[2, 2], 0],
      [[9, 9], 2],
      [[8, 2], 0],
    ],
  },
  {
    id: "squirrelPlay",
    difficulty: "medium",
    name: "squirrelPlay",
    signature: "function squirrelPlay(temp, isSummer) {\n  \n}",
    desc: `<p>The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90.</p><p>Given an int temp and a boolean isSummer, return true if the squirrels play and false otherwise.</p>`,
    examples: [
      ["squirrelPlay(70, false)", "true"],
      ["squirrelPlay(95, false)", "false"],
      ["squirrelPlay(95, true)", "true"],
    ],
    hint: "Pick the upper bound first based on <code>isSummer</code> (90 or 100), then check <code>temp &gt;= 60 &amp;&amp; temp &lt;= upperBound</code>.",
    tests: [
      [[70, false], true],
      [[95, false], false],
      [[95, true], true],
      [[59, true], false],
      [[100, true], true],
      [[101, true], false],
    ],
  },
  {
    id: "greenTicket",
    difficulty: "medium",
    name: "greenTicket",
    signature: "function greenTicket(a, b, c) {\n  \n}",
    desc: `<p>You are driving to the mall, hoping to arrive within 30 minutes. Given the int values <b>a</b>, <b>b</b>, <b>c</b> for the digits of a ticket, return "green" if all digits are equal, "red" if none are equal, otherwise return "orange" if two of them are equal.</p>`,
    examples: [
      ["greenTicket(1, 2, 3)", "'red'"],
      ["greenTicket(6, 6, 6)", "'green'"],
      ["greenTicket(4, 6, 4)", "'orange'"],
    ],
    hint: "Check the strictest case first: all three equal → green. Then check none equal → red (all three pairwise comparisons must be false). Otherwise → orange.",
    tests: [
      [[1, 2, 3], "red"],
      [[6, 6, 6], "green"],
      [[4, 6, 4], "orange"],
      [[1, 1, 2], "orange"],
      [[9, 2, 9], "orange"],
    ],
  },
  // ---------------- HARD ----------------
  {
    id: "blackjack",
    difficulty: "hard",
    name: "blackjack",
    signature: "function blackjack(a, b) {\n  \n}",
    desc: `<p>Given 2 int values greater than 0, whichever value is nearest to 21 without going over is returned. If both go over 21, return 0.</p>`,
    examples: [
      ["blackjack(19, 21)", "21"],
      ["blackjack(21, 22)", "21"],
      ["blackjack(22, 50)", "0"],
    ],
    hint: "Define a helper idea in your head: a value 'busts' if it's over 21. Handle both-bust, one-bust, and neither-bust as three separate cases.",
    tests: [
      [[19, 21], 21],
      [[21, 22], 21],
      [[22, 50], 0],
      [[15, 17], 17],
      [[22, 21], 21],
    ],
  },
  {
    id: "evenlySpaced",
    difficulty: "hard",
    name: "evenlySpaced",
    signature: "function evenlySpaced(a, b, c) {\n  \n}",
    desc: `<p>Given three int values, a b c, return true if it is possible to add two of the ints to get the third.</p>`,
    examples: [
      ["evenlySpaced(1, 2, 3)", "true"],
      ["evenlySpaced(3, 2, 3)", "true"],
      ["evenlySpaced(3, 2, 2)", "false"],
    ],
    hint: "There are three combinations to test: <code>a+b===c</code>, <code>a+c===b</code>, or <code>b+c===a</code>. Combine them with <code>||</code>.",
    tests: [
      [[1, 2, 3], true],
      [[3, 2, 3], true],
      [[3, 2, 2], false],
      [[2, 2, 4], true],
      [[5, 1, 4], true],
    ],
  },
  {
    id: "luckySum",
    difficulty: "hard",
    name: "luckySum",
    signature: "function luckySum(a, b, c) {\n  \n}",
    desc: `<p>Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.</p>`,
    examples: [
      ["luckySum(1, 2, 3)", "6"],
      ["luckySum(1, 2, 13)", "3"],
      ["luckySum(1, 13, 3)", "1"],
      ["luckySum(13, 2, 3)", "0"],
    ],
    hint: "Check from left to right: if <code>a===13</code> everything is wiped out (return 0). Else if <code>b===13</code>, only <code>a</code> counts. Else if <code>c===13</code>, only <code>a+b</code> counts. Otherwise sum all three.",
    tests: [
      [[1, 2, 3], 6],
      [[1, 2, 13], 3],
      [[1, 13, 3], 1],
      [[13, 2, 3], 0],
      [[13, 13, 13], 0],
    ],
  },
  {
    id: "roundSum",
    difficulty: "hard",
    name: "roundSum",
    signature: "function roundSum(a, b, c) {\n  \n}",
    desc: `<p>For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10.</p><p>Given 3 int values, a b c, return the sum of their rounded values.</p>`,
    examples: [
      ["roundSum(16, 17, 18)", "60"],
      ["roundSum(12, 13, 14)", "30"],
      ["roundSum(5, 15, 25)", "40"],
    ],
    hint: 'Write a small rounding helper inside the function first: <code>round10(n) = Math.round(n / 10) * 10</code> works nicely — verify it matches "5 rounds up" behavior for your test cases.',
    tests: [
      [[16, 17, 18], 60],
      [[12, 13, 14], 30],
      [[5, 15, 25], 40],
      [[0, 0, 0], 0],
    ],
  },
  {
    id: "countEvens",
    difficulty: "hard",
    name: "countEvens",
    signature: "function countEvens(nums) {\n  \n}",
    desc: `<p>Given an array of ints, return the number of elements that are equal to their position in the array, treating index 0 counting as even.</p><p>(Classic Array-1 style problem.) Return the count of even numbers in the array.</p>`,
    examples: [
      ["countEvens([2, 1, 2, 3, 4])", "3"],
      ["countEvens([2, 2, 0])", "3"],
      ["countEvens([1, 3, 5])", "0"],
    ],
    hint: "Loop over the array and check each element with <code>n % 2 === 0</code>, or use <code>arr.filter(n => n % 2 === 0).length</code>.",
    tests: [
      [[[2, 1, 2, 3, 4]], 3],
      [[[2, 2, 0]], 3],
      [[[1, 3, 5]], 0],
      [[[]], 0],
    ],
  },
  {
    id: "maxBlock",
    difficulty: "hard",
    name: "maxBlock",
    signature: "function maxBlock(str) {\n  \n}",
    desc: `<p>Given a string, look for a "block" of consecutive repeated letters, and return the length of the largest such block. For example, "xxyyyzz" contains three blocks: "xx" length 2, "yyy" length 3, and "zz" length 2, so the largest is 3.</p>`,
    examples: [
      ["maxBlock('xxyyyzz')", "3"],
      ["maxBlock('xxyyzz')", "2"],
      ["maxBlock('xxxxx')", "5"],
    ],
    hint: "Walk through the string with a loop, tracking the current run length. When the current char differs from the previous one, compare and reset the run counter — don't forget to check the final run after the loop ends.",
    tests: [
      [["xxyyyzz"], 3],
      [["xxyyzz"], 2],
      [["xxxxx"], 5],
      [["abc"], 1],
      [["mississippi"], 2],
    ],
  },
]

/* ============ ROADMAP (JS fundamentals course) ============ */
const ROADMAP = [
  {
    id: "firstProgram",
    level: "easy",
    title: "How Programs Work",
    summary: "Instructions, values, and your first JavaScript program",
    content: `
      <p>A <b>program</b> is a sequence of instructions. JavaScript reads those instructions from top to bottom, keeps values in memory, and performs each action in order.</p>
      <p>In a browser, JavaScript runs in the page. In Node.js, it runs on your computer. The language is the same; the environment gives it different tools.</p>
      <div class="example"><b>console.log("JavaScript is ready!");</b><br>→ JavaScript is ready!</div>
      <p>Use <code>console.log()</code> to inspect values while learning and debugging. It is the quickest way to ask: “What is my code doing right now?”</p>
    `,
    fnName: "firstProgram",
    starter:
      "function firstProgram() {\n  // Type your console.log(...) line below.\n\n}",
    solution:
      'function firstProgram() {\n  console.log("Hello, JavaScript!");\n}',
    task: 'Use <code>console.log()</code> to print <code>"Hello, JavaScript!"</code>. This is how you inspect values while learning and debugging.',
    hints: [
      "Use the browser’s debugging tool: console.log(...).",
      "The text you want to print is a string, so put it inside double quotes.",
      'Start with: console.log("Hello, JavaScript!");',
    ],
    reflection:
      "Where would console.log() help you understand a program that is not behaving as expected?",
    testMode: "custom",
    validate: async (fn) => {
      const lines = []
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("Hello, JavaScript!")
      lines.push(
        `${ok ? "✓" : "✗"} Lesson check: console.log("Hello, JavaScript!")${ok ? " printed the expected message." : " did not print the expected message."}`,
      )
      return { ok, lines, consoleOutput: output }
    },
  },
  {
    id: "consolePractice",
    level: "easy",
    title: "Console Practice",
    summary: "Type and run a message on your own",
    content: `
      <p>You have seen <code>console.log()</code>. Now type it yourself without a pre-filled answer. This is how you begin building typing confidence.</p>
      <div class="example"><b>console.log("Practice makes progress!");</b></div>
      <p>Use the same punctuation: parentheses around the message, double quotes around the text, and a semicolon at the end.</p>
    `,
    fnName: "consolePractice",
    starter:
      "function consolePractice() {\n  // Print: I can use the console!\n\n}",
    solution:
      'function consolePractice() {\n  console.log("I can use the console!");\n}',
    task: 'Type a <code>console.log()</code> statement that prints <code>"I can use the console!"</code>.',
    hints: [
      "The command starts with console.log.",
      "Put the message inside parentheses and double quotes.",
      'console.log("I can use the console!");',
    ],
    reflection:
      "What part of the console.log() syntax do you need to remember next time?",
    testMode: "custom",
    validate: async (fn) => {
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("I can use the console!")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: print "I can use the console!".`,
        ],
      }
    },
  },
  {
    id: "values",
    level: "easy",
    title: "Variables in Practice",
    summary: "Use const to store a value, then print it with console.log()",
    content: `
      <p>Now that you know <code>const</code>, practice using it to store one value with one clear name.</p>
      <div class="example"><b>const city = "Manila";<br>console.log(city);</b></div>
      <p>Use <code>const</code> when the value will stay the same. The word <code>city</code> is a name we chose; it helps us remember what the value means. Later, you will learn when to use <code>let</code> for values that change.</p>
    `,
    fnName: "firstVariable",
    starter:
      'function firstVariable() {\n  // Create user, set it to "Ada", then print user.\n\n}',
    solution:
      'function firstVariable() {\n  const user = "Ada";\n  console.log(user);\n}',
    task: 'Create a variable named <code>user</code>, set it to <code>"Ada"</code>, then print it with <code>console.log(user)</code>.',
    hints: [
      "Use const to create a value that will not change.",
      'Put the text "Ada" inside double quotes.',
      "Use console.log(user) after creating the variable.",
    ],
    reflection:
      'Why is a name like user easier to understand than repeating "Ada" throughout the code?',
    testMode: "custom",
    validate: async (fn) => {
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("Ada")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: print the value stored in user${ok ? "." : " using console.log(user)."}`,
        ],
      }
    },
  },
  {
    id: "variables",
    level: "easy",
    title: "Variables (var, let, const)",
    summary: "Storing data with let, const, and var",
    content: `
      <p><b>Variables</b> are named containers for values. Modern JS mostly uses two keywords:</p>
      <p><code>let</code> — a variable that can be reassigned later.<br><code>const</code> — a variable that cannot be reassigned after it's set.</p>
      <p>You'll also see <code>var</code> in older code, but <code>let</code>/<code>const</code> fixed some of its quirks (like leaking outside blocks), so prefer them.</p>
      <div class="example"><b>let score = 0;</b> score = score + 10; // OK, score is now 10</div>
      <div class="example"><b>const name = "Ada";<br>name = "Bob"; // ❌ TypeError</b></div>
    `,
    fnName: "declareAge",
    starter:
      "function declareAge() {\n  // Create a variable named age using let,\n  // set it to 25, then print it.\n\n}",
    solution:
      "function declareAge() {\n  let age = 25;\n  console.log(age);\n}",
    task: "Declare a variable called <code>age</code> with <code>let</code>, assign it <code>25</code>, then print it with <code>console.log(age)</code>.",
    hints: [
      "Use let because this lesson is practicing a variable that can change later.",
      "Create it with: let age = 25;",
      "On the next line, use console.log(age); to print its value.",
    ],
    reflection: "What does the name age help you remember about the value 25?",
    testMode: "custom",
    validate: async (fn) => {
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("25")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: print the value 25 with console.log(age).`,
        ],
      }
    },
  },
  {
    id: "dataTypes",
    level: "easy",
    title: "Data Types",
    summary: "string, number, boolean, array, object, and typeof",
    content: `
      <p>JavaScript has a handful of core types: <b>string</b> ("hi"), <b>number</b> (42), <b>boolean</b> (true/false), <b>array</b> ([1,2,3]), <b>object</b> ({}), and <b>undefined/null</b> for "nothing here".</p>
      <p>The <code>typeof</code> operator tells you what type a value is at runtime: <code>typeof 5</code> is <code>"number"</code>, <code>typeof "hi"</code> is <code>"string"</code>.</p>
      <p>Arrays are actually a special kind of object, so <code>typeof [1,2]</code> is <code>'object'</code> too — that's a classic gotcha.</p>
    `,
    fnName: "describeType",
    starter:
      "function describeType() {\n  // Create a variable named answer with the value 42,\n  // then print its type with typeof.\n\n}",
    solution:
      "function describeType() {\n  const answer = 42;\n  console.log(typeof answer);\n}",
    task: "Create <code>const answer = 42</code>, then use <code>console.log(typeof answer)</code> to print its type.",
    testMode: "custom",
    validate: async (fn) => {
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("number")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: typeof answer should print "number".`,
        ],
      }
    },
  },
  {
    id: "operators",
    level: "easy",
    title: "Operators",
    summary: "Arithmetic, comparison, and logical operators",
    content: `
      <p><b>Arithmetic:</b> <code>+ - * / %</code>. <b>Comparison:</b> always prefer <code>===</code> / <code>!==</code> over <code>==</code>/<code>!=</code>, since the loose versions silently convert types.</p>
      <p><b>Logical:</b> <code>&&</code> (and), <code>||</code> (or), <code>!</code> (not) combine boolean expressions.</p>
      <div class="example"><b>5 == "5"</b> → true (loose, converts types)</div>
      <div class="example"><b>5 === "5"</b> → false (strict, no conversion)</div>
    `,
    fnName: "isAdult",
    starter:
      "function isAdult() {\n  // Compare 21 with 18, then print the result.\n\n}",
    solution: "function isAdult() {\n  console.log(21 >= 18);\n}",
    task: "Use <code>console.log(21 >= 18)</code> to print the result of a comparison.",
    testMode: "custom",
    validate: async (fn) => {
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("true")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: the comparison should print true.`,
        ],
      }
    },
  },
  {
    id: "conditionals",
    level: "easy",
    title: "Conditionals (if / else)",
    summary: "Branching logic with if, else if, and else",
    content: `
      <p><code>if</code>/<code>else</code> lets your code take different paths depending on a condition. Chain <code>else if</code> for multiple branches, and always check the most specific condition first.</p>
      <div class="example"><b>if (x > 10) { ... } else if (x > 5) { ... } else { ... }</b></div>
    `,
    fnName: "trafficAction",
    starter:
      'function trafficAction() {\n  // Create light with the value "green".\n  // If it is green, print "go".\n\n}',
    solution:
      'function trafficAction() {\n  const light = "green";\n  if (light === "green") {\n    console.log("go");\n  }\n}',
    task: 'Create <code>const light = "green"</code>. Use an <code>if</code> statement to print <code>"go"</code> when the light is green.',
    testMode: "custom",
    validate: async (fn) => {
      const output = []
      const originalLog = console.log
      console.log = (...values) => output.push(values.join(" "))
      try {
        fn()
      } finally {
        console.log = originalLog
      }
      const ok = output.includes("go")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: the green light should print "go".`,
        ],
      }
    },
  },
  {
    id: "functions",
    level: "medium",
    title: "Functions",
    summary: "Declarations, parameters, and return values",
    content: `
      <p>A function packages up reusable logic. It takes <b>parameters</b> as input and can send a value back with <code>return</code> — once <code>return</code> runs, the function stops immediately.</p>
      <div class="example"><b>function add(a, b) { return a + b; }</b></div>
      <p>Call a function with parentheses, such as <code>add(2, 3)</code>. You will meet shorter function syntax later, after this form feels comfortable.</p>
    `,
    fnName: "greet",
    starter: 'function greet(name) {\n  // Return "Hello, <name>!"\n\n}',
    task: "Return the string <code>'Hello, '</code> followed by <code>name</code> and an exclamation mark.",
    testMode: "io",
    tests: [
      [["Ada"], "Hello, Ada!"],
      [["Bob"], "Hello, Bob!"],
    ],
  },
  {
    id: "arrowFunctions",
    level: "medium",
    title: "Arrow Functions",
    summary: "A shorter way to write a function you already understand",
    content: `
      <p>An <b>arrow function</b> is shorter syntax for a function. It still accepts input and can give a result back; only the writing style changes.</p>
      <div class="example"><b>const double = number =&gt; number * 2;<br>double(4); // 8</b></div>
      <p>Learn the regular <code>function</code> form first. Then arrows become a shortcut, not a new mystery.</p>
    `,
    fnName: "triple",
    starter:
      "function triple(number) {\n  // Return number multiplied by 3.\n\n}",
    solution: "function triple(number) {\n  return number * 3;\n}",
    task: "Use the function syntax you already know to return <code>number * 3</code>. The example shows the arrow version you will see in real code.",
    hints: [
      "Use return because this function must send a result back.",
      "Multiply number by 3 with *.",
      "return number * 3;",
    ],
    reflection:
      "What is the same about a regular function and an arrow function?",
    testMode: "io",
    tests: [
      [[2], 6],
      [[0], 0],
      [[-4], -12],
    ],
  },
  {
    id: "arrays",
    level: "medium",
    title: "Arrays",
    summary: "Ordered lists: indexing, length, push/pop",
    content: `
      <p>Arrays hold ordered lists of values, indexed from <b>0</b>. <code>arr.length</code> gives the count, <code>arr[0]</code> gets the first item, and <code>arr[arr.length - 1]</code> gets the last.</p>
      <p><code>push()</code> adds to the end, <code>pop()</code> removes from the end.</p>
    `,
    fnName: "lastItem",
    starter:
      "function lastItem(arr) {\n  // Return the last element of arr.\n\n}",
    task: "Return the last element of the array <code>arr</code>.",
    testMode: "io",
    tests: [
      [[[1, 2, 3]], 3],
      [[["a", "b"]], "b"],
      [[[42]], 42],
    ],
  },
  {
    id: "loops",
    level: "medium",
    title: "Loops",
    summary: "Repeating work with for, while, and for...of",
    content: `
      <p>A <code>for</code> loop repeats code a set number of times: <code>for (let i = 0; i &lt; n; i++) { ... }</code>.</p>
      <p><code>for (const item of arr)</code> is a cleaner way to walk through every item in an array when you don't need the index.</p>
    `,
    fnName: "sumArray",
    starter:
      "function sumArray(arr) {\n  // Return the sum of all numbers in arr.\n\n}",
    task: "Loop through <code>arr</code> and return the sum of all its numbers.",
    testMode: "io",
    tests: [
      [[[1, 2, 3]], 6],
      [[[]], 0],
      [[[5, -5, 10]], 10],
    ],
  },
  {
    id: "fizzBuzz",
    level: "medium",
    title: "Interview Practice: FizzBuzz",
    summary:
      "Use loops, conditions, and the remainder operator in one practical challenge",
    content: `
      <p><b>FizzBuzz</b> is a classic interview question because it checks whether you can combine a loop, conditions, and clear ordering.</p>
      <div class="example"><b>for (let i = 1; i &lt;= 4; i++) {<br>&nbsp;&nbsp;if (i % 2 === 0) console.log("even");<br>&nbsp;&nbsp;else console.log("odd");<br>}</b></div>
      <p>Check <code>15</code> first because a number divisible by both 3 and 5 must become <code>"FizzBuzz"</code>, not just <code>"Fizz"</code>. This is the same skill you use when ordering real validation rules.</p>
    `,
    fnName: "fizzBuzz",
    starter:
      'function fizzBuzz(n) {\n  // Return an array from 1 to n.\n  // Multiples of 3 become "Fizz"; multiples of 5 become "Buzz";\n  // multiples of both become "FizzBuzz".\n\n}',
    task: "Build the result one number at a time. Start with an empty array, loop from 1 through <code>n</code>, then return the array.",
    hints: [
      "Create an empty array before the loop: const result = [];",
      "Use i % 3 === 0 to check for multiples of 3.",
      "Check i % 15 === 0 first, then 3, then 5; push each result into the array and return it.",
    ],
    reflection:
      "Why must the “both 3 and 5” case be checked before the individual cases?",
    testMode: "io",
    tests: [
      [[5], [1, 2, "Fizz", 4, "Buzz"]],
      [
        [15],
        [
          1,
          2,
          "Fizz",
          4,
          "Buzz",
          "Fizz",
          7,
          8,
          "Fizz",
          "Buzz",
          11,
          "Fizz",
          13,
          14,
          "FizzBuzz",
        ],
      ],
    ],
  },
  {
    id: "objects",
    level: "medium",
    title: "Objects",
    summary: "Key-value pairs and dot/bracket access",
    content: `
      <p>Objects group related data as key-value pairs: <code>{ title: "Notebook", pages: 80 }</code>. Access a value with dot notation (<code>book.title</code>) or brackets (<code>book["title"]</code>) when the key is dynamic.</p>
    `,
    fnName: "getFullName",
    starter:
      'function getFullName(person) {\n  // person is { first, last }.\n  // Return "First Last".\n\n}',
    task: "Given <code>person = { first, last }</code>, return <code>'First Last'</code> as one string.",
    testMode: "io",
    tests: [
      [[{ first: "Ada", last: "Lovelace" }], "Ada Lovelace"],
      [[{ first: "Grace", last: "Hopper" }], "Grace Hopper"],
    ],
  },
  {
    id: "scope",
    level: "hard",
    title: "Scope",
    summary: "Where a variable can be used",
    content: `
      <p><b>Scope</b> is the area where a variable is available. A variable created inside a function stays inside that function; a variable created in a block stays in that block.</p>
      <div class="example"><b>function showScore() {<br>&nbsp;&nbsp;const score = 10;<br>&nbsp;&nbsp;return score;<br>}</b></div>
      <p>Keeping values close to the code that uses them prevents accidental changes and makes programs easier to read.</p>
    `,
    fnName: "makeGreeting",
    starter:
      "function makeGreeting() {\n  // Create a message inside this function,\n  // then return the message.\n\n}",
    solution:
      'function makeGreeting() {\n  const message = "Welcome!";\n  return message;\n}',
    task: 'Create <code>const message = "Welcome!"</code> inside the function, then return <code>message</code>.',
    testMode: "io",
    tests: [[[], "Welcome!"]],
  },
  {
    id: "scopeClosures",
    level: "hard",
    title: "Scope & Closures",
    summary: "Lexical scope and functions that remember variables",
    content: `
      <p>A <b>closure</b> is a function that "remembers" variables from the scope it was created in, even after that outer function has finished running.</p>
      <div class="example"><b>function makePrefix(prefix) { return text => prefix + text; }</b><br>const warn = makePrefix("Warning: ");<br>warn("Low battery") // "Warning: Low battery"</div>
    `,
    fnName: "multiplyBy",
    starter:
      "function multiplyBy(factor) {\n  // Return a function that takes x\n  // and returns x * factor.\n\n}",
    task: "Return a new function that multiplies its argument by <code>factor</code>.",
    testMode: "custom",
    validate: async (fn) => {
      const lines = []
      const inner = fn(3)
      if (typeof inner !== "function") {
        lines.push("✗ multiplyBy(3) should return a function, not a value.")
        return { ok: false, lines }
      }
      const cases = [
        [5, 15],
        [0, 0],
        [-2, -6],
      ]
      let allOk = true
      for (const [x, expected] of cases) {
        const actual = inner(x)
        const ok = actual === expected
        if (!ok) allOk = false
        lines.push(
          `${ok ? "✓" : "✗"} multiplyBy(3)(${x}) → ${actual}${ok ? "" : `  (expected ${expected})`}`,
        )
      }
      return { ok: allOk, lines }
    },
  },
  {
    id: "arrayMethods",
    level: "hard",
    title: "Array Methods (map / filter)",
    summary: "Transforming arrays without manual loops",
    content: `
      <p><code>arr.map(fn)</code> returns a new array with <code>fn</code> applied to every element. <code>arr.filter(fn)</code> returns a new array keeping only elements where <code>fn</code> returns true.</p>
      <div class="example"><b>[1,2,3].map(n => n * n)</b> → [1, 4, 9]</div>
      <div class="example"><b>[4,10,15].filter(n => n >= 10)</b> → [10, 15]</div>
    `,
    fnName: "doubleAll",
    starter:
      "function doubleAll(arr) {\n  // Return a new array with every number doubled.\n\n}",
    task: "Return a new array with every number in <code>arr</code> doubled, using <code>map</code>.",
    testMode: "io",
    tests: [
      [[[1, 2, 3]], [2, 4, 6]],
      [[[]], []],
      [[[-1, 0, 5]], [-2, 0, 10]],
    ],
  },
  {
    id: "es6",
    level: "hard",
    title: "ES6+ (destructuring & spread)",
    summary: "Modern syntax for pulling values apart and combining them",
    content: `
      <p><b>Destructuring</b> pulls values out of objects/arrays into variables: <code>const { x, y } = point;</code>. The <b>spread operator</b> (<code>...</code>) copies values into a new array or object: <code>{ ...user, role: "admin" }</code> makes a changed copy.</p>
    `,
    fnName: "combine",
    starter:
      "function combine(arr1, arr2) {\n  // Return one array containing all\n  // elements of arr1 followed by arr2,\n  // using the spread operator.\n\n}",
    task: "Return a single array made of <code>arr1</code>'s items followed by <code>arr2</code>'s items, using <code>...</code> spread.",
    testMode: "io",
    tests: [
      [
        [
          [1, 2],
          [3, 4],
        ],
        [1, 2, 3, 4],
      ],
      [[[], [1]], [1]],
      [[["a"], []], ["a"]],
    ],
  },
  {
    id: "async",
    level: "hard",
    title: "Async & Promises",
    summary: "Working with values that resolve later",
    content: `
      <p>A <b>Promise</b> represents a value that isn't ready yet — like data from a network request. <code>async</code> functions let you write <code>await somePromise</code> to pause until it resolves, instead of chaining <code>.then()</code>.</p>
      <div class="example"><b>async function run() { const val = await fetchData(); }</b></div>
    `,
    fnName: "delayedDouble",
    starter:
      "function delayedDouble(n) {\n  // Return a Promise that resolves\n  // with n * 2 after a short delay.\n  // Hint: new Promise(resolve => setTimeout(() => resolve(n*2), 50))\n\n}",
    task: "Return a <code>Promise</code> that resolves with <code>n * 2</code> after a short delay.",
    testMode: "custom",
    validate: async (fn) => {
      const lines = []
      const result = fn(5)
      if (!(result instanceof Promise)) {
        lines.push(
          "✗ delayedDouble(5) should return a Promise (did you forget `new Promise(...)`?)",
        )
        return { ok: false, lines }
      }
      const actual = await result
      const ok = actual === 10
      lines.push(
        `${ok ? "✓" : "✗"} await delayedDouble(5) → ${actual}${ok ? "" : "  (expected 10)"}`,
      )
      return { ok, lines }
    },
  },
  {
    id: "stringMethods",
    level: "medium",
    title: "String Methods",
    summary: "Check and transform text with helpful built-in methods",
    content: `
      <p>Strings have useful built-in methods. For example, <code>text.includes("@")</code> checks whether text contains a character, and <code>text.toUpperCase()</code> creates uppercase text.</p>
      <div class="example"><b>"JavaScript".includes("Script") // true</b></div>
      <p>Methods use a dot because they belong to the value on their left. They do not change the original string unless you store the new result.</p>
    `,
    fnName: "hasAtSign",
    starter:
      'function hasAtSign(text) {\n  // Return whether text includes "@".\n\n}',
    solution: 'function hasAtSign(text) {\n  return text.includes("@");\n}',
    task: 'Return whether <code>text</code> includes <code>"@"</code> using <code>includes()</code>.',
    testMode: "io",
    tests: [
      [["ada@example.com"], true],
      [["no-at-sign"], false],
    ],
  },
  {
    id: "domEvents",
    level: "medium",
    title: "DOM & Events",
    summary: "Make a web page respond to the user",
    content: `
      <p>The <b>DOM</b> is JavaScript’s view of a web page. Use <code>document.querySelector()</code> to find an element, then update <code>textContent</code>, <code>classList</code>, or attach an event listener.</p>
      <div class="example"><b>button.addEventListener('click', () =&gt; {<br>&nbsp;&nbsp;message.textContent = 'Saved!';<br>});</b></div>
      <p>Events are how the browser tells your program that something happened: a click, key press, form submission, or input change.</p>
    `,
    fnName: "buttonMessage",
    starter:
      "function buttonMessage(name) {\n  // In a real page, an event handler can use this\n  // value to update the DOM. Return a button message.\n\n}",
    task: 'Return <code>name + " saved"</code>. This keeps the example focused on the value a click handler would display.',
    testMode: "io",
    tests: [
      [["Plan"], "Plan saved"],
      [["Note"], "Note saved"],
    ],
  },
  {
    id: "formsValidation",
    level: "medium",
    title: "Forms & Validation",
    summary: "Read user input and give helpful feedback",
    content: `
      <p>Forms turn user input into program data. Read values from inputs, stop unwanted page reloads with <code>event.preventDefault()</code>, then validate before using the data.</p>
      <div class="example"><b>form.addEventListener("submit", (event) =&gt; {<br>&nbsp;&nbsp;event.preventDefault();<br>&nbsp;&nbsp;if (name === "") showError("Enter your name");<br>});</b></div>
      <p>A useful validation message tells the user exactly what to fix. Build login and registration forms only after you can reliably handle one input.</p>
    `,
    fnName: "isValidEmail",
    starter:
      'function isValidEmail(email) {\n  // Return true when email contains "@".\n\n}',
    task: 'Start with one clear validation rule: return whether the email contains <code>"@"</code>.',
    testMode: "io",
    tests: [
      [["ada@example.com"], true],
      [["not-an-email"], false],
    ],
  },
  {
    id: "browserStorage",
    level: "hard",
    title: "Browser Storage",
    summary: "Keep small amounts of data between page reloads",
    content: `
      <p><code>localStorage</code> saves string data in the browser. Pair it with <code>JSON.stringify()</code> when saving objects or arrays, and <code>JSON.parse()</code> when reading them back.</p>
      <div class="example"><b>localStorage.setItem("theme", "dark");<br>const theme = localStorage.getItem("theme");</b></div>
      <p>Use it for a notes app, saved settings, or a small todo list—not secrets or passwords.</p>
    `,
    fnName: "saveSetting",
    starter:
      "function saveSetting(key, value) {\n  // Return an object that represents the setting to save.\n\n}",
    task: "Return an object with the given key and value. This models the data before a browser stores it.",
    testMode: "io",
    tests: [[["theme", "dark"], { key: "theme", value: "dark" }]],
  },
  {
    id: "apisData",
    level: "hard",
    title: "APIs & Data",
    summary: "Use JSON, HTTP, fetch, and error handling",
    content: `
      <p>An API lets your program request data from another service. Most web APIs send JSON. A safe request checks the response before using its data.</p>
      <div class="example"><b>const response = await fetch("/api/weather");<br>if (!response.ok) throw new Error("Request failed");<br>const data = await response.json();</b></div>
      <p>Practice with a weather, movie, currency, or GitHub-profile project. Keep network code separate from how you display the result.</p>
    `,
    fnName: "readUserName",
    starter:
      'function readUserName(data) {\n  // data is { user: { name: "Ada" } }.\n  // Return the name.\n\n}',
    task: "Extract a value from API-like JSON data using object access.",
    testMode: "io",
    tests: [[[{ user: { name: "Ada" } }], "Ada"]],
  },
  {
    id: "foundationProjects",
    level: "hard",
    title: "Final Foundation Projects",
    summary: "Turn your knowledge into complete applications",
    content: `
      <p>Graduate from the Foundation Track by building projects without copying a tutorial line by line. Plan the inputs, state, user actions, and edge cases before you code.</p>
      <div class="example"><b>Beginner: calculator → todo app → quiz app → form validator<br>Intermediate: weather app → movie app → expense tracker → notes app<br>Advanced foundation: e-commerce frontend → dashboard → social media UI</b></div>
      <p>For every project, write a short plan, build the smallest working version, test it, then improve it. That loop is how programming skill becomes durable.</p>
    `,
    fnName: "projectPlan",
    starter:
      "function projectPlan(project) {\n  // Return a first step for the chosen project.\n\n}",
    task: 'Return <code>"Plan " + project</code>. Then open the Code Planner and break your chosen project into small tasks.',
    testMode: "io",
    tests: [[["a todo app"], "Plan a todo app"]],
  },
  {
    id: "modulesErrors",
    level: "hard",
    title: "Modules & Error Handling",
    summary: "Organize code and handle failures deliberately",
    content: `
      <p>Modules keep files focused. Export a value with <code>export</code>, then use <code>import</code> where it is needed. This prevents large programs from becoming one hard-to-navigate file.</p>
      <div class="example"><b>export function add(a, b) { return a + b; }<br>import { add } from "./math.js";</b></div>
      <p>Use <code>try/catch</code> around work that can fail, especially network requests and JSON parsing. Give errors useful messages so future you can solve them.</p>
    `,
    fnName: "safeDivide",
    starter:
      "function safeDivide(a, b) {\n  // Return a / b. If b is 0, return 'Cannot divide by zero'.\n\n}",
    task: "Practice a predictable failure path: never let an invalid operation silently produce a confusing result.",
    testMode: "io",
    tests: [
      [[8, 2], 4],
      [[8, 0], "Cannot divide by zero"],
    ],
  },
  {
    id: "objectsPrototypes",
    level: "hard",
    title: "Objects, Classes & Prototypes",
    summary: "Model related data and behavior",
    content: `
      <p>Objects combine related data and behavior. Classes are convenient syntax for creating related objects, while prototypes are the mechanism JavaScript uses to share methods behind the scenes.</p>
      <div class="example"><b>class User {<br>&nbsp;&nbsp;constructor(name) { this.name = name; }<br>&nbsp;&nbsp;greet() { return 'Hi, ' + this.name; }<br>}</b></div>
      <p>Learn classes for readability, then study prototypes so <code>this</code>, inheritance, and method sharing make sense in real code.</p>
    `,
    fnName: "getUserName",
    starter:
      "function getUserName(user) {\n  // user is an object with a name property.\n  // Return the name.\n\n}",
    task: "Read a property from an object—the basic operation behind most object-oriented code.",
    testMode: "io",
    tests: [
      [[{ name: "Ada" }], "Ada"],
      [[{ name: "Lin" }], "Lin"],
    ],
  },
  {
    id: "professionalPractice",
    level: "hard",
    title: "Professional JavaScript",
    summary: "Testing, debugging, performance, Node.js, and projects",
    content: `
      <p>Professional JavaScript means writing code that other people can understand, test, and safely change. Use clear names, small functions, version control, tests, and browser or Node debugging tools.</p>
      <div class="example"><b>// Given → when → then<br>expect(add(2, 3)).toBe(5);</b></div>
      <p>Next, build projects in order: calculator → quiz or todo app → weather app → API-backed app → full-stack app. Learn Node.js, npm, modules, HTTP APIs, and a framework <em>after</em> the language foundations feel natural.</p>
    `,
    fnName: "formatName",
    starter:
      "function formatName(name) {\n  // Return the name with its first letter capitalized.\n\n}",
    task: "Finish with a small, testable utility. Then choose a project and use the roadmap as your reference.",
    testMode: "io",
    tests: [
      [["ada"], "Ada"],
      [["javaScript"], "JavaScript"],
    ],
  },
]

ROADMAP.sort(
  (first, second) =>
    window.ROADMAP_ORDER.indexOf(first.id) -
    window.ROADMAP_ORDER.indexOf(second.id),
)

let roadmapSolved = new Set()
let currentRoadmapIdx = 0
let roadmapRanOnce = false
let roadmapFunctionWrapperHidden = false
let activeRoadmapPractical = null

const roadmapView = document.getElementById("roadmapView")
const roadmapNodesEl = document.getElementById("roadmapNodes")
const roadmapDetailEl = document.getElementById("roadmapDetail")
const roadmapProgressFill = document.getElementById("roadmapProgressFill")
const roadmapProgressLabel = document.getElementById("roadmapProgressLabel")
const roadmapLevelSelect = document.getElementById("roadmapLevelSelect")
const problemsBtn = document.getElementById("problemsBtn")
const roadmapBtn = document.getElementById("roadmapBtn")
const mainEl = document.querySelector(".main")
let roadmapLevelFilter = "all"

function isRoadmapLessonLocked(idx) {
  if (idx < 0 || idx >= ROADMAP.length) return true
  const prevDone = idx === 0 || roadmapSolved.has(ROADMAP[idx - 1].id)
  const isDone = roadmapSolved.has(ROADMAP[idx].id)
  return !prevDone && !isDone
}

function buildRoadmapPath() {
  roadmapNodesEl.innerHTML = ""
  ROADMAP.forEach((lesson, idx) => {
    if (roadmapLevelFilter !== "all" && lesson.level !== roadmapLevelFilter)
      return
    const isDone = roadmapSolved.has(lesson.id)
    const isLocked = isRoadmapLessonLocked(idx)
    const isCurrent = idx === currentRoadmapIdx

    const node = document.createElement("div")
    node.className =
      "roadmap-node" +
      (isDone ? " completed" : "") +
      (isLocked ? " locked" : "") +
      (isCurrent ? " current" : "")

    const dotIcon = isDone
      ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
      : isLocked
        ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'
        : idx + 1

    node.innerHTML = `
      <div class="roadmap-node-dot">${dotIcon}</div>
      <div class="roadmap-node-body">
        <div class="roadmap-node-level ${lesson.level}">${LEVEL_LABELS[lesson.level]}</div>
        <div class="roadmap-node-title">${lesson.title}</div>
        <div class="roadmap-node-summary">${lesson.summary}</div>
      </div>
    `
    if (!isLocked) {
      node.addEventListener("click", () => loadRoadmapLesson(idx))
    }
    roadmapNodesEl.appendChild(node)
  })
  updateRoadmapProgress()
}

function updateRoadmapProgress() {
  const visibleLessons =
    roadmapLevelFilter === "all"
      ? ROADMAP
      : ROADMAP.filter((lesson) => lesson.level === roadmapLevelFilter)
  const solvedCount = visibleLessons.filter((lesson) =>
    roadmapSolved.has(lesson.id),
  ).length
  const pct = visibleLessons.length
    ? Math.round((solvedCount / visibleLessons.length) * 100)
    : 0
  roadmapProgressFill.style.width = pct + "%"
  roadmapProgressLabel.textContent = `${solvedCount} / ${visibleLessons.length} mastered`
}

function learningSupportFor(lesson) {
  return {
    hints: lesson.hints || [
      "Re-read the task and identify the exact input and expected result.",
      "Start with the smallest valid version before adding every edge case.",
      "Use the example above to check each piece of your answer.",
    ],
    solution: lesson.solution || lesson.starter,
    reflection:
      lesson.reflection ||
      "What part of this lesson would you explain differently to a beginner?",
  }
}

function loadRoadmapLesson(idx) {
  currentRoadmapIdx = idx
  roadmapRanOnce = false
  activeRoadmapPractical = null
  const lesson = ROADMAP[idx]
  const isDone = roadmapSolved.has(lesson.id)
  const firstFunctionsLesson = ROADMAP.findIndex(
    (item) => item.id === "functions",
  )
  // Before functions are taught, let beginners focus on the instructions in
  // the body of the code instead of introducing a function declaration early.
  roadmapFunctionWrapperHidden = idx < firstFunctionsLesson
  const starterForDisplay = roadmapFunctionWrapperHidden
    ? unwrapRoadmapFunction(lesson.starter)
    : lesson.starter
  const learningSupport = learningSupportFor(lesson)
  const solutionForDisplay = roadmapFunctionWrapperHidden
    ? unwrapRoadmapFunction(learningSupport.solution)
    : learningSupport.solution

  roadmapDetailEl.innerHTML = `
    <div class="roadmap-lesson-layout">
      <section class="roadmap-workspace rp-body">
        <div class="roadmap-workspace-head">
          <span>Practice workspace</span>
          <strong>${lesson.title}</strong>
        </div>
      <section class="roadmap-practice">
        <div class="roadmap-practice-head">
          <div>
            <span class="rp-section-label">YOUR TURN</span>
            <h3>Try it yourself</h3>
          </div>
          <span class="roadmap-practice-step">1. Write · 2. Test · 3. Learn</span>
        </div>
        <div class="roadmap-task-card">
          <span>YOUR GOAL</span>
          <p>${lesson.task}</p>
        </div>
      <div class="roadmap-learning-support">
        <div class="roadmap-help-label">Need a nudge? Hints are optional.</div>
        <div class="roadmap-learning-actions">
          <button class="roadmap-hint-btn" id="roadmapHintBtn" type="button">Show hint 1</button>
          <span id="roadmapHintProgress">Try first—hints appear one at a time.</span>
        </div>
        <div class="roadmap-hints" id="roadmapHints"></div>
        <details class="roadmap-solution" id="roadmapSolution">
          <summary>Reveal a solution only after trying</summary>
          <p>This is one working approach. Compare it to yours; more than one solution can be correct.</p>
          <pre><code id="roadmapSolutionCode"></code></pre>
          <button class="roadmap-use-solution" id="roadmapUseSolution" type="button">Use this solution in my editor</button>
        </details>
        <div class="roadmap-reflection"><b>Reflect:</b> ${learningSupport.reflection}</div>
      </div>
      </section>
      ${isDone ? '<div class="roadmap-complete-banner">✓ Mastered — practical examples are now unlocked below.</div>' : ""}
      ${isDone ? roadmapPracticalsMarkup(lesson.id) : ""}
      ${
        roadmapFunctionWrapperHidden
          ? ""
          : `
        <div class="roadmap-code-toolbar">
          <span>Function view: see the complete function.</span>
          <button class="roadmap-wrapper-toggle" id="roadmapWrapperToggle" type="button" aria-pressed="true">Hide function wrapper</button>
        </div>
      `
      }
      <div class="roadmap-editor-wrap">
        <div class="roadmap-gutter" id="roadmapGutter">1</div>
        <div class="roadmap-code-area">
          <pre id="roadmapHighlightLayer"></pre>
          <textarea id="roadmapCodeInput" spellcheck="false" tabindex="0" aria-label="JavaScript code editor">${starterForDisplay}</textarea>
        </div>
      </div>
      <div class="roadmap-actions">
        <button class="run-btn" id="roadmapRunBtn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          Run
        </button>
        <button class="reset-btn" id="roadmapResetBtn">Reset</button>
        <button class="roadmap-try-another-btn" id="roadmapTryAnotherBtn" type="button" hidden>Try another</button>
        <button class="roadmap-next-btn" id="roadmapNextBtn" type="button" ${isDone ? "" : "disabled"}>Next</button>
        <button class="roadmap-skip-btn" id="roadmapSkipBtn">Already know this — mark as mastered</button>
      </div>
      <div class="roadmap-terminal" id="roadmapTerminal">
        <div class="term-line term-dim">Write your answer above, then hit Run.</div>
      </div>
      </section>
      <aside class="roadmap-explanation">
        <div class="rp-head">
          <span class="rp-diff ${lesson.level}">${LEVEL_LABELS[lesson.level]}</span>
          <div class="rp-title">${lesson.title}</div>
        </div>
        <div class="roadmap-explanation-body">
          <div class="roadmap-explanation-label">CONCEPT</div>
          ${lesson.content}
        </div>
      </aside>
    </div>
  `

  // Lesson examples are real code, not plain instructions. Highlight them so
  // keywords, strings, values, and comments are easy to distinguish at a glance.
  roadmapDetailEl.querySelectorAll(".example b").forEach((exampleCode) => {
    // Convert authored <br> tags to real newlines before tokenizing. Without
    // this, textContent joins every line together into one unreadable snippet.
    exampleCode
      .querySelectorAll("br")
      .forEach((lineBreak) => lineBreak.replaceWith("\n"))
    exampleCode.innerHTML = highlightCode(exampleCode.textContent)
  })

  const roadmapCodeInputEl = document.getElementById("roadmapCodeInput")
  bindRoadmapPracticalActions()
  const hintsEl = document.getElementById("roadmapHints")
  const hintBtn = document.getElementById("roadmapHintBtn")
  const hintProgress = document.getElementById("roadmapHintProgress")
  let hintCount = 0
  hintBtn.addEventListener("click", () => {
    if (hintCount >= learningSupport.hints.length) return
    const hint = document.createElement("div")
    hint.className = "roadmap-hint"
    hint.innerHTML = `<b>Hint ${hintCount + 1}</b>${learningSupport.hints[hintCount]}`
    hintsEl.appendChild(hint)
    hintCount++
    hintBtn.textContent =
      hintCount < learningSupport.hints.length
        ? `Show hint ${hintCount + 1}`
        : "All hints shown"
    hintBtn.disabled = hintCount >= learningSupport.hints.length
    hintProgress.textContent = `${hintCount} of ${learningSupport.hints.length} hints shown`
  })
  document.getElementById("roadmapSolutionCode").innerHTML =
    highlightCode(solutionForDisplay)
  document
    .getElementById("roadmapUseSolution")
    .addEventListener("click", () => {
      roadmapCodeInputEl.value = solutionForDisplay
      updateRoadmapGutter()
      refreshRoadmapHighlight()
      roadmapCodeInputEl.focus()
    })
  updateRoadmapGutter()
  refreshRoadmapHighlight()

  document
    .getElementById("roadmapRunBtn")
    .addEventListener("click", runRoadmapCode)
  const wrapperToggle = document.getElementById("roadmapWrapperToggle")
  if (wrapperToggle)
    wrapperToggle.addEventListener("click", toggleRoadmapFunctionWrapper)
  document.getElementById("roadmapResetBtn").addEventListener("click", () => {
    roadmapCodeInputEl.value = activeRoadmapPractical
      ? `// ${activeRoadmapPractical.practical.prompt}\n\n`
      : roadmapFunctionWrapperHidden
        ? unwrapRoadmapFunction(lesson.starter)
        : lesson.starter
    updateRoadmapGutter()
    refreshRoadmapHighlight()
    roadmapRanOnce = false
    roadmapCodeInputEl.focus()
  })
  document.getElementById("roadmapTryAnotherBtn").addEventListener("click", () => {
    startRoadmapPractical(activeRoadmapPractical?.lessonId, activeRoadmapPractical?.index + 1)
  })
  document.getElementById("roadmapNextBtn").addEventListener("click", () => {
    if (!roadmapSolved.has(lesson.id)) return
    const nextIdx = currentRoadmapIdx + 1
    if (nextIdx < ROADMAP.length) loadRoadmapLesson(nextIdx)
  })
  document.getElementById("roadmapSkipBtn").addEventListener("click", () => {
    markRoadmapComplete(lesson.id)
  })

  roadmapCodeInputEl.addEventListener("input", () => {
    updateRoadmapGutter()
    refreshRoadmapHighlight()
    roadmapRanOnce = false
  })
  roadmapCodeInputEl.addEventListener("scroll", () => {
    document.getElementById("roadmapGutter").scrollTop =
      roadmapCodeInputEl.scrollTop
    const layer = document.getElementById("roadmapHighlightLayer")
    layer.scrollTop = roadmapCodeInputEl.scrollTop
    layer.scrollLeft = roadmapCodeInputEl.scrollLeft
  })
  roadmapCodeInputEl.addEventListener("keydown", (e) => {
    const val = roadmapCodeInputEl.value
    const start = roadmapCodeInputEl.selectionStart,
      end = roadmapCodeInputEl.selectionEnd
    const hasSelection = start !== end

    // Tab: indent
    if (e.key === "Tab") {
      e.preventDefault()
      roadmapCodeInputEl.value = val.slice(0, start) + "  " + val.slice(end)
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd =
        start + 2
      updateRoadmapGutter()
      refreshRoadmapHighlight()
      return
    }

    // Run shortcut — press once to run, press again (without editing) to advance
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault()
      if (roadmapRanOnce) {
        const nextIdx = currentRoadmapIdx + 1
        if (nextIdx >= ROADMAP.length) {
          return
        }
        if (isRoadmapLessonLocked(nextIdx)) {
          const termEl = document.getElementById("roadmapTerminal")
          if (termEl) {
            const div = document.createElement("div")
            div.className = "term-line term-dim"
            div.textContent =
              'Pass this lesson\'s checks (or click "Already know this") to unlock the next one.'
            termEl.appendChild(div)
          }
          return
        }
        loadRoadmapLesson(nextIdx)
      } else {
        runRoadmapCode()
      }
      return
    }

    // Auto-close bracket/quote pairs
    if (
      !hasSelection &&
      PAIRS[e.key] &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey
    ) {
      const nextChar = val[end]
      const isQuote = e.key === "'" || e.key === '"' || e.key === "`"
      if (isQuote && nextChar === e.key) {
        e.preventDefault()
        roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd =
          start + 1
        return
      }
      const prevChar = val[start - 1]
      if (isQuote && prevChar && /[A-Za-z0-9_]/.test(prevChar)) {
        return
      }
      e.preventDefault()
      const close = PAIRS[e.key]
      roadmapCodeInputEl.value =
        val.slice(0, start) + e.key + close + val.slice(end)
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd =
        start + 1
      updateRoadmapGutter()
      refreshRoadmapHighlight()
      return
    }

    // Typing a closing char that's already right there: skip over it
    if (!hasSelection && CLOSERS.has(e.key) && val[end] === e.key) {
      e.preventDefault()
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd =
        end + 1
      return
    }

    // Backspace on an empty pair removes both characters together
    if (e.key === "Backspace" && !hasSelection && start > 0) {
      const prevChar = val[start - 1]
      const nextChar = val[start]
      if (PAIRS[prevChar] === nextChar) {
        e.preventDefault()
        roadmapCodeInputEl.value =
          val.slice(0, start - 1) + val.slice(start + 1)
        roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd =
          start - 1
        updateRoadmapGutter()
        refreshRoadmapHighlight()
        return
      }
    }

    // Enter: auto-indent to match current line, add one level after an opening bracket
    if (e.key === "Enter" && !hasSelection) {
      e.preventDefault()
      const before = val.slice(0, start)
      const after = val.slice(start)
      const lineStart = before.lastIndexOf("\n") + 1
      const currentLine = before.slice(lineStart)
      const indent = getIndent(currentLine)
      const prevChar = before[start - 1]
      const nextChar = after[0]

      let insert = "\n" + indent
      let cursorOffset = insert.length

      if (prevChar === "{" || prevChar === "[" || prevChar === "(") {
        insert += "  "
        cursorOffset = insert.length
        if (CLOSERS.has(nextChar) && PAIRS[prevChar] === nextChar) {
          insert += "\n" + indent
        }
      }

      roadmapCodeInputEl.value = before + insert + after
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd =
        start + cursorOffset
      updateRoadmapGutter()
      refreshRoadmapHighlight()
      return
    }
  })

  buildRoadmapPath()
}

function updateRoadmapGutter() {
  const gutterEl = document.getElementById("roadmapGutter")
  const codeInput = document.getElementById("roadmapCodeInput")
  if (!gutterEl || !codeInput) return
  const lines = codeInput.value.split("\n").length
  let out = ""
  for (let i = 1; i <= lines; i++) out += i + "\n"
  gutterEl.textContent = out
}

function unwrapRoadmapFunction(source) {
  const opening = source.indexOf("{")
  const closing = source.lastIndexOf("}")
  if (opening < 0 || closing <= opening) return source
  const body = source.slice(opening + 1, closing).replace(/^\n|\n$/g, "")
  // The wrapper adds one two-space indentation level. Remove exactly that
  // level in beginner view so the code reads as standalone JavaScript.
  return body
    .split("\n")
    .map((line) => (line.startsWith("  ") ? line.slice(2) : line))
    .join("\n")
}

function wrapRoadmapFunction(body, lesson) {
  const opening = lesson.starter.indexOf("{")
  if (opening < 0) return body
  const signature = lesson.starter.slice(0, opening + 1)
  const nestedBody = body
    .split("\n")
    .map((line) => (line ? "  " + line : line))
    .join("\n")
  return `${signature}\n${nestedBody}\n}`
}

function isRoadmapFunctionWrapped(code, lesson) {
  return code.trimStart().startsWith(`function ${lesson.fnName}`)
}

function toggleRoadmapFunctionWrapper() {
  const lesson = ROADMAP[currentRoadmapIdx]
  const codeInput = document.getElementById("roadmapCodeInput")
  if (!lesson || !codeInput) return
  const isCurrentlyWrapped = isRoadmapFunctionWrapped(codeInput.value, lesson)
  roadmapFunctionWrapperHidden = isCurrentlyWrapped
  codeInput.value = roadmapFunctionWrapperHidden
    ? unwrapRoadmapFunction(codeInput.value)
    : wrapRoadmapFunction(codeInput.value, lesson)
  const toggle = document.getElementById("roadmapWrapperToggle")
  const toolbar = toggle && toggle.parentElement
  if (toggle) {
    toggle.textContent = roadmapFunctionWrapperHidden
      ? "Show function wrapper"
      : "Hide function wrapper"
    toggle.setAttribute("aria-pressed", String(!roadmapFunctionWrapperHidden))
  }
  if (toolbar)
    toolbar.firstElementChild.textContent = roadmapFunctionWrapperHidden
      ? "Beginner view: focus on the code inside."
      : "Function view: see the complete function."
  updateRoadmapGutter()
  refreshRoadmapHighlight()
  codeInput.focus()
}

function refreshRoadmapHighlight() {
  const codeInput = document.getElementById("roadmapCodeInput")
  const layer = document.getElementById("roadmapHighlightLayer")
  if (!codeInput || !layer) return
  let html = highlightCode(codeInput.value)
  if (codeInput.value.endsWith("\n")) html += " "
  layer.innerHTML = html
  layer.scrollTop = codeInput.scrollTop
  layer.scrollLeft = codeInput.scrollLeft
}

function markRoadmapComplete(lessonId) {
  const wasAlreadySolved = roadmapSolved.has(lessonId)
  roadmapSolved.add(lessonId)
  buildRoadmapPath()
  // If this is the lesson currently open, just show the "mastered" banner in
  // place — don't reload the lesson, which would wipe out the code the user
  // just wrote and reset the run-shortcut state.
  if (
    !wasAlreadySolved &&
    ROADMAP[currentRoadmapIdx] &&
    ROADMAP[currentRoadmapIdx].id === lessonId
  ) {
    showRoadmapMasteredBanner()
  }
  const nextButton = document.getElementById("roadmapNextBtn")
  if (
    nextButton &&
    ROADMAP[currentRoadmapIdx] &&
    ROADMAP[currentRoadmapIdx].id === lessonId
  ) {
    nextButton.disabled = false
  }
}

function showRoadmapMasteredBanner() {
  const bodyEl = roadmapDetailEl.querySelector(".rp-body")
  const editorWrap = bodyEl && bodyEl.querySelector(".roadmap-editor-wrap")
  if (
    !bodyEl ||
    !editorWrap ||
    bodyEl.querySelector(".roadmap-complete-banner")
  )
    return
  const banner = document.createElement("div")
  banner.className = "roadmap-complete-banner"
  banner.textContent = "✓ Mastered — practical examples are now unlocked below."
  bodyEl.insertBefore(banner, editorWrap)
  showRoadmapPracticals(ROADMAP[currentRoadmapIdx].id)
}

function showRoadmapPracticals(lessonId) {
  const bodyEl = roadmapDetailEl.querySelector(".roadmap-workspace")
  const editorWrap = bodyEl && bodyEl.querySelector(".roadmap-editor-wrap")
  if (
    !bodyEl ||
    !editorWrap ||
    bodyEl.querySelector(".roadmap-practical-library")
  )
    return
  const practicalMarkup = roadmapPracticalsMarkup(lessonId)
  if (editorWrap && practicalMarkup)
    editorWrap.insertAdjacentHTML("beforebegin", practicalMarkup)
  bindRoadmapPracticalActions()
}

function bindRoadmapPracticalActions() {
  roadmapDetailEl
    .querySelectorAll("[data-practical-start]")
    .forEach((button) => {
      if (button.dataset.bound) return
      button.dataset.bound = "true"
      button.addEventListener("click", () => {
        const [lessonId, index] = button.dataset.practicalStart.split(":")
        startRoadmapPractical(lessonId, Number(index))
      })
    })
}

function startRoadmapPractical(lessonId, index = 0) {
  const practicals = roadmapPracticalsFor(lessonId)
  if (!practicals.length) return
  const nextIndex = index >= practicals.length ? 0 : index
  const practical = practicals[nextIndex]
  activeRoadmapPractical = { lessonId, index: nextIndex, practical }
  const practiceSection = roadmapDetailEl.querySelector(".roadmap-practice")
  if (practiceSection) practiceSection.hidden = true
  const practicalLibrary = roadmapDetailEl.querySelector(".roadmap-practical-library")
  if (practicalLibrary) practicalLibrary.classList.add("is-practicing")
  roadmapDetailEl.querySelectorAll("[data-practical-card]").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.practicalCard === `${lessonId}:${nextIndex}`)
  })
  const editor = document.getElementById("roadmapCodeInput")
  if (editor) {
    editor.value = `// ${practical.prompt}\n\n`
    updateRoadmapGutter()
    refreshRoadmapHighlight()
    editor.focus()
  }
  const nextButton = document.getElementById("roadmapTryAnotherBtn")
  if (nextButton) nextButton.hidden = false
  const terminal = document.getElementById("roadmapTerminal")
  if (terminal) terminal.innerHTML = '<div class="term-line term-dim">Write your own solution, then hit Run to see its console output.</div>'
}

async function runRoadmapCode() {
  roadmapRanOnce = true
  const lesson = ROADMAP[currentRoadmapIdx]
  const visibleCode = document.getElementById("roadmapCodeInput").value
  if (activeRoadmapPractical) {
    runActiveRoadmapPractical(visibleCode)
    return
  }
  const code = isRoadmapFunctionWrapped(visibleCode, lesson)
    ? visibleCode
    : wrapRoadmapFunction(visibleCode, lesson)
  const termEl = document.getElementById("roadmapTerminal")
  termEl.innerHTML = ""

  const printRoadmapLine = (text, cls) => {
    const div = document.createElement("div")
    div.className = "term-line " + (cls || "")
    div.textContent = text
    termEl.appendChild(div)
  }
  const fmtRoadmapVal = (v) => {
    if (typeof v === "string") return JSON.stringify(v)
    if (Array.isArray(v)) return "[" + v.map(fmtRoadmapVal).join(", ") + "]"
    if (v && typeof v === "object") return JSON.stringify(v)
    return String(v)
  }

  let fn
  try {
    const wrapper = new Function(`${code}\nreturn ${lesson.fnName};`)
    fn = wrapper()
    if (typeof fn !== "function") {
      throw new Error(
        `Could not find a function named "${lesson.fnName}". Make sure your function keeps its original name.`,
      )
    }
  } catch (err) {
    printRoadmapLine("✗ Your code failed to run:", "term-fail")
    printRoadmapLine("  " + err.message, "term-fail")
    return
  }

  if (lesson.testMode === "custom") {
    try {
      const { ok, lines, consoleOutput } = await lesson.validate(fn)
      if (consoleOutput && consoleOutput.length) {
        printRoadmapLine("Console output:", "term-info")
        consoleOutput.forEach((line) =>
          printRoadmapLine("  " + line, "term-info"),
        )
        printRoadmapLine("Lesson check:", "term-dim")
      }
      lines.forEach((line) =>
        printRoadmapLine(
          line,
          line.startsWith("✓") ? "term-pass" : "term-fail",
        ),
      )
      if (ok) {
        printRoadmapLine("All checks passed. Nice work.", "term-pass")
        markRoadmapComplete(lesson.id)
      }
    } catch (err) {
      printRoadmapLine(
        "✗ Your code threw an error: " + err.message,
        "term-fail",
      )
    }
    return
  }

  let passCount = 0
  for (let i = 0; i < lesson.tests.length; i++) {
    const [args, expected] = lesson.tests[i]
    const callStr = `${lesson.fnName}(${args.map(fmtRoadmapVal).join(", ")})`
    try {
      const actual = await fn(...args)
      const ok = JSON.stringify(actual) === JSON.stringify(expected)
      if (ok) {
        passCount++
        printRoadmapLine(
          `✓ Test ${i + 1}  ${callStr} → ${fmtRoadmapVal(actual)}`,
          "term-pass",
        )
      } else {
        printRoadmapLine(`✗ Test ${i + 1}  ${callStr}`, "term-fail")
        printRoadmapLine(
          `    expected ${fmtRoadmapVal(expected)}, got ${fmtRoadmapVal(actual)}`,
          "term-fail",
        )
      }
    } catch (err) {
      printRoadmapLine(
        `✗ Test ${i + 1}  ${callStr}  threw an error: ${err.message}`,
        "term-fail",
      )
    }
  }

  if (passCount === lesson.tests.length) {
    printRoadmapLine(
      `All ${passCount}/${lesson.tests.length} checks passed. Nice work.`,
      "term-pass",
    )
    markRoadmapComplete(lesson.id)
  } else {
    printRoadmapLine(
      `${passCount}/${lesson.tests.length} checks passed. Keep going.`,
      "term-info",
    )
  }
}

function runActiveRoadmapPractical(code) {
  const terminal = document.getElementById("roadmapTerminal")
  terminal.innerHTML = ""
  const output = []
  const originalLog = console.log
  console.log = (...values) => output.push(values.join(" "))
  try {
    new Function(code)()
    if (output.length) {
      terminal.innerHTML = '<div class="term-line term-info">Console output:</div>'
      output.forEach((line) => {
        const result = document.createElement("div")
        result.className = "term-line term-pass"
        result.textContent = "  " + line
        terminal.appendChild(result)
      })
    } else {
      terminal.innerHTML = '<div class="term-line term-dim">Your code ran. Add console.log(...) if you want to inspect a result here.</div>'
    }
  } catch (error) {
    terminal.innerHTML = '<div class="term-line term-fail">✗ Your practical code failed to run:</div>'
    const result = document.createElement("div")
    result.className = "term-line term-fail"
    result.textContent = "  " + error.message
    terminal.appendChild(result)
  } finally {
    console.log = originalLog
  }
}

problemsBtn.addEventListener("click", () => {
  mainEl.classList.remove("view-roadmap")
  problemsBtn.classList.add("active")
  roadmapBtn.classList.remove("active")
})
roadmapBtn.addEventListener("click", () => {
  mainEl.classList.add("view-roadmap")
  roadmapBtn.classList.add("active")
  problemsBtn.classList.remove("active")
  if (!roadmapDetailEl.innerHTML.trim()) {
    loadRoadmapLesson(0)
  }
})

roadmapLevelSelect.addEventListener("change", () => {
  roadmapLevelFilter = roadmapLevelSelect.value
  const currentLesson = ROADMAP[currentRoadmapIdx]
  if (
    roadmapLevelFilter !== "all" &&
    currentLesson &&
    currentLesson.level !== roadmapLevelFilter
  ) {
    const firstMatch = ROADMAP.findIndex(
      (lesson) => lesson.level === roadmapLevelFilter,
    )
    if (firstMatch >= 0) currentRoadmapIdx = firstMatch
  }
  buildRoadmapPath()
  if (ROADMAP[currentRoadmapIdx]) loadRoadmapLesson(currentRoadmapIdx)
})

// Tab should not walk through the lesson controls. It jumps directly to the
// editor, where Tab continues to indent code as usual.
document.addEventListener("keydown", (event) => {
  if (!mainEl.classList.contains("view-roadmap")) return
  const editor = document.getElementById("roadmapCodeInput")
  const isEditor = event.target === editor

  if (event.key === "Tab" && !isEditor) {
    event.preventDefault()
    if (editor) editor.focus()
  }
})

/* ============ LEVELS (course map) ============ */
// Internal difficulty keys stay 'easy'/'medium'/'hard' (used by data + CSS),
// but the course is presented to the user as Beginner / Advanced / Expert.
const LEVEL_LABELS = { easy: "BEGINNER", medium: "ADVANCED", hard: "EXPERT" }
let levelFilter = "all" // 'all' | 'easy' | 'medium' | 'hard'

/* ============ STATE ============ */
let solvedSet = new Set()
let currentIdx = 0
let terminalCollapsed = false

const treeEl = document.getElementById("tree")
const codeInput = document.getElementById("codeInput")
const highlightLayer = document.getElementById("highlightLayer")
const gutterEl = document.getElementById("gutter")
const rpDiff = document.getElementById("rpDiff")
const rpTitle = document.getElementById("rpTitle")
const rpBody = document.getElementById("rpBody")
const tabName = document.getElementById("tabName")
const currentProbName = document.getElementById("currentProbName")
const terminalBody = document.getElementById("terminalBody")
const terminalEl = document.getElementById("terminal")
const progressFill = document.getElementById("progressFill")
const progressLabel = document.getElementById("progressLabel")
const sbStatus = document.getElementById("sbStatus")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const resizeHandle = document.getElementById("resizeHandle")
const levelSelect = document.getElementById("levelSelect")

function buildTree() {
  treeEl.innerHTML = ""
  let groups = [
    ["easy", LEVEL_LABELS.easy],
    ["medium", LEVEL_LABELS.medium],
    ["hard", LEVEL_LABELS.hard],
  ]
  if (levelFilter !== "all") {
    groups = groups.filter(([key]) => key === levelFilter)
  }
  groups.forEach(([key, label]) => {
    const glabel = document.createElement("div")
    glabel.className = "group-label " + key
    glabel.innerHTML = `<span class="swatch ${key}"></span>${label}`
    treeEl.appendChild(glabel)
    PROBLEMS.forEach((p, idx) => {
      if (p.difficulty !== key) return
      const item = document.createElement("div")
      item.className =
        "prob-item" +
        (idx === currentIdx ? " active" : "") +
        (solvedSet.has(p.id) ? " done" : "")
      item.dataset.idx = idx
      item.innerHTML = `<span class="check">${solvedSet.has(p.id) ? '<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}</span><span class="tname">${p.name}.js</span>`
      item.addEventListener("click", () => loadProblem(idx))
      treeEl.appendChild(item)
    })
  })
  updateProgress()
}

function updateProgress() {
  const pct = Math.round((solvedSet.size / PROBLEMS.length) * 100)
  progressFill.style.width = pct + "%"
  progressLabel.textContent = `${solvedSet.size} / ${PROBLEMS.length} solved`
}

function refreshHighlight() {
  let html = highlightCode(codeInput.value)
  // preserve trailing newline rendering
  if (codeInput.value.endsWith("\n")) html += " "
  highlightLayer.innerHTML = html
  highlightLayer.scrollTop = codeInput.scrollTop
  highlightLayer.scrollLeft = codeInput.scrollLeft
}

function updateGutter() {
  const lines = codeInput.value.split("\n").length
  let out = ""
  for (let i = 1; i <= lines; i++) out += i + "\n"
  gutterEl.textContent = out
}

function loadProblem(idx) {
  currentIdx = idx
  const p = PROBLEMS[idx]

  codeInput.value = p.signature
  updateGutter()
  refreshHighlight()
  tabName.textContent = p.name + ".js"
  currentProbName.textContent = p.name + ".js"
  rpDiff.textContent = LEVEL_LABELS[p.difficulty] || p.difficulty.toUpperCase()
  rpDiff.className = "rp-diff " + p.difficulty
  rpTitle.textContent = p.name

  let examplesHtml = p.examples
    .map(([call, ret]) => `<div class="example"><b>${call}</b> → ${ret}</div>`)
    .join("")
  rpBody.innerHTML = `
    ${p.desc}
    <div class="rp-section-label">EXAMPLES</div>
    ${examplesHtml}
    <div class="rp-section-label">STUCK?</div>
    <div class="hint-box" id="hintBox">
      <div class="hint-label">▸ Reveal hint</div>
      <div class="hint-content">${p.hint}</div>
    </div>
  `
  document.getElementById("hintBox").addEventListener("click", function () {
    this.classList.toggle("open")
    this.querySelector(".hint-label").textContent = this.classList.contains(
      "open",
    )
      ? "▾ Hide hint"
      : "▸ Reveal hint"
  })

  terminalBody.innerHTML = `<div class="term-line term-dim">Write your solution, then hit Run Tests (or ⌘/Ctrl + Enter).</div>`
  sbStatus.textContent = "●  ready"
  buildTree()
  updateNavButtons()
  codeInput.focus()
}

function updateNavButtons() {
  prevBtn.disabled = currentIdx === 0
  nextBtn.disabled = currentIdx === PROBLEMS.length - 1
}

function printLine(text, cls) {
  const div = document.createElement("div")
  div.className = "term-line " + (cls || "")
  div.textContent = text
  terminalBody.appendChild(div)
  terminalBody.scrollTop = terminalBody.scrollHeight
}

function fmtVal(v) {
  if (typeof v === "string") return `'${v}'`
  if (Array.isArray(v)) return "[" + v.map(fmtVal).join(", ") + "]"
  return String(v)
}

function runTests() {
  const p = PROBLEMS[currentIdx]
  terminalBody.innerHTML = ""
  printLine(`$ node ${p.name}.test.js`, "term-prompt")
  printLine("", "")

  let fn
  try {
    const wrapper = new Function(`${codeInput.value}\nreturn ${p.name};`)
    fn = wrapper()
    if (typeof fn !== "function") {
      throw new Error(
        `Could not find a function named "${p.name}". Make sure your function keeps its original name.`,
      )
    }
  } catch (err) {
    printLine("✗ Your code failed to run:", "term-fail")
    printLine("  " + err.message, "term-fail")
    sbStatus.textContent = "●  error"
    return
  }

  let passCount = 0
  p.tests.forEach((t, i) => {
    const [args, expected] = t
    const callStr = `${p.name}(${args.map(fmtVal).join(", ")})`
    try {
      const actual = fn(...args)
      const ok = JSON.stringify(actual) === JSON.stringify(expected)
      if (ok) {
        passCount++
        printLine(
          `✓ Test ${i + 1}  ${callStr} → ${fmtVal(actual)}`,
          "term-pass",
        )
      } else {
        printLine(`✗ Test ${i + 1}  ${callStr}`, "term-fail")
        printLine(
          `    expected ${fmtVal(expected)}, got ${fmtVal(actual)}`,
          "term-fail",
        )
      }
    } catch (err) {
      printLine(
        `✗ Test ${i + 1}  ${callStr}  threw an error: ${err.message}`,
        "term-fail",
      )
    }
  })

  printLine("", "")
  printLine("─".repeat(38), "term-divider")
  if (passCount === p.tests.length) {
    printLine(
      `All ${passCount}/${p.tests.length} tests passed. Nice work.`,
      "term-pass",
    )
    solvedSet.add(p.id)
    sbStatus.textContent = "●  passed"
    buildTree()
  } else {
    printLine(
      `${passCount}/${p.tests.length} tests passed. Keep going.`,
      "term-info",
    )
    sbStatus.textContent = `●  ${p.tests.length - passCount} failing`
  }
}

codeInput.addEventListener("input", () => {
  updateGutter()
  refreshHighlight()
})
codeInput.addEventListener("scroll", () => {
  gutterEl.scrollTop = codeInput.scrollTop
  highlightLayer.scrollTop = codeInput.scrollTop
  highlightLayer.scrollLeft = codeInput.scrollLeft
})
codeInput.addEventListener("keydown", (e) => {
  const val = codeInput.value
  const start = codeInput.selectionStart,
    end = codeInput.selectionEnd
  const hasSelection = start !== end

  // Tab: indent (or indent selection block)
  if (e.key === "Tab") {
    e.preventDefault()
    codeInput.value = val.slice(0, start) + "  " + val.slice(end)
    codeInput.selectionStart = codeInput.selectionEnd = start + 2
    updateGutter()
    refreshHighlight()
    return
  }

  // Run shortcut
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault()
    runTests()
    return
  }

  // Auto-close bracket/quote pairs
  if (!hasSelection && PAIRS[e.key] && !e.metaKey && !e.ctrlKey && !e.altKey) {
    // For quotes: if the char right after cursor is the same quote, just move past it
    // (typing a closing quote yourself) instead of inserting a new pair.
    const nextChar = val[end]
    const isQuote = e.key === "'" || e.key === '"' || e.key === "`"
    if (isQuote && nextChar === e.key) {
      e.preventDefault()
      codeInput.selectionStart = codeInput.selectionEnd = start + 1
      return
    }
    // Don't auto-pair a quote if we're immediately after a letter/number (likely an apostrophe in a word)
    const prevChar = val[start - 1]
    if (isQuote && prevChar && /[A-Za-z0-9_]/.test(prevChar)) {
      // let default behavior insert just the quote
      return
    }
    e.preventDefault()
    const close = PAIRS[e.key]
    codeInput.value = val.slice(0, start) + e.key + close + val.slice(end)
    codeInput.selectionStart = codeInput.selectionEnd = start + 1
    updateGutter()
    refreshHighlight()
    return
  }

  // Typing a closing char that's already right there: skip over it instead of duplicating
  if (!hasSelection && CLOSERS.has(e.key) && val[end] === e.key) {
    e.preventDefault()
    codeInput.selectionStart = codeInput.selectionEnd = end + 1
    return
  }

  // Backspace on an empty pair (e.g. "(|)") removes both characters together
  if (e.key === "Backspace" && !hasSelection && start > 0) {
    const prevChar = val[start - 1]
    const nextChar = val[start]
    if (PAIRS[prevChar] === nextChar) {
      e.preventDefault()
      codeInput.value = val.slice(0, start - 1) + val.slice(start + 1)
      codeInput.selectionStart = codeInput.selectionEnd = start - 1
      updateGutter()
      refreshHighlight()
      return
    }
  }

  // Enter: auto-indent to match current line, add one level after an opening bracket
  if (e.key === "Enter" && !hasSelection) {
    e.preventDefault()
    const before = val.slice(0, start)
    const after = val.slice(start)
    const lineStart = before.lastIndexOf("\n") + 1
    const currentLine = before.slice(lineStart)
    const indent = getIndent(currentLine)
    const prevChar = before[start - 1]
    const nextChar = after[0]

    let insert = "\n" + indent
    let cursorOffset = insert.length

    if (prevChar === "{" || prevChar === "[" || prevChar === "(") {
      insert += "  "
      cursorOffset = insert.length
      // If the very next char closes this bracket, push it to its own dedented line
      if (CLOSERS.has(nextChar) && PAIRS[prevChar] === nextChar) {
        insert += "\n" + indent
      }
    }

    codeInput.value = before + insert + after
    codeInput.selectionStart = codeInput.selectionEnd = start + cursorOffset
    updateGutter()
    refreshHighlight()
    return
  }
})

document.getElementById("runBtn").addEventListener("click", runTests)
document.getElementById("resetBtn").addEventListener("click", () => {
  codeInput.value = PROBLEMS[currentIdx].signature
  updateGutter()
  refreshHighlight()
  codeInput.focus()
})
document.getElementById("terminalToggle").addEventListener("click", () => {
  terminalCollapsed = !terminalCollapsed
  terminalEl.classList.toggle("collapsed", terminalCollapsed)
})

/* ---- Prev / Next navigation ---- */
prevBtn.addEventListener("click", () => {
  if (currentIdx > 0) loadProblem(currentIdx - 1)
})
nextBtn.addEventListener("click", () => {
  if (currentIdx < PROBLEMS.length - 1) loadProblem(currentIdx + 1)
})

/* ---- Terminal resize (drag up/down) ---- */
let isResizingTerminal = false,
  resizeStartY = 0,
  resizeStartHeight = 0
resizeHandle.addEventListener("mousedown", (e) => {
  if (terminalCollapsed) return
  isResizingTerminal = true
  resizeStartY = e.clientY
  resizeStartHeight = terminalEl.getBoundingClientRect().height
  terminalEl.classList.add("resizing")
  document.body.style.userSelect = "none"
  e.preventDefault()
})
window.addEventListener("mousemove", (e) => {
  if (!isResizingTerminal) return
  const delta = resizeStartY - e.clientY // dragging up = taller terminal
  const maxHeight = Math.round(window.innerHeight * 0.75)
  const newHeight = Math.max(
    120,
    Math.min(maxHeight, resizeStartHeight + delta),
  )
  terminalEl.style.height = newHeight + "px"
})
window.addEventListener("mouseup", () => {
  if (isResizingTerminal) {
    isResizingTerminal = false
    terminalEl.classList.remove("resizing")
    document.body.style.userSelect = ""
  }
})

levelSelect.addEventListener("change", () => {
  levelFilter = levelSelect.value
  buildTree()
  // If the current problem got filtered out of view, jump to the first
  // visible one in the newly selected level so the sidebar and editor agree.
  if (
    levelFilter !== "all" &&
    PROBLEMS[currentIdx].difficulty !== levelFilter
  ) {
    const firstMatch = PROBLEMS.findIndex((p) => p.difficulty === levelFilter)
    if (firstMatch !== -1) loadProblem(firstMatch)
  }
})

buildTree()
loadProblem(0)
// The roadmap is the home screen. Problems remain one click away in the
// activity bar, but reloading always brings learners back to their course.
mainEl.classList.add("view-roadmap")
roadmapBtn.classList.add("active")
problemsBtn.classList.remove("active")
loadRoadmapLesson(0)
