import React, { useEffect, useState } from 'react'
import { shelfService } from '../services/shelf.service.local.js'
import BookPreview from './BookPreview.jsx'
import AppLoader from './AppLoader.jsx'
import { getTopics } from './../store/actions/items.actions.js'
import { useDispatch, useSelector } from 'react-redux'

const AddBook = ({ data: bookUrl }) => {
 const [bookMeta, setBookMeta] = useState(null)
 const dispatch = useDispatch()
 const topicList = useSelector(state => state.itemModule.shelvesTopics)

 useEffect(() => {
  getBookMeta()
  loadShelvesList()
 }, [])

 const getBookMeta = async () => {
  const book = await shelfService.getBookMetadata(bookUrl)
  setBookMeta(book)
 }

 const saveBook = async (ev) => {
  ev.stopPropagation()
  console.log('save book',);

 }

 function loadShelvesList() {
  dispatch(getTopics())
 }



 console.log('bookUrl', bookUrl)
 return (
  <section className='add-book'>
   {!bookMeta && <AppLoader loaderType='book-green' />}
   {bookMeta && <BookPreview book={bookMeta} is='add-book' onAction={saveBook} shelfListTopics={topicList} />}
  </section>
 )
}

export default AddBook