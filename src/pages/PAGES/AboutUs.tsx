// import React from 'react'
import HeroSection from "../../components/HeroSection"
import Navbar from "../../components/Navbar"
import background from "../../assets/about-us-img-1.jpg"
import HoneyRules from "../../components/HoneyRules"
import TeamCards from "../../components/TeamCards"

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection
      backgroundImage={background}
      heading="ABOUT US"
      />
      <HoneyRules/>
      <TeamCards/>
    </div>
  )
}

export default AboutUs
