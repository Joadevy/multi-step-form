/// <reference types="vitest" />
/// <reference types="Vite/client" />

import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";

import react from "@vitejs/plugin-react";

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  root: "./",
  test: {
    environment: "happy-dom",
    globals: true,
  },
} as VitestConfigExport);
