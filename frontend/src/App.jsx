import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Authors from './pages/Authors'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
