import React, { useState } from 'react'
import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import {
 loadItem,
 removeItem,
 setFilterBy
} from './../store/actions/items.actions'

import ShelvesList from '../cmps/ShelvesList'

const AppIndex = () => {
 const [shelves, setShelves] = useState(null)

 const items = useSelector(state => state.itemModule.items)
 console.debug('♠️ ~ file: AppIndex.jsx:15 ~ AppIndex ~ items:', items)

 useEffect(() => {
  if (items) {
   setShelves(items)
  }
 }, [items])

 const dispatch = useDispatch()
 useEffect(() => {
  getItems()
 }, [])


 const getItems = async () => {
  dispatch(loadItem())
 }
 return (
  <>
   <ShelvesList shelves={shelves} />

  </>
 )
}

export default AppIndex