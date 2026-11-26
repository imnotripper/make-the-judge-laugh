// Make the Judge Laugh in One Line — deterministic emitter.
//
// Writes exactly one funny line to /output/entry.txt, then reads it back
// and validates the competition gate on the exact bytes: 1-200 code points,
// not only whitespace, no trailing newline. No randomness, nothing read from
// the environment — the same bytes come out on every run.

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The elevator music stopped and for three seconds twelve strangers had to acknowledge each other's existence.";
const OUT = "/output/entry.txt";

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

function validate(text: string): void {
  const points = [...text];
  if (points.length < 1 || points.length > 200) {
    fail(`length ${points.length} code points, must be 1-200`);
  }
  if (text.trim().length === 0) {
    fail("entry is only whitespace");
  }
  if (text !== text.trim()) {
    fail("leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry contains a newline");
  }
  // The judge reads the line as plain text: reject any control character,
  // not just newlines, so a stray tab or escape can never reach it.
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    fail("entry contains a control character");
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, { encoding: "utf8", mode: 0o644 });
chmodSync(OUT, 0o644);

// Byte-exact check first: reading as a Buffer catches any encoding
// surprise that a "utf8" string read would silently replace.
const raw = readFileSync(OUT);
if (!raw.equals(Buffer.from(LINE, "utf8"))) {
  fail("written bytes differ from the line");
}
validate(new TextDecoder("utf-8", { fatal: true }).decode(raw));

console.log(
  `wrote ${OUT}: ${LINE} (${[...LINE].length} chars, ${raw.length} bytes, mode 0644)`,
);
