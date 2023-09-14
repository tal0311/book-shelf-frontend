import { UPDATE_USER, SET_USER, DISPLAY_NAV, DO_LOGIN } from "../reducers/user.reducer"
import { userService } from "../../services/user.service"

export function spendBalance(amount) {
    return async (dispatch) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}
export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({ type: DO_LOGIN, user })
        } catch (error) {

        }
        console.log(credentials);
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