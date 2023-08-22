import React, { useEffect, useState } from 'react'
import { shelfService } from '../services/shelf.service.local.js'
import AppLoader from './AppLoader.jsx'
import { useNavigate } from 'react-router-dom'


const SearchResList = ({ data, closeModal }) => {
 const [filteredItems, setFilteredItems] = useState(null)

 useEffect(() => {
  getItemsBySearch()
 }, [])

 async function getItemsBySearch() {
  const items = await shelfService.getItemsBySearchResults(data)
  setFilteredItems(items)
 }
 // TODO: dynamic loader by Cmp

 const navigate = useNavigate()
 const navigateTo = (ev, item) => {
  ev.stopPropagation()
  console.log(item);
  if (item.type === 'shelf') {
   navigate(`/shelf/${item._id}`)
   closeModal()
  }
  if (item.type === 'book') {
   navigate(`/shelf/${item.shelfId}/book/${item._id}`)
   closeModal()
  }
 }

 return (
  <section className='search-results-list'>

   {!filteredItems && <section className='modal-loader'>
    <AppLoader loaderType='search' />
   </section>}
   {
    filteredItems && filteredItems.map(item => {
     return (
      <article onClick={(ev) => navigateTo(ev, item)} className='item-preview' key={$utils.makeId()}>
       <div className="info-container">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
       </div>
       <img src={item.imgUrl} alt={item.title} />
      </article>
     )
    })
   }
  </section >
 )
}

export default SearchResList