import React, { useState } from 'react'
import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import {
 loadItems,
 removeItem,
 setFilterBy,
 updateItem
} from './../store/actions/items.actions'
import { eventBus, SHOW_MSG, showUserMsg } from '../services/event-bus.service.js'

import ShelvesList from '../cmps/ShelvesList'

const AppIndex = () => {
 const [shelves, setShelves] = useState(null)



 const items = useSelector(state => state.itemModule.items)
 useEffect(() => {
  if (items) {
   setShelves(items)
  }
 }, [items])

 useEffect(() => {
  getItems()
 }, [])

 const dispatch = useDispatch()
 const getItems = async () => {
  dispatch(loadItems())
 }

 const onAction = (action, itemId) => {

  if (action === 'delete') {
   const isConfirmed = confirm('Are you sure you wish to delete this shelf?')
   if (isConfirmed) {
    console.log('delete');
    dispatch(removeItem(itemId))
   }
  }
  if (action === 'archive') {
   console.log('archive');
   // dispatch(setFilterBy({ archived: true }))
  }
  if (action === 'settings') {
   console.log('settings');
   // dispatch(setFilterBy({ archived: false }))
  }

 }

 const updateShelf = (shelf) => {
  console.log(shelf);
  dispatch(updateItem(shelf))
  showUserMsg('Shelf updated')
 }



 return (
  <>
   <ShelvesList onAction={onAction} updateShelf={updateShelf} shelves={shelves} />
  </>
 )
}

export default AppIndex