
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'shelf'

export const shelfService = {
    query,
    getById,
    save,
    remove,
    getEmptyCar,
    addCarMsg
}
window.cs = shelfService


async function query(filterBy = { txt: '', price: 0 }) {
    var shelfs = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     shelfs = shelfs.filter(shelf => regex.test(shelf.vendor) || regex.test(shelf.description))
    // }
    // if (filterBy.price) {
    //     shelfs = shelfs.filter(shelf => shelf.price <= filterBy.price)
    // }
    return shelfs
}

function getById(shelfId) {
    return storageService.get(STORAGE_KEY, shelfId)
}

async function remove(shelfId) {
    await storageService.remove(STORAGE_KEY, shelfId)
}

async function save(shelf) {
    var savedCar
    if (shelf._id) {
        savedCar = await storageService.put(STORAGE_KEY, shelf)
    } else {
        // Later, owner is set by the backend
        shelf.owner = userService.getLoggedinUser()
        savedCar = await storageService.post(STORAGE_KEY, shelf)
    }
    return savedCar
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
// ;(async ()=>{
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Karov 1', price: 180})
//     await storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 240})
// })()