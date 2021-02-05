import { fetchAPI } from '../utils'
import { deleteBook } from '../../mutations'
import { Button } from 'antd'
import { Book } from '../types/Book'

interface BookListProps {
  books: Book[] | null
}

export default function BookList({ books }: BookListProps) {
  const handleClick = async (bookId: string) => {
    const res = await fetchAPI(deleteBook(bookId))
    console.log(res)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {books &&
        books.map(book => (
          <div key={book.id} style={{ marginBottom: '2rem' }}>
            <p>{book.name}</p>
            <Button type="primary" onClick={() => handleClick(book.id)}>
              delete
            </Button>
          </div>
        ))}
    </div>
  )
}
