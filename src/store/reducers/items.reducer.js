export const SET_ITEMS = 'SET_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const SET_FILTER_BY = 'SET_FILTER_BY'


const INITIAL_STATE = {
    items: null,
    filterBy: {

    }
}


export function itemReducer(state = INITIAL_STATE, action) {
    // debugger
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: [...action.items]
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.itemId)
            }
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map(item => item._id === action.item._id ? action.item : item)
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state
    }

}