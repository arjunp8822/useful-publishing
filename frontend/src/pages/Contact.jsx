import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='container contact'>
      <form>
        <h3>Message</h3>  
        <p>Send us a message and we will get back to you within 24 hours</p>
        <div className="input-container">
          <div className="input-name">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Message'/>
        </div>
        <button>Send Message</button>
      </form>
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