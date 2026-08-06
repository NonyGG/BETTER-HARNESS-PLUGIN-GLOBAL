# SDK GUIDE

## Implementing an adapter for any harness

An adapter is a thin module that implements a small contract:

```
detect(session)   -> { detected, version, roots, capabilities }
translate(event)  -> HarnessEventEnvelope (session/tool/file/cancel/compact)
resolve(workspace)-> { projectRoot, worktreeRoot }
forward(intent)   -> bridge.runBridge({ mode, projectDir, finding })
health()          -> { harness, institutionalAvailable, legacyAvailable }
```

## Rules

- Adapters never implement workflow, E3, E4, U6, EventStore, GraphStore or OPS.
- Adapters never write outside the authorized disposable project scope.
- Adapters declare capabilities honestly; missing capabilities are not
  simulated.
- Institutional modes are routed to `bridge.runBridge`; `analysis-only` and
  `plan-only` must perform zero writes; `legacy-upstream` calls the pinned
  Better Harness CLI read-only.

## Example (Claude Code, Adapter Ready — not certified)

```js
import { runBridge } from "../packages/bridge/index.mjs"
export const adapter = {
  id: "claude-code",
  detect: () => ({ detected: true, capabilities: { tools: true, sessionLifecycle: true } }),
  async evolve({ projectDir, finding }) {
    return runBridge({ mode: "autonomous-safe", projectDir, finding })
  },
}
```

Promotion to **Certified** requires operational proof on that harness
(install/verify/rollback + a real institutional repair), per the compatibility
matrix.
