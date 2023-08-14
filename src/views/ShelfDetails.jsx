import React ,{useEffect,useState}from 'react'

import { Outlet, useParams } from 'react-router-dom'

import {shelfService} from '../services/shelf.service.local'
import BookPreview from './../cmps/BookPreview'
import BookList from './../cmps/BookList'

const ShelfDetails = () => {
 const [shelf, setShelf]= useState(null)

 const params = useParams()
 
 useEffect(() => {
  loadShelf()
 }, [])

 useEffect(() => {
if(!shelf) return
  console.log('shelf changed' ,shelf)
  
 }, [shelf])
 const loadShelf = async () => {
  const shelf = await shelfService.getById(params.shelfId).catch((err) => {
   console.error('♠️ ~ file: ShelfDetails.jsx:18 ~ loadShelf ~ err:', err)
   $error.logError(err)
  })
    
  setShelf(shelf)
 }

 console.log(params)
 if (!shelf) return <div>Loading...</div>
 return (
  <div>
   <h2>Shelf <span>{shelf.title}</span></h2>
   <BookList books={shelf.books}/>
    <Outlet />
  </div>
 )
}

export default ShelfDetails