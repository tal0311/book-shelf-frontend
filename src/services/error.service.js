
import { DEV_BASE_URL } from '../config.js'
import { httpService } from './http.service.js'
import { userService } from './user.service.js'

export const errorService = {
 logError
}



function logError(err, routeHistory) {
 const errorToLog = _createNewError(err)


 if (import.meta.env.MODE !== "development") {
  console.error('%cError', _getStyles(), errorToLog)
  httpService.post(DEV_BASE_URL, errorToLog)
  return
 }
 console.info('%cError', _getStyles(), errorToLog)
}



function _createNewError(err) {
 return {
  _id: $utils.makeId(),
  desc: `[Error handler ${err}]`,
  user: userService.getLoggedinUser(),
 }
}

/**
 * 
 * @returns {string} css styles
 */
function _getStyles() {
 return 'color:#fff; background:red; padding:5px; border-radius:5px; font-weight:bold'
}

window.$error = errorService


