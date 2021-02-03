import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

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

export default {
  input: 'src/index.js',
  external: getExternal(),
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
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: './dist/index',
          declarationMap: true
        },
        include: ['./src'],
        exclude: [
          'node_modules',
          'build',
          'dist',
          'example',
          'rollup.config.js',
          'src/__tests__',
          'src/setup*.js'
        ]
      },
      rollupCommonJSResolveHack: false,
      clean: true
    }),
    resolve(),
    commonjs(),
    terser()
  ]
}
