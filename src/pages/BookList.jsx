import React from "react"
import {useOutletContext} from "react-router-dom"
import BookCard from "./BookCard"

function BookList() {
  const {books,filteredBooks} = useOutletContext()
  return (
    <>
    {filteredBooks.length > 0 ? 
      filteredBooks.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      )) :
      books.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))
    }
      
    </>
  )
}

export default BookList