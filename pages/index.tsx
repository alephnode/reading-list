import { statusMessages, fetchAPI } from '../lib/utils'
import { getBooksQuery } from '../queries'
import { GetServerSideProps } from 'next'
import BookList from '../lib/components/Booklist'

export const getServerSideProps: GetServerSideProps = async () => {
  const { data = {}, errors } = await fetchAPI(getBooksQuery)
  return {
    props: {
      status: errors ? statusMessages.error : statusMessages.success,
      books: data.books || null,
    },
  }
}

export default function HomePage(props) {
  return (
    <>
      <h1 className="title">books</h1>
      <BookList {...props} />
    </>
  )
}
