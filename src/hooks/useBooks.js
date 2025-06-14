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

  return {books}
}

export default useBooks