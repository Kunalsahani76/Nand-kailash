import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Exported Figma screens contain many image tags. Add native lazy loading at
// compile time so below-the-fold images don't compete for the initial page load.
function nativeImageLoading() {
  return {
    name: 'native-image-loading',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      if (!id.endsWith('.tsx') || !code.includes('<img')) return null

      return {
        code: code.replace(
          /<img\b(?![^>]*\bloading\s*=)/g,
          '<img loading="lazy" decoding="async"',
        ),
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    nativeImageLoading(),
    // Lossless build-time compression; originals stay exactly where they are.
    ViteImageOptimizer({
      logStats: true,
      ansiColors: false,
      // SVGs stay untouched here: their vector data is already compact and
      // this keeps the optimizer focused on the large raster photos.
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      png: { quality: 100 },
      jpeg: { quality: 100 },
      jpg: { quality: 100 },
      webp: { lossless: true },
      avif: { lossless: true },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
