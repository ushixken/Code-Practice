/* ============ PROBLEM SET ============ */
const PROBLEMS = [
  // ---------------- EASY ----------------
  {
    id:'sleepIn', difficulty:'easy', name:'sleepIn',
    signature:'function sleepIn(weekday, vacation) {\n  \n}',
    desc:`<p>The parameter <b>weekday</b> is true if it is a weekday, and the parameter <b>vacation</b> is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation.</p><p>Return true if we sleep in.</p>`,
    examples:[['sleepIn(false, false)','true'],['sleepIn(true, false)','false'],['sleepIn(false, true)','true']],
    hint:'Translate the sentence directly: "not a weekday OR on vacation" → <code>!weekday || vacation</code>. No if/else needed — the expression already is the boolean.',
    tests:[[[false,false],true],[[true,false],false],[[false,true],true],[[true,true],true]]
  },
  {
    id:'monkeyTrouble', difficulty:'easy', name:'monkeyTrouble',
    signature:'function monkeyTrouble(aSmile, bSmile) {\n  \n}',
    desc:`<p>We have two monkeys, <b>a</b> and <b>b</b>, and the parameters <b>aSmile</b> and <b>bSmile</b> indicate if each is smiling.</p><p>We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.</p>`,
    examples:[['monkeyTrouble(true, true)','true'],['monkeyTrouble(true, false)','false'],['monkeyTrouble(false, false)','true']],
    hint:'Trouble happens exactly when the two values are the <em>same</em>. Compare with <code>===</code>: <code>return aSmile === bSmile;</code>',
    tests:[[[true,true],true],[[true,false],false],[[false,false],true],[[false,true],false]]
  },
  {
    id:'sumDouble', difficulty:'easy', name:'sumDouble',
    signature:'function sumDouble(a, b) {\n  \n}',
    desc:`<p>Given two int values, return their sum. Unless the two values are the same, then return double their sum.</p>`,
    examples:[['sumDouble(1, 2)','3'],['sumDouble(3, 2)','5'],['sumDouble(2, 2)','8']],
    hint:'Check equality first as the special case: <code>if (a === b) return (a+b)*2;</code> then just <code>return a+b;</code> after.',
    tests:[[[1,2],3],[[3,2],5],[[2,2],8],[[-1,-1],-4]]
  },
  {
    id:'diff21', difficulty:'easy', name:'diff21',
    signature:'function diff21(n) {\n  \n}',
    desc:`<p>Given an int <b>n</b>, return the absolute difference between <b>n</b> and 21, except return double the absolute difference if <b>n</b> is over 21.</p>`,
    examples:[['diff21(19)','2'],['diff21(10)','11'],['diff21(21)','0'],['diff21(25)','8']],
    hint:'Use <code>Math.abs(n - 21)</code> to get the distance regardless of sign, then double it only when <code>n &gt; 21</code>.',
    tests:[[[19],2],[[10],11],[[21],0],[[25],8],[[22],2]]
  },
  {
    id:'makes10', difficulty:'easy', name:'makes10',
    signature:'function makes10(a, b) {\n  \n}',
    desc:`<p>Given 2 ints, <b>a</b> and <b>b</b>, return true if one of them is 10 or if their sum is 10.</p>`,
    examples:[['makes10(9, 10)','true'],['makes10(9, 9)','false'],['makes10(1, 9)','true']],
    hint:"Watch operator precedence — you need <code>a === 10</code>, not just <code>a</code>, since a truthy number isn't the same as \"equals 10\".",
    tests:[[[9,10],true],[[9,9],false],[[1,9],true],[[5,5],true],[[6,2],false]]
  },
  {
    id:'nearHundred', difficulty:'easy', name:'nearHundred',
    signature:'function nearHundred(n) {\n  \n}',
    desc:`<p>Given an int <b>n</b>, return true if it is within 10 of 100 or 200. Note: <code>Math.abs(num)</code> computes the absolute value of a number.</p>`,
    examples:[['nearHundred(93)','true'],['nearHundred(90)','true'],['nearHundred(89)','false'],['nearHundred(205)','true']],
    hint:'"Within 10 of X" means the distance is 10 or less: <code>Math.abs(n - X) &lt;= 10</code>. Combine both targets with <code>||</code>.',
    tests:[[[93],true],[[90],true],[[89],false],[[205],true],[[211],false]]
  },
  {
    id:'notString', difficulty:'easy', name:'notString',
    signature:'function notString(str) {\n  \n}',
    desc:`<p>Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.</p>`,
    examples:[["notString('candy')","'not candy'"],["notString('not candy')","'not candy'"],["notString('is not')","'not is not'"]],
    hint:"<code>includes()</code> checks anywhere in the string. You need <code>str.startsWith('not')</code> to check the beginning specifically — that's the trap in <code>'is not'</code>.",
    tests:[[["candy"],"not candy"],[["not candy"],"not candy"],[["is not"],"not is not"],[[""],"not "]]
  },
  {
    id:'removeChar', difficulty:'easy', name:'removeChar',
    signature:'function removeChar(str, n) {\n  \n}',
    desc:`<p>Given a non-empty string and an int <b>n</b>, return a new string where the char at index <b>n</b> has been removed. The value of <b>n</b> will be a valid index of a char in the original string.</p>`,
    examples:[["removeChar('hello', 2)","'helo'"],["removeChar('hello', 0)","'ello'"],["removeChar('hello', 4)","'hell'"]],
    hint:'Split the string into two slices, skipping index n: <code>str.slice(0, n) + str.slice(n + 1)</code>.',
    tests:[[["hello",2],"helo"],[["hello",0],"ello"],[["hello",4],"hell"],[["at",0],"t"]]
  },
  // ---------------- MEDIUM ----------------
  {
    id:'posNeg', difficulty:'medium', name:'posNeg',
    signature:'function posNeg(a, b, negative) {\n  \n}',
    desc:`<p>Given 2 int values, return true if one is negative and one is positive. Except if the parameter <b>negative</b> is true, then return true only if both are negative.</p>`,
    examples:[['posNeg(1, -1, false)','true'],['posNeg(-1, 1, false)','true'],['posNeg(-4, -5, true)','true'],['posNeg(-4, 5, true)','false']],
    hint:'Two branches: when <code>negative</code> is true, check both are negative. Otherwise check opposite signs — remember "one negative, one positive" can happen two ways, so combine with <code>||</code>.',
    tests:[[[1,-1,false],true],[[-1,1,false],true],[[-4,-5,true],true],[[-4,5,true],false],[[1,2,false],false],[[1,2,true],false]]
  },
  {
    id:'caughtSpeeding', difficulty:'medium', name:'caughtSpeeding',
    signature:'function caughtSpeeding(speed, isBirthday) {\n  \n}',
    desc:`<p>You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket.</p><p>If speed is 60 or less, result is 0. If speed is between 61 and 80 inclusive, result is 1. If speed is 81 or more, result is 2. Unless it is your birthday — on that day, your speed can be 5 higher in all cases.</p>`,
    examples:[['caughtSpeeding(60, false)','0'],['caughtSpeeding(65, false)','1'],['caughtSpeeding(65, true)','0'],['caughtSpeeding(90, true)','2']],
    hint:"Shift the thresholds up by 5 when it's your birthday. Try subtracting 5 from speed first if it's your birthday, then apply the normal thresholds to that adjusted number.",
    tests:[[[60,false],0],[[65,false],1],[[65,true],0],[[90,true],2],[[81,false],2],[[85,true],1]]
  },
  {
    id:'cigarParty', difficulty:'medium', name:'cigarParty',
    signature:'function cigarParty(cigars, isWeekend) {\n  \n}',
    desc:`<p>When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is a weekend, in which case there is no upper bound on the number of cigars.</p><p>Return true if the party with the given values is successful.</p>`,
    examples:[['cigarParty(30, false)','false'],['cigarParty(50, false)','true'],['cigarParty(70, true)','true']],
    hint:'Two separate rules to OR together: weekday needs <code>cigars &gt;= 40 &amp;&amp; cigars &lt;= 60</code>; weekend only needs <code>cigars &gt;= 40</code>.',
    tests:[[[30,false],false],[[50,false],true],[[70,true],true],[[70,false],false],[[40,false],true],[[35,true],false]]
  },
  {
    id:'dateFashion', difficulty:'medium', name:'dateFashion',
    signature:'function dateFashion(you, date) {\n  \n}',
    desc:`<p>You and your date are trying to get a table at a restaurant. The parameter <b>you</b> is the stylishness of your clothes, in the range 0..10, and <b>date</b> is the stylishness of your date's clothes.</p><p>If either of you is 2 or less, the result is 0 (you can't get in). If either of you is 8 or more, the result is 2 (you get the best table). Otherwise the result is 1.</p>`,
    examples:[['dateFashion(5, 10)','2'],['dateFashion(5, 2)','0'],['dateFashion(5, 5)','1']],
    hint:'Check the "either is 2 or less" rule first (it should win even if the other is 8+), then check "either is 8 or more", then default to 1.',
    tests:[[[5,10],2],[[5,2],0],[[5,5],1],[[2,2],0],[[9,9],2],[[8,2],0]]
  },
  {
    id:'squirrelPlay', difficulty:'medium', name:'squirrelPlay',
    signature:'function squirrelPlay(temp, isSummer) {\n  \n}',
    desc:`<p>The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90.</p><p>Given an int temp and a boolean isSummer, return true if the squirrels play and false otherwise.</p>`,
    examples:[['squirrelPlay(70, false)','true'],['squirrelPlay(95, false)','false'],['squirrelPlay(95, true)','true']],
    hint:'Pick the upper bound first based on <code>isSummer</code> (90 or 100), then check <code>temp &gt;= 60 &amp;&amp; temp &lt;= upperBound</code>.',
    tests:[[[70,false],true],[[95,false],false],[[95,true],true],[[59,true],false],[[100,true],true],[[101,true],false]]
  },
  {
    id:'greenTicket', difficulty:'medium', name:'greenTicket',
    signature:'function greenTicket(a, b, c) {\n  \n}',
    desc:`<p>You are driving to the mall, hoping to arrive within 30 minutes. Given the int values <b>a</b>, <b>b</b>, <b>c</b> for the digits of a ticket, return "green" if all digits are equal, "red" if none are equal, otherwise return "orange" if two of them are equal.</p>`,
    examples:[["greenTicket(1, 2, 3)","'red'"],["greenTicket(6, 6, 6)","'green'"],["greenTicket(4, 6, 4)","'orange'"]],
    hint:'Check the strictest case first: all three equal → green. Then check none equal → red (all three pairwise comparisons must be false). Otherwise → orange.',
    tests:[[[1,2,3],"red"],[[6,6,6],"green"],[[4,6,4],"orange"],[[1,1,2],"orange"],[[9,2,9],"orange"]]
  },
  // ---------------- HARD ----------------
  {
    id:'blackjack', difficulty:'hard', name:'blackjack',
    signature:'function blackjack(a, b) {\n  \n}',
    desc:`<p>Given 2 int values greater than 0, whichever value is nearest to 21 without going over is returned. If both go over 21, return 0.</p>`,
    examples:[['blackjack(19, 21)','21'],['blackjack(21, 22)','21'],['blackjack(22, 50)','0']],
    hint:"Define a helper idea in your head: a value 'busts' if it's over 21. Handle both-bust, one-bust, and neither-bust as three separate cases.",
    tests:[[[19,21],21],[[21,22],21],[[22,50],0],[[15,17],17],[[22,21],21]]
  },
  {
    id:'evenlySpaced', difficulty:'hard', name:'evenlySpaced',
    signature:'function evenlySpaced(a, b, c) {\n  \n}',
    desc:`<p>Given three int values, a b c, return true if it is possible to add two of the ints to get the third.</p>`,
    examples:[['evenlySpaced(1, 2, 3)','true'],['evenlySpaced(3, 2, 3)','true'],['evenlySpaced(3, 2, 2)','false']],
    hint:'There are three combinations to test: <code>a+b===c</code>, <code>a+c===b</code>, or <code>b+c===a</code>. Combine them with <code>||</code>.',
    tests:[[[1,2,3],true],[[3,2,3],true],[[3,2,2],false],[[2,2,4],true],[[5,1,4],true]]
  },
  {
    id:'luckySum', difficulty:'hard', name:'luckySum',
    signature:'function luckySum(a, b, c) {\n  \n}',
    desc:`<p>Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.</p>`,
    examples:[['luckySum(1, 2, 3)','6'],['luckySum(1, 2, 13)','3'],['luckySum(1, 13, 3)','1'],['luckySum(13, 2, 3)','0']],
    hint:'Check from left to right: if <code>a===13</code> everything is wiped out (return 0). Else if <code>b===13</code>, only <code>a</code> counts. Else if <code>c===13</code>, only <code>a+b</code> counts. Otherwise sum all three.',
    tests:[[[1,2,3],6],[[1,2,13],3],[[1,13,3],1],[[13,2,3],0],[[13,13,13],0]]
  },
  {
    id:'roundSum', difficulty:'hard', name:'roundSum',
    signature:'function roundSum(a, b, c) {\n  \n}',
    desc:`<p>For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10.</p><p>Given 3 int values, a b c, return the sum of their rounded values.</p>`,
    examples:[['roundSum(16, 17, 18)','60'],['roundSum(12, 13, 14)','30'],['roundSum(5, 15, 25)','40']],
    hint:'Write a small rounding helper inside the function first: <code>round10(n) = Math.round(n / 10) * 10</code> works nicely — verify it matches "5 rounds up" behavior for your test cases.',
    tests:[[[16,17,18],60],[[12,13,14],30],[[5,15,25],40],[[0,0,0],0]]
  },
  {
    id:'countEvens', difficulty:'hard', name:'countEvens',
    signature:'function countEvens(nums) {\n  \n}',
    desc:`<p>Given an array of ints, return the number of elements that are equal to their position in the array, treating index 0 counting as even.</p><p>(Classic Array-1 style problem.) Return the count of even numbers in the array.</p>`,
    examples:[['countEvens([2, 1, 2, 3, 4])','3'],['countEvens([2, 2, 0])','3'],['countEvens([1, 3, 5])','0']],
    hint:'Loop over the array and check each element with <code>n % 2 === 0</code>, or use <code>arr.filter(n => n % 2 === 0).length</code>.',
    tests:[[[[2,1,2,3,4]],3],[[[2,2,0]],3],[[[1,3,5]],0],[[[]],0]]
  },
  {
    id:'maxBlock',difficulty:'hard', name:'maxBlock',
    signature:'function maxBlock(str) {\n  \n}',
    desc:`<p>Given a string, look for a "block" of consecutive repeated letters, and return the length of the largest such block. For example, "xxyyyzz" contains three blocks: "xx" length 2, "yyy" length 3, and "zz" length 2, so the largest is 3.</p>`,
    examples:[["maxBlock('xxyyyzz')","3"],["maxBlock('xxyyzz')","2"],["maxBlock('xxxxx')","5"]],
    hint:"Walk through the string with a loop, tracking the current run length. When the current char differs from the previous one, compare and reset the run counter — don't forget to check the final run after the loop ends.",
    tests:[[["xxyyyzz"],3],[["xxyyzz"],2],[["xxxxx"],5],[["abc"],1],[["mississippi"],2]]
  }
];

