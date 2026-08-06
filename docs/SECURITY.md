# SECURITY

- **No telemetry, no data collection, no automatic uploads, no remote code
  execution.** Detection and planning are fully local.
- **No credentials stored.** No API keys, tokens, provider credentials,
  passwords or session content.
- **No protected files copied.** Better Harness and ECC remain under their own
  licenses; this repository contains only new, independently written code.
- **Writes are governed by E3** (allowed roots, denied paths, limits,
  snapshot, rollback) and occur only in an explicitly authorized disposable
  project.
- **Rollback is idempotent** and restores only owned files.

## Responsible disclosure

Report security issues privately. Do not open public issues for security
bugs. Include the harness, versions and a minimal reproduction.
