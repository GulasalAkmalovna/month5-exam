
// import { Outlet } from 'react-router'
import { Header, Footer } from '@components'
import Hero from './components/hero'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
