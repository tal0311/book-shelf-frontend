import { shelfService } from "../../services/shelf.service.local"
import { REMOVE_ITEM, SET_FILTER_BY, UPDATE_ITEM, ADD_ITEM, SET_ITEMS, GET_SHELVES_LIST } from './../reducers/items.reducer'

export function loadItems() {

    return async (dispatch, getState) => {
        try {
            console.log('getting items');
            const filterBy = getState().itemModule.filterBy
            const items = await shelfService.query(filterBy)
            console.log('items:', items)
            dispatch({ type: SET_ITEMS, items })
        } catch (err) {
            console.error('err:', err)

        }
    }
}

export function removeItem(itemId) {

    return async (dispatch) => {
        try {
            await shelfService.remove(itemId)
            dispatch({ type: REMOVE_ITEM, itemId })
            return 'hello'
        } catch (err) {
            console.error('err:', err)

        }
    }
}
export function updateItem(item) {
    return async (dispatch) => {
        try {
            await shelfService.save(item)
            dispatch({ type: UPDATE_ITEM, item })
            return 'hello'
        } catch (err) {
            console.error('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: SET_FILTER_BY, filterBy: { ...filterBy } })
        } catch (err) {
            console.error('err:', err)
        }
    }
}
export function getTopics() {

    return (dispatch) => {
        try {
            dispatch({ type: GET_SHELVES_LIST })
        } catch (err) {
            console.error('err:', err)
        }
    }
}