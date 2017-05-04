/**
 * Define coz bud for dir
 * @function dir
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const fs = require('fs')
const path = require('path')

/** @lends dir */
function dir (config) {
  let {
    name,
    description,
    node,
    dirname
  } = config
  const TMPL_PATH = node ? _tmpl('node_dir.hbs') : _tmpl('dir.hbs')
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    data: {
      name,
      description,
      modules: fs.readdirSync(dirname)
        .filter((name) => !/^[._]/.test(name))
        .filter((name) => ![ 'index.js', 'package.json' ].includes(name))
        .map((name) => path.join(dirname, name))
        .filter((name) => {
          try {
            return !!require.resolve(name)
          } catch (e) {
            return false
          }
        })
        .map((filename) => path.basename(filename, path.extname(filename)))
        .filter((name) => name !== 'index')
    }
  }
}

module.exports = dir
