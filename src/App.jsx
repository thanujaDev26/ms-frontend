import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Products from './pages/Products'
import ProductForm from './pages/ProductForm'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/products" element={<ProtectedRoute> <Products/> </ProtectedRoute>}/>
        <Route path="/products/new" element={<ProtectedRoute> <ProductForm/> </ProtectedRoute>}/>
        <Route path="/products/:id" element={<ProtectedRoute> <ProductForm/> </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
