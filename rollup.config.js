import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
    file: 'dist/ScrollProgress.esm.js',
    format: 'esm'
    },
    {
    file: 'dist/ScrollProgress.js',
    format: 'umd',
    name: 'ScrollProgress'
    },
    {
    file: 'dist/ScrollProgress.min.js',
    format: 'umd',
    name: 'ScrollProgress'
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser({
      include: [/^.+\.min\.js$/],
    }),
  ]
};
