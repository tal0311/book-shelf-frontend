import React from 'react'


import SelfPreview from './ShelfPreview'

const ShelvesList = ({ shelves }) => {


 return (
  <div className='shelves-list grid'>
   {!shelves && <div>Loading...</div>}
   {shelves && shelves.map(shelf =>
    <SelfPreview shelf={shelf} key={shelf._id} />)}
  </div >
 )
}

export default ShelvesList
