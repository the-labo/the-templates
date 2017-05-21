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

const TMPL_PATH = _tmpl('markdowns.hbs')

/** @lends markdowns */
function markdowns (config) {
  let {
    dirname
  } = config
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
