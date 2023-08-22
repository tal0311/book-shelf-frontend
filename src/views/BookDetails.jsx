import React, { useRef, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { shelfService } from '../services/shelf.service.local'
import BookPreview from '../cmps/BookPreview'
import AppLoader from '../cmps/AppLoader'



const BookDetails = () => {
 const [book, setBook] = useState(null)
 const dialogRef = useRef(null)
 const params = useParams()
 const { bookId, shelfId } = params

 useEffect(() => {
  loadBook()
  dialogRef.current.showModal()
 }, [])

 const loadBook = async () => {
  const book = await shelfService.getBookById(bookId, shelfId)
  // if (book) dialogRef.current.showModal()
  setBook(book)
 }

 const navigate = useNavigate()
 const closeModal = () => {
  dialogRef.current.close()
  navigate(-1)
 }

 const onAction = async (action) => {
  console.log(action)
  if (action === 'edit') {
   setIsEditable((prevState) => !prevState)
  }
  if (action === 'delete') {
   await shelfService.removeBook(book.bookId, book.shelfId)
  }
 }

 const [isEditable, setIsEditable] = useState(false)

 const updateBook = async (ev) => {
  ev.stopPropagation()
  const { innerText, className } = ev.target

  const field = className === 'title' ? 'title' : 'desc'
  const newBook = { ...book, [field]: innerText }
  await shelfService.saveBook(newBook, shelfId)
  setBook((prevBook) => ({ ...prevBook, [field]: innerText }))
 }

 return (
  <dialog className='book-details-dialog' ref={dialogRef}>
   <button className='icon dialog-btn'>
    <i className="material-symbols-outlined" onClick={closeModal}>close</i>
   </button>
   {!book && <AppLoader loaderType='book-light' />}
   {book && <BookPreview book={book} is="details" updateBook={updateBook} onAction={onAction} isEditable={isEditable} />}
  </dialog>
 )
}

export default BookDetails