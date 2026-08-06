# BETTER HARNESS PLUGIN GLOBAL

> ## IMPORTANT NOTICE
>
> **This repository is NOT affiliated with, endorsed by, or maintained by the
> Better Harness authors.**
>
> This repository contains an **independent integration layer** that connects
> the Better Harness analysis methodology to institutional runtime governance
> (the ECC institutional runtime) inside AI coding harnesses.
>
> Original Better Harness: **https://github.com/QoderAI/better-harness**

---

## What this project does

- Provides a thin, universal **adapter + bridge** layer so any AI coding harness
  (OpenCode first, certified) can run Better Harness analysis while the **ECC
  institutional runtime** remains the authority for workflow, writes (E3),
  same-session correction (E4), certification (U6), events (EventStore) and
  observation (OPS).
- Packages the certified integration (`BETTER-HARNESS-ECC-FUSION-1..4`) as a
  reusable, documented, MIT-licensed distribution.

## What this project does NOT do

- It is **not** a fork of Better Harness, a modified distribution, or a
  substitute for it. Better Harness remains the analysis engine; its authors,
  methodology, five dimensions and license are preserved and attributed.
- It does not copy or redistribute protected Better Harness files.
- It does not modify ECC, Better Harness, or OpenCode.

## Architecture (universal)

```
Harness
  │
  ▼
Adapter (thin, per-harness: lifecycle/events/roots/tools)
  │
  ▼
Universal Bridge (contract; forwards, never owns domain logic)
  │
  ▼
ECC Runtime (WorkflowExecutor · E3 · E4 · U6 · EventStore · GraphStore · OPS)
```

OpenCode appears only as the **first certified adapter** — never as the only
supported harness. Any future harness can be added via the Adapter SDK without
changing the core.

## Install / Use / Upgrade / Uninstall

See `docs/INSTALL.md`, `docs/UPGRADE.md`, `docs/UNINSTALL.md` and
`docs/SDK_GUIDE.md`.

## Harness compatibility (honest)

| Harness    | Status        |
|------------|---------------|
| OpenCode   | **Certified** |
| Claude Code | Adapter Ready |
| Codex      | Adapter Ready |
| Cursor     | Adapter Ready |
| Gemini CLI | Adapter Ready |
| Cline      | Adapter Ready |
| Aider      | Adapter Ready |
| Windsurf   | Adapter Ready |

Support is only claimed where operationally proven. An adapter existing does
**not** mean every ECC capability is active on that harness.

## License

New code in this repository is MIT (see `LICENSE`). Better Harness remains
under its own license and attribution (see `NOTICE.md`, `THIRD_PARTY.md`,
`ATTRIBUTION.md`). No protected Better Harness files are copied.
