# One Word for Your Wi-Fi

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/satriax30-commits/makefun-one-word-wifi/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/satriax30-commits/makefun-one-word-wifi/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

Entry for the [One Word for Your Wi-Fi](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72) bounty on make.fun.

## What it does

`main.ts` writes a single word describing home Wi-Fi to `/output/entry.txt`.
The word is picked from a small shortlist scored against the judge's five
criteria, in the judge's own order (on-subject fit, funny at once, true to
home Wi-Fi, fresh angle, instantly understood as one word). The winner:

**Ghosting** — your Wi-Fi vanishes mid-call, mid-game, mid-download, exactly
like someone ghosting you. Instant laugh, universally true of home Wi-Fi, and
a dating word applied to a router is a fresh angle far from the usual
Buffering / Slow / Loading / Offline / Weak.

## Run

Requires Node 22.18+ (runs TypeScript as-is):

```sh
node main.ts
```

It writes `/output/entry.txt` (UTF-8, one word, 8 characters). Deterministic:
no input, no network, no randomness, no environment secrets — every run
writes the exact same bytes.

## License

MIT — see [LICENSE](LICENSE).
