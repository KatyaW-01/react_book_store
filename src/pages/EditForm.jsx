import React from "react"
import useBooks from "../hooks/useBooks"

function EditForm() {
  const {editBook} = useBooks()
  return (
    <form >
       <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"></input>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author"></input>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description"></input>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price"></input>
        <button className="save-button" type="submit">Save</button>
    </form>
  )
}

export default EditForm