import {
    defineConfig
} from 'vitest/config'
export default defineConfig({
    root: 'public',
    base: './',
    publicDir: 'public',
    outDir: './dist',

    test: {
        coverage: {
            reporter: ['text', 'html']
        }
    }
})