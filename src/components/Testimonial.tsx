import React from 'react'
import pic1 from '../assets/home-1-testimonial-1.png'  
import pic2 from '../assets/home-1-testimonial-2.png'
import Carousel from 'better-react-carousel'

const TestimonialProp = (props) => {
    return (
      <main className='relative' >
        <div className=" absolute left-[75%] ">
        <div className="text-white italic text-[2.2em] w-[2em] h-[2em]  rounded-full bg-[#C74817] 
         flex items-center justify-center bg-[#D3A863]">99</div>
        </div>
       

        <div className="border-3 mb-[1.8em] pt-[1.5em] "> <img src={props.image}  alt="" /></div>
        <p className="italic text-[1.5em] text-[#705B68] mb-[1.7em] "><span>”</span>{props.content}<span>”</span></p>
        <h2 className="font-[800] text-[1.325em] text-black  ">{props.name} </h2>
        <h3 className="text-[#C74817] text-[0.9em] ">{props.type} </h3>
      </main>
    )
  }
-7
const Testimonial = () => {
  return (
    <main className='px-8 mt-[8em]' >
      {/* carousel component */}
      <Carousel
        cols={1}
        // rows={1}
        // gap={0}
        // loop={true}
        // auto={true} // Add auto to make it an infinite loop
        // timeout={3000} // Adjust the timeout (3 seconds in this example)
      >
      <Carousel.Item>
      <TestimonialProp
      image={pic1}
      content="The first step to becoming a successful beekeeper
       is to learn as much as you can about the bees themselves. 
       Beehives require management and good stewardship, which take time."
       name="ANNA MORIBALDI"
       type="HONEY LOVER"
      />
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialProp
       image={pic2}
       content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
       doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
       name="JULIA KLEIN"
       type="BIOLOGIST"
      />
      </Carousel.Item>
    </Carousel>
      
    </main>
  )
}

export default Testimonial
