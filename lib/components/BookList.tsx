import { statusMessages, fetchAPI } from '../utils'
import { deleteBook } from '../../mutations'
import { Button } from 'antd'

export default function BookList({ books }) {
  const handleClick = async (bookId) => {
    const res = await fetchAPI(deleteBook(bookId))
    console.log(res)
  }

  return (
    <>
        {books.map((book) => (
          <div key={book.id}>
            <p>{book.name}</p>
            <Button type="primary" onClick={() => handleClick(book.id)}>
              delete
            </Button>
          </div>
        ))}
    </>
  )
}
