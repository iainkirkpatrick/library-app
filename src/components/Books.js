import React from 'react'

const BookPage = ({state}) => {
  // console.log(state)
  return (
    <div>
      <h3>Books</h3>
      <p>Books will go here</p>
    </div>
  )
}

export default BookPage

// const BookPage = ({state}) => {
//   return (
//     <div>
//       <h3>Books</h3>
//       <ul>
//         {state.books.map((book, i) => <li key={i}><p>{book.title}</p> <img src={book.cover} alt={`Cover of ${book.title}`}></img></li>)}
//       </ul>
//     </div>
//   )
// }