/* ============ ROADMAP (JS fundamentals course) ============ */
const ROADMAP = [
  {
    id: 'variables', level: 'easy', title: 'Variables (var, let, const)',
    summary: 'Storing data with let, const, and var',
    content: `
      <p><b>Variables</b> are named containers for values. Modern JS mostly uses two keywords:</p>
      <p><code>let</code> — a variable that can be reassigned later.<br><code>const</code> — a variable that cannot be reassigned after it's set.</p>
      <p>You'll also see <code>var</code> in older code, but <code>let</code>/<code>const</code> fixed some of its quirks (like leaking outside blocks), so prefer them.</p>
      <div class="example"><b>let score = 0;</b> score = score + 10; // OK, score is now 10</div>
      <div class="example"><b>const name = 'Ada';</b> name = 'Bob'; // ❌ TypeError</div>
    `,
    fnName: 'declareAge',
    starter: 'function declareAge() {\n  // Declare a variable named age using `let`,\n  // set it to 25, then return it.\n\n}',
    task: 'Declare a variable called <code>age</code> with <code>let</code>, assign it <code>25</code>, and return it.',
    testMode: 'io',
    tests: [[[], 25]]
  },
  {
    id: 'dataTypes', level: 'easy', title: 'Data Types',
    summary: 'string, number, boolean, array, object, and typeof',
    content: `
      <p>JavaScript has a handful of core types: <b>string</b> ('hi'), <b>number</b> (42), <b>boolean</b> (true/false), <b>array</b> ([1,2,3]), <b>object</b> ({}), and <b>undefined/null</b> for "nothing here".</p>
      <p>The <code>typeof</code> operator tells you what type a value is at runtime: <code>typeof 5</code> is <code>'number'</code>, <code>typeof 'hi'</code> is <code>'string'</code>.</p>
      <p>Arrays are actually a special kind of object, so <code>typeof [1,2]</code> is <code>'object'</code> too — that's a classic gotcha.</p>
    `,
    fnName: 'describeType',
    starter: "function describeType(value) {\n  // Return 'string', 'number', or 'boolean'\n  // depending on the type of `value`.\n\n}",
    task: "Return <code>'string'</code>, <code>'number'</code>, or <code>'boolean'</code> depending on the type of the argument, using <code>typeof</code>.",
    testMode: 'io',
    tests: [[['hi'], 'string'], [[42], 'number'], [[true], 'boolean'], [[''], 'string']]
  },
  {
    id: 'operators', level: 'easy', title: 'Operators',
    summary: 'Arithmetic, comparison, and logical operators',
    content: `
      <p><b>Arithmetic:</b> <code>+ - * / %</code>. <b>Comparison:</b> always prefer <code>===</code> / <code>!==</code> over <code>==</code>/<code>!=</code>, since the loose versions silently convert types.</p>
      <p><b>Logical:</b> <code>&&</code> (and), <code>||</code> (or), <code>!</code> (not) combine boolean expressions.</p>
      <div class="example"><b>5 == '5'</b> → true (loose, converts types)</div>
      <div class="example"><b>5 === '5'</b> → false (strict, no conversion)</div>
    `,
    fnName: 'isAdult',
    starter: 'function isAdult(age) {\n  // Return true if age is 18 or over.\n\n}',
    task: 'Return <code>true</code> if <code>age</code> is 18 or greater, using a comparison operator.',
    testMode: 'io',
    tests: [[[18], true], [[17], false], [[30], true], [[0], false]]
  },
  {
    id: 'conditionals', level: 'easy', title: 'Conditionals (if / else)',
    summary: 'Branching logic with if, else if, and else',
    content: `
      <p><code>if</code>/<code>else</code> lets your code take different paths depending on a condition. Chain <code>else if</code> for multiple branches, and always check the most specific condition first.</p>
      <div class="example"><b>if (x > 10) { ... } else if (x > 5) { ... } else { ... }</b></div>
    `,
    fnName: 'trafficAction',
    starter: "function trafficAction(light) {\n  // 'red' -> 'stop'\n  // 'yellow' -> 'slow down'\n  // 'green' -> 'go'\n\n}",
    task: "Given a traffic light color, return <code>'stop'</code> for red, <code>'slow down'</code> for yellow, and <code>'go'</code> for green.",
    testMode: 'io',
    tests: [[['red'], 'stop'], [['yellow'], 'slow down'], [['green'], 'go']]
  },
  {
    id: 'functions', level: 'medium', title: 'Functions',
    summary: 'Declarations, parameters, and return values',
    content: `
      <p>A function packages up reusable logic. It takes <b>parameters</b> as input and can send a value back with <code>return</code> — once <code>return</code> runs, the function stops immediately.</p>
      <div class="example"><b>function add(a, b) { return a + b; }</b></div>
      <p>Arrow functions are a shorter way to write the same thing: <code>const add = (a, b) => a + b;</code></p>
    `,
    fnName: 'greet',
    starter: "function greet(name) {\n  // Return 'Hello, <name>!'\n\n}",
    task: "Return the string <code>'Hello, '</code> followed by <code>name</code> and an exclamation mark.",
    testMode: 'io',
    tests: [[['Ada'], 'Hello, Ada!'], [['Bob'], 'Hello, Bob!']]
  },
  {
    id: 'arrays', level: 'medium', title: 'Arrays',
    summary: 'Ordered lists: indexing, length, push/pop',
    content: `
      <p>Arrays hold ordered lists of values, indexed from <b>0</b>. <code>arr.length</code> gives the count, <code>arr[0]</code> gets the first item, and <code>arr[arr.length - 1]</code> gets the last.</p>
      <p><code>push()</code> adds to the end, <code>pop()</code> removes from the end.</p>
    `,
    fnName: 'lastItem',
    starter: 'function lastItem(arr) {\n  // Return the last element of arr.\n\n}',
    task: 'Return the last element of the array <code>arr</code>.',
    testMode: 'io',
    tests: [[[[1, 2, 3]], 3], [[['a', 'b']], 'b'], [[[42]], 42]]
  },
  {
    id: 'loops', level: 'medium', title: 'Loops',
    summary: 'Repeating work with for, while, and for...of',
    content: `
      <p>A <code>for</code> loop repeats code a set number of times: <code>for (let i = 0; i &lt; n; i++) { ... }</code>.</p>
      <p><code>for (const item of arr)</code> is a cleaner way to walk through every item in an array when you don't need the index.</p>
    `,
    fnName: 'sumArray',
    starter: 'function sumArray(arr) {\n  // Return the sum of all numbers in arr.\n\n}',
    task: 'Loop through <code>arr</code> and return the sum of all its numbers.',
    testMode: 'io',
    tests: [[[[1, 2, 3]], 6], [[[]], 0], [[[5, -5, 10]], 10]]
  },
  {
    id: 'objects', level: 'medium', title: 'Objects',
    summary: 'Key-value pairs and dot/bracket access',
    content: `
      <p>Objects group related data as key-value pairs: <code>{ first: 'Ada', last: 'Lovelace' }</code>. Access a value with dot notation (<code>person.first</code>) or brackets (<code>person['first']</code>) when the key is dynamic.</p>
    `,
    fnName: 'getFullName',
    starter: 'function getFullName(person) {\n  // person is { first, last }.\n  // Return "First Last".\n\n}',
    task: "Given <code>person = { first, last }</code>, return <code>'First Last'</code> as one string.",
    testMode: 'io',
    tests: [[[{ first: 'Ada', last: 'Lovelace' }], 'Ada Lovelace'], [[{ first: 'Grace', last: 'Hopper' }], 'Grace Hopper']]
  },
  {
    id: 'scopeClosures', level: 'hard', title: 'Scope & Closures',
    summary: 'Lexical scope and functions that remember variables',
    content: `
      <p>A <b>closure</b> is a function that "remembers" variables from the scope it was created in, even after that outer function has finished running.</p>
      <div class="example"><b>function multiplyBy(factor) { return x => x * factor; }</b><br>const double = multiplyBy(2);<br>double(5) // 10 — remembers factor</div>
    `,
    fnName: 'multiplyBy',
    starter: 'function multiplyBy(factor) {\n  // Return a function that takes x\n  // and returns x * factor.\n\n}',
    task: 'Return a new function that multiplies its argument by <code>factor</code>.',
    testMode: 'custom',
    validate: async (fn) => {
      const lines = [];
      const inner = fn(3);
      if (typeof inner !== 'function') {
        lines.push('✗ multiplyBy(3) should return a function, not a value.');
        return { ok: false, lines };
      }
      const cases = [[5, 15], [0, 0], [-2, -6]];
      let allOk = true;
      for (const [x, expected] of cases) {
        const actual = inner(x);
        const ok = actual === expected;
        if (!ok) allOk = false;
        lines.push(`${ok ? '✓' : '✗'} multiplyBy(3)(${x}) → ${actual}${ok ? '' : `  (expected ${expected})`}`);
      }
      return { ok: allOk, lines };
    }
  },
  {
    id: 'arrayMethods', level: 'hard', title: 'Array Methods (map / filter)',
    summary: 'Transforming arrays without manual loops',
    content: `
      <p><code>arr.map(fn)</code> returns a new array with <code>fn</code> applied to every element. <code>arr.filter(fn)</code> returns a new array keeping only elements where <code>fn</code> returns true.</p>
      <div class="example"><b>[1,2,3].map(n => n * 2)</b> → [2, 4, 6]</div>
      <div class="example"><b>[1,2,3].filter(n => n > 1)</b> → [2, 3]</div>
    `,
    fnName: 'doubleAll',
    starter: 'function doubleAll(arr) {\n  // Return a new array with every number doubled.\n\n}',
    task: 'Return a new array with every number in <code>arr</code> doubled, using <code>map</code>.',
    testMode: 'io',
    tests: [[[[1, 2, 3]], [2, 4, 6]], [[[]], []], [[[-1, 0, 5]], [-2, 0, 10]]]
  },
  {
    id: 'es6', level: 'hard', title: 'ES6+ (destructuring & spread)',
    summary: 'Modern syntax for pulling values apart and combining them',
    content: `
      <p><b>Destructuring</b> pulls values out of objects/arrays into variables: <code>const { x, y } = point;</code>. The <b>spread operator</b> (<code>...</code>) expands an array/object into individual elements: <code>[...a, ...b]</code> combines two arrays.</p>
    `,
    fnName: 'combine',
    starter: 'function combine(arr1, arr2) {\n  // Return one array containing all\n  // elements of arr1 followed by arr2,\n  // using the spread operator.\n\n}',
    task: 'Return a single array made of <code>arr1</code>\'s items followed by <code>arr2</code>\'s items, using <code>...</code> spread.',
    testMode: 'io',
    tests: [[[[1, 2], [3, 4]], [1, 2, 3, 4]], [[[], [1]], [1]], [[['a'], []], ['a']]]
  },
  {
    id: 'async', level: 'hard', title: 'Async & Promises',
    summary: 'Working with values that resolve later',
    content: `
      <p>A <b>Promise</b> represents a value that isn't ready yet — like data from a network request. <code>async</code> functions let you write <code>await somePromise</code> to pause until it resolves, instead of chaining <code>.then()</code>.</p>
      <div class="example"><b>async function run() { const val = await fetchData(); }</b></div>
    `,
    fnName: 'delayedDouble',
    starter: 'function delayedDouble(n) {\n  // Return a Promise that resolves\n  // with n * 2 after a short delay.\n  // Hint: new Promise(resolve => setTimeout(() => resolve(n*2), 50))\n\n}',
    task: 'Return a <code>Promise</code> that resolves with <code>n * 2</code> after a short delay.',
    testMode: 'custom',
    validate: async (fn) => {
      const lines = [];
      const result = fn(5);
      if (!(result instanceof Promise)) {
        lines.push('✗ delayedDouble(5) should return a Promise (did you forget `new Promise(...)`?)');
        return { ok: false, lines };
      }
      const actual = await result;
      const ok = actual === 10;
      lines.push(`${ok ? '✓' : '✗'} await delayedDouble(5) → ${actual}${ok ? '' : '  (expected 10)'}`);
      return { ok, lines };
    }
  }
];

