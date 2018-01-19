/**
 * Error page
 * @function vhost
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')

/** @lends vhost */
function vhost (config) {
  const {
    domain,
    port,
    certDir= '/etc/letsencrypt/live'
  } = config
  assert(domain, 'domain is required')
  assert(port, 'port is required')
  return {
    force: true,
    mode: '444',
    path: `${domain}`,
    data: {
      domain,
      port,
      certDir,
    },
    tmpl: _tmpl('vhost.hbs')
  }
}

module.exports = vhost
