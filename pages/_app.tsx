import Link from 'next/link'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'

export default function MyApp({ Component, pageProps }) {
  const { Header, Content, Footer } = Layout
  return (
    <Layout className="layout">
      <Header>
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
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Component {...pageProps} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {new Date().getFullYear()} alephnode
      </Footer>
    </Layout>
  )
}
