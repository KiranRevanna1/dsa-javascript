# DSA in JavaScript (Striver A2Z)

My own solutions to the Striver A2Z sheet, one file per problem, each with its pattern, complexity and tests.

## Daily use

1. `node new.js 3 lec1-easy/largest-element` creates `03-arrays/lec1-easy/largest-element.js` from the template. Folders follow the A2Z steps and lectures.
2. Solve it in VS Code from a blank function. No AI, no autocomplete hints.
3. Add the problem's examples plus one edge case as `check(...)` lines.
4. `node 03-arrays/two-sum.js` runs the tests. Every line should show ✓.
5. Submit on LeetCode if the problem is there. If not, the tests are the judge.
6. After the morning session: `git add . && git commit -m "day N: X re-solves, Y new" && git push`.

## Re-solves

Overwrite the same file from blank. Git history keeps the old attempt.

## When I've forgotten a problem

1. Read the notebook card. Try for 10 minutes from blank.
2. Still stuck: read only the "Key idea" line in the file. Try again.
3. Still stuck: read the full solution, close it, rewrite from blank.
4. Mark it failed in the DSA Tracker so it comes back in 1 day.

## Find problems by pattern

Every file has a `Pattern:` line, so search it:

```bash
grep -rn "Pattern:" --include=*.js . | grep -i "two pointer"
```

## Problem statements

Write the problem in your own words (1–3 lines) plus the link. Don't paste the full TUF/LeetCode statement: it's their content, and rewriting it is good practice anyway. The examples go in as tests.
