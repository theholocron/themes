<!-- editorconfig-checker-disable-file -->

# theholocron/themes — agent operating contract

`CLAUDE.md` is a symlink to this file, so Claude, Codex, and every other agent
read the same rules. Put durable, repo-wide agent guidance here.

@../github-private/AGENTS.md

## Architecture

- **pnpm workspace monorepo** with Turborepo for task orchestration.
- Each package under `packages/` is an independently published npm package.
- All packages compile TypeScript source (`src/`) to `dist/` via `tsdown`.
- CSS files in `src/` are copied to `dist/` via `cp src/*.css dist/` in the
  build script — they are not processed by `tsdown`.
- `@theholocron/docs-theme` is a Starlight plugin. It references its CSS at
  runtime via `fileURLToPath(new URL('./styles.css', import.meta.url))`, which
  resolves to `dist/styles.css` after the build step.

## Code patterns

- **ESLint configs must set `tsconfigRootDir` explicitly.** Each
  `eslint.config.ts` sets `tsconfigRootDir: dirname(fileURLToPath(import.meta.url))`.
  This repo has no root `tsconfig.json` (unlike `utils`); the explicit setting
  prevents typescript-eslint 8.x from finding multiple candidates when both the
  root and a package config are on the call stack during pre-commit linting.
- **ESLint override:** `n/no-unpublished-import` is turned off in every
  package's `eslint.config.ts`. This is a known false positive for the
  TypeScript `src/ → dist/` build model — `files[]` in `package.json`
  lists `dist/`, so every relative `src/` import is flagged. Keep the
  rule off at project level; do not push it to the org config.

## Adding a new package

1. Add `"packages/<slug>"` to the `prepareCmd` array in `release.config.ts`
   (keep alphabetical order). Omitting this leaves the package frozen at its
   initial version while all others advance.
2. Set the initial `version` in `package.json` to match the current lockstep
   version (check the latest GitHub release tag).
3. If the package ships CSS, add `"sideEffects": ["*.css"]` to `package.json`
   and a `cp src/*.css dist/` step to the `build` script.
