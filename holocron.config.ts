import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "Themes and design tokens.",
	homepage: "https://docs.theholocron.dev/themes/",
	org: "theholocron",
	domain: "theholocron.dev",
	docs: { build: "workflow", https: true },
	repo: {
		...repo,
		protection: "strict",
		requiredChecks: ["audit / Knip", "codecov/patch", "codecov/patch/docs-theme", "codecov/project"],
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight", "theme", "typescript"],
	},
	workflows: [
		...workflows,
		{ name: "audit", with: { "run-knip": true } },
		{ name: "release", with: { "run-build": true } },
		"sync",
		{ name: "deploy", with: { docs: true, preview: true } },
	],
	providers: {
		...providers,
		secrets: "github",
		deployment: "cloudflare",
		dns: "cloudflare",
	},
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review", "turborepo"],
} satisfies HolocronConfig);
