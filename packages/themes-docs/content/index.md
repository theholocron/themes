---
title: Themes
description: Starlight theme and documentation tooling for @theholocron projects.
sidebar:
    hidden: true
---

`@theholocron/themes` is a monorepo of shared documentation tooling for Starlight-based docs sites across the `@theholocron` organization.

## Packages

| Package                                   | Description                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------- |
| [`@theholocron/docs-theme`](./docs-theme) | Starlight plugin providing shared styles and the `createDocsLoader` content loader |

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

### Content loader

Use `createDocsLoader` in `content.config.ts` to load Markdown files from local directories or installed npm content packages:

```ts
import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection } from "astro:content";
import { fileURLToPath } from "node:url";

export const collections = {
	docs: defineCollection({
		loader: createDocsLoader([
			{
				dir: fileURLToPath(new URL("../../content", import.meta.url)),
				slug: "",
			},
		]),
		schema: docsSchema(),
	}),
};
```
