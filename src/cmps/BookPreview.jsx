import React from 'react'

const BookPreview = ({ book }) => {

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
  return (
    <article className='book-preview'>
      <img src={book.imgUrl} alt={book.title} />
      <h4>{book.title}</h4>
      <p>{book.desc}</p>
      <button className="icon" onClick={goToLink}>
        <i className="material-symbols-outlined">open_in_new</i>
      </button>
    </article>
  )
}

export default BookPreview