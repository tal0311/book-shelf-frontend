import { UPDATE_USER, SET_USER, DISPLAY_NAV } from "../reducers/user.reducer"
import { userService } from "../../services/user.service"

export function spendBalance(amount) {
    return async (dispatch) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}
export function getUser(amount) {
    return (dispatch) => {
        const user = userService.getLoggedinUser()
        dispatch({ type: SET_USER, user })
    }
}
export function toggleNavDisplay(val) {
    return (dispatch) => {

        dispatch({ type: DISPLAY_NAV, action: true })
    }
}