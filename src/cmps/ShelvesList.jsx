import React from 'react'


import SelfPreview from './ShelfPreview'

const ShelvesList = ({ shelves, onAction, updateShelf }) => {
  return (
    <div className='shelves-list grid'>
      {shelves && shelves.map(shelf =>
        <SelfPreview onAction={onAction} updateShelf={updateShelf} shelf={shelf} key={shelf._id} />)}
    </div >
  )
}

export default ShelvesList
