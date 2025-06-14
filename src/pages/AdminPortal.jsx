import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";

function AdminPortal() {
  return (
    <>
      <NavBar />
      <Outlet />
      <h2>Add New Book</h2>
      <form>
        <label for="name">Book Name:</label>
        <input type="text" id="name"></input>
        <label for="author">Author:</label>
        <input type="text" id="author"></input>
        <label for="description">Description:</label>
        <input type="text" id="description"></input>
        <label for="price">Price:</label>
        <input type="text" id="price"></input>
        <button type="submit">Submit</button>
      </form>
      <button>Edit Existing Books</button>
    </>
  )
}

export default AdminPortal