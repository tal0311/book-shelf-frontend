import React, { useRef, useEffect, useState } from 'react';
import SearchResList from './SearchResList.jsx';
import AddBook from './AddBook.jsx';
import AddShelf from './AddShelf.jsx';
import Explore from './../views/AppExplore.jsx';
import { eventBus } from '../services/event-bus.service.js';
import AppLoader from './AppLoader.jsx';

const AppModal = () => {
 const [modal, setModal] = useState(null);
 let unsubscribe = null
 useEffect(() => {
  unsubscribe = eventBus.on('openModal', setModal);
  return () => {
   unsubscribe()
  };
 }, []);

 const modalRef = useRef(null);
 useEffect(() => {
  if (modal) openModal();
 }, [modal]);

 const openModal = () => {
  modalRef.current.showModal();
 };

 const closeModal = () => {
  modalRef.current.close();
  setModal(null);
 };

 return (
  <dialog ref={modalRef} className={`app-modal ${modal?.type ? modal.type : 'loading'}`}>

   {modal && <DynamicCmp modal={modal} />}
   <button className='dialog-btn icon' onClick={closeModal}>
    <i className="material-symbols-outlined" >close</i>
   </button>
  </dialog>
 );
};


const DynamicCmp = ({ modal }) => {
 function getModalCmp() {
  const modalTypes = {
   search: <SearchResList data={modal?.data} />,
   'add-book': <AddBook data={modal?.data} />,
   'add-shelf': <AddShelf data={modal?.data} />,
   explore: <Explore data={modal?.data} />
  };
  return modalTypes[modal.type]
 }
 return (
  <>
   {getModalCmp()}
  </>
 )
}


export default AppModal;
