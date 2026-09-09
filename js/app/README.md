# Main application behavior

`app.js` connects the existing HTML page to its two learning experiences:

- **Roadmap** — lesson navigation, lesson editor, checking code, progress, and unlocked practicals.
- **Problems** — coding challenges, tests, the problem editor, and terminal resizing.

Shared editor behavior does not belong here. Put it in `../shared/editor-tools.js` so both experiences use the same behavior.
