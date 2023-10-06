// import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons' 
import footer from "../assets/Footer-png3.png"


const Footer = () => {
  return (
    <main className=' bg-[#F7F3F0] pb-[2em] ' >
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
    <section className="my-[1.3em]">
      <img src={footer} alt="footer-image" className=' mx-auto ' />
    </section >
    <section className="text-center text-[0.8em] ">© 2020 Qode Interactive All Rights Reserved</section>
  </main>
  )
}

export default Footer
 