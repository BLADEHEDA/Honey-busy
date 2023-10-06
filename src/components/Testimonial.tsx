import React from 'react'
import pic1 from '../assets/home-1-testimonial-1.png'  
import pic2 from '../assets/home-1-testimonial-2.png'
import Carousel from 'better-react-carousel'
interface TestimonialPropProp{
  image:string,
  content:string,
  name:string,
  type:string

} 

const TestimonialProp:React.FC<TestimonialPropProp> = ({image,content,name,type}) => {
    return (
      <main className='relative md:px-[2.5em] lg:px-[3em]' >
        <div className=" absolute left-[78%] md:left-[35%] lg:left-[25%] ">
        <div className="text-white italic text-[2.2em] w-[2em] h-[2em] rounded-full bg-[#C74817] 
         flex items-center justify-center bg-[#D3A863]">99</div>
        </div>
        <section className="lg:flex ">
          <article className="">
        <div className="border-3 mb-[1.8em] pt-[1.5em] "> 
        <img src={image} className=' md:w-[16em] lg:w-[55em] '  alt="" />
        </div>
        </article>
          <article className="lg:mt-[2em] lg:ml-[4em] ">
          <p className="italic text-[1.5em] text-[#705B68] mb-[1.5em] lg:text-[1.7em] lg:w-[83%] ">
            <span>”</span>{content}<span>”</span></p>
          <h2 className="font-[800] text-[1.325em] text-black  ">{name} </h2>
          <h3 className="text-[#C74817] text-[0.9em] ">{type} </h3>
          </article>
        </section>
      </main>
    )
  }
-7
const Testimonial = () => {
  return (
    <main className='px-5 mt-[8em]' >
      {/* carousel component */}
      <Carousel
        cols={1}
        // rows={1}
        // gap={0}
        loop={true}
        autoplay={5000} 
        hideArrow={true}
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
