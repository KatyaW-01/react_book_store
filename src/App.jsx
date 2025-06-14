import React from "react"
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import BookList from "./pages/BookList"
import AdminPortal from "./pages/AdminPortal"

import EditableBookList from "./pages/EditableBookList";
import EditForm from "./pages/EditForm"
import NewBookForm from "./pages/NewBookForm"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Shop />} >
          <Route index element={<BookList />} />
        </Route>
        <Route path="/admin" element={<AdminPortal />}> 
          <Route path="newBook" element={<NewBookForm />} />
          <Route path="editBook" element={<EditableBookList/>} />
          <Route path="editBook/:id/editForm" element={<EditForm/>} />
        </Route >  
      </Routes>
    </BrowserRouter>
  )
}

export default App
