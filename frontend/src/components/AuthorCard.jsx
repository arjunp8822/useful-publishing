import React from 'react'
import './AuthorCard.css'

const AuthorCard = (props) => {
  return (
    <div className='author-card'>
        <img src={props.img} />
        <h5>{props.name}</h5>
    </div>
  )
}

export default AuthorCard