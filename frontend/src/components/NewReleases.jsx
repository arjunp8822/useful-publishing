import React from 'react'
import './NewReleases.css'
import nr1 from '../assets/nr1.jpg'
import nr2 from '../assets/nr2.jpg'
import nr3 from '../assets/nr3.jpg'

const NewReleases = () => {
  return (
    <div className='new-releases'>
      <h3>New Releases</h3>
      <div className='new-release-container'>
        <p>
        Useful Publishing is one of Sydney’s leading independent publishers and has become synonymous with high quality titles and internationally respected authors. Covering a unique and specific market books to enhance life, we publish literary fiction, commercial fiction, intriguing memoirs and books on health and well being. 
        </p>
        <div className="new-release-images">
          <img src={nr1} alt="new book" />
          <img src={nr2} alt="new book" />
        </div>
      </div>
    </div>
  )
}

export default NewReleases