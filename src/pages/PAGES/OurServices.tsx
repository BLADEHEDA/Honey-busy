import HeroSection from "../../components/HeroSection"
import Navbar from "../../components/Navbar"
import background from "../../assets/services1.jpg"
import Footer2 from "../../components/Footer2"
import ServiceCards from "../../components/ServiceCards"
import HoneyTypes2 from "../../components/HoneyTypes2"

const OurServices = () => {
  return (
    <div>
         <Navbar/>
      <HeroSection
      backgroundImage={background}
      heading="OUR SERVICES"
      />
      <ServiceCards/>
      <HoneyTypes2/>
      <Footer2/>
    </div>
  )
}

export default OurServices
