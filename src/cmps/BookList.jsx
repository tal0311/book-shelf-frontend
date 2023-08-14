import React from 'react'
import BookPreview from './BookPreview'

const BookList = ({ books }) => {
 return (
  <section className="book-list grid">
   {books.map((book) => <BookPreview book={book} key={book.bookId} />)}
  </section>
 )
}

export default BookList