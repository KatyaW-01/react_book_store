import React from "react"

function EditableBookCard({book}) {
  function handleDelete() {
    
  }
  return (
    <div>
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <p>${book.price}</p>
      <button type="submit" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default EditableBookCard