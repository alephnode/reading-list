import React from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
export default function Navbar() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="home">
        <Link href="/">Wards reading list</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">about</Link>
      </Menu.Item>
      <Menu.Item key="add">
        <Link href="/add">add</Link>
      </Menu.Item>
    </Menu>
  )
}
