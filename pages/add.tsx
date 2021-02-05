import { FormEvent, useState } from 'react'
import { insertBookAuthor } from '../mutations'
import { fetchAPI, statusMessages } from '../lib/utils'

export default function AddPage() {
  const [authorName, setAuthorName] = useState('')
  const [bookName, setBookName] = useState('')
  const [status, setStatus] = useState(statusMessages.unresolved)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetchAPI(insertBookAuthor(authorName, bookName))
    const responseStatus = res.errors
      ? statusMessages.error
      : statusMessages.success
    setStatus(responseStatus)
  }

  return (
    <>
      <h1 className="title">add</h1>

      <p className="description">add a book to the reading list</p>
      <br />
      {status === statusMessages.success ? <p>success! book added.</p> : null}
      {status === statusMessages.error ? <p>error adding book.</p> : null}
      {status === statusMessages.unresolved ? (
        <form onSubmit={handleSubmit}>
          <label>
            Book Name:
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </label>
          <label>
            Author Name:
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : null}
    </>
  )
}
