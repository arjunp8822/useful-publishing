import React from 'react'
import Banner from '../components/Banner'
import NewReleases from '../components/NewReleases'
import Subscibe from '../components/Subscibe'

const Home = () => {
  return (
    <section className='container'>
        <Banner />
        <NewReleases />
        <Subscibe />
    </section>
  )
}

export default Home