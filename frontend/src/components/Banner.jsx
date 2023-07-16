import React from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner1} alt="book-banner" className='banner-img'/>
      <div className="banner-second">
        <img src={banner2} alt="book-banner" className='banner-img'/>
        <img src={banner3} alt="book-banner" className='banner-img'/>
      </div>
    </div>
  )
}

export default Banner