import React from "react"
import { useState } from 'react';

function EditForm() {
  const [formData, setFormData] = useState()
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
        <button type="submit">Save</button>
    </form>
  )
}

export default EditForm