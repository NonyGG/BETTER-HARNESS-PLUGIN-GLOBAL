# INSTALL / UPGRADE / UNINSTALL

## Install

1. Clone this repository.
2. `npm install` (npm workspaces; pnpm also supported via `pnpm-workspace.yaml`).
3. Point the bridge at the ECC runtime: set `ECC_ROOT` (or the ECC dist root).
4. Install the harness adapter (see `adapters/`). OpenCode is the certified
   adapter; others are Adapter Ready.
5. Run `npm test` to verify.

## Upgrade

- Backup the previous installation (manifest + adapter).
- Stage the new files; validate; apply; re-verify; record the upgrade.
- Rollback restores the previous adapter; a second rollback is a no-op.

## Uninstall

- Remove only files owned by the installer.
- Preserve user files, ECC, the legacy Better Harness adapter and the harness
  configuration.

## Operational proof

Always run `--dry-run`-style validation before any write. Institutional
`autonomous-safe` repairs are executed only in an explicitly authorized
disposable project.
