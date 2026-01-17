import './App.css'
import Footer from './Components/Layout/Footer'
import Header from './Components/Layout/Header'
import Navbar from './Components/Layout/Navbar'
import { Outlet } from 'react-router-dom'
import ProductListProvider from './Context/CartContext'

function App() {

  return (
    <>
      <ProductListProvider>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </ProductListProvider>
    </>
  )
}

export default App
