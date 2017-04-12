import React from 'react'

const BookPage = ({state, dispatch}) => {

  const submitBook = (input) => {
    alert("Submitted")
  }

  let titleInput

  return (
    <div>
      <h3>Books</h3>
      <ul>
        {state.books.map((book, i) => <li key={i}><p>{book.title}</p> <img src={book.cover} alt={`Cover image of ${book.title}`}></img></li>)}
      </ul>
      <div>
      <h3>Books Form</h3>
      <form onSubmit={e => {
        e.preventDefault()
        let input = {title: titleInput.value}
        submitBook(input)
        e.target.reset()
      }}>
        <input type="text" name="title" ref={node => titleInput = node}/>
        <input type="submit"/>
      </form>
      </div>
    </div>
  )
}

export default BookPage
