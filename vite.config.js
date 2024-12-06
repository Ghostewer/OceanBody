import { defineConfig } from 'vite';

export default defineConfig({
  base: '/OceanBody/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          echarts: ['echarts', 'echarts-gl'], // Séparer les bibliothèques volumineuses
        },
      },
    },
  },
});
