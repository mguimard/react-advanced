import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "login-app",
      filename: "remoteEntry.js",
      exposes: {
        "./LoginBox": "./src/LoginBox",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 9500,
  },
  build: {
    target: "esnext",
  },
});
