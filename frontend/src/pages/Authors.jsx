import React from 'react'
import AuthorCard from '../components/AuthorCard'
import './Authors.css'
import SarahMoonchild from '../assets/authors/SarahMoonchild.jpg'
import RileyJSommers from '../assets/authors/RileyJSommers.jpg'
import JDClement from '../assets/authors/JDClement.jpg'
import PeterDarling from '../assets/authors/PeterDarling.jpg'
import PeterSharpe from '../assets/authors/PeterSharpe.jpg'

const Authors = () => {

  const authorList = [
    {
      name: 'Sarah Moonchild',
      img: SarahMoonchild,
    },
    {
      name: 'Riley J Sommers',
      img: RileyJSommers,
    },
    {
      name: 'J.D Clement',
      img: JDClement,
    },
    {
      name: 'Peter Darling',
      img: PeterDarling,
    },
    {
      name: 'Peter Sharpe',
      img: PeterSharpe,
    }
  ]

  return (
    <section className='container authors'>
      {authorList.map((author) => (
        <AuthorCard name={author.name} img={author.img}/>
      ))}
    </section>
  )
}

export default Authors