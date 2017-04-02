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
        {state.books.map((book, i) => <li key={i}>{book.title}</li>)}
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
