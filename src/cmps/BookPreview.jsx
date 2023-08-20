import React, { useState } from 'react'
import { userService } from '../services/user.service';
import { shelfService } from '../services/shelf.service.local';
import { useNavigate } from 'react-router-dom'


const BookPreview = ({ book, is, onAction, updateBook, isEditable }) => {

  const goToLink = (ev) => {
    ev.stopPropagation()
    $utils.openPopUp(book.link)
  }

  const navigate = useNavigate()
  const goToDetails = () => {
    navigate(`book/${book.bookId}`)
  }


  const isElEditable = is === 'details' ? isEditable : false

  const editableAttrs = {
    suppressContentEditableWarning: true,
    contentEditable: isElEditable,
    onBlur: updateBook
  }

  if (!book) return <div>Loading...</div>
  return (
    <article onClick={goToDetails} className={`book-preview grid ${is}`}>
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