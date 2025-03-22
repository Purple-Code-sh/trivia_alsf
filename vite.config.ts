
import { AliasOptions, defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import path from "path";
import tailwindcss from '@tailwindcss/vite'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
})

