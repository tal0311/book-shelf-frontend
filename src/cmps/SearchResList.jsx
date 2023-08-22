import React, { useEffect, useState } from 'react'
import { shelfService } from '../services/shelf.service.local.js'


const SearchResList = ({ data }) => {
 const [filteredItems, setFilteredItems] = useState(null)


 useEffect(() => {
  getItemsBySearch()
 }, [])

 async function getItemsBySearch() {
  const items = await shelfService.getItemsBySearchResults(data)
  setFilteredItems(items)
 }
 // TODO: dynamic loader by Cmp

 return (
  <section className='search-results-list'>
   {!filteredItems && <h1 className='modal-loader grid'>Getting your search results...</h1>}
   {filteredItems && filteredItems.map(item => {
    return (
     <article className='item-preview' key={$utils.makeId()}>
      <div className="info-container">
       <h2>{item.title}</h2>
       <p>{item.desc}</p>
      </div>
      <img src={item.imgUrl} alt={item.title} />
     </article>
    )
   })}
  </section>
 )
}

export default SearchResList