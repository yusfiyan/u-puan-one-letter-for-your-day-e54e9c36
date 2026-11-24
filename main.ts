// One Letter for Your Day — entry: "U" (unhinged).
//
// Exactly one letter, A to Z, standing for the word that describes the day.
// The word behind this letter: UNHINGED — the day the plan fell apart
// before breakfast, the group chat went feral, and everything happened
// at once. Vivid, funny, and true of a real day, and not the obvious
// pick every entrant reaches for.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "U";

// Gate guard: the entry must be exactly one letter, A to Z, and nothing
// else — no word, no gloss, no punctuation, no trailing newline.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(
    `entry must be exactly one A-Z letter, got: ${JSON.stringify(LETTER)}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
