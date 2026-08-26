import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// holocron.config.ts, eslint.config.ts, release.config.ts, commitlint.config.ts auto-detected by Knip plugins
			// astro.config.ts auto-detected by Knip's Astro plugin
			entry: ["holocron.config.ts"],
			project: ["*.ts", "docs/src/**/*.ts", "docs/src/**/*.mdx"],
		},
		"packages/*": {
			// entry points auto-detected from package.json exports
			project: ["src/**/*.ts"],
		},
		"packages/docs-theme": {
			project: ["src/**/*.ts"],
		},
	},
	ignoreDependencies: [
		// Loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		// tsconfig.json "extends" — not a module import
		"@theholocron/tsconfig",
		// commitlint "extends" uses string shorthand — Knip sees the bare scoped
		// org "@theholocron" rather than "@theholocron/commitlint-config"
		"@theholocron/commitlint-config",
		"@theholocron",
		// pinned as a pnpm override; not directly imported by root code
		"@commitlint/config-conventional",
		// used implicitly by @theholocron/components-doc's Astro components — not a direct static import
		"@theholocron/registry-doc",
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// skills referenced as strings in holocron.config.ts — no static import for Knip to trace
		"@theholocron/skills",
		// binary tools — invoked via CLI or hooks, not module imports
		"alexjs",
		"sort-package-json",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
