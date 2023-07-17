import React from 'react'
import './BookCard.css'
import { Link } from 'react-router-dom'

const BookCard = (props) => {
  return (
    <Link to={`/books/${props.id}`}>
      <div className='book-card'>
          <img src={props.img} />
          <h5>{props.name}</h5>
      </div>
    </Link>
  )
}

export default BookCard