import { createDocsCollections } from "@theholocron/docs-theme/content";
import themesConfig from "@theholocron/themes-docs";

export const collections = createDocsCollections(themesConfig, import.meta.url);
