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
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight", "theme", "typescript"],
	},
	tasks: [
		...preset.tasks,
		{ name: "audit", required: true, with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
	],
	extraRequiredChecks: [...preset.extraRequiredChecks, "codecov/patch/docs-theme"],
	providers: {
		...preset.providers,
		secrets: "github",
		wiki: ["fern", { domain: "wiki.theholocron.dev", fernOrg: "holocron", icon: "fa-duotone fa-palette" }],
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review", "turborepo"],
} satisfies HolocronConfig);
