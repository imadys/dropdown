import {defineConfig} from 'vitest/config'
import path from "node:path";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "lib/src/index.js"),
            name: "IMADYS",
            formats: ["es", "umd"],
            fileName: (format) => `imadys.${format}.js`
        }
    }
})
