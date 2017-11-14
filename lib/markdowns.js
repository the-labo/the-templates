/**
 * Define coz bud for markdowns
 * @function markdowns
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const { ok } = require('assert')
const fs = require('fs')
const aglob = require('aglob')
const path = require('path')

/** @lends markdowns */
function markdowns (config) {
  const {
    dirname,
    cjs = config.node
  } = config
  const TMPL_PATH = cjs ? _tmpl('cjs_markdowns.hbs') : _tmpl('markdowns.hbs')
  ok(!!dirname, 'config.dirname is required')
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    data: {
      files: aglob.sync('**/*.md', { cwd: dirname })
        .map((filename) => ({
          name: filename.replace(/\.md$/, ''),
          filename,
          content: fs.readFileSync(path.join(dirname, filename))
        }))
    }
  }
}

module.exports = markdowns
