import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import BookList from "./pages/BookList"
import SearchBooks from "./pages/SearchBooks"
import BookCard from "./pages/BookCard"
import AdminPortal from "./pages/AdminPortal"
import AdminForm from "./pages/AdminForm"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Shop />} >
          <Route index element={<BookList />} />
          <Route path="search" element={<SearchBooks />} />
          <Route path=":id" element={<BookCard />} />
        </Route>
        <Route path="/admin" element={<AdminPortal />}> 
          <Route path="form" element={<AdminForm/>} />
        </Route >  
      </Routes>
    </BrowserRouter>
  )
}

export default App
