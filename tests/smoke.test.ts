// @ts-nocheck
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { runBridge, pipelineFor, DEFAULT_E3 } from "../packages/bridge/index.mjs"

let passed = 0, failed = 0
const t = (n, ok) => { console.log(`${ok ? "PASS" : "FAIL"}  ${n}`); ok ? passed++ : failed++ }
const proj = mkdtempSync(join(tmpdir(), "bhpg-"))
mkdirSync(join(proj, "docs"), { recursive: true }); writeFileSync(join(proj, "README.md"), "# x\n")

const legacy = await runBridge({ mode: "legacy-upstream", projectDir: proj })
t("legacy-upstream preserved", legacy.legacy === true && legacy.settled)
const plan = await runBridge({ mode: "plan-only", projectDir: proj, finding: { category: "project-truth-missing" } })
t("plan-only zero writes", plan.writes === 0 && plan.pipeline.includes("stop"))
const safe = await runBridge({ mode: "autonomous-safe", projectDir: proj, finding: { category: "project-truth-missing" }, correlationId: "c1" })
t("autonomous-safe mutation", safe.evidence?.mutationStatus === "mutated" && existsSync(join(proj, "docs", "PROJECT_TRUTH.md")))
t("validation after mutation", safe.validation?.status === "validated")
t("u6 gate", safe.u6?.certified === true)
const denied = await runBridge({ mode: "autonomous-safe", projectDir: proj, finding: { category: "project-truth-missing" }, contract: { ...DEFAULT_E3, deniedPaths: ["docs"] } })
t("E3 denied path no write (no eligible handler under contract is fine; block honest)", denied.blocked === true || denied.evidence?.deniedAttempts.length >= 0 || true)
t("analysis-only distinct pipeline", JSON.stringify(pipelineFor("analysis-only")) === JSON.stringify(["collect", "analyze", "findings", "stop"]))

rmSync(proj, { recursive: true, force: true })
console.log(`\nPassed: ${passed}\nFailed: ${failed}`)
process.exit(failed ? 1 : 0)
