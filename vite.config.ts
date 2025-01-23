import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// https://vite.dev/config/
export default defineConfig({
  plugins: [viteReact(), TanStackRouterVite()],
  server: { port: 8080 },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        cssnano({ preset: 'default' })

      ]
    }
  }
});
