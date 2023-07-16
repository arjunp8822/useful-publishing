import React from 'react'
import aboutImg from '../assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <section className='container about'>
      <div className="about-text">
        <h3>Useful Publishing</h3>
        <p>We are Useful publishing. An independent boutique publishing house and as purveyors of the written word our name conveys our purpose and intent. 
          Being a small boutique business means we are agile and flexible and quite literally think outside the square. We do things differently and are always prepared to explore opportunities. 
          So if you are fresh independent thinker as an independent or indie author, a book reviewer or blogger or just a book lover, reach out we would love to hear from you.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={aboutImg} alt="about useful publishing" />
    </section>
  )
}

export default About