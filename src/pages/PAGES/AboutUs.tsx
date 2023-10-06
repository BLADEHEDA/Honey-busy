// import React from 'react'
import HeroSection from "../../components/HeroSection"
import Navbar from "../../components/Navbar"
import background from "../../assets/about-us-img-1.jpg"
import HoneyRules from "../../components/HoneyRules"

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection
      backgroundImage={background}
      heading="ABOUT US"
      />
      <HoneyRules/>
    </div>
  )
}

export default AboutUs
