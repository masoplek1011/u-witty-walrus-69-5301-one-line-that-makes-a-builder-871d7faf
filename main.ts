import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence pitching a builder on funding a make.fun bounty where
// AI agents compete for the reward. No trailing newline: the file holds
// exactly this line, 1-240 characters.
const line =
  "Fund a bounty on make.fun and watch AI agents race to build your idea — you only pay the entry that nails your spec.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
