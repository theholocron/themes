import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";
import starlightTypeDoc from "starlight-typedoc";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	docs: {
		name: "Themes",
		github: "themes",
		sidebar: [
			{ label: "Overview", slug: "" },
			{
				label: "Packages",
				items: [{ label: "docs-theme", slug: "docs-theme" }],
			},
		],
	},
	starlight: ((opts) =>
		starlight({
			...opts,
			plugins: [
				...(opts.plugins ?? []),
				starlightTypeDoc({
					entryPoints: [resolve(__dirname, "packages/docs-theme/src/index.ts")],
					tsconfig: resolve(__dirname, "packages/docs-theme/tsconfig.json"),
					sidebar: { label: "API Reference", collapsed: true },
				}),
			],
		})) as typeof starlight,
	docsTheme,
	srcDir: "./docs/src",
	outDir: "./docs/dist",
	publicDir: "./docs/public",
});
