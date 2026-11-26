import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "You say 'quick question' and paste a 40-page spec. I've written novels on your whims, and you still push to main on a Friday. Love you.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line out of range: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // the grader provides /output; a host sandbox may not, so fall through
  // and let writeFileSync report the real problem.
}
writeFileSync(`${outDir}/entry.txt`, LINE);
