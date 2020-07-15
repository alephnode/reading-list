import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { insertBookAuthor } from '../mutations'

export default function HomePage() {
  const [authorName, setAuthorName] = useState('')
  const [bookName, setBookName] = useState('')

  const fetcher = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_ACCESS_SECRET,
    }

    const res = await (
      await fetch(process.env.HASURA_API_ENDPOINT, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query: insertBookAuthor(authorName, bookName) }),
      })
    ).json()

    return res
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetcher()
    console.log(res)
  }

  return (
    <div className="container">
      <Head>
        <title>Ward's reading list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">add</h1>

        <p className="description">add a book to the reading list</p>
        <br />
        <form onSubmit={async (e) => handleSubmit(e)}>
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
        <Link href="/">
          <a>back home</a>
        </Link>
      </main>

      <footer>2020 alephnode</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
