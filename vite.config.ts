import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";

export default defineConfig(({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

	return {
		plugins: [react(), basicSsl()],
		server: {
			host: "localhost",
			strictPort: true,
			https: true,
			port: Number(process.env.VITE_PORT) || 3000,
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});
