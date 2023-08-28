import React, { useEffect, useState } from 'react'
import { shelfService } from '../services/shelf.service.local.js'
import BookPreview from './BookPreview.jsx'
import AppLoader from './AppLoader.jsx'

const AddBook = ({ data: bookUrl }) => {
 const [bookMeta, setBookMeta] = useState(null)

 useEffect(() => {
  getBookMeta()
 }, [])

 const getBookMeta = async () => {
  const book = await shelfService.getBookMetadata(bookUrl)
  setBookMeta(book)
 }

 const saveBook = async (ev) => {
  ev.stopPropagation()
  console.log('save book',);

 }



 console.log('bookUrl', bookUrl)
 return (
  <section className='add-book'>
   {!bookMeta && <AppLoader loaderType='book-green' />}
   {bookMeta && <BookPreview book={bookMeta} is='add-book' onAction={saveBook} />}
  </section>
 )
}

export default AddBook