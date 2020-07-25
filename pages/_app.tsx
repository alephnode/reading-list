import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Navbar from '../lib/components/Navbar'

export default function MyApp({ Component, pageProps }) {
  const { Header, Content, Footer } = Layout
  return (
    <Layout className="layout">
      <Header>
        <Navbar />
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
