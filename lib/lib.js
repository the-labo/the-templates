/**
 * Define coz bud for readme
 * @function lib
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const aglob = require('aglob')
const path = require('path')

const TMPL_PATH = _tmpl('lib.hbs')

/** @lends lib */
function lib (config) {
  let {
    pkg,
    index,
    dirname
  } = config
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    data: {
      pkg,
      index,
      modules: aglob
        .sync([ '*.js', '*.jsx' ], { cwd: dirname })
        .map((filename) => path.basename(filename, path.extname(filename)))
        .filter((name) => name !== 'index')
    }
  }
}

module.exports = lib
