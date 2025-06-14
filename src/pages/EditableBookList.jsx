import EditableBookCard from "./EditableBookCard"
import useBooks from "../hooks/useBooks"

function EditableBookList() {
  const {books, setBooks} = useBooks()

  function handleDeletedBook(deletedBookId) {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== deletedBookId));
  }

  return (
    <>
      {books.map((book)=> (
        <div key={book.id}>
        <EditableBookCard book={book} handleDeletedBook={handleDeletedBook}/>
      </div>
      ))} 
    </>
  )
}

export default EditableBookList