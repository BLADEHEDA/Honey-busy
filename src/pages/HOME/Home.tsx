import React from 'react'
import Button from '../../components/Button'
import MissionBar from '../../components/MissionBar'
import Mainbar from '../../components/Mainbar'
import Mission from '../../components/Mission'
import News from '../../components/News'
import Products from '../../components/Products'
const Home = () => {
  return (
    <div className='bg-[#F7F3F0] pb-[10em] ' >
    <Mainbar/>
    <MissionBar/>
    <Mission/>
    <News/>
    <Products/>
    </div>
  )
}

export default Home
