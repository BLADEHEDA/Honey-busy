import React from 'react'
import leaf from '../assets/h1-rev-img-1.png'
import honey1 from "../assets/h1-rev-img-5.png"
import honey2 from "../assets/h1-rev-img-3.png"
import honey3 from "../assets/h1-rev-img-3.png"
import leftleaf from '../assets/h1-rev-img-7.png'
import leafright from '../assets/h1-rev-img-8.png'
import honey4 from '../assets/h1-rev-img-4.png'
import Button from './Button'
const Mainbar = () => {
  return (
    <main className="bg-[#F7F3F0] ">
      <div >
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
    </main>
  )
}

export default Mainbar
