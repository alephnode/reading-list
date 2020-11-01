import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Navbar from '../lib/components/Navbar'

export default function MyApp({ Component, pageProps }) {
  const { Header, Content, Footer } = Layout
  return (
    <Layout className="layout" style={{height: '100vh'}}>
      <Header>
        <Navbar />
      </Header>
      <Content style={{ padding: '0 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
        <Component {...pageProps} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {new Date().getFullYear()} alephnode
      </Footer>
    </Layout>
  )
}
