import React from 'react'
import './Subscribe.css'

const Subscibe = () => {
  return (
    <div className='subscribe'>
        <form>
            <h3>Subscribe</h3>
            <p>Sign up to receive Useful Publishing's monthly bulletin straight to your inbox</p>
            <div className="input-container">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="email" placeholder='Email Address'/>
            </div>
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Subscibe