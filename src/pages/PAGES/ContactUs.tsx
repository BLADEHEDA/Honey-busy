import HeroSection from "../../components/HeroSection"
import Navbar from "../../components/Navbar"
import background from "../../assets/contact-img-1.jpg"
import Footer2 from "../../components/Footer2"
import MissionBar from "../../components/MissionBar"
import Mission from "../../components/Mission"
import FormBar from "./FormBar"
const ContactUs = () => {
  return (
    <div className="bg-[#F7F3F0] ">
      <Navbar/>
      <HeroSection
      backgroundImage={background}
      heading="CONTACT US"
      />
      <div className="bg-[#F7F3F0] mt-[5em] lg:flex lg:px-[6em]  ">
        <div className="flex-[60%]  ">
        <MissionBar/>
        <Mission/>
        </div>
        <div className="flex-[30%] lg:mt-[1.7em]">
            <FormBar/>
        </div>
     
      </div>
    
      <Footer2/>
    </div>
  )
}

export default ContactUs
