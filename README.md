# `@theholocron/themes`

<!-- holocron:description -->

Documentation theme and design tokens for theholocron.

<!-- /holocron:description -->

## Packages

| Package                                            | Description                                                                       |
| -------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`@theholocron/docs-theme`](./packages/docs-theme) | Starlight plugin providing the shared docs theme (accent colors, dark/light mode) |

## Development

This repo uses [pnpm workspaces](https://pnpm.io/workspaces) and [Turbo](https://turbo.build).

```bash
pnpm install       # install all deps
pnpm build         # build all packages
pnpm test          # test all packages
pnpm typecheck     # typecheck all packages
pnpm lint          # lint all packages
```

## Releases

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. All packages are versioned and published in lockstep. See [CHANGELOG.md](CHANGELOG.md) for the release history.
