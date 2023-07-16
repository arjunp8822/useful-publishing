import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {AiOutlineLeftCircle} from 'react-icons/ai'

const Navbar = () => {
    const [showMob, setShowMob] = useState(false)
  return (
    <nav>
        <Link to="/"><img src={logo} alt="Useful Publishing" /></Link>
        <ul className={showMob? '' : 'nav-links-hide'}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <AiOutlineLeftCircle className={showMob? 'nav-arrow rev' : 'nav-arrow'} onClick={() => setShowMob(!showMob)}/>
    </nav>
  )
}

export default Navbar