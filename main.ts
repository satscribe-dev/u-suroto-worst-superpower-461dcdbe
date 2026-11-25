import { mkdirSync, writeFileSync } from "node:fs";

// The chosen entry: a superpower that adds literally nothing, because the
// appliance it targets already does the same thing while running.
const ENTRY =
  "I can summon lightning, but only inside a running microwave, which is already doing that.";

// The gate for this bounty: /output/entry.txt must be UTF-8 text of 1 to
// 140 characters, not only white space. Refuse to write anything that
// fails it, so a bad edit can never silently produce an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the 1-140 character gate (${ENTRY.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
