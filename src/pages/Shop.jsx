import React from "react"
import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import useBooks from "../hooks/useBooks"
import SearchBooks from "./SearchBooks"

function Shop() {
  const {books} = useBooks()

  return (
    <>
      <NavBar />
      <SearchBooks />
      <Outlet context={{books}}/>
    </>
  )
}

export default Shop