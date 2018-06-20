/**
 * Define coz bud for dir
 * @function dir
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const fs = require('fs')
const aglob = require('aglob')
const path = require('path')

const shouldRequire = (name) => {
  return !/^[._]/.test(name) &&
    !['index.jsx', 'index.js', 'package.json'].includes(name) &&
    ['.jsx', '.js', '.json', '.mjs', ''].includes(path.extname(name))
}

const handleRestConfig = (rest) => {
  const restKeys = Object.keys(rest)
  if (restKeys.length > 0) {
    console.warn(`[the-templates][dir] Unknown configs: ${restKeys}`)
  }
}

const isModule = (filename) => {
  try {
    return !!require.resolve(filename)
  } catch (e) {
    return false
  }
}

/** @lends dir */
function dir (config) {
  const {
    name,
    description,
    cjs = config.node,
    ext,
    dirname,
    ...rest
  } = config
  handleRestConfig(rest)
  const TMPL_PATH = cjs ? _tmpl('cjs_dir.hbs') : _tmpl('dir.hbs')
  const modules = fs.readdirSync(dirname)
    .filter((name) => shouldRequire(name))
    .map((name) => path.join(dirname, name))
    .filter((filename) => isModule(filename))
    .map((filename) => {
      const pathName = path.basename(filename, path.extname(filename))
      const name = pathName.replace(/^\d+\./, '')
      const varNameChanged = ['default'].includes(name)
      return {
        path: pathName,
        name: name,
        varName: varNameChanged ? name + '_' : name,
        varNameChanged,
      }
    })
    .filter(({name}) => name !== 'index')
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    path: `${dirname}/index${ext || (cjs ? '.js' : '.mjs')}`,
    data: {
      name,
      description,
      defaultModule: modules.find(({name}) => name === 'default'),
      modules: modules.filter(({name}) => name !== 'default'),
    }
  }
}

Object.assign(dir, {
  recursive (config) {
    const {
      name,
      description,
      cjs = config.node,
      dirname,
      ext,
      ignore = [],
      ...rest
    } = config
    handleRestConfig(rest)
    const TMPL_PATH = cjs ? _tmpl('cjs_dir.hbs') : _tmpl('dir.hbs')
    const modules = aglob.sync('**/*.*', {cwd: dirname, ignore: [].concat(ignore)})
      .filter((name) => shouldRequire(path.basename(name)))
      .map((name) => path.join(dirname, name))
      .filter((filename) => isModule(filename))
      .map((filename) => {
        const basename = path.basename(filename, path.extname(filename))
        const name = String(basename)
        const varNameChanged = ['default'].includes(name)
        return {
          path: path.join(
            path.relative(dirname, path.dirname(filename)),
            basename
          ),
          name,
          varName: varNameChanged ? name + '_' : name,
          varNameChanged,
        }
      })
      .filter(({name}) => name !== 'index')
    return {
      force: true,
      mode: '444',
      tmpl: TMPL_PATH,
      path: `${dirname}/index${ext || (cjs ? '.js' : '.mjs')}`,
      data: {
        name,
        description,
        defaultModule: modules.find(({name}) => name === 'default'),
        modules: modules.filter(({name}) => name !== 'default'),
      }
    }
  }
})

module.exports = dir
