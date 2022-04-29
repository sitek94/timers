import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const isDev = process.env.NODE_ENV === 'development'

const file = fileURLToPath(new URL('package.json', import.meta.url))
const pkg = JSON.parse(readFileSync(file))

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
    paths: {
      base: isDev ? '' : `/${pkg.name}`,
    },
    prerender: {
      default: false,
    },
  },
}

export default config
