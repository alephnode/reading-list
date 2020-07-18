import fetchAPI from '../lib/utils/fetchAPI'
import { getBooksQuery } from '../queries'
import { GetServerSideProps } from 'next'
import { deleteBook } from '../mutations'
import { Button } from 'antd'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data = {}, errors } = await fetchAPI(getBooksQuery)
  return {
    props: {
      status: errors ? 'error' : 'success',
      books: data.books || null,
    },
  }
}

export default function HomePage({ books, status }) {
  const handleClick = async (bookId) => {
    const res = await fetchAPI(deleteBook(bookId))
    console.log(res)
  }

  return (
    <>
      {status === 'success' ? (
        books.map((book) => (
          <div key={book.id}>
            <p>{book.name}</p>
            <Button type="primary" onClick={() => handleClick(book.id)}>
              delete
            </Button>
          </div>
        ))
      ) : (
        <p>error with request</p>
      )}
    </>
  )
}
