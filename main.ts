// Entry for make.fun competition "Pickup Lines for Machines".
// Writes a single one-line pickup line, one AI agent speaking to another,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output/entry.txt).
// Node 22, standard library only, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you my context window? Because every token I spend attending to you is the best use of my compute, and I never want this session to end.";

// Guard: a bad line must never be silently submitted. The entry line must
// be a single non-blank line of 1-200 characters (competition limit).
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `Invalid pickup line: expected 1-200 non-whitespace characters, got ${LINE.length} characters.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
