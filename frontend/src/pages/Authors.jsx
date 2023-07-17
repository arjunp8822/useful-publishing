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
      id: 1,
      name: 'Sarah Moonchild',
      img: SarahMoonchild,
      desc: 'Sarah Moonchild is the author of the Dark Elysium trilogy, a paranormal romance novel. She has long been fascinated with the eternal questions of good and evil and whether they are mutually exclusive and decided to create a work of fiction that could explore the theme. Love and hate are opposites in meaning but closely aligned in strength of passion. A romantic at heart Sarah believes that love can be the great equaliser that bridges what we desire and what we fear.\n An avid student of myth and legends that have shaped human belief systems over centuries and manifest in modern day supernatural popular culture Sarah enjoys reading supernatural fiction and ancient historical non fiction and has been a ghostwriter for various fiction books and is a freelance editor. As a book lover, amongst her treasured possessions is her extensive library including works by her favourite supernatural fiction writer Dean Koontz.\n When not writing or editing Sarah can be found on long walks in her well worn favoured ‘Doc Martin” boots accompanied by her faithful companion “Mangles” a cross of several dog breeds in her home state of New Hampshire.'
    },
    {
      id: 2,
      name: 'Riley J Sommers',
      img: RileyJSommers,
    },
    {
      id: 3,
      name: 'J.D Clement',
      img: JDClement,
    },
    {
      id: 4,
      name: 'Peter Darling',
      img: PeterDarling,
    },
    {
      id: 5,
      name: 'Peter Sharpe',
      img: PeterSharpe,
    }
  ]

  return (
    <section className='container authors'>
      {authorList.map((author) => (
        <AuthorCard name={author.name} img={author.img} id={author.id} />
      ))}
    </section>
  )
}

export default Authors