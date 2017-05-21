/**
 * Define coz bud for api
 * @function api
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const { ok } = require('assert')

const TMPL_PATH = _tmpl('api.hbs')

/** @lends api */
function api (config) {
  let {
    pkg,
    signature
  } = config
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    data: {
      pkg: pkg,
      signature: signature
    }
  }
}

module.exports = api
