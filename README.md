# DSA in JavaScript (Striver A2Z)

My own solutions to [Striver's A2Z DSA Sheet](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet), one file per problem, each with its pattern, complexity and tests.

## Structure

```
01-beginner-problems/ … 20-maths/   ← one folder per sheet section, in sheet order
  01-patterns/ 02-basic-maths/ …      ← one folder per sub-section
    01-pattern-1.js                   ← one file per problem, already created with the title and link
lib/check.js                          ← tiny test helper (prints ✓ / ✗)
lib/a2z.json + lib/generate.js        ← the problem list and the script that created the files
```

## Daily use

1. Open the problem's file (titles and links are already filled in).
2. Write "In my words", then solve inside `solve()` from blank. No AI, no autocomplete.
3. Uncomment the `check(...)` lines and fill in the problem's examples plus one edge case.
4. Run it: `node 03-arrays/01-fundamentals/02-largest-element.js`. Every line should show ✓.
5. Submit on LeetCode if there's a LeetCode link. If not, the tests are the judge.
6. Fill Pattern, complexity and Key idea. After the morning session:
   `git add . && git commit -m "day N: X re-solves, Y new" && git push`

Extra problem not on the sheet? `node new.js 3 05-extra/problem-name` creates `03-arrays/05-extra/problem-name.js`.

## Re-solves

Overwrite the same file from blank. Git history keeps the old attempt.

## When I've forgotten a problem

1. Read the notebook card. Try for 10 minutes from blank.
2. Still stuck: read only the "Key idea" line in the file. Try again.
3. Still stuck: read the full solution, close it, rewrite from blank.
4. Mark it failed in the DSA Tracker so it comes back in 1 day.

## Find problems by pattern

```bash
grep -rn "Pattern:" --include=*.js . | grep -i "two pointer"
```

## Problem statements

Read them on TUF/LeetCode. Here, write the problem in your own words (1–3 lines); the examples go in as tests.
