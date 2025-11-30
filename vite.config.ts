import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
        tailwindcss()
    ],
    base: "/namaste-lekhapadhi/",
    server: {
        open: true,
        port: 3001,
    },
    build: {
        sourcemap: false, // Disable source maps for production build. By default it's false, so this line is optional.
        emptyOutDir: true, // Clean the output directory before each build
        chunkSizeWarningLimit: 400,
        target: "esnext", // fastest & modern browsers
        minify: "esbuild",
        rollupOptions: {
            output: { // Customize the output file names
                manualChunks(id: string) {
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                },
            },
        },
    },
})
