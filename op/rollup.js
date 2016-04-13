const
  co = require('co'),
  rollup = require('rollup').rollup,
  babel = require('rollup-plugin-babel'),
  json = require('rollup-plugin-json'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  riot = require('rollup-plugin-riot'),
  changeCase = require('change-case'),
  packageName = require('../package.json').name

co(function* () {
  try {
    const
      bundle = yield rollup({
        entry: 'src/index.js',
        external: ['riot'],
        plugins: [riot(), json(), resolve({ jsnext: true }), babel()]
      }),
      demoBundle = yield rollup({
        entry: 'demo/index.js',
        external: ['riot'],
        plugins: [riot(), json(), resolve({ jsnext: true }), commonjs(), babel()]
      })

    yield bundle.write({
      format: 'iife',
      moduleName: changeCase.camelCase(packageName),
      globals: { riot: 'riot' },
      dest: `dist/${ packageName }.js`
    })
    yield bundle.write({ format: 'es6', dest: `dist/${ packageName }.es6.js` })
    yield bundle.write({ format: 'amd', dest: `dist/${ packageName }.amd.js` })
    yield bundle.write({ format: 'cjs', dest: `dist/${ packageName }.cjs.js` })

    yield demoBundle.write({
      format: 'iife',
      moduleName: 'app',
      globals: { riot: 'riot' },
      dest: `dist/demo.js`
    })
  } catch (err) {
    console.log(err)
  }
})
