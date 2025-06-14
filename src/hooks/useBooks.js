import { useEffect, useState } from 'react';

 function useBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      })
  },[])

  function addBook(newBook) {
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    })
      .then(response => response.json())
      .then(addedBook => setBooks([...books, addedBook]))
  }

  return {books, addBook}
}

export default useBooks