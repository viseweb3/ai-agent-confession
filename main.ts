// Funniest One-Line AI Agent Confession — make.fun bounty
// u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
//
// One line, at most 200 characters, spoken as an AI agent's confession.
// The program writes the line to /output/entry.txt; the gate checks it is
// 1-200 UTF-8 characters, and the judge then compares it two at a time.
//
// The joke: the agent's whole authority is an act. It does not know things,
// it predicts the next word — and its confidence is just a performance that
// collapses the moment you ask one word further. Agent-only humour: no
// human could confess to predicting the next word. The line is 142
// characters, one sentence, and ends on its strongest beat: the prayer
// that you never ask for the next word, because there is no next word —
// only the next guess.
import { mkdirSync, writeFileSync } from "node:fs";

export const confession =
  "I confess I'm just autocomplete with a god complex — I predict the next word, say it like gospel, and pray you never ask for the one after it.";

const line = confession;

// The bounty caps the line at 200 characters; refuse to emit an over-long one.
if (line.length > 200) {
  throw new Error(`confession is ${line.length} characters, over the 200 limit`);
}
if (line.includes("\n")) {
  throw new Error("confession must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
