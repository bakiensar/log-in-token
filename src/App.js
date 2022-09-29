import React from 'react'
import './App.css'
import Footer from './components/footer'
import Home from './pages/home'
import Header from './components/header'
import Login from './pages/login'
import Register from './pages/logout'
import useApi from './hooks/useApi'

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Category from './pages/home/component/category'

function App() {
  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Register />} />
          <Route path="category/:slug" element={<Category />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App
