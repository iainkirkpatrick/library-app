import React from 'react'

const BookPage = ({state, dispatch}) => {
  return (
    <div>
      <h3>Books</h3>
      <ul>
        {state.books.map((book, i) => <li key={i}><p>{book.title}</p> <img src={book.cover} alt={`Cover image of ${book.title}`}></img></li>)}
      </ul>
    </div>
  )
}

export default BookPage
