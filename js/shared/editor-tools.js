// Shared code-editor behavior used by both the Roadmap and Problems views.
const JS_KEYWORDS = new Set([
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "break",
  "continue",
  "var",
  "let",
  "const",
  "new",
  "typeof",
  "instanceof",
  "in",
  "of",
  "class",
  "extends",
  "super",
  "this",
  "switch",
  "case",
  "default",
  "try",
  "catch",
  "finally",
  "throw",
  "yield",
  "async",
  "await",
  "delete",
  "void",
  "static",
  "get",
  "set",
  "import",
  "export",
  "from",
  "as",
])
const JS_BOOLEANS = new Set(["true", "false", "null", "undefined", "NaN"])
const PAIRS = { "(": ")", "[": "]", "{": "}", "'": "'", '"': '"', "`": "`" }
const CLOSERS = new Set(Object.values(PAIRS))

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function highlightCode(code) {
  const tokenRe =
    /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|(\b\d+\.?\d*\b)|([A-Za-z_$][A-Za-z0-9_$]*)|([{}()[\];,.:?])|(\s+)|([^\s\w])/g
  let output = ""
  let match
  while ((match = tokenRe.exec(code)) !== null) {
    const [
      full,
      comment,
      blockComment,
      string,
      number,
      identifier,
      punctuation,
      whitespace,
      other,
    ] = match
    if (comment || blockComment)
      output += `<span class="tok-comment">${escapeHtml(full)}</span>`
    else if (string)
      output += `<span class="tok-string">${escapeHtml(full)}</span>`
    else if (number)
      output += `<span class="tok-number">${escapeHtml(full)}</span>`
    else if (identifier) {
      if (JS_KEYWORDS.has(identifier))
        output += `<span class="tok-keyword">${escapeHtml(full)}</span>`
      else if (JS_BOOLEANS.has(identifier))
        output += `<span class="tok-boolean">${escapeHtml(full)}</span>`
      else
        output += /^\s*\(/.test(code.slice(tokenRe.lastIndex))
          ? `<span class="tok-function">${escapeHtml(full)}</span>`
          : escapeHtml(full)
    } else if (punctuation || other)
      output += `<span class="tok-punct">${escapeHtml(full)}</span>`
    else output += escapeHtml(full)
  }
  return output
}

function getIndent(line) {
  const match = line.match(/^[ \t]*/)
  return match ? match[0] : ""
}
