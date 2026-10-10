// Creates one file per Striver A2Z problem from lib/a2z.json.
// Safe to re-run: existing files are never overwritten.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const sheet = require("./a2z.json");
const pad = (n) => String(n).padStart(2, "0");
const slug = (s) =>
  s.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

let created = 0, total = 0;
sheet.forEach(([section, subs], i) => {
  subs.forEach(([sub, problems], j) => {
    const dir = path.join(root, `${pad(i + 1)}-${slug(section)}`, `${pad(j + 1)}-${slug(sub)}`);
    fs.mkdirSync(dir, { recursive: true });
    problems.forEach(([title, link], k) => {
      total++;
      const file = path.join(dir, `${pad(k + 1)}-${slug(title)}.js`);
      if (fs.existsSync(file)) return;
      const linkLine = link || `see Striver A2Z sheet → ${section} → ${sub}`;
      fs.writeFileSync(
        file,
        `// Problem: ${title.trim()}
// Link: ${linkLine}
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

function solve(input) {
  // your solution
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
`
      );
      created++;
    });
  });
});
console.log(`Problems: ${total}, new files created: ${created}`);
