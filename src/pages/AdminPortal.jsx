import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"

function AdminPortal() {
  
  return (
    <>
      <NavBar />
      <Outlet />
      <Link to="newBook">Add New Book</Link>
      <Link to="editBook">Edit Existing Books</Link>
    </>
  )
}

export default AdminPortal