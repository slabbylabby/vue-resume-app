import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000
    },
    build: {
        rollupOptions: {
          external: ['vue-resume-app\styles\global.css']
        }
    },
  });