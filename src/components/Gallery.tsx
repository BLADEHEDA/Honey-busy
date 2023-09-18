import React from 'react'

import product1 from "../assets/h1-img6-768x492.jpg"
import product2 from "../assets/h1-img7-768x492.jpg";
import product3 from "../assets/h1-img8-768x492.jpg";
import product4 from "../assets/h1-img9-1.jpg";
import product5 from "../assets/h1-img10-1.jpg";
import product6 from "../assets/h1-img11-1.jpg";    

const Gallery = () => {
    // define the images 
    const galleryImages= [
        {
            id: 1,
            image: product1,
          },
          {
            id: 2,
            image: product2,
          },
          {
            id: 3,
            image: product3,
          },
          {
            id: 4,
            image: product4,
          },
          {
            id: 5,
            image: product5,
          },
          {
            id: 6,
            image: product6,
          },
    ]    

  return (
    <main className='px-[1.7em] mt-[5em] md:px-[3.5em] lg:px-[5em]' >
      <h1 className="text-[black] text-center text-[1.9em] font-[900] mb-3 md:text-[2.3em] lg:text-[2.5em] ">OUR GALLERY</h1>
      <p className="text-[1.15em] text-center mr-2 mb-5 lg:w-[47%] lg:mx-auto lg:mb-[2em] ">
        Mellifera is a true beehive of activity! Check out
       the latest news and events in our image gallery and see for yourself.</p>
       {/* display the images */}
       <div className=" gallerycards  border- border-[red]"> 
       {galleryImages.map((galleryImage)=>( 
         <div className="my-5"><img src={galleryImage.image} alt="" /></div>
         )
       )    }
       </div>
    </main>
  )
}

export default Gallery
