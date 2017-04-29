/**
 * Templates for the-projects
 * @module the-templates
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get api () { return d(require('./api')) },
  get nodeTest () { return d(require('./node_test')) },
  get readme () { return d(require('./readme')) },
  get test () { return d(require('./test')) }
}
