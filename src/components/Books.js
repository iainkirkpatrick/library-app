import React from 'react'

const BookPage = (props) => {
  console.log("Book state: ", props.books)
  return (
    <div>
      <h3>Books</h3>
      {
        props.books.map((book, i) => {
          return <p key={i}>{ book.title }</p>
        })
      }
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
