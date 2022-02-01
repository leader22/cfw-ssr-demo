import { qwikRollup } from '@builder.io/qwik/optimizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import jsonPlugin from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

export default async function () {
  return {
    input: {
      index: 'src/index.cloudflare.tsx',
    },
    inlineDynamicImports: true,
    plugins: [
      nodeResolve(),
      jsonPlugin(),
      qwikRollup({
        entryStrategy: {
          type: 'single',
        },
      }),
      commonjs(),
      sucrase({ exclude: ['node_modules/**'], transforms: ['typescript']}),
    ],
    output: [
      {
        dir: 'workers-site/build',
        format: 'cjs',
      },
    ],
  };
}
