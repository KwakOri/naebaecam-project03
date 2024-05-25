import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@redux", replacement: "/src/redux" },
      { find: "@routes", replacement: "/src/routes" },
    ],
  },
});
