# Roadmap practicals

`lesson-practicals.js` contains the unlocked practical examples for each roadmap lesson.

To add a new example, append an object to the matching lesson array:

```js
values: [
  // existing practicals
  {
    title: "A clear short title",
    prompt: "What the learner should try after mastering the lesson.",
    code: 'const language = "JavaScript";\nconsole.log(language);'
  }
]
```

Use a different scenario and values than the main lesson exercise. Only use JavaScript features introduced in that lesson or earlier lessons.
