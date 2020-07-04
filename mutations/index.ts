import { nanoid } from 'nanoid'

export const insertBookAuthor = (authorName, bookName) => `mutation MyMutation {
  insert_book_authors_one(object: {author: {data: {id: ${nanoid()}, name: ${authorName}}}, book: {data: {id: ${nanoid()}, name: ${bookName}}}}) {
    book {
      name 
    }
    author {
      name 
    }
  }
}
`
