import { statusMessages, fetchAPI } from '../utils'
import { deleteBook } from '../../mutations'
import { Button } from 'antd'

export default function BookList({ books, status }) {
  const handleClick = async (bookId) => {
    const res = await fetchAPI(deleteBook(bookId))
    console.log(res)
  }

  return (
    <>
      {status === statusMessages.success ? (
        books.map((book) => (
          <div key={book.id}>
            <p>{book.name}</p>
            <Button type="primary" onClick={() => handleClick(book.id)}>
              delete
            </Button>
          </div>
        ))
      ) : (
        <p>error loading book list</p>
      )}
    </>
  )
}
