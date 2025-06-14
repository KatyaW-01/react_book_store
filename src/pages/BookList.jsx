import React from "react"
import {useOutletContext} from "react-router-dom"
import BookCard from "./BookCard"

function BookList() {
  const {books} = useOutletContext()
  return (
    <>
      {books.map((book)=>(
        <div key={book.id}>
          <BookCard book={book}/>
        </div>
      ))}
    </>
  )
}

export default BookList