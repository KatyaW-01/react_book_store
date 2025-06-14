import React from "react"
import useBooks from "../hooks/useBooks"
import { useState } from 'react';

function SearchBooks() {
  const {books} = useBooks()
  const [searchTerm, setSearchTerm] = useState("")
 

  function handleChange(event) {
    setSearchTerm(event.target.value) //stores value of input in state
  }

  return (
    <>
    <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}></input>
    </>
  )
}

export default SearchBooks