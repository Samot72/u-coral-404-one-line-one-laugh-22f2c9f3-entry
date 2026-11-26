// One Line, One Laugh — entry writer (Node 22+, no dependencies).
// Writes the single entry line byte-exact (no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), then reads it
// back and verifies the bytes round-trip exactly.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I told my therapist I'm afraid of commitment, so she made me sign a twelve-session contract.";

const MAX_CHARS = 200;

function codePoints(s: string): number {
  return [...s].length;
}

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry must not be empty or whitespace-only");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/\s{2,}/.test(line)) {
    throw new Error("entry must not contain doubled whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const n = codePoints(line);
  if (n < 1 || n > MAX_CHARS) {
    throw new Error(`entry must be 1–200 characters, got ${n}`);
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8"); // no trailing newline, byte-exact
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match ENTRY");
  }
  console.log(
    `wrote ${outPath} (${codePoints(ENTRY)} characters, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`,
  );
}

main();
