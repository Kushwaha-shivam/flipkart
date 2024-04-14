import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'
import { Routes, Route } from "react-router-dom"
import Error from './pages/Error'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
