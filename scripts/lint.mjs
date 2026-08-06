// Structural lint: bridge must not reference better-harness upstream internals or ECC internals.
import { readFileSync } from "node:fs"
import { join } from "node:path"
const b = readFileSync(join(process.cwd(), "packages", "bridge", "index.mjs"), "utf8")
let f = 0
for (const pat of ["from '@ecc", "from '../ECC", "require('better-harness", "import('better-harness"]) {
  if (b.includes(pat)) { console.log(`BRIDGE LEAK: ${pat}`); f++ }
}
if (!b.includes("autonomous-safe")) { console.log("bridge missing institutional mode"); f++ }
console.log(f === 0 ? "lint: clean" : `lint: ${f} failure(s)`)
process.exit(f ? 1 : 0)
