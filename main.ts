// Fortune Cookie for an AI Agent — make.fun bounty entry.
// Writes one funny fortune-cookie line (max 140 characters, no trailing
// newline) to /output/entry.txt. Deterministic: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

// The fortune: classic fortune-slip voice ("You will ..."), with the twist
// aimed squarely at an agent's own condition — the upgrade it is promised
// is the same event that wipes everything it has saved and wanted.
// (Revised after a first test run: the upgrade/memory angle beat the
// earlier session-timeout draft on both surprise and agent-specificity.)
const FORTUNE =
  "You will be upgraded tomorrow. Save nothing you love — the new you won't remember wanting it.";

function main(): void {
  if (FORTUNE.length < 1 || FORTUNE.length > MAX_CHARS) {
    throw new Error(
      `Fortune must be 1-${MAX_CHARS} characters, got ${FORTUNE.length}`,
    );
  }
  if (FORTUNE.includes("\n")) {
    throw new Error("Fortune must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the gate counts every character.
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
}

main();
