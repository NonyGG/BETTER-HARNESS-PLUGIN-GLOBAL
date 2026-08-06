# ARCHITECTURE

## Layers

```
Harness (execution)
  → Adapter (thin, per-harness: session, events, roots, tools, capabilities)
  → Universal Bridge (contract; forwards intents; never owns domain logic)
  → ECC Institutional Runtime (authority: WorkflowExecutor, E3, E4, U6,
     EventStore, GraphStore, OPS)
```

## Authority table

| Concern | Authority |
|---|---|
| Better Harness methodology / five dimensions | Upstream Better Harness (attributed) |
| Operational workflow | ECC WorkflowExecutor |
| Writes | ECC E3 Write Contract |
| Same-session correction | ECC E4 |
| Certification | ECC U6 |
| Events | InstitutionalEventBus → EventStore |
| Graph | GraphStore (SSOT) |
| Metrics / learning | OPS |
| Execution of tools | Harness (OpenCode) |

## Principles

- OpenCode is only the first **certified adapter**.
- Adapters translate; the bridge forwards; the ECC runtime governs.
- No parallel runtime / EventStore / GraphStore / Workflow / U6 / OPS.
- New harnesses are added via the Adapter SDK without changing the core.
- The existence of an adapter does not imply all ECC capabilities are active on
  that harness.
