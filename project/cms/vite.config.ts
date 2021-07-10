import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cms',
  plugins: [reactRefresh()],
  build: {
    outDir: 'dist/cms/'
  }
})
