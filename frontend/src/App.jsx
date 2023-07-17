import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Authors from './pages/Authors'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import AuthorPage from './pages/AuthorPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/authors/:id" element={<AuthorPage />} />
      </Routes>
    </>
  )
}

export default App
