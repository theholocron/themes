import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { library } from "@theholocron/eslint-config/bundles/library";
import type { Linter } from "eslint";

const config = [
	...library(),
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
			},
		},
	},
	{
		ignores: ["docs/.astro/**", "packages/*/dist/**", "packages/*/coverage/**", "**/node_modules/**"],
	},
] satisfies Linter.Config[];

export default config;
