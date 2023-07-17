import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

  const [contactData, setContactdata] = useState({
      firstName: null,
      lastName: null,
      email: null,
      message: null
  })

  const [submitState, setSubmitState] = useState(false)
  const [errorState, setErrorState] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()
    if (!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.message) {
      setErrorState('Please enter all fields')
    } else {
      setSubmitState(true)
    }
  }

  return (
    <section className='container contact'>
      {submitState ? (
        <div className='submitted'>Thank you {contactData.firstName}. Your message has now been sent.</div>
      ) : (
        <form onSubmit={submitHandler}>
        <h3>Message</h3>  
        <p>Send us a message and we will get back to you within 24 hours</p>
        <div className="input-container">
          <div className="input-name">
            <input type="text" placeholder='First Name' onChange={(e) => setContactdata({
              firstName: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
              lastName: contactData.lastName,
              email: contactData.email,
              message: contactData.message
            })}/>
            <input type="text" placeholder='Last Name' onChange={(e) => setContactdata({
              firstName: contactData.firstName,
              lastName: e.target.value,
              email: contactData.email,
              message: contactData.message
            })}/>
          </div>
          <input type="email" placeholder='Email Address' onChange={(e) => setContactdata({
            firstName: contactData.firstName,
            lastName: contactData.lastName,
            email: e.target.value,
            message: contactData.message
          })}/>
          <input type="text" placeholder='Message' onChange={(e) => setContactdata({
            firstName: contactData.firstName,
            lastName: contactData.lastName,
            email: contactData.email,
            message: e.target.value
          })}/>
        </div>
        <div className='error'>{errorState}</div>
        <button>Send Message</button>
      </form>
      )}
      <div className='contact-email'>
        <div className="contact-email-box">
          <h3>General</h3>  
          <p>For all general enquiries</p>
          <a href = "mailto:hello@usefulpublishing.com.au">hello@usefulpublishing.com.au</a>
        </div>
        <div className="contact-email-box">
          <h3>Media And Marketing</h3>  
          <p>For all media and marketing enquiries</p>
          <a href = "mailto:usefulpublishing22@gmail.com">usefulpublishing22@gmail.com</a>
        </div>
      </div>

    </section>
  )
}

export default Contact