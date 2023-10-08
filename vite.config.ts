import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/entherapy.com/',
  plugins: [react(), svgr()],
  build: {
    outDir: 'docs',
  },
});

