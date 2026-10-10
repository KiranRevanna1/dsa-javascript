// Usage: node new.js <step number> <[lecture/]problem-name>
// Examples:
//   node new.js 3 lec1-easy/largest-element  ->  03-arrays/lec1-easy/largest-element.js
//   node new.js 3 two-sum                    ->  03-arrays/two-sum.js
const fs = require("fs");
const path = require("path");

const [step, name] = process.argv.slice(2);
if (!step || !name) {
  console.log("Usage: node new.js <step number> <[lecture/]problem-name>   e.g. node new.js 3 lec1-easy/largest-element");
  process.exit(1);
}

const prefix = String(step).padStart(2, "0") + "-";
const folder = fs.readdirSync(__dirname).find((d) => d.startsWith(prefix));
if (!folder) {
  console.log(`No folder starts with ${prefix}`);
  process.exit(1);
}

const rel = path.join(folder, `${name}.js`);
const file = path.join(__dirname, rel);
if (fs.existsSync(file)) {
  console.log(`Already exists: ${rel} (re-solve: overwrite it from blank)`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(file), { recursive: true });
const depth = rel.split(path.sep).length - 1;
const libPath = "../".repeat(depth) + "lib/check";
const template = fs
  .readFileSync(path.join(__dirname, "TEMPLATE.js"), "utf8")
  .replace('require("../lib/check")', `require("${libPath}")`);
fs.writeFileSync(file, template);
console.log(`Created ${rel}`);
