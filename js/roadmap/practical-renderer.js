// Renders the optional follow-up practice that unlocks after a roadmap lesson.
function roadmapPracticalsFor(lessonId) {
  return (
    (window.ROADMAP_PRACTICALS && window.ROADMAP_PRACTICALS[lessonId]) || []
  )
}

function roadmapMainPracticalFor(lessonId) {
  return (window.ROADMAP_MAIN_PRACTICALS && window.ROADMAP_MAIN_PRACTICALS[lessonId]) || null
}

function roadmapMainPracticalMarkup(lessonId) {
  const practical = roadmapMainPracticalFor(lessonId)
  if (!practical) return ""
  return `
    <section class="roadmap-main-practical" aria-label="Interview checkpoint">
      <span class="rp-section-label">INTERVIEW CHECKPOINT</span>
      <h3>${practical.title}</h3>
      <p>${practical.prompt}</p>
      <div class="roadmap-practical-expected"><span>Expected output</span><code>${practical.expectedOutput.join("\n")}</code></div>
      <button class="roadmap-main-practical-start" type="button" data-main-practical-start="${lessonId}">Start interview checkpoint</button>
    </section>
  `
}

function roadmapPracticalsMarkup(lessonId) {
  const practicals = roadmapPracticalsFor(lessonId)
  if (!practicals.length) return ""
  return `
    <section class="roadmap-practical-library" aria-label="Unlocked practical examples">
      <div class="roadmap-practical-library-head">
        <span class="rp-section-label">PRACTICALS UNLOCKED</span>
        <span>${practicals.length} ${practicals.length === 1 ? "example" : "examples"}</span>
      </div>
      <p>Try these new situations after mastering the main exercise. They use the same idea without repeating its answer.</p>
      <div class="roadmap-practical-list">
        ${practicals
          .map(
            (practical, index) => {
              const practicalId = `${lessonId}:${index}`
              return `
          <article class="roadmap-practical-card" data-practical-card="${practicalId}">
            <div><span>Scenario ${index + 1}</span><h4>${practical.title}</h4></div>
            <p>${practical.prompt}</p>
            <div class="roadmap-practical-expected"><span>Expected output</span><code>${practical.expectedOutput.join("\n")}</code></div>
            <button class="roadmap-practical-start" type="button" data-practical-start="${practicalId}">Try this practical</button>
          </article>
        `
            },
          )
          .join("")}
      </div>
    </section>
  `
}
