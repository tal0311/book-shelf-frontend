export const UPDATE_USER = 'UPDATE_USER'
export const SET_USER = 'SET_USER'



const INITIAL_STATE = {
    loggedInUser: {
        name: 'Tal Amit',
        libList: [],
    }
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

        default:
            return state;
    }

}