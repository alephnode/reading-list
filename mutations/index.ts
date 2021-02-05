import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('0123456789', 3)
export const insertBookAuthor = (authorName: string, bookName: string) => `mutation MyMutation {
  insert_book_authors_one(object: {author: {data: {id: ${nanoid()}, name: "${authorName}"}}, book: {data: {id: ${nanoid()}, name: "${bookName}"}}}) {
    book {
      name 
    }
    author {
      name 
    }
  }
}
`

export const deleteBook = (bookId: string) => `mutation MyMutation {
  delete_book_authors(where: {book_id: {_eq: ${bookId}}}) {
    affected_rows
  }
  delete_books(where: {id: {_eq: ${bookId}}}) {
    affected_rows
  }
}`
