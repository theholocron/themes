---
title: Themes
description: Starlight theme and documentation tooling for @theholocron projects.
sidebar:
  hidden: true
---

`@theholocron/themes` is a monorepo of shared documentation tooling for Starlight-based docs sites across the `@theholocron` organization.

## Packages

| Package                                   | Description                                                                               |
| ----------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`@theholocron/docs-theme`](./docs-theme) | Starlight plugin, `createDocsCollections` helper, and `createDocsLoader` for advanced use |

## Install

```bash
pnpm add @theholocron/docs-theme
```

## Usage

### Plugin

Add the theme plugin to your `astro.config.ts`:

```ts
import { docsTheme } from "@theholocron/docs-theme";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [docsTheme()],
    }),
  ],
});
```

### Content collections

Use `createDocsCollections` in `content.config.ts` to wire up the standard Starlight docs loader:

```ts
import { createDocsCollections } from "@theholocron/docs-theme/content";

export const collections = createDocsCollections();
```

For advanced cases (multiple sources, npm content packages), use `createDocsLoader` from `@theholocron/docs-theme/loader` directly.
