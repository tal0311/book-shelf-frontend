import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AppNav = () => {
 const [placeHolder, setPlaceHolder] = useState(null)


 const navActions = [
  {
   icon: 'frame_inspect',
   action: 'search'
  },
  {
   icon: 'add_box',
   action: 'add-book'
  },
  {
   icon: 'library_add',
   action: 'add-shelf'
  },
  {
   icon: 'explore',
   action: 'explore'
  }
 ]

 const [isDirty, setIsDirty] = useState(false)
 const handleInput = ({ target: { value } }) => {
  value.length > 0 ? setIsDirty(true) : setIsDirty(false)
 }

 const onAction = (action) => {
  const opts = {
   'search': 'Search for a book',
   'add-book': 'Add a book',
   'add-shelf': 'Add a shelf',
   'explore': 'Witch topic would you like to explore?'
  }
  // if (action === 'explore') {
  //  window.location.replace(`${window.location.origin}/explore`)
  //  return
  // }
  if (opts[action] === placeHolder) {
   setPlaceHolder(null)
   return
  }
  setPlaceHolder(opts[action])
 }

 return (

  <div className='app-nav grid'>

   {placeHolder &&
    <section className='search grid'>
     <input onChange={handleInput} type="search" name="" id="" placeholder={placeHolder} />
     <button className={isDirty ? 'dirty' : ''}>
      <i className="material-symbols-outlined">check_circle</i>
     </button>
    </section>}

   {navActions.map((navAction, idx) => {
    const { action, icon } = navAction
    return (
     <button onClick={() => onAction(action)} className='icon' key={idx}>
      <i className="material-symbols-outlined">{icon}</i>
     </button>
    )
   })}

  </div>

 )

 //  <button className='icon'>
 //   <i class="material-symbols-outlined">frame_inspect</i>
 //  </button>
 //  <button className='icon'>
 //   <i class="material-symbols-outlined">add_box</i>
 //  </button>
 //  <button className='icon'>
 //   <i class="material-symbols-outlined">library_add</i>
 //  </button>
 // </div>

}

export default AppNav