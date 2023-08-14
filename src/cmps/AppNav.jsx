import React from 'react'
import { useState } from 'react'

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
  }
 ]

 const onAction = (action) => {
  const opts = {
   'search': 'Search for a book',
   'add-book': 'Add a book',
   'add-shelf': 'Add a shelf'
  }
  setPlaceHolder(opts[action])
 }

 return (
  <div className='app-nav grid'>

   {placeHolder && <input type="search" name="" id="" placeholder={placeHolder} />}

   {navActions.map((navAction, idx) => {
    const { action, icon } = navAction
    return (
     <button onClick={() => onAction(action)} className='icon' key={idx}>
      <i className="material-symbols-outlined">{icon}</i>
     </button>
    )
   })}

  </div>)

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