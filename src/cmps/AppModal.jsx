import React, { useRef, useEffect, useState } from 'react';
import SearchResList from './SearchResList.jsx';
import AddBook from './AddBook.jsx';
import AddShelf from './AddShelf.jsx';
import Explore from './../views/AppExplore.jsx';
import { eventBus } from '../services/event-bus.service.js';

const AppModal = () => {
 const [modal, setModal] = useState(null);

 useEffect(() => {
  eventBus.on('openModal', setModal);
  return () => {
   console.log('clenaing up');
  };
 }, []);

 useEffect(() => {
  if (modal) openModal();
 }, [modal]);


 const modalRef = useRef(null);

 const openModal = () => {
  modalRef.current.showModal();
 };

 const closeModal = () => {
  modalRef.current.close();
  setModal(null);
 };

 const modalTypes = {
  search: <SearchResList data={modal?.data} />,
  'add-book': <AddBook data={modal?.data} />,
  'add-shelf': <AddShelf data={modal?.data} />,
  explore: <Explore data={modal?.data} />
 };

 return (
  <dialog ref={modalRef} className={`app-modal ${modal?.data}`}>
   {modal && modalTypes[modal.type]}
   <button onClick={closeModal}>x</button>
  </dialog>
 );
};

export default AppModal;
