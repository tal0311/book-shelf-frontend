import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {


 const navLinks = [
  {
   name: 'Home',
   path: '/'

  },
  {
   name: 'Library',
   path: '/shelf'
  },
  {
   name: 'Contact',
   path: '/contact'
  }
 ]

 function getImg() {
  const url = './../assets/images/bookShelf_icon-removebg-preview.png'
  return $utils.getImg(url)
 }

 return (
  <header className='app-header full main-layout'>
   <section className='header-container grid'>

    <div className="logo">
     <img src={getImg()} alt="" />
    </div>

    <nav className="top-nav">
     <ul className='clean-list grid'>
      {navLinks.map((navLink, idx) => {
       return (<li key={idx}>
        <a href={navLink.path}>{navLink.name}</a>
       </li>
       )
      })}

     </ul>
    </nav>

   </section>
  </header >
 )
}

export default AppHeader