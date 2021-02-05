import { fetchAPI } from '../utils'
import { deleteBook } from '../../mutations'
import { Button } from 'antd'
import { Book } from '../types/Book'
import { CSSProperties } from 'react'

interface BookListProps {
  books: Book[] | null
}

const listStyles = { textAlign: 'center', minWidth: '400px' }

export default function BookList({ books }: BookListProps) {
  const handleClick = async (bookId: string) => {
    const res = await fetchAPI(deleteBook(bookId))
    console.log(res)
  }

  return (
    <div style={listStyles as CSSProperties}>
      {books &&
        books.map((book) => (
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
