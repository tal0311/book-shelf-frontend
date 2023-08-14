import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const ShelfDetails = () => {

 const params = useParams()
 console.log(params)
 return (
  <div>
   ShelfDetails
   <Outlet />
  </div>
 )
}

export default ShelfDetails