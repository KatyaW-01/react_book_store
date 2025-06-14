import { useEffect, useState } from 'react';

 function useBooks(url) {
  const [books, setBooks] = useState(null)

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