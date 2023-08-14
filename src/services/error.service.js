
import { utilService } from './util.service.js'
import { DEV_URL } from '../config.js'
import { userService } from './user.service.js'



export const errorService = {
 logError
}

function logError(err, routeHistory) {
 const errorToLog = _createNewError(err)


 // if (!import.meta.url.includes(DEV_URL)) {
 //  console.error('%cError', _getStyles(), errorToLog)
 //  return
 // }
 console.info('%cError', _getStyles(), errorToLog)
}



function _createNewError(err) {
 return {
  _id: utilService.makeId(),
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




