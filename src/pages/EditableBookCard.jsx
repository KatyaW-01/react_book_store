import React from "react"

function EditableBookCard({book,handleDeletedBook}) {
  function handleDelete() {
    fetch(`http://localhost:3001/books/${book.id}`, {
      method: "DELETE"
    })
    .then((response) => {
      if (response.ok) {
        handleDeletedBook(book.id);
      }
    });
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