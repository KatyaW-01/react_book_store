import React from "react"
import useBooks from "../hooks/useBooks"
import { useState,useEffect } from 'react';

function SearchBooks({searchTerm,setSearchTerm}) {

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