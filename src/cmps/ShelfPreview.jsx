import React from 'react'
import { useNavigate } from 'react-router-dom'

import ItemActions from './ItemActions'

const ShelfPreview = ({ shelf }) => {
 const { _id, title, description, createdAt, imgUrl, books } = shelf
 const navigate = useNavigate()

 const navigateTo = (shelfId) => {
  navigate(`/shelf/${shelfId}`)
 }

 const onAction = (ev, action) => {
  ev.stopPropagation()
  console.log(action);
 }

 return (
  <article className='shelf-preview grid-item' onClick={() => navigateTo(_id)} key={_id}>
   <h2>{title}</h2>
   <p>{description}</p>
   <p>{createdAt}</p>
   <small><span>Items on this shelf</span> {books.length}</small>
   <img src={imgUrl} alt="" />

   <ItemActions onAction={onAction} />
  </article>
 )
}

export default ShelfPreview