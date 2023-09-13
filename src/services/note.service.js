
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import notes from './../../data/notes.json' assert {type: 'json'}
import { httpService } from './http.service.js'


const STORAGE_KEY = 'note'

export const shelfService = {
    query,
    addNote,
}
window.shelfService = shelfService


async function query() {
    var notes = await storageService.query(STORAGE_KEY)
    // httpService.get()
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     shelfs = shelfs.filter(shelf => regex.test(shelf.vendor) || regex.test(shelf.description))
    // }
    // if (filterBy.price) {
    //     shelfs = shelfs.filter(shelf => shelf.price <= filterBy.price)
    // }
    return notes
}

async function addNote(noteType, title, desc, imgUrl) {
    const note = getEmptyNote(noteType, title, desc, imgUrl)
    return await storageService.post(note)
}

function getEmptyNote(noteType, title, desc, imgUrl) {
    return {
        noteId: utilService.makeId(),
        noteType,
        createdAt: Date.now(),
        updatedTarget: {
            title,
            desc,
            imgUrl
        }
    }
}


// TEST DATA
; (async () => {
    utilService.saveToStorage(STORAGE_KEY, notes)
})()