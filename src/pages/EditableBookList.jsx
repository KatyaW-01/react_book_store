import EditableBookCard from "./EditableBookCard"
import useBooks from "../hooks/useBooks"

function EditableBookList() {
  const {books, setBooks} = useBooks()

  function handleDeletedBook(deletedBookId) {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== deletedBookId));
  }

  return (
    <div className="book-div">
      {books.map((book)=> (
        <div key={book.id}>
        <EditableBookCard book={book} handleDeletedBook={handleDeletedBook}/>
      </div>
      ))} 
    </div>
  )
}

export default EditableBookList