let roadmapSolved = new Set();
let currentRoadmapIdx = 0;
let roadmapRanOnce = false;

const roadmapView = document.getElementById('roadmapView');
const roadmapNodesEl = document.getElementById('roadmapNodes');
const roadmapDetailEl = document.getElementById('roadmapDetail');
const roadmapProgressFill = document.getElementById('roadmapProgressFill');
const roadmapProgressLabel = document.getElementById('roadmapProgressLabel');
const problemsBtn = document.getElementById('problemsBtn');
const roadmapBtn = document.getElementById('roadmapBtn');
const mainEl = document.querySelector('.main');

function isRoadmapLessonLocked(idx){
  if(idx < 0 || idx >= ROADMAP.length) return true;
  const prevDone = idx === 0 || roadmapSolved.has(ROADMAP[idx-1].id);
  const isDone = roadmapSolved.has(ROADMAP[idx].id);
  return !prevDone && !isDone;
}

function buildRoadmapPath(){
  roadmapNodesEl.innerHTML = '';
  ROADMAP.forEach((lesson, idx)=>{
    const isDone = roadmapSolved.has(lesson.id);
    const isLocked = isRoadmapLessonLocked(idx);
    const isCurrent = idx === currentRoadmapIdx;

    const node = document.createElement('div');
    node.className = 'roadmap-node'
      + (isDone ? ' completed' : '')
      + (isLocked ? ' locked' : '')
      + (isCurrent ? ' current' : '');

    const dotIcon = isDone
      ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
      : isLocked
        ? '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'
        : (idx + 1);

    node.innerHTML = `
      <div class="roadmap-node-dot">${dotIcon}</div>
      <div class="roadmap-node-body">
        <div class="roadmap-node-level ${lesson.level}">${LEVEL_LABELS[lesson.level]}</div>
        <div class="roadmap-node-title">${lesson.title}</div>
        <div class="roadmap-node-summary">${lesson.summary}</div>
      </div>
    `;
    if(!isLocked){
      node.addEventListener('click', ()=> loadRoadmapLesson(idx));
    }
    roadmapNodesEl.appendChild(node);
  });
  updateRoadmapProgress();
}

