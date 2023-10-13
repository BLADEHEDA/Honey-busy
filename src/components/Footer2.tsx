import backgroundImage from '../assets/Footer-default-png5.png'
import  logo from '../assets/Logo-footer-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer,faEnvelope,faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF ,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons' 
import footer from "../assets/Footer-png3.png"

const Footer2 = () => {
    const footerdiv={
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPostion:'center',
        backgroundRepeat: 'no-repeat',
        height:'80vh',
        width:'100%'
    }

  return (
    <main className="bg-[#D3A863] relative  "  >
        <main className=" hidden lg:block">
        <div className="bg-[#D3A863] m-auto  border- border-[red]
        w-[12em] h-[12em] p-[2em] rounded-full top-[-3.5em]
         z-[999] flex justify-center  relative 
        ">
            <img src={logo} alt="" />
        </div>

             <main className="border- border-[red mt-[-1em] " style={footerdiv}>
        <section className="lg:flex justify-between  px-[2em]
    md:px-[3em] lg:px-[6.5em] w-full  " >
      <section className='  flex-[25%] ' >
        <div className="font-[500] text-[1.4em] text-black  ">CONTACT INFO</div>
        <div className="mt-[1.2em] flex">
            <div className="">
              <FontAwesomeIcon icon={faArrowPointer} 
              className='hover:ml-[0.8em] text-[black] text-[1.3em] ' />
            </div>
            <div className="ml-2 text-[1.1em]">
               <p className="text-[black]">Blue Spring Road 405</p> 
               <p className="text-[black]">Sugar Land, TX 77478</p>
            </div>
        </div>
        <div className="mt-[1em] flex">
            <div className="">
              <FontAwesomeIcon icon={faPhoneFlip} 
              className='hover:ml-[0.8em] text-[black] text-[1.3em] ' />
            </div>
            <div className="ml-2 text-[1em]">
               <p className="text-[black]">Phone: (555) 333-4422</p> 
            </div>
        </div>
        <div className="mt-[1em] flex">
            <div className="">
              <FontAwesomeIcon icon={faEnvelope} 
              className='hover:ml-[0.8em] text-[black] text-[1.3em] ' />
            </div>
            <div className="ml-2 text-[1em]">
               <p className="text-[black]">bee@qodeinteractive.com</p> 
            </div>
        </div>

      </section>
      <section className=' border- border-[red] flex-[25%] lg:pl-[1.5em] ' >
        <div className="font-[500] text-[1.4em] text-[#132F3A] ">PRODUCTS</div> 
        <p className="text-[black] text-[1.2em] mt-[0.8em] ">Queen Bee Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Pure Raw Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Heather Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Wildflower Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Honey Face Cream</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Manuka Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Raw Honeycomb</p>
      </section>
      <section className=' border- border-[red] flex-[25%] ' >
        <div className="font-[500] text-[1.4em] text-black ">NEWS</div>
        <div className="mt-[1.3em]">
        <p className="text-[#C74817] text-[0.8em] font-[500]  ">APRIL 27, 2020</p>
        <div className="text-[1.2em] font-[600] text-black  ">
        <p className=" ">BEEKEEPER – BEES AND </p>
        <p className="">BEEKEEPING</p> 
        </div>
        </div>
        <div className="mt-[1.4em]">
        <p className="text-[#C74817] text-[0.8em] font-[500]  ">   APRIL 27, 2020</p>
        <div className="text-[1.2em] font-[600] text-black  ">
        <p className=" ">HONEY FROM YOUR OWN </p>
        <p className=""> BEEHIVE</p> 
        </div>
        </div>
        <div className="mt-[1.4em]">
        <p className="text-[#C74817] text-[0.8em] font-[500]  ">   APRIL 27, 2020</p>
        <div className="text-[1.2em] font-[600] text-black  ">
        <p className=" ">KEEPING SWARM FROM </p>
        <p className="">LEAVING?</p> 
        </div>
        </div>

      </section>
      <section className=' border- border-[red]  flex-[25%] lg:pl-[4em]' >
        <div className="font-[500] text-[1.4em] text-black ">OUR HIVE</div>
        <div className="mt-[1.0em] text-[1.1em] text-black ">
        <p className="">Our Story</p>
        <p className="mt-[1.0em]">Our Retail Locations</p>
        <p className="mt-[1.0em]">The Bee Cause</p>
        <p className="mt-[1.0em]">Blog</p>
        <p className="mt-[1.0em]">Bee Garden Tours</p>
        </div>
      </section>   
      </section>
      <section className=" mt-[3em] norder-2 border-[green] ">
      <section className="mb-[2em] flex border- w-[9em] justify-between  border-[red] mx-auto ">
      <p className="bg-[#C74817] p-5 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faFacebookF as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>
      <p className="bg-[#C74817] p-5 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faInstagram as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>
      <p className="bg-[#C74817] p-5 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faTwitter as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>  
    </section>
    <section className="mt-[1.5em] ">
      <img src={footer} alt="footer-image" className=' mx-auto ' />
    </section >
    <section className="text-center text-[0.8em] ">
        © 2020 Qode Interactive All Rights Reserved
    </section>
      </section>
      </main>
      </main>
      {/* mobile screensize  */}
      <main className="bg-[#D3A863] relative  block lg:hidden "  >
        <div className="bg-[#D3A863] m-auto  border- border-[red]
        w-[12em] h-[12em] p-[2em] rounded-full top-[-3.5em]
         z-[999] flex justify-center  relative 
        ">
            <img src={logo} alt="" />
        </div>

             <main className="border- border-[red mt-[-1em] " >
        <section className="lg:flex justify-between  px-[2em]
    md:px-[3em] lg:px-[6.5em] w-full  " >
        <section className="md:flex">
      <section className='  flex-[25%] mb-[4em] ' >
        <div className="font-[500] text-[1.4em] text-black  ">CONTACT INFO</div>
        <div className="mt-[1.2em] flex">
            <div className="">
              <FontAwesomeIcon icon={faArrowPointer} 
              className='hover:ml-[0.8em] text-[black] text-[1.3em] ' />
            </div>
            <div className="ml-2 text-[1.1em]">
               <p className="text-[black]">Blue Spring Road 405</p> 
               <p className="text-[black]">Sugar Land, TX 77478</p>
            </div>
        </div>
        <div className="mt-[1em] flex">
            <div className="">
              <FontAwesomeIcon icon={faPhoneFlip} 
              className='hover:ml-[0.8em] text-[black] text-[1.3em] ' />
            </div>
            <div className="ml-2 text-[1em]">
               <p className="text-[black]">Phone: (555) 333-4422</p> 
            </div>
        </div>
        <div className="mt-[1em] flex">
            <div className="">
              <FontAwesomeIcon icon={faEnvelope} 
              className='hover:ml-[0.8em] text-[black] text-[1.3em] ' />
            </div>
            <div className="ml-2 text-[1em]">
               <p className="text-[black]">bee@qodeinteractive.com</p> 
            </div>
        </div>
      </section>
      <section className=' flex-[25%] lg:pl-[1.5em] mb-[4em]' >
        <div className="font-[500] text-[1.4em] text-[#132F3A] ">PRODUCTS</div> 
        <p className="text-[black] text-[1.2em] mt-[0.8em] ">Queen Bee Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Pure Raw Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Heather Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Wildflower Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Honey Face Cream</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Manuka Honey</p>
        <p className="text-[black] text-[1.2em] mt-[0.5em] ">Raw Honeycomb</p>
      </section>
      </section>
      <section className="md:flex mt-4 ">
      <section className=' border- border-[red] flex-[25%] mb-[4em] ' >
        <div className="font-[500] text-[1.4em] text-black ">NEWS</div>
        <div className="mt-[1.3em]">
        <p className="text-[#C74817] text-[0.8em] font-[500]  ">APRIL 27, 2020</p>
        <div className="text-[1.2em] font-[600] text-black  ">
        <p className=" ">BEEKEEPER – BEES AND </p>
        <p className="">BEEKEEPING</p> 
        </div>
        </div>
        <div className="mt-[1.4em]">
        <p className="text-[#C74817] text-[0.8em] font-[500]  ">   APRIL 27, 2020</p>
        <div className="text-[1.2em] font-[600] text-black  ">
        <p className=" ">HONEY FROM YOUR OWN </p>
        <p className=""> BEEHIVE</p> 
        </div>
        </div>
        <div className="mt-[1.4em]">
        <p className="text-[#C74817] text-[0.8em] font-[500]  ">   APRIL 27, 2020</p>
        <div className="text-[1.2em] font-[600] text-black  ">
        <p className=" ">KEEPING SWARM FROM </p>
        <p className="">LEAVING?</p> 
        </div>
        </div>

      </section>
      <section className=' border- border-[red]  flex-[25%] lg:pl-[4em] mb-[4em] ' >
        <div className="font-[500] text-[1.4em] text-black ">OUR HIVE</div>
        <div className="mt-[1.0em] text-[1.1em] text-black ">
        <p className="">Our Story</p>
        <p className="mt-[1.0em]">Our Retail Locations</p>
        <p className="mt-[1.0em]">The Bee Cause</p>
        <p className="mt-[1.0em]">Blog</p>
        <p className="mt-[1.0em]">Bee Garden Tours</p>
        </div>
      </section>  
      </section> 
      </section>
      <section className=" mt-[3em] norder-2 border-[green] ">
      <section className="mb-[2em] flex border- w-[9em] justify-between  border-[red] mx-auto ">
      <p className="bg-[#C74817] p-5 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faFacebookF as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>
      <p className="bg-[#C74817] p-5 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faInstagram as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>
      <p className="bg-[#C74817] p-5 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faTwitter as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>  
    </section>
    <section className="mt-[2em] ">
      <img src={footer} alt="footer-image" className=' mx-auto ' />
    </section >
    <section className="text-center text-[0.8em] pb-[2em] mt-3 ">
        © 2020 Qode Interactive All Rights Reserved
    </section>
      </section>
      </main>
    </main>
    </main>
  )
}

export default Footer2
