import React from "react"
import { useState } from 'react';
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import useBooks from "../hooks/useBooks"
import SearchBooks from "./SearchBooks"

function Shop() {
  const {books} = useBooks()

  const [searchTerm, setSearchTerm] = useState("")

  const filteredBooks = books.filter((book) => {
    return book.name && book.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

 

  return (
    <>
      <NavBar />
      <SearchBooks searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Outlet context={{books, filteredBooks}}/>
    </>
  )
}

export default Shop