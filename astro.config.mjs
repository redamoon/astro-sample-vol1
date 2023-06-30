import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';
import react from '@astrojs/react';

import { writeFileSync, readFileSync } from 'fs';

export function removeDoctype(html) {
  return html.replace('<!DOCTYPE html>', '');
}

export function ssi(html) {
  const replacement = '<!--#include virtual="/include/header.html" -->';
  return html.replace('<div class="bg-sky-500 p-5">', replacement);
}

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5000,
    open: true,
  },
  integrations: [
    tailwind(),
    vue(),
    react(),
    {
      name: 'removeDoctype',
      hooks: {
        'astro:build:done': (options) => {
          const paths = options.routes
            .filter(({ pathname }) => pathname.startsWith('/tmp/'))
            .map((v) => `dist${v.pathname}/index.html`);

          try {
            paths.map((target) => {
              // MEMO 'dist/tmp/Head/index.html'だけはDoctypeを付与
              return (
                target !== 'dist/tmp/Head/index.html' &&
                writeFileSync(target, removeDoctype(readFileSync(target, 'utf8')), 'utf8')
              );
            });
            paths.map((target) => {
              // MEMO 'dist/ssi-index.html'だけはSSIにする
              return (
                target !== 'dist/ssi-index/index.html' &&
                writeFileSync(target, ssi(readFileSync(target, 'utf8')), 'utf8')
              );
            });
          } catch (error) {
            console.log(error);
          }
        },
      },
    },
  ],
});
