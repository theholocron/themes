import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

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
	starlight,
	docsTheme,
});
