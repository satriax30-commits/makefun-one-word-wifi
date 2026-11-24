// One Word for Your Wi-Fi — entry program.
//
// Writes a single word describing home Wi-Fi to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no environment
// secrets. Every run writes the exact same bytes.
//
// The word is picked, not hard-coded, from a small shortlist scored
// against the judge's five criteria, in the judge's own order:
//   1. on-subject fit — describes Wi-Fi as the entrant lives it
//   2. funny at once — a real laugh, no explanation needed
//   3. true to home Wi-Fi — recognisable behaviour
//   4. fresh angle — avoids the words everyone reaches for
//   5. one word, instantly understood — no context needed
// Weights fall with the criteria (5, 4, 3, 2, 1) so an earlier
// criterion always outweighs a later one, as the brief instructs.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// One candidate word plus its score (1-5) on each of the five
// criteria above, in order.
type Candidate = {
  word: string;
  scores: [number, number, number, number, number];
};

// Weights in the judge's criterion order: fit first, instant
// readability last.
const WEIGHTS: [number, number, number, number, number] = [5, 4, 3, 2, 1];

// The shortlist. Scores are the author's own judgement:
//   - "Ghosting": Wi-Fi vanishes mid-call, mid-game, mid-download,
//     exactly like someone ghosting you. Instant laugh, universally
//     true of home Wi-Fi, and a dating word applied to a router is
//     a fresh angle nobody's network name uses.
//   - "Elsewhere": the signal is always better in the next room.
//     True and fresh, but the laugh needs a beat to land — wry
//     rather than instant — so it loses on criterion 2.
//   - "Buffering": the word everyone reaches for; honest but stale,
//     so it scores 1 on freshness and cannot win.
const CANDIDATES: Candidate[] = [
  { word: "Ghosting", scores: [5, 5, 5, 4, 5] },
  { word: "Elsewhere", scores: [5, 3, 4, 5, 4] },
  { word: "Buffering", scores: [5, 2, 4, 1, 5] },
];

// Weighted total for one candidate. Ties break toward the earlier
// entry in the shortlist, so the result never depends on sort
// order or on anything outside this file.
function totalScore(candidate: Candidate): number {
  let total = 0;
  for (let i = 0; i < WEIGHTS.length; i++) {
    total += WEIGHTS[i] * candidate.scores[i];
  }
  return total;
}

function pickWinner(candidates: Candidate[]): string {
  let best = candidates[0];
  let bestScore = totalScore(best);
  for (const candidate of candidates.slice(1)) {
    const score = totalScore(candidate);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }
  return best.word;
}

// The gate, checked before writing: UTF-8 text of 1 to 20
// characters, a single word, not only white space.
function assertValid(word: string): void {
  if (word.length < 1 || word.length > 20) {
    throw new Error(`word must be 1-20 characters, got ${word.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error(`word must be a single word, got ${JSON.stringify(word)}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be only white space");
  }
}

function main(): void {
  const word = pickWinner(CANDIDATES);
  assertValid(word);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, word, "utf8");
}

main();
