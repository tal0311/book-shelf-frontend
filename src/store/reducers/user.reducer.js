export const UPDATE_USER = 'UPDATE_USER'
export const SET_USER = 'SET_USER'
export const DISPLAY_NAV = 'DISPLAY_NAV'




const INITIAL_STATE = {
    loggedInUser: {
        name: 'Tal Amit',
        libList: [],
    },
    isNavDisplay: false
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case UPDATE_USER:
            const { loggedInUser } = state
            return {
                ...state,
                loggedInUser: { ...loggedInUser, [action.key]: action.value }
            }
        case SET_USER:

            return {
                ...state,
                loggedInUser: { ...action.user }
            }
        case DISPLAY_NAV:

            return {
                ...state,
                isNavDisplay: action.action
            }

        default:
            return state;
    }

}