import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// holocron.config.ts, eslint.config.ts, release.config.ts, commitlint.config.ts auto-detected by Knip plugins
			entry: ["holocron.config.ts", "astro.config.ts"],
			project: ["*.ts", "docs/src/**/*.ts"],
		},
		"packages/*": {
			// entry points auto-detected from package.json exports
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
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// prettier config package — no .prettierrc or prettier.config.ts at root
		"@theholocron/prettier-config",
		// binary tools — invoked via CLI or hooks, not module imports
		"alexjs",
		"husky",
		"sort-package-json",
		"stylelint",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
