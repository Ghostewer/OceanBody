import { defineConfig } from 'vite';

export default defineConfig({
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
