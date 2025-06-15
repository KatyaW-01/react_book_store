import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"

function AdminPortal() {
  
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="admin-links">
        <Link className="add-new" to="newBook">Add New Book</Link>
        <Link className="edit" to="editBook">Edit Existing Books</Link>
      </div>
    </>
  )
}

export default AdminPortal