function updateRoadmapProgress(){
  const pct = Math.round((roadmapSolved.size / ROADMAP.length) * 100);
  roadmapProgressFill.style.width = pct + '%';
  roadmapProgressLabel.textContent = `${roadmapSolved.size} / ${ROADMAP.length} mastered`;
}

function loadRoadmapLesson(idx){
  currentRoadmapIdx = idx;
  roadmapRanOnce = false;
  const lesson = ROADMAP[idx];
  const isDone = roadmapSolved.has(lesson.id);

  roadmapDetailEl.innerHTML = `
    <div class="rp-head">
      <span class="rp-diff ${lesson.level}">${LEVEL_LABELS[lesson.level]}</span>
      <div class="rp-title">${lesson.title}</div>
    </div>
    <div class="rp-body">
      ${lesson.content}
      <div class="rp-section-label">YOUR TURN</div>
      <p>${lesson.task}</p>
      ${isDone ? '<div class="roadmap-complete-banner">✓ Mastered — feel free to keep tweaking the code below.</div>' : ''}
      <div class="roadmap-editor-wrap">
        <div class="roadmap-gutter" id="roadmapGutter">1</div>
        <div class="roadmap-code-area">
          <pre id="roadmapHighlightLayer"></pre>
          <textarea id="roadmapCodeInput" spellcheck="false">${lesson.starter}</textarea>
        </div>
      </div>
      <div class="roadmap-actions">
        <button class="run-btn" id="roadmapRunBtn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          Run
        </button>
        <button class="reset-btn" id="roadmapResetBtn">Reset</button>
        <button class="roadmap-skip-btn" id="roadmapSkipBtn">Already know this — mark as mastered</button>
      </div>
      <div class="roadmap-terminal" id="roadmapTerminal">
        <div class="term-line term-dim">Write your answer above, then hit Run.</div>
      </div>
    </div>
  `;

  const roadmapCodeInputEl = document.getElementById('roadmapCodeInput');
  updateRoadmapGutter();
  refreshRoadmapHighlight();

  document.getElementById('roadmapRunBtn').addEventListener('click', runRoadmapCode);
  document.getElementById('roadmapResetBtn').addEventListener('click', ()=>{
    roadmapCodeInputEl.value = lesson.starter;
    updateRoadmapGutter();
    refreshRoadmapHighlight();
    roadmapRanOnce = false;
    roadmapCodeInputEl.focus();
  });
  document.getElementById('roadmapSkipBtn').addEventListener('click', ()=>{
    markRoadmapComplete(lesson.id);
  });

  roadmapCodeInputEl.addEventListener('input', ()=>{
    updateRoadmapGutter();
    refreshRoadmapHighlight();
    roadmapRanOnce = false;
  });
  roadmapCodeInputEl.addEventListener('scroll', ()=>{
    document.getElementById('roadmapGutter').scrollTop = roadmapCodeInputEl.scrollTop;
    const layer = document.getElementById('roadmapHighlightLayer');
    layer.scrollTop = roadmapCodeInputEl.scrollTop;
    layer.scrollLeft = roadmapCodeInputEl.scrollLeft;
  });
  roadmapCodeInputEl.addEventListener('keydown', (e)=>{
    const val = roadmapCodeInputEl.value;
    const start = roadmapCodeInputEl.selectionStart, end = roadmapCodeInputEl.selectionEnd;
    const hasSelection = start !== end;

    // Tab: indent
    if(e.key === 'Tab'){
      e.preventDefault();
      roadmapCodeInputEl.value = val.slice(0, start) + '  ' + val.slice(end);
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd = start + 2;
      updateRoadmapGutter(); refreshRoadmapHighlight();
      return;
    }

    // Run shortcut — press once to run, press again (without editing) to advance
    if((e.metaKey || e.ctrlKey) && e.key === 'Enter'){
      e.preventDefault();
      if(roadmapRanOnce){
        const nextIdx = currentRoadmapIdx + 1;
        if(nextIdx >= ROADMAP.length){
          return;
        }
        if(isRoadmapLessonLocked(nextIdx)){
          const termEl = document.getElementById('roadmapTerminal');
          if(termEl){
            const div = document.createElement('div');
            div.className = 'term-line term-dim';
            div.textContent = 'Pass this lesson\'s checks (or click "Already know this") to unlock the next one.';
            termEl.appendChild(div);
          }
          return;
        }
        loadRoadmapLesson(nextIdx);
      } else {
        runRoadmapCode();
      }
      return;
    }

    // Auto-close bracket/quote pairs
    if(!hasSelection && PAIRS[e.key] && !e.metaKey && !e.ctrlKey && !e.altKey){
      const nextChar = val[end];
      const isQuote = e.key === "'" || e.key === '"' || e.key === '`';
      if(isQuote && nextChar === e.key){
        e.preventDefault();
        roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd = start + 1;
        return;
      }
      const prevChar = val[start-1];
      if(isQuote && prevChar && /[A-Za-z0-9_]/.test(prevChar)){
        return;
      }
      e.preventDefault();
      const close = PAIRS[e.key];
      roadmapCodeInputEl.value = val.slice(0,start) + e.key + close + val.slice(end);
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd = start + 1;
      updateRoadmapGutter(); refreshRoadmapHighlight();
      return;
    }

    // Typing a closing char that's already right there: skip over it
    if(!hasSelection && CLOSERS.has(e.key) && val[end] === e.key){
      e.preventDefault();
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd = end + 1;
      return;
    }

    // Backspace on an empty pair removes both characters together
    if(e.key === 'Backspace' && !hasSelection && start > 0){
      const prevChar = val[start-1];
      const nextChar = val[start];
      if(PAIRS[prevChar] === nextChar){
        e.preventDefault();
        roadmapCodeInputEl.value = val.slice(0,start-1) + val.slice(start+1);
        roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd = start - 1;
        updateRoadmapGutter(); refreshRoadmapHighlight();
        return;
      }
    }

    // Enter: auto-indent to match current line, add one level after an opening bracket
    if(e.key === 'Enter' && !hasSelection){
      e.preventDefault();
      const before = val.slice(0, start);
      const after = val.slice(start);
      const lineStart = before.lastIndexOf('\n') + 1;
      const currentLine = before.slice(lineStart);
      const indent = getIndent(currentLine);
      const prevChar = before[start-1];
      const nextChar = after[0];

      let insert = '\n' + indent;
      let cursorOffset = insert.length;

      if(prevChar === '{' || prevChar === '[' || prevChar === '('){
        insert += '  ';
        cursorOffset = insert.length;
        if(CLOSERS.has(nextChar) && PAIRS[prevChar] === nextChar){
          insert += '\n' + indent;
        }
      }

      roadmapCodeInputEl.value = before + insert + after;
      roadmapCodeInputEl.selectionStart = roadmapCodeInputEl.selectionEnd = start + cursorOffset;
      updateRoadmapGutter(); refreshRoadmapHighlight();
      return;
    }
  });

  buildRoadmapPath();
}

