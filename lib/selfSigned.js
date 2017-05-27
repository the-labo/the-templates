/**
 * Generate self signed
 * @function selfSigned
 * @returns {Object}
 */
'use strict'

const { generate } = require('selfsigned')

/** @lends selfSigned */
function selfSigned (config) {
  const {
    name = 'app',
    countryName,
    stateOrProvinceName,
    localityName,
    organizationName,
    emailAddress,
    commonName
  } = config
  let attributes = [
    { name: 'countryName', value: countryName },
    { name: 'stateOrProvinceName', value: stateOrProvinceName },
    { name: 'localityName', value: localityName },
    { name: 'organizationName', value: organizationName },
    { name: 'emailAddress', value: emailAddress },
    { name: 'commonName', value: commonName }
  ].filter(({ value }) => !!value)
  let {
    private: privateKey,
    public: publicKey,
    cert: certKey
  } = generate(attributes, {})

  const _bud = (path, value) => ({
    force: false,
    mkdirp: true,
    mode: '444',
    path,
    tmpl: ({ value }) => value,
    data: { value }
  })
  return [
    _bud(`${name}.cert.key`, privateKey),
    _bud(`${name}.cert.key.pub`, publicKey),
    _bud(`${name}.cert`, certKey)
  ]
}

module.exports = selfSigned
