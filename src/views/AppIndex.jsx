import React, { useState } from 'react'
import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import {
 loadItems,
 removeItem,
 setFilterBy
} from './../store/actions/items.actions'

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

 const onAction = (ev, action, itemId) => {
  ev.stopPropagation()
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
  if (action === 'edit') {
   console.log('edit');
  }

 }

 return (
  <>
   <ShelvesList onAction={onAction} shelves={shelves} />
  </>
 )
}

export default AppIndex