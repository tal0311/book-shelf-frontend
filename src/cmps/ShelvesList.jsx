import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShelvesList = ({ shelves }) => {
 const navigate = useNavigate()

 const navigateTo = (shelfId) => {
  navigate(`/shelf/${shelfId}`)
 }

 return (
  <div className='shelves-list grid'>
   {!shelves && <div>Loading...</div>}
   {shelves && shelves.map(shelf => {
    const { _id, title, description, createdAt, books, imgUrl } = shelf
    return (
     <article className='self-preview' onClick={() => navigateTo(_id)} key={_id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{createdAt}</p>
      <img src={imgUrl} alt="" />
      <small><span>Items on this shelf</span> {books.length}</small>
     </article>
    )
   })}
  </div >
 )
}

export default ShelvesList