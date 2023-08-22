import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { eventBus } from '../services/event-bus.service'

const AppNav = () => {
 const [placeHolder, setPlaceHolder] = useState('')
 const [inputText, setInputText] = useState({ txt: '', action: '' })
 // let navActions = 
 const [navActions, setNavActions] = useState([
  {
   icon: 'frame_inspect',
   action: 'search',
   isSelected: false
  },
  {
   icon: 'add_box',
   action: 'add-book',
   isSelected: false
  },
  {
   icon: 'library_add',
   action: 'add-shelf',
   isSelected: false
  },
  {
   icon: 'explore',
   action: 'explore',
   isSelected: false
  }
 ])

 const [isDirty, setIsDirty] = useState(false)
 const handleInput = ({ target: { value } }) => {
  value.length > 0 ? setIsDirty(true) : setIsDirty(false)
  setInputText((prevState) => ({ ...prevState, txt: value }))
 }


 let currentAction = null
 const onAction = (action) => {
  const opts = {
   'search': 'Search for a book shelf or title',
   'add-book': 'Add a book',
   'add-shelf': 'Add a shelf',
   'explore': 'Witch topic would you like to explore?'
  }
  if (opts[action] === placeHolder) {
   currentAction = action
   updateNavActions()
   setPlaceHolder(null)
   return
  }
  currentAction = action
  updateNavActions()
  setPlaceHolder(opts[action])
  setInputText((prevState) => ({ ...prevState, action }))
 }

 useEffect(() => {
  if (!placeHolder) {
   updateNavActions()
  }
 }, [placeHolder])

 const updateNavActions = () => {
  const newActions = navActions.map(navAction => {
   if (navAction.action === currentAction) navAction.isSelected = !navAction.isSelected
   else navAction.isSelected = false
   return navAction
  })

  setNavActions(newActions)
 }

 function handleSubmit() {
  if (!isDirty) return
  eventBus.emit('openModal', { type: inputText.action, data: inputText.txt })
  resetState()
 }

 const resetState = () => {
  setInputText({ txt: '', action: '' })
  setIsDirty(false)
  setPlaceHolder(null)
  updateNavActions()
 }

 return (

  <div className='app-nav grid'>

   {placeHolder &&
    <section className='search grid'>
     <input onChange={handleInput} value={inputText.txt} type="search" name="" id="" placeholder={placeHolder} />
     <button onClick={handleSubmit} className={isDirty ? 'dirty' : ''}>
      <i className="material-symbols-outlined">check_circle</i>
     </button>
    </section>}

   {navActions.map((navAction, idx) => {
    const { action, icon, isSelected } = navAction
    return (
     <button onClick={() => onAction(action)} className={`icon ${isSelected ? 'selected' : ''}`} key={idx}>
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