import { useEffect, useState } from 'react';

 function useBooks() {
  const [books, setBooks] = useState([])
  const [storeInfo, setStoreInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      })
  },[])

  useEffect(() => {
    fetch("http://localhost:3001/store_info")
      .then((response) => response.json())
      .then((data) => {
        setStoreInfo(data)
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

  return {books, storeInfo, addBook}
}

export default useBooks