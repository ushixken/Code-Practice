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
    sourceRequirements: [
      {
        test: (code) => /console\.log\s*\(\s*["']Hello, JavaScript!["']\s*\)/.test(code),
        message: "Use the exact console.log statement named in the goal.",
      },
    ],
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
    sourceRequirements: [
      {
        test: (code) => /console\.log\s*\(\s*["']I can use the console!["']\s*\)/.test(code),
        message: "Use the exact console.log statement named in the goal.",
      },
    ],
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
    title: "Change a Value with let",
    summary: "Use let when a value needs to update",
    content: `
      <p>Use <code>let</code> when you expect a value to change. After creating it, you can give it a new value later.</p>
      <div class="example"><b>let score = 0;<br>score = score + 10;<br>console.log(score);</b></div>
      <p>Use <code>const</code> by default. Choose <code>let</code> only when your program needs to update the value.</p>
      <div class="roadmap-quote-guide"><span>WATCH OUT</span><p><code>const</code> prevents assigning a new value to the name. It does not freeze an array or object: <code>const items = []</code> can still use <code>items.push("pen")</code>.</p></div>
    `,
    fnName: "firstVariable",
    starter:
      "function firstVariable() {\n  // Create score with let, set it to 0,\n  // add 10, then print score.\n\n}",
    solution:
      "function firstVariable() {\n  let score = 0;\n  score = score + 10;\n  console.log(score);\n}",
    task: "Create <code>score</code> with <code>let</code> and set it to <code>0</code>. Add <code>10</code> to it, then print <code>score</code>.",
    sourceRequirements: [
      {
        test: (code) => /\blet\s+score\s*=\s*0\b/.test(code),
        message: "Create the exact variable named in the goal with its requested starting value.",
      },
      {
        test: (code) => /\bscore\s*=\s*score\s*\+\s*10\b/.test(code),
        message: "Update the requested variable with the amount named in the goal.",
      },
    ],
    hints: [
      "Use let because score will change.",
      "Use score = score + 10 to update the value.",
      "Use console.log(score) after updating it.",
    ],
    reflection:
      "When would you choose let instead of const?",
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
      const ok = output.includes("10")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: update score and print 10 with console.log(score).`,
        ],
      }
    },
  },
  {
    id: "variables",
    level: "easy",
    title: "Store a Value with const",
    summary: "Give one piece of text a clear name",
    content: `
      <p>A <b>variable</b> is a name for a value. Start with <code>const</code> when you want the value to stay the same.</p>
      <div class="example"><b>const language = "JavaScript";<br>console.log(language);</b></div>
      <p>The name <code>language</code> helps a reader understand what the text means. You will learn <code>let</code> when you need a value to change.</p>
      <div class="roadmap-quote-guide"><span>WATCH OUT</span><p><code>const</code> means the variable name cannot be reassigned. If the value needs to change later, choose <code>let</code> instead.</p></div>
    `,
    fnName: "declareAge",
    starter:
      "function declareAge() {\n  // Create a variable named user using const,\n  // set it to \"Ada\", then print it.\n\n}",
    solution:
      "function declareAge() {\n  const user = \"Ada\";\n  console.log(user);\n}",
    task: "Declare a variable called <code>user</code> with <code>const</code>, set it to <code>\"Ada\"</code>, then print it with <code>console.log(user)</code>.",
    sourceRequirements: [
      {
        test: (code) => /\bconst\s+user\s*=\s*["']Ada["']/.test(code),
        message: "Use the requested constant name and value from the goal.",
      },
      {
        test: (code) => /console\.log\s*\(\s*user\s*\)/.test(code),
        message: "Print the exact variable named in the goal.",
      },
    ],
    hints: [
      "Start with const because this text will not change in this exercise.",
      'Create it with: const user = "Ada";',
      "On the next line, use console.log(user) to print its value.",
    ],
    reflection: "What does the name user help you remember about the text \"Ada\"?",
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
          `${ok ? "✓" : "✗"} Lesson check: print the value stored in user with console.log(user).`,
        ],
      }
    },
  },
  {
    id: "dataTypes",
    level: "easy",
    title: "Values and Types",
    summary: "Text, numbers, true/false, and typeof",
    content: `
      <p>For now, learn three common kinds of value: <b>string</b> for text (<code>"hi"</code>), <b>number</b> for quantities (<code>42</code>), and <b>boolean</b> for true/false answers.</p>
      <p>The <code>typeof</code> operator tells you what type a value is at runtime: <code>typeof 5</code> is <code>"number"</code>, <code>typeof "hi"</code> is <code>"string"</code>.</p>
      <p>Use a <b>template literal</b> when text needs a value inside it: backticks wrap the text and <code>${"${user}"}</code> inserts a variable. Example: <code>&#96;Hello, ${"${user}"}!&#96;</code>.</p>
      <div class="roadmap-quote-guide">
        <span>QUOTES CHANGE THE MEANING</span>
        <p>Without quotes, JavaScript looks for a value or variable. With quotes, JavaScript treats the characters as text exactly as written.</p>
        <div class="example"><b>const user = "Ada";<br><br>console.log(user);<br>// Ada — use the value stored in user<br><br>console.log("user");<br>// user — print these four letters as text<br><br>console.log(5);<br>// 5 — a number<br><br>console.log("10");<br>// 10 — text that only looks like a number</b></div>
        <p><b>Important:</b> <code>10</code> and <code>"10"</code> can look similar in the console, but JavaScript handles them differently. You can do math with <code>10</code>; <code>"10"</code> is a string.</p>
      </div>
      <p>You will meet more complex values, such as arrays and objects, later in the roadmap.</p>
    `,
    fnName: "describeType",
    starter:
      "function describeType() {\n  // Create answer with the value 42.\n  // Use a template literal to print: Type: number\n\n}",
    solution:
      "function describeType() {\n  const answer = 42;\n  console.log(`Type: ${typeof answer}`);\n}",
    task: "Create <code>const answer = 42</code>, then use a template literal with <code>typeof answer</code> to print <code>Type: number</code>.",
    sourceRequirements: [
      {
        test: (code) => /\bconst\s+answer\s*=\s*42\b/.test(code),
        message: "Create the exact constant named in the goal.",
      },
      {
        test: (code) => /console\.log\s*\(\s*`Type:\s*\$\{\s*typeof\s*(?:\(\s*answer\s*\)|\s+answer)\s*\}`\s*\)/.test(code),
        message: "Use a template literal to inspect the exact variable named in the goal.",
      },
    ],
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
      const ok = output.includes("Type: number")
      return {
        ok,
        consoleOutput: output,
        lines: [
          `${ok ? "✓" : "✗"} Lesson check: the template literal should print "Type: number".`,
        ],
      }
    },
  },
  {
    id: "operators",
    level: "easy",
    title: "Operators",
    summary: "Use math operators to calculate values",
    content: `
      <p>Operators let JavaScript do math. Start with <code>+</code> to add, <code>-</code> to subtract, <code>*</code> to multiply, and <code>/</code> to divide.</p>
      <div class="example"><b>const total = 8 + 4;<br>console.log(total);</b><br>→ 12</div>
      <p>You will learn comparisons such as <code>===</code> and <code>>=</code> in the next step, when they help programs make decisions.</p>
    `,
    fnName: "isAdult",
    starter:
      "function isAdult() {\n  // Compare 21 with 18, then print the result.\n\n}",
    solution: "function isAdult() {\n  console.log(21 >= 18);\n}",
    task: "Use <code>console.log(21 >= 18)</code> to print the result of a comparison.",
    sourceRequirements: [
      {
        test: (code) => /console\.log\s*\(\s*21\s*>=\s*18\s*\)/.test(code),
        message: "Use the exact comparison named in the goal.",
      },
    ],
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
      <p>A comparison asks a true/false question. Use <code>===</code> to check whether two values are the same, and <code>>=</code> to check whether one number is at least another.</p>
      <p><code>if</code>/<code>else</code> uses that true/false answer to choose a path. Chain <code>else if</code> for multiple choices.</p>
      <p>For one short choice, use a <b>ternary</b>: <code>score >= 10 ? "Pass" : "Try again"</code>. Combine conditions with <code>&amp;&amp;</code> (both must be true), <code>||</code> (either may be true), and <code>??</code> (use a fallback only for <code>null</code> or <code>undefined</code>).</p>
      <p>Use <code>switch</code> when one value has several named cases, such as a day or status. Always include a <code>default</code> path for values you did not expect.</p>
      <div class="example"><b>if (score >= 10) {<br>&nbsp;&nbsp;console.log("High score");<br>} else {<br>&nbsp;&nbsp;console.log("Keep practicing");<br>}</b></div>
    `,
    fnName: "trafficAction",
    starter:
      'function trafficAction() {\n  // Create light with the value "green".\n  // Use if as a guard, then use a ternary to choose the action.\n\n}',
    solution:
      'function trafficAction() {\n  const light = "green";\n  if (light === "green") {\n    const action = light === "green" ? "go" : "stop";\n    console.log(action);\n  }\n}',
    task: 'Create <code>const light = "green"</code>. Use an <code>if</code> statement as the green-light guard. Inside it, use a ternary to choose <code>"go"</code> or <code>"stop"</code>, then print the chosen action.',
    sourceRequirements: [
      {
        test: (code) => /\bconst\s+light\s*=\s*["']green["']/.test(code),
        message: "Create the exact constant named in the goal.",
      },
      {
        test: (code) => /\bif\s*\(\s*light\s*===\s*["']green["']\s*\)/.test(code),
        message: "Check the exact variable and value named in the goal.",
      },
      {
        test: (code) => /\?/.test(code) && /["']go["']/.test(code) && /["']stop["']/.test(code),
        message: "Use a ternary to choose between the two requested actions.",
      },
    ],
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
      <div class="example"><b>function add(a, b) {<br>&nbsp;&nbsp;return a + b;<br>}<br><br>console.log(add(2, 3));</b><br>→ 5</div>
      <p>Call a function with parentheses, such as <code>add(2, 3)</code>. You will meet shorter function syntax later, after this form feels comfortable.</p>
    `,
    fnName: "greet",
    starter: 'function greet(name) {\n  // Return "Hello, <name>!"\n\n}',
    task: "Return the string <code>'Hello, '</code> followed by <code>name</code> and an exclamation mark.",
    testMode: "io",
    tests: [
      [["Ada"], "Hello, Ada!"],
      [["Bob"], "Hello, Bob!"],
      [[""], "Hello, !"],
      [["Ada-Lynn"], "Hello, Ada-Lynn!"],
    ],
  },
  {
    id: "arrowFunctions",
    level: "medium",
    title: "Arrow Functions",
    summary: "A shorter way to write a function you already understand",
    content: `
      <p>An <b>arrow function</b> is shorter syntax for a function. It still accepts input and can give a result back; only the writing style changes.</p>
      <div class="example"><b>const double = number =&gt; {<br>&nbsp;&nbsp;return number * 2;<br>};<br><br>console.log(double(4));</b><br>→ 8</div>
      <p>Learn the regular <code>function</code> form first. Then arrows become a shortcut, not a new mystery.</p>
    `,
    fnName: "triple",
    standalone: true,
    requiresArrow: true,
    starter:
      "const triple = (number) => {\n  // Return number multiplied by 3.\n\n};",
    solution: "const triple = (number) => {\n  return number * 3;\n};",
    task: "Create an arrow function named <code>triple</code> that returns <code>number * 3</code>.",
    hints: [
      "Start with: const triple = (number) => { ... };",
      "Use return because this arrow function must send a result back.",
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
      'function lastItem(arr) {\n  // arr can hold multiple values, for example:\n  // ["notebook", "pen", "eraser"]\n  // Return the last value in arr.\n\n}',
    task: "Return the last value from the multi-item array <code>arr</code>.",
    testMode: "io",
    tests: [
      [[[1, 2, 3]], 3],
      [[["a", "b"]], "b"],
      [[["red", "blue", "green", "yellow"]], "yellow"],
      [[["only"]], "only"],
      [[[]], undefined],
    ],
  },
  {
    id: "loops",
    level: "medium",
    title: "Loops",
    summary: "Repeating work with for, while, and for...of",
    content: `
      <p><b>Use a loop when the same job must happen more than once.</b> Instead of writing <code>console.log()</code> for every item yourself, you describe the rule once and JavaScript repeats it for you.</p>
      <p>Read a <code>for</code> loop from left to right in three small parts: <code>let i = 0</code> creates a counter, <code>i &lt; items.length</code> asks whether another item exists, and <code>i++</code> moves the counter forward after each turn. The code inside <code>{ }</code> runs only while the middle question is true.</p>
      <div class="example"><b>const items = ["pen", "book", "bag"];<br><br>for (let i = 0; i &lt; items.length; i++) {<br>&nbsp;&nbsp;console.log(items[i]);<br>}</b><br>→ pen<br>→ book<br>→ bag</div>
      <p>On the first turn, <code>i</code> is <code>0</code>, so <code>items[i]</code> means <code>items[0]</code>: <code>"pen"</code>. Then <code>i++</code> makes it <code>1</code>. The loop stops before <code>i</code> reaches <code>items.length</code>, which prevents asking for an item that does not exist.</p>
      <p>When you only need each value—not its position—use <code>for...of</code>. It reads like English: <code>for (const item of items)</code>. Start with this form for lists; use the numbered <code>for</code> loop when you also need the index.</p>
      <div class="example"><b>for (const item of items) {<br>&nbsp;&nbsp;console.log(item);<br>}</b></div>
      <p><b>Common mistake:</b> forgetting to change a <code>while</code> loop's counter can make it run forever. With a <code>for</code> loop, the update is visible in one place, which makes it a safer starting point.</p>
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
      [[[-4, -1, -5]], -10],
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
      <div class="example"><b>for (let i = 1; i &lt;= 4; i++) {<br>&nbsp;&nbsp;if (i % 2 === 0) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("even");<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("odd");<br>&nbsp;&nbsp;}<br>}</b></div>
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
    id: "foundationRecap",
    level: "easy",
    title: "Foundation Recap: Boxes, Recipes, Decisions",
    summary: "Connect the ideas you have used so far",
    content: `
      <p>You have already used the three building blocks behind most small programs. This is a pause to connect them before you add larger kinds of data.</p>
      <div class="roadmap-recap-grid">
        <section><b>LABELED BOX</b><p>A variable keeps one value under a useful name, such as <code>score</code>.</p></section>
        <section><b>RECIPE</b><p>A function groups steps behind a name, then returns a result when you call it.</p></section>
        <section><b>DECISION</b><p>A condition chooses which step to take after JavaScript answers a true-or-false question.</p></section>
      </div>
      <p>Arrays are ordered lists, and loops repeat a rule across those lists. FizzBuzz combined a list, a loop, and decisions—the same habit you will use in larger programs.</p>
      <div class="example"><b>const topic = "loops";<br>const reminder = &#96;Practice: ${"${topic}"}&#96;;<br>console.log(reminder);</b><br>→ Practice: loops</div>
    `,
    fnName: "makeReminder",
    starter: "function makeReminder(topic) {\n  // Store the word Practice in a constant.\n  // Return a template-literal reminder for topic.\n\n}",
    task: "Use a labeled constant and a template literal to return <code>Practice: </code> followed by <code>topic</code>.",
    testMode: "io",
    tests: [
      [["loops"], "Practice: loops"],
      [["arrays"], "Practice: arrays"],
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
    hints: ["The person object already has two labeled values.", "Read each value with dot notation.", "Return person.first + \" \" + person.last."],
    testMode: "io",
    tests: [
      [[{ first: "Ada", last: "Lovelace" }], "Ada Lovelace"],
      [[{ first: "Grace", last: "Hopper" }], "Grace Hopper"],
      [[{ first: "A", last: "B" }], "A B"],
      [[{ first: "", last: "" }], " "],
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
    hints: ["The message belongs inside the function body.", "Create it before returning it.", "Use const message = \"Welcome!\"; then return message."],
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
      <div class="example"><b>function makePrefix(prefix) {<br>&nbsp;&nbsp;return text =&gt; prefix + text;<br>}<br><br>const warn = makePrefix("Warning: ");<br>console.log(warn("Low battery"));</b><br>→ Warning: Low battery</div>
    `,
    fnName: "multiplyBy",
    starter:
      "function multiplyBy(factor) {\n  // Return a function that takes x\n  // and returns x * factor.\n\n}",
    task: "Return a new function that multiplies its argument by <code>factor</code>.",
    reflection: "What value does the returned function remember after multiplyBy has finished?",
    testMode: "custom",
    validate: async (fn) => {
      const lines = []
      const cases = [[3, 5, 15], [3, 0, 0], [3, -2, -6], [-2, 4, -8], [0, 9, 0]]
      let allOk = true
      for (const [factor, x, expected] of cases) {
        const inner = fn(factor)
        const actual = typeof inner === "function" ? inner(x) : undefined
        const ok = typeof inner === "function" && actual === expected
        if (!ok) allOk = false
        lines.push(
          `${ok ? "✓" : "✗"} multiplyBy(${factor})(${x}) → ${actual}${ok ? "" : `  (expected ${expected})`}`,
        )
      }
      return { ok: allOk, lines }
    },
  },
  {
    id: "arrayMethods",
    level: "hard",
    title: "Array Methods (map / reduce)",
    summary: "Transforming arrays without manual loops",
    content: `
      <p><code>arr.map(fn)</code> returns a new array with <code>fn</code> applied to every element. <code>arr.filter(fn)</code> returns a new array keeping only elements where <code>fn</code> returns true.</p>
      <div class="example"><b>const numbers = [1, 2, 3];<br>const squares = numbers.map(number =&gt; number * number);<br>console.log(squares);</b><br>→ [1, 4, 9]</div>
      <div class="example"><b>const scores = [4, 10, 15];<br>const passing = scores.filter(score =&gt; score >= 10);<br>console.log(passing);</b><br>→ [10, 15]</div>
      <p>This workspace practices <code>map()</code> and <code>reduce()</code>. <code>find()</code> returns the first matching item; <code>some()</code> asks whether at least one item matches; <code>every()</code> asks whether all match. <code>sort()</code> rearranges a list—copy first if you need to keep the original order.</p>
      <div class="roadmap-quote-guide"><span>WATCH OUT</span><p>When a callback uses braces, it needs its own <code>return</code>. Without it, <code>map</code>, <code>filter</code>, or <code>reduce</code> receives <code>undefined</code>.</p></div>
    `,
    fnName: "summarizeNumbers",
    starter:
      "function summarizeNumbers(arr) {\n  // Use map to double every number.\n  // Use reduce to calculate the total, then return both.\n\n}",
    task: "Use <code>map</code> to make a doubled array and <code>reduce</code> to calculate the original total. Return <code>{ doubled, total }</code>.",
    sourceRequirements: [
      { test: (code) => /\.map\s*\(/.test(code), message: "Use map to create the doubled array." },
      { test: (code) => /\.reduce\s*\(/.test(code), message: "Use reduce to calculate the total." },
    ],
    testMode: "io",
    tests: [
      [[[1, 2, 3]], { doubled: [2, 4, 6], total: 6 }],
      [[[]], { doubled: [], total: 0 }],
      [[[-1, 0, 5]], { doubled: [-2, 0, 10], total: 4 }],
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
    hints: ["Think of spread as opening each array into its individual items.", "Put both arrays inside new square brackets.", "Return [...arr1, ...arr2]."],
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
      <div class="example"><b>async function run() {<br>&nbsp;&nbsp;const value = await fetchData();<br>&nbsp;&nbsp;console.log(value);<br>}</b></div>
      <div class="roadmap-quote-guide"><span>WATCH OUT</span><p>Without <code>await</code>, you have a Promise object—not its finished value. Await it before you read or return the result.</p></div>
    `,
    fnName: "delayedDouble",
    starter:
      "function delayedDouble(n) {\n  // Return a Promise that resolves\n  // with n * 2 after a short delay.\n  // Hint: new Promise(resolve => setTimeout(() => resolve(n*2), 50))\n\n}",
    task: "Return a <code>Promise</code> that resolves with <code>n * 2</code> after a short delay.",
    reflection: "Why is a Promise useful when a value is not ready immediately?",
    testMode: "custom",
    validate: async (fn) => {
      const lines = []
      const cases = [[5, 10], [0, 0], [-3, -6]]
      let allOk = true
      for (const [input, expected] of cases) {
        const result = fn(input)
        const actual = result instanceof Promise ? await result : undefined
        const ok = result instanceof Promise && actual === expected
        if (!ok) allOk = false
        lines.push(`${ok ? "✓" : "✗"} await delayedDouble(${input}) → ${actual}${ok ? "" : `  (expected ${expected})`}`)
      }
      return { ok: allOk, lines }
    },
  },
  {
    id: "stringMethods",
    level: "medium",
    title: "String Methods",
    summary: "Check and transform text with helpful built-in methods",
    content: `
      <p>Strings have useful built-in methods. For example, <code>text.includes("@")</code> checks whether text contains a character, and <code>text.toUpperCase()</code> creates uppercase text.</p>
      <div class="example"><b>const topic = "JavaScript";<br>const hasScript = topic.includes("Script");<br>console.log(hasScript);</b><br>→ true</div>
      <p>Methods use a dot because they belong to the value on their left. They do not change the original string unless you store the new result.</p>
    `,
    fnName: "hasAtSign",
    starter:
      'function hasAtSign(text) {\n  // Return whether text includes "@".\n\n}',
    solution: 'function hasAtSign(text) {\n  return text.includes("@");\n}',
    task: 'Return whether <code>text</code> includes <code>"@"</code> using <code>includes()</code>.',
    hints: ["Strings have built-in methods for common checks.", "Call includes on text, then give it the character to find.", "Return text.includes(\"@\")."],
    testMode: "io",
    tests: [
      [["ada@example.com"], true],
      [["no-at-sign"], false],
      [[""], false],
      [["@start"], true],
      [["end@"], true],
    ],
  },
  {
    id: "domEvents",
    level: "medium",
    title: "DOM & Events",
    summary: "Make a web page respond to the user",
    content: `
      <p>The <b>DOM</b> is JavaScript’s view of a web page. Use <code>document.querySelector()</code> to find an element, then update <code>textContent</code>, <code>classList</code>, or attach an event listener.</p>
      <div class="example"><b>button.addEventListener("click", () =&gt; {<br>&nbsp;&nbsp;message.textContent = "Saved!";<br>});</b></div>
      <p>Events are how the browser tells your program that something happened: a click, key press, form submission, or input change.</p>
      <p>Clicks bubble from the clicked element up through its parents. <b>Event delegation</b> uses one listener on a parent and checks <code>event.target</code>, which is useful for buttons added later.</p>
    `,
    fnName: "buttonMessage",
    starter:
      'function buttonMessage() {\n  // Find #saveButton and #message.\n  // When the button is clicked, set the message to "Saved!".\n\n}',
    task: 'Use <code>document.querySelector()</code> and <code>addEventListener()</code> to make the provided Save button change the provided message to <code>"Saved!"</code>.',
    sourceRequirements: [{ test: (code) => /document\.querySelector\s*\(/.test(code) && /\.addEventListener\s*\(\s*["']click["']/.test(code), message: "Select the elements and attach a click listener." }],
    testMode: "custom",
    validate: async (fn) => {
      const sandbox = document.createElement("div")
      sandbox.innerHTML = '<button id="saveButton">Save</button><div id="message"></div>'
      document.body.appendChild(sandbox)
      const button = sandbox.querySelector("#saveButton"), message = sandbox.querySelector("#message")
      try { fn(); button.click() } finally { sandbox.remove() }
      const ok = message.textContent === "Saved!"
      return { ok, lines: [ok ? "✓ Button click updated the message." : "✗ The click must update #message to Saved!." ] }
    },
  },
  {
    id: "formsValidation",
    level: "medium",
    title: "Forms & Validation",
    summary: "Read user input and give helpful feedback",
    content: `
      <p>Forms turn user input into program data. Read values from inputs, stop unwanted page reloads with <code>event.preventDefault()</code>, then validate before using the data.</p>
      <div class="example"><b>form.addEventListener("submit", (event) =&gt; {<br>&nbsp;&nbsp;event.preventDefault();<br>&nbsp;&nbsp;if (name === "") {<br>&nbsp;&nbsp;&nbsp;&nbsp;showError("Enter your name");<br>&nbsp;&nbsp;}<br>});</b></div>
      <p>A useful validation message tells the user exactly what to fix. Build login and registration forms only after you can reliably handle one input.</p>
    `,
    fnName: "isValidEmail",
    starter:
      'function isValidEmail(event, input, message) {\n  // Stop submission. If input.value is empty,\n  // show "Enter your name" in message.textContent.\n\n}',
    task: 'Validate a mock form submission: call <code>event.preventDefault()</code>, then show <code>"Enter your name"</code> when <code>input.value</code> is empty.',
    sourceRequirements: [{ test: (code) => /\.preventDefault\s*\(\s*\)/.test(code), message: "Stop the form submission with preventDefault()." }],
    testMode: "custom",
    validate: async (fn) => {
      const event = { stopped: false, preventDefault() { this.stopped = true } }
      const input = { value: "" }, message = { textContent: "" }
      fn(event, input, message)
      const ok = event.stopped && message.textContent === "Enter your name"
      return { ok, lines: [ok ? "✓ Form submission was stopped and the validation message appeared." : "✗ Stop the event and show the message for an empty input." ] }
    },
  },
  {
    id: "debuggingTools",
    level: "medium",
    title: "Debugging Tools",
    summary: "Inspect values, pause code, and find mistakes",
    content: `
      <p>Debugging is the process of finding why code behaves differently than you expect. Start by checking the smallest fact you are unsure about.</p>
      <div class="example"><b>const total = price * quantity;<br>console.log({ price, quantity, total });<br>debugger;</b></div>
      <p><code>console.log()</code> shows values. The browser DevTools <b>Sources</b> panel lets you add a breakpoint; <code>debugger;</code> creates a breakpoint from code when DevTools is open. At a pause, inspect variables one at a time instead of guessing.</p>
    `,
    fnName: "inspectTotal",
    starter: "function inspectTotal(price, quantity) {\n  // Calculate total, log it, then return it.\n\n}",
    task: "Calculate a total, use <code>console.log()</code> to inspect it, then return the same total.",
    testMode: "custom",
    validate: async (fn) => {
      const logs = [], original = console.log
      console.log = (...values) => logs.push(values.join(" "))
      let first, second
      try { first = fn(3, 4); second = fn(0, 6) } finally { console.log = original }
      const ok = first === 12 && second === 0 && logs.includes("12") && logs.includes("0")
      return { ok, consoleOutput: logs, lines: [ok ? "✓ Returned and inspected totals for more than one input." : "✗ Calculate, log, and return the total for every input."] }
    },
  },
  {
    id: "jsonData",
    level: "hard",
    title: "JSON Data",
    summary: "Convert between JavaScript values and stored text",
    content: `
      <p>JSON is a text format for moving and saving structured data. JavaScript objects are live values; JSON is the text version of those values.</p>
      <div class="example"><b>const user = { name: "Ada" };<br>const text = JSON.stringify(user);<br>const restored = JSON.parse(text);<br>console.log(restored.name);</b><br>→ Ada</div>
      <p>Use <code>JSON.stringify()</code> before storing an object, and <code>JSON.parse()</code> after reading its text back. Invalid JSON throws an error, so parsing external text belongs inside <code>try/catch</code>.</p>
    `,
    fnName: "roundTripUser",
    starter: "function roundTripUser(user) {\n  // Convert user to JSON text, then back to an object.\n\n}",
    task: "Use <code>JSON.stringify()</code> then <code>JSON.parse()</code> to return a new object with the same data.",
    testMode: "io",
    tests: [
      [[{ name: "Ada", points: 10 }], { name: "Ada", points: 10 }],
      [[{}], {}],
      [[{ profile: { name: "Mina" }, tags: ["new", "active"] }], { profile: { name: "Mina" }, tags: ["new", "active"] }],
    ],
  },
  {
    id: "thisKeyword",
    level: "hard",
    title: "The this Keyword",
    summary: "Refer to the object that called a method",
    content: `
      <p>Inside a regular object method, <code>this</code> usually means the object before the dot that called the method. It lets one method use that object’s own data.</p>
      <div class="example"><b>const user = {<br>&nbsp;&nbsp;name: "Ada",<br>&nbsp;&nbsp;greet() { return "Hi, " + this.name; }<br>};<br>console.log(user.greet());</b><br>→ Hi, Ada</div>
      <p>Arrow functions do not create their own <code>this</code>; they keep it from the surrounding code. Use regular method syntax for a first class or object method while learning this rule.</p>
    `,
    fnName: "makeUser",
    starter: "function makeUser(name) {\n  // Return an object with name and greet().\n  // greet() should use this.name.\n\n}",
    task: "Return an object whose <code>greet()</code> method uses <code>this.name</code> to create a greeting.",
    testMode: "custom",
    validate: async (fn, source) => {
      const ada = fn("Ada"), mina = fn("Mina")
      const ok = ada?.greet?.() === "Hi, Ada" && mina?.greet?.() === "Hi, Mina" && /this\.name/.test(source)
      return { ok, lines: [ok ? "✓ Method used this.name correctly." : "✗ Return an object with greet() using this.name."] }
    },
  },
  {
    id: "gitBasics",
    level: "hard",
    title: "Git Basics",
    summary: "Save meaningful checkpoints in version control",
    content: `
      <p>Git records changes to a project so you can review, share, and safely return to earlier work. A commit is a named checkpoint, not a backup of every keystroke.</p>
      <div class="example"><b>git status<br>git add src/todo.js<br>git commit -m "Add todo removal"</b></div>
      <p>Use <code>git status</code> to see what changed, <code>git add</code> to choose what belongs together, and <code>git commit</code> to save one clear change. Write commit messages that begin with an action, such as “Add validation”.</p>
    `,
    fnName: "writeCommitMessage",
    starter: "function writeCommitMessage(feature) {\n  // Return a short action-style commit message.\n\n}",
    task: "Return an action-style commit message for the supplied feature, beginning with <code>\"Add \"</code>.",
    testMode: "io",
    tests: [
      [["form validation"], "Add form validation"],
      [["menu: keyboard support"], "Add menu: keyboard support"],
      [[""], "Add "],
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
      "function saveSetting() {\n  // Save { theme: \"dark\" } under the key \"settings\".\n  // Read it back, parse it, and return its theme.\n\n}",
    task: 'Use <code>localStorage.setItem()</code>, <code>JSON.stringify()</code>, <code>localStorage.getItem()</code>, and <code>JSON.parse()</code> to save and read a settings object.',
    sourceRequirements: [{ test: (code) => /localStorage\.setItem/.test(code) && /localStorage\.getItem/.test(code) && /JSON\.stringify/.test(code) && /JSON\.parse/.test(code), message: "Use localStorage and both JSON conversion methods." }],
    testMode: "custom",
    validate: async (fn) => {
      const previous = localStorage.getItem("settings")
      localStorage.removeItem("settings")
      let result
      let stored
      try { result = fn(); stored = localStorage.getItem("settings") } finally {
        if (previous === null) localStorage.removeItem("settings")
        else localStorage.setItem("settings", previous)
      }
      let saved
      try { saved = JSON.parse(stored) } catch (error) { saved = null }
      const ok = result === "dark" && saved?.theme === "dark"
      return { ok, lines: [ok ? "✓ Settings were stored and read back through localStorage." : "✗ Save JSON under settings, read it back, parse it, and return theme." ] }
    },
  },
  {
    id: "apisData",
    level: "hard",
    title: "APIs & Data",
    summary: "Use JSON, HTTP, fetch, and error handling",
    content: `
      <p>An API lets your program request data from another service. Most web APIs send JSON. A safe request checks the response before using its data.</p>
      <div class="example"><b>async function loadWeather() {<br>&nbsp;&nbsp;const response = await fetch("/api/weather");<br>&nbsp;&nbsp;if (!response.ok) {<br>&nbsp;&nbsp;&nbsp;&nbsp;throw new Error("Request failed");<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;const data = await response.json();<br>&nbsp;&nbsp;return data;<br>}</b></div>
      <p>Practice with a weather, movie, currency, or GitHub-profile project. Keep network code separate from how you display the result.</p>
    `,
    fnName: "readUserName",
    starter:
      'function readUserName(data) {\n  // data can be { user: { name: "Ada" } }.\n  // Return the name, or undefined when it is missing.\n\n}',
    task: "Extract a user name from API-like JSON data using safe object access. Return undefined when the name is missing.",
    hints: ["Read the data shape from the inside out: name belongs to user.", "A missing user should not crash the function.", "Use optional chaining: return data?.user?.name;"],
    testMode: "io",
    tests: [
      [[{ user: { name: "Ada" } }], "Ada"],
      [[{ user: {} }], undefined],
      [[{}], undefined],
      [[{ profile: { name: "Ada" } }], undefined],
    ],
  },
  {
    id: "webAppRecap",
    level: "hard",
    title: "Web App Recap: Waiting, Boundaries, Recovery",
    summary: "Connect async work, modules, and error handling",
    content: `
      <p>Before the project work, connect three ideas that make browser programs reliable: some work takes time, code belongs in focused files, and risky work needs a recovery path.</p>
      <div class="roadmap-recap-grid">
        <section><b>WAITING</b><p>A Promise is a result that will arrive later. <code>await</code> lets an async function wait for it.</p></section>
        <section><b>BOUNDARIES</b><p>A module exports one focused capability and imports it only where it is needed.</p></section>
        <section><b>RECOVERY</b><p><code>try/catch</code> gives a known failure path instead of letting an error surprise the user.</p></section>
      </div>
      <div class="example"><b>try {<br>&nbsp;&nbsp;const data = await loadData();<br>&nbsp;&nbsp;return data;<br>} catch (error) {<br>&nbsp;&nbsp;return "Try again";<br>}</b></div>
      <p>Keep these responsibilities separate in a project: one function loads data, another decides what to show, and a small fallback explains what the user can do next.</p>
    `,
    fnName: "requestMessage",
    starter: "async function requestMessage(loadData) {\n  // Await loadData(). On success, return `Ready: ${data}`.\n  // If it rejects, catch the error and return \"Try again\".\n\n}",
    task: "Write an async function that awaits <code>loadData()</code> inside a <code>try/catch</code>. Return <code>Ready: </code> plus the resolved value on success, or <code>\"Try again\"</code> if it rejects.",
    sourceRequirements: [
      { test: (code) => /\basync\s+function\s+requestMessage\b/.test(code), message: "Define requestMessage as an async function." },
      { test: (code) => /\btry\s*\{/.test(code) && /\bcatch\s*(?:\([^)]*\))?\s*\{/.test(code), message: "Handle the request with a try/catch block." },
      { test: (code) => /\bawait\s+\w+\s*\(\s*\)/.test(code), message: "Await the supplied loader function." },
    ],
    testMode: "custom",
    validate: async (fn) => {
      const lines = []
      const okLoader = () => Promise.resolve("Ada")
      const failLoader = () => Promise.reject(new Error("network error"))
      let successResult, failureResult
      try { successResult = await fn(okLoader) } catch (error) { successResult = undefined }
      try { failureResult = await fn(failLoader) } catch (error) { failureResult = undefined }
      const ok = successResult === "Ready: Ada" && failureResult === "Try again"
      if (!ok) {
        lines.push(successResult !== "Ready: Ada" ? "✗ On success, return `Ready: ` plus the resolved value." : "✗ On failure, catch the rejection and return \"Try again\".")
      } else {
        lines.push("✓ Awaited the Promise and handled both outcomes.")
      }
      return { ok, lines }
    },
  },
  {
    id: "foundationProjects",
    level: "hard",
    title: "Final Foundation Projects",
    summary: "Turn your knowledge into complete applications",
    content: `
      <p>Graduate from the Foundation Track by building projects without copying a tutorial line by line. Plan the inputs, state, user actions, and edge cases before you code.</p>
      <p><b>Plan in this order:</b> 1. List each button or interaction and its result. 2. List the data the app must remember. 3. Build the ugliest working version first. 4. Test one action at a time, then improve the design.</p>
      <div class="example"><b>Beginner: calculator → todo app → quiz app → form validator<br>Intermediate: weather app → movie app → expense tracker → notes app<br>Advanced foundation: e-commerce frontend → dashboard → social media UI</b></div>
      <p>For every project, write a short plan, build the smallest working version, test it, then improve it. That loop is how programming skill becomes durable.</p>
    `,
    fnName: "projectPlan",
    starter:
      "function projectPlan() {\n  // Return an object with add, remove, and list methods\n  // for a small todo list.\n\n}",
    task: "Build a tiny todo-list module with three methods: add a task, remove a task, and list the remaining tasks.",
    sourceRequirements: [{ test: (code) => /\badd\b/.test(code) && /\bremove\b/.test(code) && /\blist\b/.test(code), message: "Include add, remove, and list methods in the module." }],
    testMode: "custom",
    validate: async (fn) => {
      const todos = fn()
      let ok = false
      try {
        todos.add("Plan"); todos.add("Code"); todos.remove("Plan"); todos.remove("Missing")
        ok = typeof todos.add === "function" && typeof todos.remove === "function" && typeof todos.list === "function" && JSON.stringify(todos.list()) === JSON.stringify(["Code"])
      } catch (error) { ok = false }
      return { ok, lines: [ok ? "✓ Todo module adds, removes, and lists tasks." : "✗ Return a todo module with working add, remove, and list methods." ] }
    },
  },
  {
    id: "modulesErrors",
    level: "hard",
    title: "Modules & Error Handling",
    summary: "Organize code and handle failures deliberately",
    content: `
      <p>Modules keep files focused. Export a value with <code>export</code>, then use <code>import</code> where it is needed. This prevents large programs from becoming one hard-to-navigate file.</p>
      <div class="example"><b>export function add(a, b) {<br>&nbsp;&nbsp;return a + b;<br>}<br><br>import { add } from "./math.js";</b></div>
      <p>Use <code>try/catch</code> around work that can fail, especially network requests and JSON parsing. Give errors useful messages so future you can solve them.</p>
      <p>An error object has a useful <code>message</code>. Create intentional failures with <code>throw new Error("message")</code>; in <code>catch (error)</code>, inspect <code>error.message</code> before deciding how to recover.</p>
    `,
    fnName: "safeDivide",
    starter:
      "function safeDivide(a, b) {\n  // Return a / b. If b is 0, return 'Cannot divide by zero'.\n\n}",
    task: "Practice a predictable failure path: never let an invalid operation silently produce a confusing result.",
    reflection: "When should your program return a fallback instead of continuing with an invalid value?",
    testMode: "io",
    tests: [
      [[8, 2], 4],
      [[8, 0], "Cannot divide by zero"],
      [[-9, 3], -3],
      [[9, -2], -4.5],
    ],
  },
  {
    id: "objectsPrototypes",
    level: "hard",
    title: "Objects, Classes & Prototypes",
    summary: "Model related data and behavior",
    content: `
      <p>Objects combine related data and behavior. Classes are convenient syntax for creating related objects, while prototypes are the mechanism JavaScript uses to share methods behind the scenes.</p>
      <div class="example"><b>class User {<br>&nbsp;&nbsp;constructor(name) {<br>&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;}<br><br>&nbsp;&nbsp;greet() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return "Hi, " + this.name;<br>&nbsp;&nbsp;}<br>}</b></div>
      <p>Learn classes for readability, then study prototypes so <code>this</code>, inheritance, and method sharing make sense in real code.</p>
    `,
    fnName: "getUserName",
    starter:
      "function getUserName(name) {\n  // Create a User class with a constructor and greet method.\n  // Return a new User instance.\n\n}",
    task: "Create a class with a constructor that stores a name and a method that returns a greeting. Return an instance of that class.",
    reflection: "How does this.name let the same greet method work for different instances?",
    sourceRequirements: [{ test: (code) => /\bclass\s+\w+/.test(code) && /\bconstructor\s*\(/.test(code) && /\bgreet\s*\(/.test(code), message: "Define a class with a constructor and greet method." }],
    testMode: "custom",
    validate: async (fn) => {
      let ada, shortName, emptyName, ok = false
      try {
        ada = fn("Ada"); shortName = fn("A"); emptyName = fn("")
        ok = [
          [ada, "Ada", "Hello, Ada!"],
          [shortName, "A", "Hello, A!"],
          [emptyName, "", "Hello, !"],
        ].every(([user, name, greeting]) => user && user.name === name && typeof user.greet === "function" && user.greet() === greeting)
      } catch (error) { ok = false }
      return { ok, lines: [ok ? "✓ Class instance has constructor data and a working method." : "✗ Return a class instance with name and greet()." ] }
    },
  },
  {
    id: "professionalPractice",
    level: "hard",
    title: "Professional JavaScript",
    summary: "Testing, debugging, performance, Node.js, and projects",
    content: `
      <p>Professional JavaScript means writing code that other people can understand, test, and safely change. Use clear names, small functions, version control, tests, and browser or Node debugging tools.</p>
      <div class="example"><b>function add(a, b) {<br>&nbsp;&nbsp;return a + b;<br>}<br><br>console.assert(add(2, 3) === 5, "add should total 5");</b></div>
      <p>This workspace uses <code>console.assert()</code> as a lightweight real check: it reports when an expectation is false. Debugging tools from the earlier lesson help you inspect a failure before changing code.</p>
      <p><b>Use the same professional loop:</b> name the behavior, write a small check, make it pass, then keep the change focused enough to review.</p>
      <p>Next, build projects in order: calculator → quiz or todo app → weather app → API-backed app → full-stack app. Learn Node.js, npm, modules, HTTP APIs, and a framework <em>after</em> the language foundations feel natural.</p>
    `,
    fnName: "formatName",
    starter:
      "function formatName(name) {\n  // Return the name with its first letter capitalized.\n\n}\n\n// Add a console.assert test for formatName below.",
    task: "Write the utility and a console.assert test that verifies formatName returns \"Ada\" for \"ada\".",
    testMode: "custom",
    validate: async (fn, source) => {
      const ok = fn("ada") === "Ada" && fn("grace") === "Grace" && /console\.assert\s*\(/.test(source)
      return { ok, lines: [ok ? "✓ Utility works and includes an assertion-style test." : "✗ Write formatName and add a console.assert test for it." ] }
    },
  },
]

ROADMAP.sort(
  (first, second) =>
    window.ROADMAP_ORDER.indexOf(first.id) -
    window.ROADMAP_ORDER.indexOf(second.id),
)

// Every workspace gets a plain-language bridge between the short concept and
// the code. Keep this separate from exercises so a learner can reread the idea
// without being shown an answer.
const CONCEPT_BRIDGES = {
  firstProgram: ["A program is a list of instructions. JavaScript starts at the first line and follows the lines in order.", "Read console.log as: ‘show this value in the console.’ It is a safe way to see what your code is doing."],
  consolePractice: ["The console is a place for your program to report information to you. It is for the programmer, not normally for a page visitor.", "Put the value you want to inspect inside console.log( ). Text needs double quotes because JavaScript must know it is text."],
  variables: ["A variable is a labeled box that holds one value. The label lets you use the value again without retyping it.", "Read const user = \"Ada\" as: ‘make a box named user and keep Ada in it.’ Use the name user later to get the stored text."],
  dataTypes: ["Values have types. A string is text, a number is a quantity, and a boolean is a true-or-false answer.", "typeof asks JavaScript to tell you a value’s type. It does not change the value; it only reports information about it."],
  values: ["Use let for a value that will change as the program runs. The name stays the same while the value inside it changes.", "score = score + 10 means: take the current score, add 10, then put the new result back into score."],
  operators: ["Operators are symbols that tell JavaScript to calculate or compare. Start by treating them like the buttons on a calculator.", "The expression on the right of = is worked out first. Then its result is stored in the name on the left."],
  conditionals: ["A condition is a yes-or-no question. if runs its block only when that question is true.", "Read if (light === \"green\") as: ‘if light is exactly green, do the code inside the braces.’ else is the path for every other answer."],
  functions: ["A function is a named recipe: you define the steps once, then call the recipe whenever you need it.", "Parameters are the inputs in the function’s parentheses. return is the value the recipe gives back to the code that called it."],
  arrowFunctions: ["An arrow function is another way to write a function. It does the same job, but uses => instead of the function keyword.", "Read const triple = number => number * 3 as: ‘store a function named triple; it receives number and gives back number times three.’"],
  arrays: ["An array is one ordered list that can hold many values. Each value has a position, called an index.", "Indexes start at 0, so items[0] means the first item. Use arr.length when you need the number of items in the list."],
  loops: ["A loop repeats a job instead of making you copy the same line many times.", "For a for loop, identify the start, the keep-going question, and the change after each turn before reading the body."],
  fizzBuzz: ["This challenge combines a loop with conditions. The order of your conditions matters because JavaScript uses the first matching path.", "Check the most specific rule first: a number divisible by both 3 and 5 must be handled before either rule by itself."],
  foundationRecap: ["A variable is a labeled box, a function is a recipe, and a condition is a decision. These three ideas work together in almost every program.", "Lists and loops let the same small rule work with many values. Use the concept names when you explain code to yourself."],
  objects: ["An object keeps related facts together using labeled properties. It is useful when several values describe one thing.", "Read project.name as: ‘from the project object, get the value stored under the name label.’"],
  scope: ["Scope describes where a name is available. A value created inside a function belongs to that function.", "This prevents separate parts of a program from accidentally changing each other’s values. Return a value when code outside needs it."],
  scopeClosures: ["A closure happens when an inner function remembers values from the outer function that created it.", "Think of the outer function as setting up private information; the returned inner function can still use that information later."],
  arrayMethods: ["Array methods let you transform a list without manually managing a counter. map changes every item; filter keeps matching items.", "Each method receives a small function that explains what to do with one item. The method creates a new array instead of changing the original by default."],
  es6: ["Destructuring gives a short name to a value inside an array or object. Spread copies existing values into a new array or object.", "Use a new object when you want a changed version while keeping the original safe to reuse."],
  stringMethods: ["Strings are text values with useful built-in methods. A method is an action you ask that text to perform.", "name.toUpperCase() creates uppercase text. Store or print the returned result because the original string does not change itself."],
  domEvents: ["The DOM is JavaScript’s view of the web page. An event tells your code that something happened, such as a click.", "First select an element, then attach a listener. The function inside the listener runs later, when that event occurs."],
  formsValidation: ["Form validation checks input before you trust or use it. Start with one small rule and give a clear message when it fails.", "preventDefault stops the browser’s usual form submission so your JavaScript can check the input first."],
  debuggingTools: ["Debugging replaces guessing with evidence. Check one value at the point where it becomes surprising.", "Use console.log to inspect a value and a breakpoint or debugger to pause before the next line runs."],
  async: ["Some work takes time, such as requesting data. A Promise represents the result that will arrive later.", "then runs after a Promise succeeds. await pauses only the async function until that result is ready, making the steps easier to read."],
  modulesErrors: ["Modules split a program into focused files. Error handling gives your program a planned response when a risky action fails.", "Put the risky code in try. Put the recovery code in catch. This keeps one failure from becoming a confusing crash."],
  apisData: ["An API is a way for one program to ask another program for data. Most web APIs send that data as JSON.", "Read nested data one level at a time, such as data.user.name. Check that each level exists before relying on it in a real app."],
  jsonData: ["JSON is text shaped like JavaScript data. It is useful for storage and communication, but it is not a live object until you parse it.", "stringify changes an object into text; parse changes valid JSON text back into an object."],
  browserStorage: ["Browser storage can remember small pieces of data after a page reloads. It stores text, so objects need JSON.stringify before saving.", "Use a clear key such as theme when saving, then use the same key when reading it back."],
  webAppRecap: ["Web programs need to handle delayed data, keep code organized, and recover when a risky step fails.", "Await a Promise for delayed work, use modules for focused responsibilities, and use catch to choose a clear fallback."],
  thisKeyword: ["this is a way for a method to refer to the object it was called on.", "In user.greet(), this normally means user, so this.name reads user.name."],
  objectsPrototypes: ["Classes are templates for making similar objects. An instance is one object made from that template.", "A constructor runs when you use new. this refers to the particular object currently being created or used."],
  foundationProjects: ["Projects are where separate skills become one useful program. Build the smallest version first, then add one feature at a time.", "Before coding, name the user action, the information you need, and the result the user should see."],
  professionalPractice: ["Professional JavaScript is not only about code working once. It is about clear names, small pieces, tests, and safe changes.", "Use tests to describe what a function should do before a future change accidentally breaks it."],
  gitBasics: ["Git saves meaningful project checkpoints so you can understand and recover changes later.", "A small commit contains one coherent change and has a message that says what changed."],
}

function conceptBridgeMarkup(lesson) {
  const bridge = CONCEPT_BRIDGES[lesson.id]
  if (!bridge) return ""
  const nextLesson = ROADMAP[ROADMAP.indexOf(lesson) + 1]
  const nextStep = nextLesson
    ? `<p><b>Up next:</b> You will use this foundation in <code>${nextLesson.title}</code>.</p>`
    : ""
  return `<section class="roadmap-concept-bridge"><span>READ THIS FIRST</span><p>${bridge[0]}</p><p><b>How to read the code:</b> ${bridge[1]}</p>${nextStep}</section>`
}

let roadmapSolved = new Set()
let roadmapPracticalSolved = new Set()
let roadmapMainPracticalSolved = new Set()
let roadmapMainPracticalAttempts = new Map()
window.ROADMAP_MAIN_PRACTICAL_ATTEMPTS = {}
let adminMode = false
Object.defineProperty(window, "admin", {
  configurable: true,
  get: () => adminMode,
  set: (enabled) => {
    adminMode = Boolean(enabled)
    buildRoadmapPath()
    if (roadmapDetailEl?.innerHTML.trim()) loadRoadmapLesson(currentRoadmapIdx)
  },
})
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
  if (adminMode) return false
  const previousLesson = ROADMAP[idx - 1]
  const previousNeedsPractical = roadmapPracticalsFor(previousLesson?.id).length > 0
  const prevDone = idx === 0 || (
    (previousNeedsPractical
      ? roadmapPracticalSolved.has(previousLesson.id)
      : roadmapSolved.has(previousLesson.id)) &&
    (!roadmapMainPracticalFor(previousLesson.id) || roadmapMainPracticalSolved.has(previousLesson.id))
  )
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

    const checkpoint = roadmapMainPracticalFor(lesson.id)
    if (checkpoint) {
      const checkpointDone = roadmapMainPracticalSolved.has(lesson.id)
      const checkpointLocked = !adminMode && !roadmapPracticalSolved.has(lesson.id) && !checkpointDone
      const checkpointNode = document.createElement("div")
      checkpointNode.className = "roadmap-node roadmap-checkpoint-node" +
        (checkpointLocked ? " locked" : "") + (checkpointDone ? " solved" : "")
      checkpointNode.innerHTML = `
          <div class="roadmap-node-dot">${checkpointDone ? "✓" : '<svg class="checkpoint-glyph" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 0 10 5 5 10 0 5Z" fill="currentColor"/></svg>'}</div>
        <div class="roadmap-node-body">
          <div class="roadmap-node-level">INTERVIEW</div>
          <div class="roadmap-node-title">Checkpoint</div>
          <div class="roadmap-node-summary">Use the skills above in one job-style scenario</div>
        </div>`
      if (!checkpointLocked) checkpointNode.addEventListener("click", () => {
        openRoadmapCheckpoint(lesson.id)
      })
      roadmapNodesEl.appendChild(checkpointNode)
    }
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
  const canPreview = isDone || adminMode
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
      <section class="roadmap-workspace rp-body is-concept-first">
        <div class="roadmap-workspace-gate">
          <div>
            <span>READ THE CONCEPT FIRST</span>
            <h3>Ready to try it yourself?</h3>
            <p>When you are ready, open the workspace and write the code in your own words.</p>
            <button class="roadmap-workspace-start" id="roadmapWorkspaceStart" type="button">Try it</button>
          </div>
        </div>
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
      ${canPreview ? roadmapPracticalsMarkup(lesson.id) : ""}
      ${
        roadmapFunctionWrapperHidden || lesson.standalone
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
        <button class="roadmap-next-btn" id="roadmapNextBtn" type="button" ${isDone || adminMode ? "" : "disabled"}>Next</button>
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
          ${conceptBridgeMarkup(lesson)}
        </div>
      </aside>
    </div>
  `

  // The workspace itself scrolls. Start every new lesson at its top so the
  // concept-first gate is always visible instead of being left above view.
  const roadmapWorkspaceEl = roadmapDetailEl.querySelector(".roadmap-workspace")
  if (roadmapWorkspaceEl) roadmapWorkspaceEl.scrollTop = 0

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

  // A goal is written as a normal sentence. Only the exact JavaScript written
  // inside <code> tags becomes a colored code chip, so beginners can tell
  // what they must type without mistaking the whole instruction for code.
  roadmapDetailEl.querySelectorAll(".roadmap-task-card code").forEach((code) => {
    code.classList.add("roadmap-goal-code")
    code.innerHTML = highlightCode(code.textContent, { dimUnused: false })
  })

  const roadmapCodeInputEl = document.getElementById("roadmapCodeInput")
  document.getElementById("roadmapWorkspaceStart").addEventListener("click", () => {
    const workspace = roadmapDetailEl.querySelector(".roadmap-workspace")
    if (workspace) workspace.classList.remove("is-concept-first")
    roadmapCodeInputEl.focus()
  })
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
    if (activeRoadmapPractical?.kind === "main")
      startRoadmapMainPractical(activeRoadmapPractical.lessonId)
    else
      startRoadmapPractical(activeRoadmapPractical?.lessonId, activeRoadmapPractical?.index)
  })
  document.getElementById("roadmapNextBtn").addEventListener("click", () => {
    if (!roadmapSolved.has(lesson.id) && !adminMode) return
    if (!adminMode && roadmapPracticalsFor(lesson.id).length && !roadmapPracticalSolved.has(lesson.id)) {
      showPracticalAdvanceError()
      return
    }
    if (!adminMode && roadmapMainPracticalFor(lesson.id) && !roadmapMainPracticalSolved.has(lesson.id)) {
      openRoadmapCheckpoint(lesson.id)
      return
    }
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
    if (activeRoadmapPractical) activeRoadmapPractical.passed = false
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

    if ((e.ctrlKey || e.metaKey) && e.key === "/") {
      e.preventDefault()
      const changed = toggleLineComment(val, start, end)
      roadmapCodeInputEl.value = changed.value
      roadmapCodeInputEl.selectionStart = changed.selectionStart
      roadmapCodeInputEl.selectionEnd = changed.selectionEnd
      updateRoadmapGutter()
      refreshRoadmapHighlight()
      return
    }

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

    // Run a workspace first. After the main workspace passes, the next
    // Ctrl+Enter opens its practical rather than skipping straight to a lesson.
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault()
      if (activeRoadmapPractical) {
        if (activeRoadmapPractical.passed) {
          if (
            !adminMode &&
            activeRoadmapPractical.kind !== "main" &&
            roadmapMainPracticalFor(activeRoadmapPractical.lessonId) &&
            !roadmapMainPracticalSolved.has(activeRoadmapPractical.lessonId)
          ) {
            openRoadmapCheckpoint(activeRoadmapPractical.lessonId)
            return
          }
          const nextIdx = currentRoadmapIdx + 1
          if (nextIdx < ROADMAP.length) loadRoadmapLesson(nextIdx)
        } else {
          runRoadmapCode()
        }
      } else if (roadmapRanOnce && roadmapSolved.has(lesson.id)) {
        if (roadmapPracticalsFor(lesson.id).length) {
          startRoadmapPractical(lesson.id)
          return
        }
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

    // Opening brackets and quotes wrap a selection, or create an empty pair.
    if (PAIRS[e.key] && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const close = PAIRS[e.key]
      if (hasSelection) {
        e.preventDefault()
        roadmapCodeInputEl.value =
          val.slice(0, start) + e.key + val.slice(start, end) + close + val.slice(end)
        // Keep the original text selected inside its new wrapper.
        roadmapCodeInputEl.selectionStart = start + 1
        roadmapCodeInputEl.selectionEnd = end + 1
        updateRoadmapGutter()
        refreshRoadmapHighlight()
        return
      }
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
  if (!bodyEl || !editorWrap) return
  if (!bodyEl.querySelector(".roadmap-practical-library")) {
    const practicalMarkup = roadmapPracticalsMarkup(lessonId)
    if (practicalMarkup) editorWrap.insertAdjacentHTML("beforebegin", practicalMarkup)
  }
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
  roadmapDetailEl
    .querySelectorAll("[data-main-practical-start]")
    .forEach((button) => {
      if (button.dataset.bound) return
      button.dataset.bound = "true"
      button.addEventListener("click", () =>
        startRoadmapMainPractical(button.dataset.mainPracticalStart),
      )
    })
  roadmapDetailEl.querySelectorAll("[data-main-practical-hint]").forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.mainPracticalHint
      const hint = roadmapMainPracticalFor(lessonId)?.hints?.[0]
      const target = roadmapDetailEl.querySelector(`[data-main-practical-hint-text="${lessonId}"]`)
      if (hint && target) {
        target.textContent = "Hint: " + hint
        target.hidden = false
      }
    })
  })
}

function startRoadmapPractical(lessonId, index = 0) {
  const practicals = roadmapPracticalsFor(lessonId)
  if (!practicals.length) return
  const nextIndex = index >= practicals.length ? 0 : index
  const practical = practicals[nextIndex]
  activeRoadmapPractical = { lessonId, index: nextIndex, practical, passed: false }
  const practiceSection = roadmapDetailEl.querySelector(".roadmap-practice")
  if (practiceSection) {
    practiceSection.hidden = false
    practiceSection.classList.add("is-minimized")
    practiceSection.setAttribute("aria-disabled", "true")
  }
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

function startRoadmapMainPractical(lessonId) {
  const practical = roadmapMainPracticalFor(lessonId)
  if (!practical) return
  activeRoadmapPractical = { lessonId, index: 0, practical, passed: false, kind: "main" }
  const practiceSection = roadmapDetailEl.querySelector(".roadmap-practice")
  if (practiceSection) {
    practiceSection.classList.add("is-minimized")
    practiceSection.setAttribute("aria-disabled", "true")
  }
  const checkpoint = roadmapDetailEl.querySelector(".roadmap-main-practical")
  if (checkpoint) checkpoint.classList.add("is-practicing")
  const editor = document.getElementById("roadmapCodeInput")
  if (editor) {
    editor.value = `// ${practical.prompt}\n\n`
    updateRoadmapGutter()
    refreshRoadmapHighlight()
    editor.focus()
  }
  const retry = document.getElementById("roadmapTryAnotherBtn")
  if (retry) retry.hidden = false
  const terminal = document.getElementById("roadmapTerminal")
  if (terminal) terminal.innerHTML = '<div class="term-line term-dim">Answer the interview scenario, then hit Run to check your output.</div>'
}

function openRoadmapCheckpoint(lessonId) {
  const lessonIndex = ROADMAP.findIndex((lesson) => lesson.id === lessonId)
  const practical = roadmapMainPracticalFor(lessonId)
  if (lessonIndex < 0 || !practical) return

  // Start from the regular editor setup, then turn it into a dedicated
  // checkpoint screen. The interview task is not part of the lesson's normal
  // practice workspace or concept panel.
  loadRoadmapLesson(lessonIndex)
  const layout = roadmapDetailEl.querySelector(".roadmap-lesson-layout")
  const workspace = roadmapDetailEl.querySelector(".roadmap-workspace")
  const editorWrap = workspace?.querySelector(".roadmap-editor-wrap")
  if (!layout || !workspace || !editorWrap) return
  layout.classList.add("is-interview-checkpoint")
  workspace.classList.remove("is-concept-first")
  workspace.querySelector(".roadmap-workspace-gate")?.remove()
  workspace.querySelector(".roadmap-practice")?.remove()
  workspace.querySelector(".roadmap-complete-banner")?.remove()
  workspace.querySelector(".roadmap-practical-library")?.remove()
  workspace.querySelector(".roadmap-workspace-head").innerHTML =
    '<span>Interview checkpoint</span><strong>Job-style JavaScript scenario</strong>'
  editorWrap.insertAdjacentHTML("beforebegin", roadmapMainPracticalMarkup(lessonId))
  roadmapDetailEl.querySelector(".roadmap-explanation")?.remove()
  bindRoadmapPracticalActions()
  startRoadmapMainPractical(lessonId)
}

function scrollRoadmapTerminalIntoView() {
  requestAnimationFrame(() => {
    const terminal = document.getElementById("roadmapTerminal")
    const workspace = terminal?.closest(".roadmap-workspace")
    if (!workspace) return
    // Wait until the terminal's new lines affect layout, then use the
    // container's true scroll height instead of merely aligning the element.
    requestAnimationFrame(() =>
      workspace.scrollTo({ top: workspace.scrollHeight, behavior: "smooth" }),
    )
  })
}

async function runRoadmapCode() {
  roadmapRanOnce = true
  const lesson = ROADMAP[currentRoadmapIdx]
  const visibleCode = document.getElementById("roadmapCodeInput").value
  if (activeRoadmapPractical) {
    await runActiveRoadmapPractical(visibleCode)
    return
  }
  const code = lesson.standalone
    ? visibleCode
    : isRoadmapFunctionWrapped(visibleCode, lesson)
      ? visibleCode
      : wrapRoadmapFunction(visibleCode, lesson)
  const termEl = document.getElementById("roadmapTerminal")
  termEl.innerHTML = ""

  const printRoadmapLine = (text, cls) => {
    const div = document.createElement("div")
    div.className = "term-line " + (cls || "")
    div.textContent = text
    termEl.appendChild(div)
    scrollRoadmapTerminalIntoView()
  }
  const fmtRoadmapVal = (v) => {
    if (typeof v === "string") return JSON.stringify(v)
    if (Array.isArray(v)) return "[" + v.map(fmtRoadmapVal).join(", ") + "]"
    if (v && typeof v === "object") return JSON.stringify(v)
    return String(v)
  }

  // A goal that names a variable, value, or expression exactly should be
  // practiced exactly. Lessons without sourceRequirements intentionally leave
  // naming choices open for the learner.
  const failedSourceRequirements = (lesson.sourceRequirements || [])
    .filter((requirement) => {
      try {
        return !requirement.test(code)
      } catch (error) {
        return true
      }
    })
    .map((requirement) => requirement.message)
  if (lesson.requiresArrow && (!/=>/.test(code) || /\bfunction\b/.test(code)))
    failedSourceRequirements.unshift(
      "This lesson requires an arrow function. Use => instead of function.",
    )
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
      const { ok, lines, consoleOutput } = await lesson.validate(fn, code)
      if (consoleOutput && consoleOutput.length) {
        printRoadmapLine("Console output:", "term-info")
        consoleOutput.forEach((line) =>
          printRoadmapLine("  " + line, "term-info"),
        )
      }
      printRoadmapLine("Lesson check:", "term-dim")
      lines.forEach((line) =>
        printRoadmapLine(
          line,
          line.startsWith("✓") ? "term-pass" : "term-fail",
        ),
      )
      if (ok && failedSourceRequirements.length === 0) {
        printRoadmapLine("All checks passed. Nice work.", "term-pass")
        markRoadmapComplete(lesson.id)
      } else if (failedSourceRequirements.length) {
        printRoadmapLine(
          "✗ Your output may be right, but the goal's exact instruction is not yet followed.",
          "term-fail",
        )
        failedSourceRequirements.forEach((message) =>
          printRoadmapLine("  • " + message, "term-fail"),
        )
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
  printRoadmapLine("Lesson check:", "term-dim")
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

  if (passCount === lesson.tests.length && failedSourceRequirements.length === 0) {
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
    if (failedSourceRequirements.length) {
      printRoadmapLine(
        "✗ Your output may be right, but the goal's exact instruction is not yet followed.",
        "term-fail",
      )
      failedSourceRequirements.forEach((message) =>
        printRoadmapLine("  • " + message, "term-fail"),
      )
    }
  }
}

async function runActiveRoadmapPractical(code) {
  const terminal = document.getElementById("roadmapTerminal")
  terminal.innerHTML = ""
  const formatConsoleValue = (value) => {
    if (typeof value === "string") return value
    if (value && typeof value === "object") return JSON.stringify(value)
    return String(value)
  }
  const runSource = async (source) => {
    const output = []
    const originalLog = console.log
    console.log = (...values) => output.push(values.map(formatConsoleValue).join(" "))
    try {
      await new Function(source)()
      return { output }
    } catch (error) {
      return { output, error }
    } finally {
      console.log = originalLog
    }
  }

  const result = await runSource(code)
  if (result.error) {
    activeRoadmapPractical.passed = false
    terminal.innerHTML = '<div class="term-line term-fail">✗ Your practical code failed to run:</div>'
    const errorLine = document.createElement("div")
    errorLine.className = "term-line term-fail"
    errorLine.textContent = "  " + result.error.message
    terminal.appendChild(errorLine)
    scrollRoadmapTerminalIntoView()
    return
  }

  const expectedOutput = activeRoadmapPractical.practical.expectedOutput
  const outputMatches = JSON.stringify(result.output) === JSON.stringify(expectedOutput)

  // Output alone isn't proof the scenario's instructions were followed
  // (e.g. printing "Sam" from a bare string literal instead of a constant).
  // Run every declared requirement against the submitted source too.
  const requirements = activeRoadmapPractical.practical.requirements || []
  const failedRequirements = requirements
    .filter((requirement) => {
      try {
        return !requirement.test(code)
      } catch (error) {
        return true
      }
    })
    .map((requirement) => requirement.message)

  const isCorrect = outputMatches && failedRequirements.length === 0
  activeRoadmapPractical.passed = isCorrect
  if (isCorrect) {
    if (activeRoadmapPractical.kind === "main")
      roadmapMainPracticalSolved.add(activeRoadmapPractical.lessonId)
    else
      roadmapPracticalSolved.add(activeRoadmapPractical.lessonId)
    buildRoadmapPath()
  } else if (activeRoadmapPractical.kind === "main") {
    const lessonId = activeRoadmapPractical.lessonId
    const attempts = (roadmapMainPracticalAttempts.get(lessonId) || 0) + 1
    roadmapMainPracticalAttempts.set(lessonId, attempts)
    window.ROADMAP_MAIN_PRACTICAL_ATTEMPTS[lessonId] = attempts
    if (attempts >= 3) {
      const hintButton = roadmapDetailEl.querySelector(`[data-main-practical-hint="${lessonId}"]`)
      if (hintButton) {
        hintButton.disabled = false
        hintButton.textContent = "Show interview hint"
      }
    }
  }
  if (result.output.length) {
    terminal.innerHTML = '<div class="term-line term-info">Console output:</div>'
    result.output.forEach((line) => {
      const resultLine = document.createElement("div")
      resultLine.className = "term-line " + (isCorrect ? "term-pass" : "term-info")
      resultLine.textContent = "  " + line
      terminal.appendChild(resultLine)
    })
  }
  const practicalCheckHeading = document.createElement("div")
  practicalCheckHeading.className = "term-line term-dim"
  practicalCheckHeading.textContent = activeRoadmapPractical.kind === "main"
    ? "Interview check:"
    : "Practical check:"
  terminal.appendChild(practicalCheckHeading)
  const checkLine = document.createElement("div")
  checkLine.className = "term-line " + (isCorrect ? "term-pass" : "term-fail")
  checkLine.textContent = isCorrect
    ? "✓ Correct practical output — your solution produced the expected result."
    : outputMatches
      ? "✗ Right output, wrong approach — this scenario asks for a specific technique."
      : "✗ Not quite — check the scenario and try again."
  terminal.appendChild(checkLine)
  if (!isCorrect && failedRequirements.length) {
    failedRequirements.forEach((message) => {
      const reqLine = document.createElement("div")
      reqLine.className = "term-line term-fail"
      reqLine.textContent = "  • " + message
      terminal.appendChild(reqLine)
    })
  }
  if (!isCorrect && !outputMatches && expectedOutput.length) {
    const expectedLine = document.createElement("div")
    expectedLine.className = "term-line term-dim"
    expectedLine.textContent = "Expected console output: " + expectedOutput.join(" | ")
    terminal.appendChild(expectedLine)
  }
  scrollRoadmapTerminalIntoView()
}

function showPracticalAdvanceError(message = "Finish this practical with the correct output before the next lesson unlocks.") {
  const terminal = document.getElementById("roadmapTerminal")
  if (!terminal) return
  const errorLine = document.createElement("div")
  errorLine.className = "term-line term-fail"
  errorLine.textContent = "✗ " + message
  terminal.appendChild(errorLine)
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

  // Before a workspace is opened, Ctrl+Enter is the keyboard equivalent of
  // the visible “Try it” button.
  if (
    (event.ctrlKey || event.metaKey) &&
    event.key === "Enter" &&
    event.target.tagName !== "TEXTAREA" &&
    roadmapDetailEl.querySelector(".roadmap-workspace.is-concept-first")
  ) {
    event.preventDefault()
    document.getElementById("roadmapWorkspaceStart")?.click()
    return
  }

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

  if ((e.ctrlKey || e.metaKey) && e.key === "/") {
    e.preventDefault()
    const changed = toggleLineComment(val, start, end)
    codeInput.value = changed.value
    codeInput.selectionStart = changed.selectionStart
    codeInput.selectionEnd = changed.selectionEnd
    updateGutter()
    refreshHighlight()
    return
  }

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

  // Opening brackets and quotes wrap a selection, or create an empty pair.
  if (PAIRS[e.key] && !e.metaKey && !e.ctrlKey && !e.altKey) {
    const close = PAIRS[e.key]
    if (hasSelection) {
      e.preventDefault()
      codeInput.value =
        val.slice(0, start) + e.key + val.slice(start, end) + close + val.slice(end)
      // Keep the original text selected inside its new wrapper.
      codeInput.selectionStart = start + 1
      codeInput.selectionEnd = end + 1
      updateGutter()
      refreshHighlight()
      return
    }
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
