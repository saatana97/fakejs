import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/main.ts"),
            name: "fakejs",
            // the proper extensions will be added
            fileName: "fakejs",
        },
    },
    plugins: [
        dts({
            tsConfigFilePath: "./tsconfig.types.json",
        }),
    ],
});
