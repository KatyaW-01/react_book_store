import useBooks from "../hooks/useBooks"
import { useState } from 'react';

function NewBookForm() {
  const {addBook} = useBooks()
  const [newBook, setNewBook] = useState({name: "", author: "", description: "", price: ""})

  function handleChange(event) {
    const {name, value} = event.target

    setNewBook(prevBook => ({
      ...prevBook, [name]:value
    })
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    addBook(newBook)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Book Name:</label>
        <input type="text" id="name" name="name" value={newBook.name} onChange={handleChange}></input>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" value={newBook.author} onChange={handleChange}></input>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={newBook.description} onChange={handleChange}></input>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={newBook.price} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
  )
}

export default NewBookForm