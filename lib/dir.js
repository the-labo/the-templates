/**
 * Define coz bud for dir
 * @function dir
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const aglob = require('aglob')
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
      modules: aglob
        .sync([ '*.js', '*.jsx' ], { cwd: dirname })
        .map((filename) => path.basename(filename, path.extname(filename)))
        .filter((name) => name !== 'index')
    }
  }
}

module.exports = dir
