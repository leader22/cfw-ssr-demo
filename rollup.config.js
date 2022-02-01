import { qwikRollup } from '@builder.io/qwik/optimizer';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export default async function () {
  return {
    input: [
      'src/index.server.tsx',
      'src/my-app.tsx'
    ],
    plugins: [
      nodeResolve(),
      qwikRollup({
        entryStrategy: {type: 'hook' }, 
        symbolsOutput: (data) => {
          outputJSON('./server/build/q-symbols.json', data);
        },
      }),
      sucrase({ exclude: ['node_modules/**'], transforms: ['typescript']}),
    ],
    output: [
      {
        chunkFileNames: 'q-[hash].js',
        dir: 'public/build',
        format: 'es',
      },
      {
        dir: 'server/build',
        format: 'cjs',
      },
    ],
  };
}

function outputJSON(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2));
}
