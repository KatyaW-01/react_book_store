import EditableBookCard from "./EditableBookCard"
import useBooks from "../hooks/useBooks"

function EditableBookList() {
  const {books} = useBooks()
  return (
    <>
      {books.map((book)=> (
        <div key={book.id}>
        <EditableBookCard book={book} />
      </div>
      ))} 
    </>
  )
}

export default EditableBookList