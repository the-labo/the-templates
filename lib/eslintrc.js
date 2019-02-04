/**
 * eslintrc
 * @function eslintrc
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')

/** @lends eslintrc */
function eslintrc (config = {}) {
  return {
    force: true,
    mode: '444',
    path: `.eslintrc.yml`,
    data: {},
    tmpl: _tmpl('eslintrc.hbs'),
  }
}

module.exports = eslintrc
