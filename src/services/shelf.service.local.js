
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import shelves from './../../data/shelf.json' assert {type: 'json'}
import { httpService } from './http.service.js'
import axios from 'axios'

const STORAGE_KEY = 'shelf'

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'
export const shelfService = {
    query,
    getById,
    save,
    remove,
    getBookById,
    removeBook,
    saveBook,
    getItemsBySearchResults,
    getBookMetadata
}
window.shelfService = shelfService


async function query(filterBy = { txt: '' }) {
    const shelves = await httpService.get('shelf')
    // var shelves = await storageService.query(STORAGE_KEY)
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

async function getItemsBySearchResults(searchTerm) {
    const items = []
    const shelves = await query()
    const regex = new RegExp(searchTerm, 'i')
    shelves.forEach(shelf => {
        if (regex.test(shelf.title) || regex.test(shelf.desc)) {
            items.push(_createSearchItem(shelf, 'shelf'))
        }
        shelf.books.forEach(book => {
            if (regex.test(book.title)
                || regex.test(book.subtitle)
                || regex.test(book.authors)) {
                items.push(_createSearchItem(book, 'book', shelf._id))
            }
        })

    });

    return items
}

function _createSearchItem(item, type, shelfId = null) {
    return {
        _id: type == 'book' ? item.bookId : item._id,
        title: item.title,
        desc: item.desc || '(no description)',
        type,
        imgUrl: item.imgUrl,
        shelfId
    }
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

async function removeBook(bookId, shelfId) {
    const shelf = await storageService.get(STORAGE_KEY, shelfId)
    shelf.books = shelf.books.filter(book => book.bookId !== bookId)
    await storageService.put(STORAGE_KEY, shelf)
}

async function getBookById(bookId, shelfId) {
    const shelf = await storageService.get(STORAGE_KEY, shelfId)
    console.debug('♠️ ~ file: shelf.service.local.js:39 ~ getBookById ~ shelf:', shelf)
    return shelf.books.find(book => book.bookId === bookId)
}

async function saveBook(book, shelfId) {
    const shelf = await storageService.get(STORAGE_KEY, shelfId)
    if (book.bookId) {
        const bookIdx = shelf.books.findIndex(currBook => currBook.bookId === book.bookId)
        shelf.books.splice(bookIdx, 1, book)
    } else {
        book.bookId = utilService.makeId()
        shelf.books.push(book)
    }
    await storageService.put(STORAGE_KEY, shelf)
}

async function getBookMetadata(url) {
    return axios.get('//localhost:3030/api/book/meta?url=' + url).then(res => res.data)
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



function getEmptyShelf() {
    return {
        title: "",
        desc: "",
        createdAt: null,
        imgUrl: "",
        ownerId: "",
        books: [],
    }

}
function getEmptyBook() {
    return {
        bookId: "",
        title: "",
        desc: "",
        link: "",
        imgUrl: "",
        createdAt: null
    }

}




// TEST DATA
// ; (async () => {
//     utilService.saveToStorage(STORAGE_KEY, shelves)
// })()