function updateRoadmapGutter(){
  const gutterEl = document.getElementById('roadmapGutter');
  const codeInput = document.getElementById('roadmapCodeInput');
  if(!gutterEl || !codeInput) return;
  const lines = codeInput.value.split('\n').length;
  let out = '';
  for(let i = 1; i <= lines; i++) out += i + '\n';
  gutterEl.textContent = out;
}

function refreshRoadmapHighlight(){
  const codeInput = document.getElementById('roadmapCodeInput');
  const layer = document.getElementById('roadmapHighlightLayer');
  if(!codeInput || !layer) return;
  let html = highlightCode(codeInput.value);
  if(codeInput.value.endsWith('\n')) html += ' ';
  layer.innerHTML = html;
  layer.scrollTop = codeInput.scrollTop;
  layer.scrollLeft = codeInput.scrollLeft;
}

function markRoadmapComplete(lessonId){
  const wasAlreadySolved = roadmapSolved.has(lessonId);
  roadmapSolved.add(lessonId);
  buildRoadmapPath();
  // If this is the lesson currently open, just show the "mastered" banner in
  // place — don't reload the lesson, which would wipe out the code the user
  // just wrote and reset the run-shortcut state.
  if(!wasAlreadySolved && ROADMAP[currentRoadmapIdx] && ROADMAP[currentRoadmapIdx].id === lessonId){
    showRoadmapMasteredBanner();
  }
}

