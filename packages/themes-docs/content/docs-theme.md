---
title: docs-theme
description: Starlight plugin providing the shared theme and createDocsLoader for @theholocron docs sites.
---

`@theholocron/docs-theme` provides a Starlight plugin and a reusable content loader for all `@theholocron` documentation sites.

## Install

```bash
npm i @theholocron/docs-theme
```

## Exports

| Export                           | Description                               |
| -------------------------------- | ----------------------------------------- |
| `@theholocron/docs-theme`        | `docsTheme()` Starlight plugin            |
| `@theholocron/docs-theme/loader` | `createDocsLoader()` Astro content loader |

## `docsTheme()`

A Starlight plugin that injects the shared stylesheet into every Starlight site.

```ts
import { docsTheme } from "@theholocron/docs-theme";

starlight({ plugins: [docsTheme()] });
```

## `createDocsLoader(sources)`

An Astro content loader that reads Markdown/MDX files from local directories or installed npm content packages into a Starlight docs collection.

Each source is either a local directory path or an npm package name:

```ts
import { createDocsLoader } from "@theholocron/docs-theme/loader";

createDocsLoader([
  { dir: "/absolute/path/to/content", slug: "prefix" },
  { package: "@theholocron/clients-docs", slug: "clients" },
]);
```

### Sources

| Option    | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `dir`     | Absolute path to a directory containing `.md` / `.mdx` files                         |
| `package` | npm package name — resolves to the `content/` directory inside the installed package |
| `slug`    | Slug prefix prepended to every entry from this source                                |

Files named `index.md` are stored under the directory's slug with no trailing `/index`.

## Styles

The plugin ships a CSS file that sets the `@theholocron` visual identity tokens. It is injected automatically via the plugin — no manual import needed.
