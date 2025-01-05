import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "assets": "/src/assets",
      "components": "/src/components",
      "EstilosGlobais": "/src/components/EstilosGlobais",
      "public": "/public",	
      "imagens": "/public/imagens",
      "logo": "/public/imagens/logo.png",
      "search": "/src/assets/search.png",
      "fontes": "/src/components/EstilosGlobais/fontes",
      "GandhiSansRegular": "/src/components/EstilosGlobais/fontes/GandhiSans-Regular.otf",
      "GandhiSansBold": "/src/components/EstilosGlobais/fontes/GandhiSans-Bold.otf",
      "FotoDestaque": "/src/components/Banner/FotoDestaque"
    },
  },
})
