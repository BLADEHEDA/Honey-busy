// import React from 'react'
import leaf from '../assets/h1-rev-img-1.png'
import honey1 from "../assets/h1-rev-img-5.png"
import honey2 from "../assets/h1-rev-img-3.png"
import honey3 from "../assets/h1-rev-img-3.png"
import leftleaf from '../assets/h1-rev-img-7.png'
import leafright from '../assets/h1-rev-img-8.png'
import honey4 from '../assets/h1-rev-img-4.png'
import heropic from "../assets/h1-rev-img-12.jpg"
import hero from "../assets/image.png"
import line from "../assets/h1-rev-img-11.png"
import line1 from "../assets/h1-rev-img-10.png"
import Button from './Button'
const Mainbar = () => {
  return (
    <main className="bg-[#F7F3F0] ">
      {/* mobile hero section */} 
      <section className="bloc md:hidden  ">
      <div>
        <div className="flex justify-between pt-5 "> 
        <img className='w-[6em] ' src={leaf} alt="leaf" />
        <img src={honey1} className='w-[2em] h-[2em] mt-2 mr-3 ' alt="honey1" />
        </div>
        <div className="flex justify-between relative  "> 
        <img className='ml-9 honey ' src={honey2} alt="honey" />
        <img className=' mr-[2.2em] honey1 relative bottom-[4em] ' src={honey3} alt="honey" />
        </div>
      </div>
      <h1 className="text-center font-[900]  text-[black] text-[3.5em] my-4 "> HONEYBEE</h1>
      <div className=" flex justify-center">
        <Button 
        name="vIEW MORE"
        style={{
            paddingTop:'1.1em',
            paddingBottom:'1.1em',
            paddingLeft:'2.3em',
            paddingRight:'2.3em',
            fontSize:'1em',
            fontWeight:'700',
            marginTop:'1em'
        }}
        />
      </div>
      <div className="animation-container">
        <img src={honey4} className="honey4 w-[3em] h-[3em]" alt="honey" />
      </div>
        <div className="flex justify-between">
              <img src={leafright} className=' w-[6em] ' alt="leaf" /> 
            <img src={ leftleaf} className=' w-[6em] '  alt="leaf" />        
        </div>
        </section>
        {/* tablet hero section */}
        <section className=" hidden md:block lg:hidden ">
        <div>
        <div className="hidden md:flex justify-end lg:hodden pt-[5em] md:pr-[1em] ">
            <img src={hero} alt="" className="w-[8em] " />
            </div>
        <div className="flex justify-between pt-[5em] "> 
        <img className='w-[6em] ' src={leaf} alt="leaf" />
        </div>
          <div className="flex justify-center border-">
              <img src={honey1} className='w-[2em] h-[2em] mr-3 ' alt="honey1" />
          </div>
        <div className="flex justify-between relative  "> 
        <img className='ml-9 honey ' src={honey2} alt="honey" />
        <img className=' mr-[2.2em] honey1 relative bottom-[4em] ' src={honey3} alt="honey" />
        </div>
      </div>
        <section className=" hidden md:block pt-[13em ">
          <article className="text-center px-[10em]">
            <h1 className="text-[1.2em] font-[500] text-[black]">FRESH & SWEET AS HONEY.</h1>
            <h1 className="text-[5em] font-[900] text-[black] mt-1 mb-7 ">HONEYBEE</h1>
             <p className="mb-7">Step into our honey paradise! Discover a diverse 
             selection, from wildflower to lavender-infused. Elevate your well-being 
             with our pure, artisanal honey. Savor nature's sweetness today.</p>
            <div className=" flex justify-center">
            <Button 
            name="vIEW MORE"
            style={{
                paddingTop:'1.1em',
                paddingBottom:'1.1em',
                paddingLeft:'2.3em',
                paddingRight:'2.3em',
                fontSize:'1em',
                fontWeight:'700',
                marginTop:'1em'
            }}
            />
          </div>
          </article>
          <article className="flex justify-between mt-[3em] ">
              <img src={leafright} className=' w-[6em] h-[10em] mt-[10em] ' alt="leaf" /> 
              <div className="">
            <img src={heropic} alt="" className="w-[20em] " />
            </div>
        </article>
        </section>
        </section>
        {/* desktop hero section */}
        <section className="hidden lg:flex">
          <article className="flex-[50%] pr-[2em]">
            <div className="mb-[-5em] ">
            <img className='w-[6em] ' src={leaf} alt="leaf" />
            </div>
            <div className="text-cente pl-[5em] ">
            <h1 className="text-[1.2em] font-[500] text-[black]">FRESH & SWEET AS HONEY.</h1>
            <h1 className="text-[7em] font-[600] text-[black] mt-3 mb-7 ml-[-10px] ">HONEYBEE</h1>
            <img className='left-[2em] honey absolute ' src={honey2} alt="honey" />
             <p className="mb-7">Step into our honey paradise! Discover a diverse 
             selection, from wildflower to lavender-infused. Elevate your well-being 
             with our pure, artisanal honey. Savor nature's sweetness today.</p>
            <div className=" flex justify-cente">
            <Button 
            name="vIEW MORE"
            style={{
                paddingTop:'1.1em',
                paddingBottom:'1.1em',
                paddingLeft:'2.3em',
                paddingRight:'2.3em',
                fontSize:'1em',
                fontWeight:'700',
                marginTop:'1em'
            }}
            />
          </div>
          </div>
          <div className="">    
            <img src={leafright} className=' w-[6em] h-[10em] mt-[10em ' alt="leaf" /> 
          </div>
          </article>
          <article className=" relative flex-[50%] ">
                <div className="absolute bottom-[2em  right-[-17em] transform rotate-9 ">  
              <img src={line} alt="line.img" />
            </div>
          <img className='left-[2em] honey absolute ' src={honey1} alt="honey" />
          <img className='right-[4em] honey absolute ' src={honey3} alt="honey" />
            <div className=" absolute right-[2em] top-[8em] ">
            <img src={hero} className=' w-[9em]  ' alt="leaf" /> 
            </div>
         <div className="">  <img src={heropic} alt="" className="w-[32em] " /></div>
          
          <div className="absolute right-[1em] bottom-[8em] ">
          <img src={ leftleaf} className=' w-[6em] '  alt="leaf" /> 
            </div> 
            <div className="absolute bottom-[0.3em]  left-[-18em] ">  
              <img src={line1} alt="line.img" />
            </div>
            {/* <div className="absolute bottom-[2em]  left-[-12em] transform rotate-9 ">  
              <img src={line} alt="line.img" />
            </div> */}
          
          </article>
        </section>
    </main>
  )
}

export default Mainbar
