/**
 * Templates for the-projects
 * @module the-templates
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

module.exports = {
  get Bound () { return _d(require('./Bound')) },
  get Ctrl () { return _d(require('./Ctrl')) },
  get Resources () { return _d(require('./Resources')) },
  get Scene () { return _d(require('./Scene')) },
  get View () { return _d(require('./View')) },
  get api () { return _d(require('./api')) },
  get dir () { return _d(require('./dir')) },
  get errorPage () { return _d(require('./errorPage')) },
  get lib () { return _d(require('./lib')) },
  get mapping () { return _d(require('./mapping')) },
  get markdowns () { return _d(require('./markdowns')) },
  get nginx () { return _d(require('./nginx')) },
  get pcssVars () { return _d(require('./pcssVars')) },
  get readme () { return _d(require('./readme')) },
  get selfSigned () { return _d(require('./selfSigned')) },
  get templates () { return _d(require('./templates')) },
  get test () { return _d(require('./test')) },
  get toc () { return _d(require('./toc')) },
  get vhost () { return _d(require('./vhost')) },
}
