import React, { useState } from 'react'
import './Subscribe.css'

const Subscibe = () => {
  const [subData, setSubdata] = useState({
      firstName: null,
      lastName: null,
      email: null,
  })

  const [submitState, setSubmitState] = useState(false)
  const [errorState, setErrorState] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    if (!subData.firstName || !subData.lastName || !subData.email) {
      setErrorState('Please enter all fields')
    } else {
      setSubmitState(true)
    }
  }
  
  return (
    <div className='subscribe'>
      {submitState ? (
        <div className='submitted'>Thank you {subData.firstName}. You are now subscribed!</div>
      ) : (
        <form onSubmit={submitHandler}>
            <h3>Subscribe</h3>
            <p>Sign up to receive Useful Publishing's monthly bulletin straight to your inbox</p>
            <div className="input-container">
                <input type="text" placeholder='First Name' onChange={(e) => setSubdata({
                  firstName: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
                  lastName: subData.lastName,
                  email: subData.email,
                })}/>
                <input type="text" placeholder='Last Name' onChange={(e) => setSubdata({
                  firstName: subData.firstName,
                  lastName: e.target.value,
                  email: subData.email,
                })}/>
                <input type="email" placeholder='Email Address' onChange={(e) => setSubdata({
                  firstName: subData.firstName,
                  lastName: subData.lastName,
                  email: e.target.value,
                })}/>
            </div>
            <div className='error'>{errorState}</div>
            <button>Sign Up</button>
        </form>
      )}
    </div>
  )
}

export default Subscibe