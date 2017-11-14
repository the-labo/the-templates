/**
 * Define coz bud for templates
 * @function templates
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const { ok } = require('assert')
const fs = require('fs')
const aglob = require('aglob')
const path = require('path')

/** @lends templates */
function templates (config) {
  let {
    dirname,
    cjs = config.node
  } = config
  const TMPL_PATH = cjs ? _tmpl('cjs_templates.hbs') : _tmpl('templates.hbs')
  ok(!!dirname, 'config.dirname is required')
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    data: {
      files: aglob.sync('**/*.hbs', { cwd: dirname })
        .map((filename) => ({
          name: filename.replace(/\.hbs$/, ''),
          filename,
          content: fs.readFileSync(path.join(dirname, filename))
        }))
    }
  }
}

module.exports = templates
