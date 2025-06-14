import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import useBooks from "../hooks/useBooks"
import { useState } from 'react';

function AdminPortal() {
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
    <>
      <NavBar />
      <Outlet />
      <h2>Add New Book</h2>
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
      <Link to="editBook">Edit Existing Books</Link>
    </>
  )
}

export default AdminPortal