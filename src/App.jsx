import { useRoutes } from 'react-router-dom'
import routes from './router'
import Layout from 'components/Layout/index'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/Error'

function App() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <Header />
          {useRoutes(routes)}
          <Footer />
        </Layout>
      </ErrorBoundary>
    </>
  )
}

export default App
