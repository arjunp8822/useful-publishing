import React from 'react'
import './BookCard.css'

const BookCard = (props) => {
  return (
    <div className='book-card'>
        <img src={props.img} />
        <h5>{props.name}</h5>
    </div>
  )
}

export default BookCard