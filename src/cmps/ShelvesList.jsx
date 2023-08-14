import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShelvesList = ({ shelves }) => {
 const navigate = useNavigate()


 const navigateTo = (shelfId) => {
  console.log('navigateTo', shelfId)
  navigate(`/shelf/${shelfId}`)
 }

 return (
  <div className='shelves-list'>
   {shelves && shelves.map(shelf => {
    return (
     <article onClick={() => navigateTo(shelf._id)} className='shelf-preview' key={shelf._id}>
      <h2>{shelf.title}</h2>
      <p>{shelf.description}</p>
      <p>{shelf.createdAt}</p>
     </article>
    )
   })}
  </div >
 )
}

export default ShelvesList