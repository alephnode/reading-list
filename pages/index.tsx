import { statusMessages, fetchAPI } from '../lib/utils'
import { getBooksQuery } from '../queries'
import { GetServerSideProps } from 'next'
import BookList from '../lib/components/BookList'
import { Book } from '../lib/types/Book'

interface HomePageProps {
  status: string
  books: Book[] | null
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data = {}, errors } = await fetchAPI(getBooksQuery)
  return {
    props: {
      status: errors ? statusMessages.error : statusMessages.success,
      books: data.books || null,
    },
  }
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <h1 className="title">books</h1>
      {props.status === statusMessages.error ? (
        <p>issue loading books.</p>
      ) : (
        <BookList {...props} />
      )}
    </>
  )
}
