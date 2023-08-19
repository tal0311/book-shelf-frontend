import React from 'react'
import { useEffect, useState } from 'react'
import { eventBus, SHOW_MSG } from '../services/event-bus.service'

const UserMsg = () => {

 const [msg, setMsg] = useState('')
 useEffect(() => {
  eventBus.on(SHOW_MSG, setUserMsg)
  return () => {

  }
 }, [])

 const setUserMsg = (msg) => {
  console.log('msg', msg);
  setMsg(msg)
  setTimeout(() => {
   setMsg('')
  }, 3000)
 }
 const resetMsg = () => {
  setMsg('')
 }

 return (
  <>
   {msg && <section className="user-msg">
    <div className="msg">{msg}</div>
    <button onClick={resetMsg} className='icon'>
     <i className="material-symbols-outlined">close</i>
    </button>
   </section>}
  </>
 )
}

export default UserMsg