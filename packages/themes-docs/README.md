# `@theholocron/themes-docs`

Documentation content package for [`@theholocron/docs-theme`](https://github.com/theholocron/themes/tree/main/packages/docs-theme#readme) — the shared Starlight plugin and content loader used across all `@theholocron` docs sites.

Consumed by the [`theholocron.github.io`](https://docs.theholocron.dev/) Starlight docs site via `createDocsLoader` from `@theholocron/docs-theme`.

## Installation

```sh
pnpm add @theholocron/themes-docs
```

## Usage

Pass the package to `createDocsLoader` in your Astro docs site's `content.config.ts`:

```ts
import { createDocsLoader } from "@theholocron/docs-theme/loader";
import { defineCollection } from "astro:content";

export const collections = {
	docs: defineCollection({
		loader: createDocsLoader({
			packages: [import("@theholocron/themes-docs")],
		}),
	}),
};
```

## License

[MIT](../../LICENSE)
