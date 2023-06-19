
// module.exports = {
//     root: 'src',
//     build: {
//         outDir: '../dist'
//     },
// }

// require('esbuild').buildSync({
//     loader: { '.js': 'jsx'}
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
