import { defineConfig } from "@theholocron/astro-config";
import themesConfig from "@theholocron/themes-docs";

export default defineConfig({
	docs: themesConfig,
	importMetaUrl: import.meta.url,
});
