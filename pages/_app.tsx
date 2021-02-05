import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { CSSProperties } from 'react'
import Navbar from '../lib/components/Navbar'

const contentStyles = {
  padding: '0 50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const { Header, Content, Footer } = Layout
  return (
    <Layout className="layout" style={{ height: '100vh' }}>
      <Header>
        <Navbar />
      </Header>
      <Content style={contentStyles as CSSProperties}>
        <Component {...pageProps} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {new Date().getFullYear()} alephnode
      </Footer>
    </Layout>
  )
}
