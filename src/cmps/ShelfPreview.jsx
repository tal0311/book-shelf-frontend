import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ItemActions from './ItemActions'

const ShelfPreview = ({ shelf, onAction, updateShelf }) => {
 const [isEditable, setEditable] = useState(false)
 const { _id, title, description, createdAt, imgUrl, books } = shelf
 const navigate = useNavigate()

 const navigateTo = (shelfId) => {
  if (isEditable) return
  navigate(`/shelf/${shelfId}`)
 }

 const onShelfAction = (ev, action) => {
  ev.stopPropagation()
  if (action !== 'edit') {
   onAction(action, _id)
   return
  }
  setEditable(!isEditable)
 }

 const updateItem = (ev) => {
  ev.stopPropagation()
  if (ev.target.nodeName.toLowerCase() === 'h2') {
   updateShelf({ ...shelf, title: ev.target.innerText })
  }
  if (ev.target.nodeName.toLowerCase() === 'p') {
   updateShelf({ ...shelf, description: ev.target.innerText })
  }

 }




 return (
  <article className='shelf-preview grid-item' onClick={() => navigateTo(_id)} key={_id}>
   <h2 onBlur={updateItem} contentEditable={isEditable}>{title}</h2>
   <p contentEditable={isEditable}>{description}</p>
   <p >{createdAt}</p>
   <small><span>Items on this shelf</span> {books.length}</small>
   <img src={imgUrl} alt="" />

   <ItemActions itemId={shelf._id} onShelfAction={onShelfAction} />
  </article>
 )
}

export default ShelfPreview