function showRoadmapMasteredBanner(){
  const bodyEl = roadmapDetailEl.querySelector('.rp-body');
  const editorWrap = bodyEl && bodyEl.querySelector('.roadmap-editor-wrap');
  if(!bodyEl || !editorWrap || bodyEl.querySelector('.roadmap-complete-banner')) return;
  const banner = document.createElement('div');
  banner.className = 'roadmap-complete-banner';
  banner.textContent = '✓ Mastered — feel free to keep tweaking the code below.';
  bodyEl.insertBefore(banner, editorWrap);
}

async function runRoadmapCode(){
  roadmapRanOnce = true;
  const lesson = ROADMAP[currentRoadmapIdx];
  const code = document.getElementById('roadmapCodeInput').value;
  const termEl = document.getElementById('roadmapTerminal');
  termEl.innerHTML = '';

  const printRoadmapLine = (text, cls)=>{
    const div = document.createElement('div');
    div.className = 'term-line ' + (cls || '');
    div.textContent = text;
    termEl.appendChild(div);
  };
  const fmtRoadmapVal = (v)=>{
    if(typeof v === 'string') return `'${v}'`;
    if(Array.isArray(v)) return '[' + v.map(fmtRoadmapVal).join(', ') + ']';
    if(v && typeof v === 'object') return JSON.stringify(v);
    return String(v);
  };

  let fn;
  try{
    const wrapper = new Function(`${code}\nreturn ${lesson.fnName};`);
    fn = wrapper();
    if(typeof fn !== 'function'){
      throw new Error(`Could not find a function named "${lesson.fnName}". Make sure your function keeps its original name.`);
    }
  }catch(err){
    printRoadmapLine('✗ Your code failed to run:', 'term-fail');
    printRoadmapLine('  ' + err.message, 'term-fail');
    return;
  }

  if(lesson.testMode === 'custom'){
    try{
      const { ok, lines } = await lesson.validate(fn);
      lines.forEach(line => printRoadmapLine(line, line.startsWith('✓') ? 'term-pass' : 'term-fail'));
      if(ok){
        printRoadmapLine('All checks passed. Nice work.', 'term-pass');
        markRoadmapComplete(lesson.id);
      }
    }catch(err){
      printRoadmapLine('✗ Your code threw an error: ' + err.message, 'term-fail');
    }
    return;
  }

  let passCount = 0;
  for(let i = 0; i < lesson.tests.length; i++){
    const [args, expected] = lesson.tests[i];
    const callStr = `${lesson.fnName}(${args.map(fmtRoadmapVal).join(', ')})`;
    try{
      const actual = await fn(...args);
      const ok = JSON.stringify(actual) === JSON.stringify(expected);
      if(ok){
        passCount++;
        printRoadmapLine(`✓ Test ${i+1}  ${callStr} → ${fmtRoadmapVal(actual)}`, 'term-pass');
      }else{
        printRoadmapLine(`✗ Test ${i+1}  ${callStr}`, 'term-fail');
        printRoadmapLine(`    expected ${fmtRoadmapVal(expected)}, got ${fmtRoadmapVal(actual)}`, 'term-fail');
      }
    }catch(err){
      printRoadmapLine(`✗ Test ${i+1}  ${callStr}  threw an error: ${err.message}`, 'term-fail');
    }
  }

  if(passCount === lesson.tests.length){
    printRoadmapLine(`All ${passCount}/${lesson.tests.length} checks passed. Nice work.`, 'term-pass');
    markRoadmapComplete(lesson.id);
  }else{
    printRoadmapLine(`${passCount}/${lesson.tests.length} checks passed. Keep going.`, 'term-info');
  }
}

problemsBtn.addEventListener('click', ()=>{
  mainEl.classList.remove('view-roadmap');
  problemsBtn.classList.add('active');
  roadmapBtn.classList.remove('active');
});
roadmapBtn.addEventListener('click', ()=>{
  mainEl.classList.add('view-roadmap');
  roadmapBtn.classList.add('active');
  problemsBtn.classList.remove('active');
  if(!roadmapDetailEl.innerHTML.trim()){
    loadRoadmapLesson(0);
  }
});

/* ============ LEVELS (course map) ============ */
// Internal difficulty keys stay 'easy'/'medium'/'hard' (used by data + CSS),
// but the course is presented to the user as Beginner / Advanced / Expert.
const LEVEL_LABELS = { easy: 'BEGINNER', medium: 'ADVANCED', hard: 'EXPERT' };
let levelFilter = 'all'; // 'all' | 'easy' | 'medium' | 'hard'

/* ============ STATE ============ */
let solvedSet = new Set();
let currentIdx = 0;
let terminalCollapsed = false;

const treeEl = document.getElementById('tree');
const codeInput = document.getElementById('codeInput');
const highlightLayer = document.getElementById('highlightLayer');
const gutterEl = document.getElementById('gutter');
const rpDiff = document.getElementById('rpDiff');
const rpTitle = document.getElementById('rpTitle');
const rpBody = document.getElementById('rpBody');
const tabName = document.getElementById('tabName');
const currentProbName = document.getElementById('currentProbName');
const terminalBody = document.getElementById('terminalBody');
const terminalEl = document.getElementById('terminal');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const sbStatus = document.getElementById('sbStatus');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resizeHandle = document.getElementById('resizeHandle');
const levelSelect = document.getElementById('levelSelect');


