import React from "react"
import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import useBooks from "../hooks/useBooks"

function Shop() {
  const {books} = useBooks()
  console.log(books)

  return (
    <>
      <NavBar />
      <Outlet context={{books}}/>
    </>
  )
}

export default Shop