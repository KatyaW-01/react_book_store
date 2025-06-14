import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";

function Shop() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Shop