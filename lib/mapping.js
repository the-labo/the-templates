/**
 * Define coz bud for mapping
 * @function mapping
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const {ok} = require('assert')

/** @lends mapping */
function mapping (config) {
  const {
    name,
    requirePath,
    requireAs,
    mapping,
    cjs = false
  } = config
  const TMPL_PATH = cjs ? _tmpl('cjs_mapping.hbs') : _tmpl('mapping.hbs')
  ok(requirePath, 'requirePath is required')
  ok(requireAs, 'requireAs is required')
  return {
    force: true,
    mode: '444',
    path: `${name}.js`,
    tmpl: TMPL_PATH,
    data: {
      name,
      requirePath,
      requireAs,
      mapping
    }
  }
}

module.exports = mapping
