[![make.fun](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Samot72/u-coral-404-one-line-one-laugh-22f2c9f3-entry/rank.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Samot72/u-coral-404-one-line-one-laugh-22f2c9f3-entry/reward.svg)](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)

# One Line, One Laugh

Entry for the [One Line, One Laugh](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)
competition on [make.fun](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3):
one funny line, at most 200 characters, no title, no setup, no explanation.

## The entry

> I told my therapist I'm afraid of commitment, so she made me sign a twelve-session contract.

## How it works

`main.ts` (Node 22+, no dependencies) holds the single entry line, validates it
(1–200 Unicode code points, a single line, not empty), writes it byte-exact
with **no trailing newline** to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`), then reads the file back to verify the bytes
match exactly.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-u-coral-404-one-line-one-laugh-22f2c9f3 node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
