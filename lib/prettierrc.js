/**
 * prettierrc
 * @function prettierrc
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')

/** @lends prettierrc */
function prettierrc (config = {}) {
  return {
    force: true,
    mode: '444',
    path: `.prettierrc.yml`,
    data: {},
    tmpl: _tmpl('prettierrc.hbs'),
  }
}

module.exports = prettierrc
