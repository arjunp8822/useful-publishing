import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {AiOutlineLeftCircle} from 'react-icons/ai'

const Navbar = () => {
    const [showMob, setShowMob] = useState(false)
  return (
    <nav>
        <Link to="/" onClick={() => setShowMob(false)}><img src={logo} alt="Useful Publishing" /></Link>
        <ul className={showMob? 'blur' : 'nav-links-hide'}>
            <li><Link to="/about" onClick={() => setShowMob(false)}>About</Link></li>
            <li><Link to="/books" onClick={() => setShowMob(false)}>Books</Link></li>
            <li><Link to="/authors" onClick={() => setShowMob(false)}>Authors</Link></li>
            <li><Link to="/contact" onClick={() => setShowMob(false)}>Contact</Link></li>
        </ul>
        <AiOutlineLeftCircle className={showMob? 'nav-arrow rev' : 'nav-arrow'} onClick={() => setShowMob(!showMob)}/>
    </nav>
  )
}

export default Navbar