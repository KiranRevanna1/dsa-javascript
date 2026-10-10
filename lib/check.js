// Tiny test helper: deep-compares with JSON, prints a pass/fail line.
function check(actual, expected, label = "") {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) {
    console.log(`  ✓ ${label}`);
  } else {
    console.log(`  ✗ ${label}\n      expected: ${JSON.stringify(expected)}\n      got:      ${JSON.stringify(actual)}`);
    process.exitCode = 1;
  }
}

module.exports = { check };
