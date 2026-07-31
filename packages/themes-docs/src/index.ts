export interface SidebarLink {
	label: string;
	slug: string;
}

export interface SidebarGroup {
	label: string;
	items: Array<SidebarLink | SidebarGroup>;
}

export interface DocsConfig {
	slug: string;
	parent: string | null;
	name: string;
	sidebar: Array<SidebarLink | SidebarGroup>;
}

const config: DocsConfig = {
	slug: "themes",
	parent: null,
	name: "Themes",
	sidebar: [
		{ label: "Overview", slug: "themes" },
		{
			label: "Packages",
			items: [{ label: "docs-theme", slug: "themes/docs-theme" }],
		},
	],
};

export default config;
