import React, { useState } from 'react'
import { userService } from '../services/user.service';
import { shelfService } from '../services/shelf.service.local';
import useEditable from '../customHooks/useEditable';


const BookPreview = ({ book, is, onAction, updateBook, isEditable }) => {

  const width = window.innerWidth;
  const height = window.innerHeight;
  const windowOptions = {
    width: width,
    height: height,
    top: 50,
    left: width / 2,
    resizable: true,
    scrollbars: true,
    toolbar: false,
    location: false,
    status: false,
    menubar: false,
  };

  const toWindowOptionsString = (options) => {
    return Object.keys(options).map(key => `${key}=${options[key]}`).join(',');
  };

  const goToLink = () => {
    window.open(book.link, '_blank', toWindowOptionsString(windowOptions));
  }


  const isElEditable = is === 'details' ? isEditable : false

  const editableAttrs = {
    suppressContentEditableWarning: true,
    contentEditable: isElEditable,
    onBlur: updateBook
  }

  if (!book) return <div>Loading...</div>
  return (
    <article className={`book-preview grid ${is}`}>
      <img height={is === 'details' ? 400 : 200} src={book.imgUrl} alt={book.title} />
      <h4 {...editableAttrs} className='title' >{book.title}</h4>
      <p {...editableAttrs} className='des'>{book.desc}</p>
      <div className="actions-container grid">

        <button className="icon" onClick={goToLink}>
          <i className="material-symbols-outlined">open_in_new</i>
        </button>
        {is === 'details' &&
          <>
            <button className='icon'>
              <i onClick={() => onAction('edit')} className="material-symbols-outlined">
                edit
              </i>
            </button>
            <button onClick={() => onAction('delete')} className='icon'>
              <i className="material-symbols-outlined">
                delete
              </i>
            </button>
          </>
        }

      </div>
    </article>
  )
}

export default BookPreview