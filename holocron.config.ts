import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { nodeDocs } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain, docs } = nodeDocs();
export default defineConfig({
	description: "Themes and design tokens.",
	homepage: "https://docs.theholocron.dev/themes/",
	org,
	domain,
	docs,
	repo: {
		...repo,
		requiredChecks: [...repo.requiredChecks, "codecov/patch/docs-theme"],
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight", "theme", "typescript"],
	},
	workflows: [
		...workflows,
		{ name: "audit", with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
	],
	providers: { ...providers, secrets: "github" },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review", "turborepo"],
} satisfies HolocronConfig);
