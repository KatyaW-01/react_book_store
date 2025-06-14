import React from "react"
import NavBar from "../components/NavBar"
import useBooks from "../hooks/useBooks"

function Home() {
  const {storeInfo} = useBooks()
  const store = storeInfo[0]

  return (
    <>
      <NavBar />
      {store && (
      <>
        <h1 className="store-name">{store.name}</h1>
        <p>{store.description}</p>
      </>
      )}
    </>
  )
}

export default Home