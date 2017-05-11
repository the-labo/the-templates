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

/** @lends test */
function test (config) {
  let {
    src,
    dest = process.cwd(),
    node = false
  } = config
  const TMPL_PATH = node ? _tmpl('node_test.hbs') : _tmpl('test.hbs')
  ok(!!src, 'config.src is required.')
  return aglob.sync(src)
    .filter((src) => path.basename(src) !== 'index.js')
    .filter((src) => path.basename(src) !== 'index.jsx')
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
      let suffix = 'Test'
      return {
        force: false,
        mode: '644',
        mkdirp: true,
        tmpl: TMPL_PATH,
        path: path.resolve(dest, basename + suffix + extname),
        data: {
          name: basename,
          relative: path.relative(dest, src).replace(extname, '')
        }
      }
    })
}

test.dir = function testDir (config) {
  let {
    src,
    dest = process.cwd(),
    node = false,
    extname = '.js'
  } = config
  const TMPL_PATH = node ? _tmpl('node_test.hbs') : _tmpl('test.hbs')
  ok(!!src, 'config.src is required.')
  let suffix = 'Test'
  return [].concat(src).map((src) => ({
    force: false,
    mode: '644',
    mkdirp: true,
    tmpl: TMPL_PATH,
    path: path.resolve(dest, path.basename(src) + suffix) + extname,
    data: {
      name: path.basename(src),
      relative: path.relative(dest, src)
    }
  }))
}

module.exports = test
