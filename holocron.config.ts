import type { HolocronConfig } from "@theholocron/cli";
import { defineConfig } from "@theholocron/cli";
import { audit, compose, docs, node } from "@theholocron/holocron-config";

const preset = compose(node(), docs(), audit({ knip: true }));
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
	workflows: [...preset.workflows, { name: "release", with: { "run-build": true } }, "sync"],
	providers: { ...preset.providers, secrets: "github" },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review", "turborepo"],
} satisfies HolocronConfig);