function buildTree(){
  treeEl.innerHTML = '';
  let groups = [['easy',LEVEL_LABELS.easy],['medium',LEVEL_LABELS.medium],['hard',LEVEL_LABELS.hard]];
  if(levelFilter !== 'all'){
    groups = groups.filter(([key]) => key === levelFilter);
  }
  groups.forEach(([key, label])=>{
    const glabel = document.createElement('div');
    glabel.className = 'group-label ' + key;
    glabel.innerHTML = `<span class="swatch ${key}"></span>${label}`;
    treeEl.appendChild(glabel);
    PROBLEMS.forEach((p, idx)=>{
      if(p.difficulty !== key) return;
      const item = document.createElement('div');
      item.className = 'prob-item' + (idx===currentIdx ? ' active':'') + (solvedSet.has(p.id) ? ' done':'');
      item.dataset.idx = idx;
      item.innerHTML = `<span class="check">${solvedSet.has(p.id) ? '<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ''}</span><span class="tname">${p.name}.js</span>`;
      item.addEventListener('click', ()=> loadProblem(idx));
      treeEl.appendChild(item);
    });
  });
  updateProgress();
}

function updateProgress(){
  const pct = Math.round((solvedSet.size / PROBLEMS.length) * 100);
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `${solvedSet.size} / ${PROBLEMS.length} solved`;
}

