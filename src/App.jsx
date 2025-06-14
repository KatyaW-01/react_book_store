import React from "react"
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import BookList from "./pages/BookList"
import AdminPortal from "./pages/AdminPortal"
import AdminForm from "./pages/AdminForm"
import EditableBookList from "./pages/EditableBookList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Shop />} >
          <Route index element={<BookList />} />
        </Route>
        <Route path="/admin" element={<AdminPortal />}> 
          <Route path="form" element={<AdminForm/>} />
          <Route path="editBook" element={<EditableBookList/>} />
        </Route >  
      </Routes>
    </BrowserRouter>
  )
}

export default App
