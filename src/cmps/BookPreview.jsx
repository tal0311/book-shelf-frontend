import React, { useState } from 'react'
import { userService } from '../services/user.service';
import { shelfService } from '../services/shelf.service.local';
import { useNavigate } from 'react-router-dom'


const BookPreview = ({ book, is, onAction, updateBook, isEditable, shelfListTopics }) => {

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

  const handleImageError = (ev) => {
    console.log(ev.target);
    ev.target.src = getImg('./../assets/images/favicon-placeholder.svg')
  }

  function getImg(url) {
    return new URL(url, import.meta.url).href
  }

  if (!book) return <div>Loading...</div>
  return (
    <article onClick={goToDetails} className={`book-preview grid ${is}`}>
      <div className='img-container'>
        <img className='fav-img' src={book.favicon || ''} onError={(ev) => handleImageError(ev)} alt="book-favicon" />
        <img className='main-img' height={is === 'details' ? 400 : 200} src={book.imgUrl} alt={book.title} />
      </div>
      <h4 {...editableAttrs} className='title' >{book.title}</h4>
      <p {...editableAttrs} className='des'>{book.desc}</p>
      <div className="actions-container grid">

        <button className="icon" onClick={goToLink}>
          <i className="material-symbols-outlined">open_in_new</i>
        </button>
        {is === 'add-book' &&
          <form >
            <select name="shelf-list">
              {shelfListTopics && shelfListTopics.map((shelf, idx) => <option key={idx} value={shelf}>{shelf}</option>)}
            </select>
            <button onClick={onAction} className='icon'>
              <i className="material-symbols-outlined">
                save
              </i>
            </button>
          </form>
        }
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