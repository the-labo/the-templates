/**
 * @function Resources
 */
'use strict'

/** @lends Resources */
function Resources (config) {
  const {
    ResourceMapping,
    pathPrefix= 'server/db/resources/',
    pathSuffix= 'Resource.js',
  } = config
  return {
    force: true,
    mode: '444',
    data: {
      Resources: ResourceMapping,
      pathPrefix,
      pathSuffix,
    }
  }
}

module.exports = Resources