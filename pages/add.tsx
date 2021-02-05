import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { insertBookAuthor } from '../mutations'
import { fetchAPI, statusMessages } from '../lib/utils'

interface FormValues {
  bookName: string
  authorName: string
}

export default function AddPage() {
  const [status, setStatus] = useState(statusMessages.unresolved)

  const handleSubmit = async ({ bookName, authorName }: FormValues) => {
    const res = await fetchAPI(insertBookAuthor(authorName, bookName))
    const responseStatus =
      !res || res.errors ? statusMessages.error : statusMessages.success
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
        <Form layout="vertical" name="basic" onFinish={handleSubmit}>
          <Form.Item
            label="Book Name"
            name="bookName"
            rules={[
              {
                required: true,
                message: 'Please input book name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author Name"
            name="authorName"
            rules={[
              {
                required: true,
                message: 'Please input author name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : null}
    </>
  )
}
