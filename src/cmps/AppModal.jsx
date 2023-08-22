import React, { useRef, useEffect, useState } from 'react';
import SearchResList from './SearchResList.jsx';
import AddBook from './AddBook.jsx';
import AddShelf from './AddShelf.jsx';
import Explore from './../views/AppExplore.jsx';
import { eventBus } from '../services/event-bus.service.js';

const AppModal = () => {
 const [modalType, setModalType] = useState(null);

 useEffect(() => {
  eventBus.on('openModal', setModalType);
  return () => {
   console.log('clenaing up');
  };
 }, []);

 useEffect(() => {
  if (modalType) openModal();
 }, [modalType]);


 const modalRef = useRef(null);

 const openModal = () => {
  modalRef.current.showModal();
 };

 const closeModal = () => {
  modalRef.current.close();
 };

 const modalTypes = {
  search: <SearchResList data={modalType?.data} />,
  'add-book': <AddBook data={modalType?.data} />,
  'add-shelf': <AddShelf data={modalType?.data} />,
  explore: <Explore data={modalType?.data} />
 };

 return (
  <dialog ref={modalRef} className="app-modal">
   {modalType && modalTypes[modalType.type]}
   <button onClick={closeModal}>x</button>
  </dialog>
 );
};

export default AppModal;
