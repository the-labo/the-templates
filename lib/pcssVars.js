/**
 * Variables for pcss
 * @function pcssVars
 * @param {Object} config
 * @param {Object} config.values
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')

/** @lends pcssVars */
function pcssVars (config) {
  const { values, src } = config
  return {
    force: true,
    mode: '444',
    data: {
      src,
      values: Object.keys(values)
        .reduce((reduced, name) => Object.assign(reduced, {
          [String(name).toLowerCase()]: values[ name ]
        }), {})
    },
    tmpl: _tmpl('pcss_vars.hbs')
  }
}

module.exports = pcssVars
