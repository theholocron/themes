import { defineConfig } from "@theholocron/semantic-release-config";

export default defineConfig({
	exec: {
		prepareCmd:
			"node -e \"const fs=require('fs'),v='${nextRelease.version}'; ['packages/docs-theme'].forEach(p=>{const f=p+'/package.json',j=JSON.parse(fs.readFileSync(f));j.version=v;fs.writeFileSync(f,JSON.stringify(j,null,2)+'\\n');});\"",
		publishCmd:
			"pnpm -r --filter='./packages/*' exec npm publish --access public --tag ${nextRelease.channel || 'latest'}",
	},
});
