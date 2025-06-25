import React from "react"
import useBooks from "../hooks/useBooks"
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

function EditForm() {
  const { id } = useParams()
  const {editBook} = useBooks()

  const [editedBook, setEditedBook] = useState({name: "", author: "", description: "", price: ""})

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then(res => res.json())
      .then(book => setEditedBook(book))
  },[id])

  function handleSubmit(event) {
    event.preventDefault()
    editBook({ ...editedBook, id })
  }

  function handleChange(event) {
    const {name, value} = event.target

    setEditedBook(prevBook => ({
      ...prevBook, [name]:value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
       <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={editedBook.name} onChange={handleChange}></input>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" value={editedBook.author} onChange={handleChange}></input>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={editedBook.description} onChange={handleChange}></input>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={editedBook.price} onChange={handleChange}></input>
        <button className="save-button" type="submit">Save</button>
    </form>
  )
}

export default EditForm