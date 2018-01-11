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
    dirname
  } = config
  const TMPL_PATH = cjs ? _tmpl('cjs_dir.hbs') : _tmpl('dir.hbs')
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    path: `${__dirname}/index${cjs ? '.js' : '.mjs'}`,
    data: {
      name,
      description,
      modules: fs.readdirSync(dirname)
        .filter((name) => shouldRequire(name))
        .map((name) => path.join(dirname, name))
        .filter((filename) => isModule(filename))
        .map((filename) => ({
          path: path.basename(filename, path.extname(filename)),
          name: path.basename(filename, path.extname(filename))
        }))
        .filter(({name}) => name !== 'index')
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
      ignore = []
    } = config
    const TMPL_PATH = cjs ? _tmpl('cjs_dir.hbs') : _tmpl('dir.hbs')
    return {
      force: true,
      mode: '444',
      tmpl: TMPL_PATH,
      path: `${__dirname}/index${cjs ? '.js' : '.mjs'}`,
      data: {
        name,
        description,
        modules: aglob.sync('**/*.*', {cwd: dirname, ignore: [].concat(ignore)})
          .filter((name) => shouldRequire(path.basename(name)))
          .map((name) => path.join(dirname, name))
          .filter((filename) => isModule(filename))
          .map((filename) => {
            const basename = path.basename(filename, path.extname(filename))
            return {
              path: path.join(
                path.relative(dirname, path.dirname(filename)),
                basename
              ),
              name: basename
            }
          })
          .filter(({name}) => name !== 'index')
      }
    }
  }
})

module.exports = dir
