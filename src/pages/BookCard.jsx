import React from "react"

function BookCard({book}) {
  return (
    <div>
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>${book.price}</p>
    </div>
  )
}

export default BookCard