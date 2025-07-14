import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/lmsProject/', // ✔️ correct base for GitHub Pages

    plugins: [
      react(),

      viteStaticCopy({
        targets: [
          {
            src: 'public/404.html', 
            dest: '.' // ✔️ place it in the root of `dist` folder
          }
        ]
      })
    ]
  };
});
