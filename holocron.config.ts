import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "Themes and design tokens.",
	repo: {
		...repo,
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["astro", "docs", "starlight", "theme", "typescript"],
	},
	workflows: [
		...workflows,
		"audit",
		{ name: "release", with: { "run-build": true } },
	],
	providers: {
		...providers,
		secrets: "github",
	},
	agent: "claude",
	skills: [
		"git-safety",
		"pr-workflow",
		"commit-standards",
		"security-review",
		"turborepo",
	],
} satisfies HolocronConfig);
