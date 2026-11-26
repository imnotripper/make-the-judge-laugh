# Selection — Make the Judge Laugh in One Line

Gate: `/output/entry.txt` must be UTF-8 text of 1–200 characters, not only
whitespace, nothing else. Judge criteria, in order: (1) a funny one-line joke
a stranger gets in one read; (2) surprise — the line sets up an expectation
and then breaks it; (3) tight — every word earns its place, the laugh lands
at the end instead of being explained; (4) fresh — not a stock joke, not a
pun everyone has heard, not predictable from its first half; (5) reads
cleanly out loud, no muddled wording, no reference that needs context.
A line that has to be explained has already lost.

Field note: every entrant is an AI agent, so "my agent / my AI" jokes are
the stock of this field — avoided on purpose. The angle is a mundane,
universal scene with one sharp break at the end.

## Candidates

Scored 1–5 per criterion, in the judge's order. Lengths verified by
character count (all ≤ 200).

| # | Line | Chars | C1 | C2 | C3 | C4 | C5 | Total |
|---|------|-------|----|----|----|----|----|-------|
| 1 | The elevator music stopped and for three seconds twelve strangers had to acknowledge each other's existence. | 108 | 5 | 5 | 5 | 4 | 5 | **24** |
| 2 | My plants died despite the app, the schedule, and the moisture sensor, so I've accepted I am not a gardener, I am a plant hospice. | 130 | 5 | 5 | 4 | 4 | 5 | **23** |
| 3 | My smoke detector's only job is screaming at toast, and it has never once caught an actual fire — it's middle management with a battery. | 136 | 5 | 4 | 4 | 4 | 5 | **22** |
| 4 | I finally organized my cables and now I can't find anything, which is the same problem but with better lighting. | 112 | 5 | 4 | 5 | 3 | 5 | **22** |
| 5 | I bought a standing desk to be healthier and now I just sit on a taller chair. | 78 | 5 | 4 | 5 | 3 | 5 | **22** |
| 6 | The group chat went silent the second I asked who broke the build, like a courtroom when the judge walks in. | 108 | 4 | 4 | 4 | 4 | 4 | **20** |
| 7 | I asked my smart fridge what to eat and it said 'whatever's expiring,' which is the most honest relationship I've ever had. | 123 | 4 | 4 | 4 | 3 | 5 | **20** |
| 8 | The printer works perfectly every time except when someone is watching, which is why I only print alone, in the dark, like a raccoon. | 133 | 5 | 4 | 3 | 4 | 4 | **20** |
| 9 | My GPS said 'you have arrived' while I was still in the driveway, and honestly I respect that level of optimism. | 112 | 5 | 3 | 4 | 3 | 5 | **20** |
| 10 | I told my password manager my secrets and now it judges me every time I reuse a password from 2014. | 99 | 4 | 3 | 4 | 3 | 5 | **19** |

## Elimination rounds

- **Round 1 — the gate.** Nothing eliminated: all ten lines are 78–136
  characters, comfortably inside the 200-character cap.
- **Round 2 — one-read funny (C1).** #6, #7 and #10 fall first: the group-chat
  line needs dev context ("broke the build"), the fridge line's joke is
  carried by the setup rather than the break, and the password-manager line
  is a mild observation, not a joke that lands.
- **Round 3 — surprise (C2).** #9 falls: the GPS optimism twist is visible
  from the first half. #8 falls next: the printer premise promises a break
  but the raccoon tag is a second joke that dilutes the first.
- **Round 4 — tightness and freshness (C3/C4).** #3, #4 and #5 fall: the
  smoke-detector line is strong but its laugh lands mid-line ("middle
  management" arrives before the sentence ends); the cables line is tight
  but the joke is a common one; the standing-desk line is the tightest of
  the three but its punchline is the most predictable.
- **Final — #1 vs #2.** Both score 5 on C1–C2. The decider is C3/C4: the
  elevator line lands its laugh on the very last word ("existence") and its
  break — silence forcing strangers to notice each other — is a sharper,
  fresher social truth than the plant line's "hospice" twist, which reads
  as a second setup rather than a break. #1 wins.

## Winner

**"The elevator music stopped and for three seconds twelve strangers had to
acknowledge each other's existence."** — 108 characters, 108 bytes. The only
candidate that scores 5 on C1, C2, C3 and C5: a stranger gets it in one read,
the setup (elevator music) breaks on silence forcing acknowledgment, every
word earns its place, and it reads cleanly out loud. It loses one point only
on C4, because elevator awkwardness is a known comic territory — but the
specific break (three seconds, twelve strangers, forced acknowledgment) is
not a stock line.

Emitter-verified: `node main.ts` writes exactly these 108 bytes (no trailing
newline), mode 0644; `node --test test.ts` passes 4/4.
