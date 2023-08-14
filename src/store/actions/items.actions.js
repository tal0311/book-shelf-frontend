import { shelfService } from "../../services/shelf.service.local"

export function loadItem() {

    return async (dispatch, getState) => {
        try {
            console.log('getting items');
            const filterBy = getState().itemModule.filterBy
            const items = await shelfService.query(filterBy)
            console.log('items:', items)
            dispatch({ type: 'SET_ITEMS', items })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeItem(robotId) {

    return async (dispatch) => {
        try {
            const items = await shelfService.remove(robotId)
            dispatch({ type: 'REMOVE_ITEM', robotId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}