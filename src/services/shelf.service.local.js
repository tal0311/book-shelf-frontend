
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import shelves from './../../data/shelf.json' assert {type: 'json'}

const STORAGE_KEY = 'shelf'

export const shelfService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar,
    addCarMsg
}
window.shelfService = shelfService


async function query(filterBy = { txt: '' }) {
    var shelves = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     shelfs = shelfs.filter(shelf => regex.test(shelf.vendor) || regex.test(shelf.description))
    // }
    // if (filterBy.price) {
    //     shelfs = shelfs.filter(shelf => shelf.price <= filterBy.price)
    // }
    return shelves
}

function getById(shelfId) {
    return storageService.get(STORAGE_KEY, shelfId)
}

async function remove(shelfId) {
    await storageService.remove(STORAGE_KEY, shelfId)
}

async function save(shelf) {
    var savedShelf
    if (shelf._id) {
        savedShelf = await storageService.put(STORAGE_KEY, shelf)
    } else {
        // Later, owner is set by the backend
        shelf.owner = userService.getLoggedinUser()
        savedShelf = await storageService.post(STORAGE_KEY, shelf)
    }
    return savedShelf
}

async function addCarMsg(shelfId, txt) {
    // Later, this is all done by the backend
    const shelf = await getById(shelfId)
    if (!shelf.msgs) shelf.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    shelf.msgs.push(msg)
    await storageService.put(STORAGE_KEY, shelf)

    return msg
}

function getEmptyCar() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// ; (async () => {
//     utilService.saveToStorage(STORAGE_KEY, shelves)
// })()