import React from 'react'
import './AuthorCard.css'
import { Link } from 'react-router-dom'

const AuthorCard = (props) => {
  return (
    <Link to={`/authors/${props.id}`}>
      <div className='author-card'>
          <img src={props.img} />
          <h5>{props.name}</h5>
      </div>
    </Link>
  )
}

export default AuthorCard