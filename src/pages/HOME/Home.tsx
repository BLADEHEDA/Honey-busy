// import React from 'react'
// import Button from '../../components/Button'
import MissionBar from '../../components/MissionBar'
import Mainbar from '../../components/Mainbar'
import Mission from '../../components/Mission'
import News from '../../components/News'
import Products from '../../components/Products'
import Testimonial from '../../components/Testimonial'
import Gallery from '../../components/Gallery'
import Newsletter from '../../components/Newsletter'
import Honeytypes from '../../components/Honeytypes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <main className="">
    <div className='bg-[#F7F3F0] pb-[7em] ' >
      <div className="bg-[white] lg:bg-transparent ">
          <Navbar/>
      </div>
     
    <Mainbar/>
    <section className=" md:px-[1em] lg:px-[5em] lg:flex  ">
      <div className=" w-full">
        <MissionBar/>
        <Mission/>
      </div>
    <div className=" lg:w-[60%] lg:pt-[2em] ">
    <News/>
    </div>
    </section>
   
    <Products/>
    <Testimonial/>
    <Gallery/>
    <Newsletter/>
    <Honeytypes/>
    </div>
    <div className="">
    <Footer/>
    </div>
    </main>
  )
}

export default Home
