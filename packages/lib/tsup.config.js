import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  entry: ['./src/index.ts'],
  format: ['esm'],
  target: 'node18',
  clean: true,
  watch: options.watch,
  sourcemaps: options.watch,
  minify: !options.watch,
}));
