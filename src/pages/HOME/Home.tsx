import React from 'react'
import Button from '../../components/Button'
import MissionBar from '../../components/MissionBar'
import Mainbar from '../../components/Mainbar'
import Mission from '../../components/Mission'
import News from '../../components/News'
import Products from '../../components/Products'
import Testimonial from '../../components/Testimonial'
import Gallery from '../../components/Gallery'
import Newsletter from '../../components/Newsletter'
import Honeytypes from '../../components/Honeytypes'
const Home = () => {
  return (
    <div className='bg-[#F7F3F0] pb-[7em] ' >
    <Mainbar/>
    <MissionBar/>
    <Mission/>
    <News/>
    <Products/>
    <Testimonial/>
    <Gallery/>
    <Newsletter/>
    <Honeytypes/>
    </div>
  )
}

export default Home
