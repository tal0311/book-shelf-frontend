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
  dispatch(loadItem())
 }
 return (
  <>
   <ShelvesList shelves={shelves} />
  </>
 )
}

export default AppIndex