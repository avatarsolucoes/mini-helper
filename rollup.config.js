import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const dir = process.cwd()

function makeExternalPredicate(externalArr) {
  if (!externalArr.length) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return id => pattern.test(id)
}

function getExternal() {
  const external = Object.keys(pkg.peerDependencies || {})
  const allExternal = [...external, ...Object.keys(pkg.dependencies || {})]
  return makeExternalPredicate(allExternal)
}

const plugins = [
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }),
  typescript({
    tsconfig: './tsconfig-build.json',
    rollupCommonJSResolveHack: false,
    objectHashIgnoreUnknownHack: false,
    clean: true
  }),
  nodeResolve(),
  commonjs(),
  terser()
]

export const config = [
  {
    input: `${dir}/src/node/index.ts`,
    external: getExternal(),
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      // typescript({
      //   tsconfig: 'tsconfig-build.json',
      //   rollupCommonJSResolveHack: false,
      //   objectHashIgnoreUnknownHack: false,
      //   clean: true
      // }),
      nodeResolve(),
      commonjs(),
      terser()
    ],
    output: [
      {
        file: `${dir}/dist/node/index.js`,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: `${dir}/dist/node/index.es.js`,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ]
  },
  {
    input: `${dir}/src/index.ts`,
    external: getExternal(),
    plugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ]
  }
  // {
  //   input: `${dir}/src/index.js`,
  //   external: getExternal(),
  //   plugins,
  //   output: {
  //     file: pkg.module,
  //     format: 'es',
  //     exports: 'named',
  //     sourcemap: true
  //   }
  // },
]
export default config
