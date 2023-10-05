import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {

 const navigate = useNavigate()
 const goBack = () => {
  navigate(-1)
 }

 return (
  <section className='page-note-found'>
   <h1>404</h1>
   <p>Page not Found</p>
   <button onClick={goBack}>Back</button>
  </section>
 )
}

export default NotFound