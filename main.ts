// One Star, Written in Sap — entry program (program/v1).
// Writes a single one-line 1-star review from a houseplant to /output/entry.txt.
// Deterministic, stdlib-only, no network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  '★☆☆☆☆ My tag says "water sparingly". He read it as a challenge and bought a bigger can. One star: I am a cactus living in a swamp of his good intentions.';

// Self-check against the competition gate before writing: UTF-8 text,
// 1 to 279 characters, a single line, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 279) {
  throw new Error(`entry length ${chars.length} is outside the 1-279 gate`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
