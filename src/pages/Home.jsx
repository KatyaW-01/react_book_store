import React from "react"
import NavBar from "../components/NavBar"
import useBooks from "../hooks/useBooks"

function Home() {
  const {storeInfo} = useBooks()
  console.log(storeInfo)

  return (
    <>
      <NavBar />
      <h1>{storeInfo[0].name}</h1>
      <p>{storeInfo[0].description}</p>
    </>
  )
}

export default Home