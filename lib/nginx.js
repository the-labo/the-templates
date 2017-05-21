/**
 * Define coz bud for nginx
 * @function nginx
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const { ok } = require('assert')

const TMPL_PATH = _tmpl('nginx.hbs')

/** @lends nginx */
function nginx (config) {
  let {
    name = 'the-app',
    hostname = 'localhost',
    port = 3000,
    httpPort = 80,
    httpsPort = 443,
    domain = 'the-app.example.com',
    cert = '__cert_path__',
    certKey = '__cert_key_path__'
  } = config
  return {
    force: true,
    mode: '444',
    tmpl: TMPL_PATH,
    data: {
      name,
      hostname,
      port,
      httpPort,
      httpsPort,
      domain,
      cert,
      certKey
    }
  }
}

module.exports = nginx