const JS_KEYWORDS = new Set(['function','return','if','else','for','while','do','break','continue','var','let','const','new','typeof','instanceof','in','of','class','extends','super','this','switch','case','default','try','catch','finally','throw','yield','async','await','delete','void','static','get','set','import','export','from','as']);
const JS_BOOLEANS = new Set(['true','false','null','undefined','NaN']);

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function highlightCode(code){
  // Tokenize with one regex pass: comments, strings, numbers, identifiers, punctuation/whitespace
  const tokenRe = /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|(\b\d+\.?\d*\b)|([A-Za-z_$][A-Za-z0-9_$]*)|([{}()[\];,.:?])|(\s+)|([^\s\w])/g;
  let out = '';
  let m;
  let lastIndex = 0;
  while((m = tokenRe.exec(code)) !== null){
    const [full, comment, blockComment, str, num, ident, punct, ws, other] = m;
    if(comment || blockComment){
      out += `<span class="tok-comment">${escapeHtml(full)}</span>`;
    } else if(str){
      out += `<span class="tok-string">${escapeHtml(full)}</span>`;
    } else if(num){
      out += `<span class="tok-number">${escapeHtml(full)}</span>`;
    } else if(ident){
      if(JS_KEYWORDS.has(ident)){
        out += `<span class="tok-keyword">${escapeHtml(full)}</span>`;
      } else if(JS_BOOLEANS.has(ident)){
        out += `<span class="tok-boolean">${escapeHtml(full)}</span>`;
      } else {
        // check if followed by '(' (skipping whitespace) to color as function call
        const rest = code.slice(tokenRe.lastIndex);
        const isCall = /^\s*\(/.test(rest);
        out += isCall
          ? `<span class="tok-function">${escapeHtml(full)}</span>`
          : escapeHtml(full);
      }
    } else if(punct || other){
      out += `<span class="tok-punct">${escapeHtml(full)}</span>`;
    } else {
      out += escapeHtml(full);
    }
  }
  return out;
}

function refreshHighlight(){
  let html = highlightCode(codeInput.value);
  // preserve trailing newline rendering
  if(codeInput.value.endsWith('\n')) html += ' ';
  highlightLayer.innerHTML = html;
  highlightLayer.scrollTop = codeInput.scrollTop;
  highlightLayer.scrollLeft = codeInput.scrollLeft;
}

function updateGutter(){
  const lines = codeInput.value.split('\n').length;
  let out = '';
  for(let i=1;i<=lines;i++) out += i + '\n';
  gutterEl.textContent = out;
}

function loadProblem(idx){
  currentIdx = idx;
  const p = PROBLEMS[idx];

  codeInput.value = p.signature;
  updateGutter();
  refreshHighlight();
  tabName.textContent = p.name + '.js';
  currentProbName.textContent = p.name + '.js';
  rpDiff.textContent = LEVEL_LABELS[p.difficulty] || p.difficulty.toUpperCase();
  rpDiff.className = 'rp-diff ' + p.difficulty;
  rpTitle.textContent = p.name;

  let examplesHtml = p.examples.map(([call,ret])=>`<div class="example"><b>${call}</b> → ${ret}</div>`).join('');
  rpBody.innerHTML = `
    ${p.desc}
    <div class="rp-section-label">EXAMPLES</div>
    ${examplesHtml}
    <div class="rp-section-label">STUCK?</div>
    <div class="hint-box" id="hintBox">
      <div class="hint-label">▸ Reveal hint</div>
      <div class="hint-content">${p.hint}</div>
    </div>
  `;
  document.getElementById('hintBox').addEventListener('click', function(){
    this.classList.toggle('open');
    this.querySelector('.hint-label').textContent = this.classList.contains('open') ? '▾ Hide hint' : '▸ Reveal hint';
  });

  terminalBody.innerHTML = `<div class="term-line term-dim">Write your solution, then hit Run Tests (or ⌘/Ctrl + Enter).</div>`;
  sbStatus.textContent = '●  ready';
  buildTree();
  updateNavButtons();
  codeInput.focus();
}

function updateNavButtons(){
  prevBtn.disabled = currentIdx === 0;
  nextBtn.disabled = currentIdx === PROBLEMS.length - 1;
}

function printLine(text, cls){
  const div = document.createElement('div');
  div.className = 'term-line ' + (cls||'');
  div.textContent = text;
  terminalBody.appendChild(div);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function fmtVal(v){
  if(typeof v === 'string') return `'${v}'`;
  if(Array.isArray(v)) return '[' + v.map(fmtVal).join(', ') + ']';
  return String(v);
}

function runTests(){
  const p = PROBLEMS[currentIdx];
  terminalBody.innerHTML = '';
  printLine(`$ node ${p.name}.test.js`, 'term-prompt');
  printLine('', '');

  let fn;
  try{
    const wrapper = new Function(`${codeInput.value}\nreturn ${p.name};`);
    fn = wrapper();
    if(typeof fn !== 'function'){
      throw new Error(`Could not find a function named "${p.name}". Make sure your function keeps its original name.`);
    }
  }catch(err){
    printLine('✗ Your code failed to run:', 'term-fail');
    printLine('  ' + err.message, 'term-fail');
    sbStatus.textContent = '●  error';
    return;
  }

  let passCount = 0;
  p.tests.forEach((t, i)=>{
    const [args, expected] = t;
    const callStr = `${p.name}(${args.map(fmtVal).join(', ')})`;
    try{
      const actual = fn(...args);
      const ok = JSON.stringify(actual) === JSON.stringify(expected);
      if(ok){
        passCount++;
        printLine(`✓ Test ${i+1}  ${callStr} → ${fmtVal(actual)}`, 'term-pass');
      }else{
        printLine(`✗ Test ${i+1}  ${callStr}`, 'term-fail');
        printLine(`    expected ${fmtVal(expected)}, got ${fmtVal(actual)}`, 'term-fail');
      }
    }catch(err){
      printLine(`✗ Test ${i+1}  ${callStr}  threw an error: ${err.message}`, 'term-fail');
    }
  });

  printLine('', '');
  printLine('─'.repeat(38), 'term-divider');
  if(passCount === p.tests.length){
    printLine(`All ${passCount}/${p.tests.length} tests passed. Nice work.`, 'term-pass');
    solvedSet.add(p.id);
    sbStatus.textContent = '●  passed';
    buildTree();
  }else{
    printLine(`${passCount}/${p.tests.length} tests passed. Keep going.`, 'term-info');
    sbStatus.textContent = `●  ${p.tests.length - passCount} failing`;
  }
}

codeInput.addEventListener('input', ()=>{ updateGutter(); refreshHighlight(); });
codeInput.addEventListener('scroll', ()=>{
  gutterEl.scrollTop = codeInput.scrollTop;
  highlightLayer.scrollTop = codeInput.scrollTop;
  highlightLayer.scrollLeft = codeInput.scrollLeft;
});
const PAIRS = { '(':')', '[':']', '{':'}', "'":"'", '"':'"', '`':'`' };
const CLOSERS = new Set(Object.values(PAIRS));

function getIndent(line){
  const m = line.match(/^[ \t]*/);
  return m ? m[0] : '';
}

codeInput.addEventListener('keydown', (e)=>{
  const val = codeInput.value;
  const start = codeInput.selectionStart, end = codeInput.selectionEnd;
  const hasSelection = start !== end;

  // Tab: indent (or indent selection block)
  if(e.key === 'Tab'){
    e.preventDefault();
    codeInput.value = val.slice(0,start) + '  ' + val.slice(end);
    codeInput.selectionStart = codeInput.selectionEnd = start + 2;
    updateGutter(); refreshHighlight();
    return;
  }

  // Run shortcut
  if((e.metaKey || e.ctrlKey) && e.key === 'Enter'){
    e.preventDefault();
    runTests();
    return;
  }

  // Auto-close bracket/quote pairs
  if(!hasSelection && PAIRS[e.key] && !e.metaKey && !e.ctrlKey && !e.altKey){
    // For quotes: if the char right after cursor is the same quote, just move past it
    // (typing a closing quote yourself) instead of inserting a new pair.
    const nextChar = val[end];
    const isQuote = e.key === "'" || e.key === '"' || e.key === '`';
    if(isQuote && nextChar === e.key){
      e.preventDefault();
      codeInput.selectionStart = codeInput.selectionEnd = start + 1;
      return;
    }
    // Don't auto-pair a quote if we're immediately after a letter/number (likely an apostrophe in a word)
    const prevChar = val[start-1];
    if(isQuote && prevChar && /[A-Za-z0-9_]/.test(prevChar)){
      // let default behavior insert just the quote
      return;
    }
    e.preventDefault();
    const close = PAIRS[e.key];
    codeInput.value = val.slice(0,start) + e.key + close + val.slice(end);
    codeInput.selectionStart = codeInput.selectionEnd = start + 1;
    updateGutter(); refreshHighlight();
    return;
  }

  // Typing a closing char that's already right there: skip over it instead of duplicating
  if(!hasSelection && CLOSERS.has(e.key) && val[end] === e.key){
    e.preventDefault();
    codeInput.selectionStart = codeInput.selectionEnd = end + 1;
    return;
  }

  // Backspace on an empty pair (e.g. "(|)") removes both characters together
  if(e.key === 'Backspace' && !hasSelection && start > 0){
    const prevChar = val[start-1];
    const nextChar = val[start];
    if(PAIRS[prevChar] === nextChar){
      e.preventDefault();
      codeInput.value = val.slice(0,start-1) + val.slice(start+1);
      codeInput.selectionStart = codeInput.selectionEnd = start - 1;
      updateGutter(); refreshHighlight();
      return;
    }
  }

  // Enter: auto-indent to match current line, add one level after an opening bracket
  if(e.key === 'Enter' && !hasSelection){
    e.preventDefault();
    const before = val.slice(0, start);
    const after = val.slice(start);
    const lineStart = before.lastIndexOf('\n') + 1;
    const currentLine = before.slice(lineStart);
    const indent = getIndent(currentLine);
    const prevChar = before[start-1];
    const nextChar = after[0];

    let insert = '\n' + indent;
    let cursorOffset = insert.length;

    if(prevChar === '{' || prevChar === '[' || prevChar === '('){
      insert += '  ';
      cursorOffset = insert.length;
      // If the very next char closes this bracket, push it to its own dedented line
      if(CLOSERS.has(nextChar) && PAIRS[prevChar] === nextChar){
        insert += '\n' + indent;
      }
    }

    codeInput.value = before + insert + after;
    codeInput.selectionStart = codeInput.selectionEnd = start + cursorOffset;
    updateGutter(); refreshHighlight();
    return;
  }
});

document.getElementById('runBtn').addEventListener('click', runTests);
document.getElementById('resetBtn').addEventListener('click', ()=>{
  codeInput.value = PROBLEMS[currentIdx].signature;
  updateGutter();
  refreshHighlight();
  codeInput.focus();
});
document.getElementById('terminalToggle').addEventListener('click', ()=>{
  terminalCollapsed = !terminalCollapsed;
  terminalEl.classList.toggle('collapsed', terminalCollapsed);
});

/* ---- Prev / Next navigation ---- */
prevBtn.addEventListener('click', ()=>{ if(currentIdx > 0) loadProblem(currentIdx - 1); });
nextBtn.addEventListener('click', ()=>{ if(currentIdx < PROBLEMS.length - 1) loadProblem(currentIdx + 1); });

/* ---- Terminal resize (drag up/down) ---- */
let isResizingTerminal = false, resizeStartY = 0, resizeStartHeight = 0;
resizeHandle.addEventListener('mousedown', (e)=>{
  if(terminalCollapsed) return;
  isResizingTerminal = true;
  resizeStartY = e.clientY;
  resizeStartHeight = terminalEl.getBoundingClientRect().height;
  terminalEl.classList.add('resizing');
  document.body.style.userSelect = 'none';
  e.preventDefault();
});
window.addEventListener('mousemove', (e)=>{
  if(!isResizingTerminal) return;
  const delta = resizeStartY - e.clientY; // dragging up = taller terminal
  const maxHeight = Math.round(window.innerHeight * 0.75);
  const newHeight = Math.max(120, Math.min(maxHeight, resizeStartHeight + delta));
  terminalEl.style.height = newHeight + 'px';
});
window.addEventListener('mouseup', ()=>{
  if(isResizingTerminal){
    isResizingTerminal = false;
    terminalEl.classList.remove('resizing');
    document.body.style.userSelect = '';
  }
});

levelSelect.addEventListener('change', ()=>{
  levelFilter = levelSelect.value;
  buildTree();
  // If the current problem got filtered out of view, jump to the first
  // visible one in the newly selected level so the sidebar and editor agree.
  if(levelFilter !== 'all' && PROBLEMS[currentIdx].difficulty !== levelFilter){
    const firstMatch = PROBLEMS.findIndex(p => p.difficulty === levelFilter);
    if(firstMatch !== -1) loadProblem(firstMatch);
  }
});

buildTree();
loadProblem(0);