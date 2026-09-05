import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { compose, nodeDocs, wikiCapability as wiki } from "@theholocron/holocron-config";

const preset = compose(nodeDocs(), wiki());
export default defineConfig({
	...preset,
	description: "Themes and design tokens.",
	homepage: "https://docs.theholocron.dev/themes/",
	repo: {
		...preset.repo,
		requiredChecks: [...preset.repo.requiredChecks, "codecov/patch/docs-theme"],
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight", "theme", "typescript"],
	},
	workflows: [
		...preset.workflows,
		{ name: "audit", with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
	],
	providers: {
		...preset.providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-palette" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review", "turborepo"],
} satisfies HolocronConfig);
