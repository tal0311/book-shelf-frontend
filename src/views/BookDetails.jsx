import React, { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { shelfService } from '../services/shelf.service.local'
import BookPreview from '../cmps/BookPreview'



const BookDetails = () => {
 const [book, setBook] = useState(null)
 const params = useParams()
 const dialogRef = useRef(null)

 useEffect(() => {
  loadBook()
 }, [])

 const loadBook = async () => {
  const { bookId, shelfId } = params
  const book = await shelfService.getBookById(bookId, shelfId)
  if (book) dialogRef.current.showModal()
  setBook(book)
 }
 const closeModal = () => {
  dialogRef.current.close()
 }

 return (
  <dialog ref={dialogRef}>
   <button>
    <i className="material-symbols-outlined" onClick={closeModal}>close</i>
   </button>
   <BookPreview book={book} />


  </dialog>
 )
}

export default BookDetails