import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ItemActions = ({ itemId, onAction }) => {
 const [isActive, setIsActive] = useState(false)



 const actions = [
  { icon: "edit", actiontype: "edit" },
  { icon: "delete", actiontype: "delete" },
  { icon: "archive", actiontype: "archive" },
  { icon: "settings", actiontype: "settings" },

 ]
 const onActivator = (ev) => {
  ev.stopPropagation()
  setIsActive(!isActive)
 }



 return (
  <section className={`item-actions grid ${isActive ? 'active' : ''}`}>
   <button className='icon activator' onClick={(ev) => onActivator(ev)}>
    <i className="material-symbols-outlined">
     {isActive ? 'close' : 'more_vert'}
    </i>
   </button>

   <div className='actions-container' >

    <ul className='clean-list'>
     {actions.map((action, index) => {
      return (
       <li key={index}>
        <button onClick={(ev) => onAction(ev, action.actiontype, itemId)} className='icon'>
         <i className="material-symbols-outlined">
          {action.icon}
         </i>
        </button>
       </li>
      );
     })}
    </ul>
   </div>

  </section>
 );
}

export default ItemActions;
