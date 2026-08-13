import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";
import themesConfig from "@theholocron/themes-docs";

export default defineConfig({
	docs: themesConfig,
	importMetaUrl: import.meta.url,
	starlight,
	docsTheme,
});
