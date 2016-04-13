const
  co = require('co'),
  fetch = require('node-fetch'),
  fsp = require('fs-promise'),
  path = require('path'),
  yaml = require('js-yaml'),
  meta = require('../package.json')

co(function* () {
  try {
    // download meta data from the repo
    const
      version = meta.devDependencies['font-awesome'].replace('^', ''),
      root = path.resolve(__dirname, '..'),
      repo = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome',
      url = `${ repo }/v${ version }/src/icons.yml`,
      res = yield fetch(url),
      data = yaml.safeLoad(yield res.text()),
      icons = data.icons.reduce((acc, icon) => {
        acc[icon.id] = icon.unicode
        return acc
      }, {}),
      json = JSON.stringify(icons)

    yield fsp.writeFile(path.join(root, 'src/icons.json'), json)

    // copy the font for convenient
    const
      fontPath = 'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
      fontBinary = yield fsp.readFile(path.resolve(root, fontPath))

    yield fsp.writeFile(path.join(root, 'dist/fa.woff'), fontBinary)
  } catch (err) {
    console.log(err)
  }
})
