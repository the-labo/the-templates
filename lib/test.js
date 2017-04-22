/**
 * Define coz bud for readme
 * @function test
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const aglob = require('aglob')
const stringcase = require('stringcase')
const path = require('path')
const { ok } = require('assert')

const TMPL_PATH = _tmpl('test_jsx.hbs')

/** @lends test */
function test (config) {
  let {
    src,
    dest = process.cwd()
  } = config
  ok(!!src, 'config.src is required.')
  return aglob.sync(src)
    .filter((src) => path.basename(src) !== 'index.js')
    .filter((src) => !/^[\._\-]/.test(path.basename(src)))
    .filter((src) => {
      try {
        return !!require.resolve(src)
      } catch (e) {
        return false
      }
    })
    .map((src) => {
      let extname = path.extname(src)
      let basename = path.basename(src, extname)
      let suffix = basename[ 0 ] === basename[ 0 ].toUpperCase() ? 'Test' : '_test'
      return {
        force: false,
        mode: '644',
        mkdirp: true,
        tmpl: TMPL_PATH,
        path: path.resolve(dest, basename + suffix + extname),
        data: {
          name: basename,
          relative: path.relative(dest, src).replace(extname,'')
        }
      }
    })
}

module.exports = test
