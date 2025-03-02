import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'My-Portfolio', // Replace 'your-repo' with your actual GitHub repository name
});
