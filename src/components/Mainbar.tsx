import React from 'react'
import leaf from '../assets/h1-rev-img-1.png'
import honey1 from "../assets/h1-rev-img-3.png"
import honey2 from "../assets/h1-rev-img-3.png"
import honey3 from "../assets/h1-rev-img-3.png"
import Button from './Button'
const Mainbar = () => {
  return (
    <div className="bg-[#F7F3F0] ">
      <div >
        <div className="flex justify-between pt-5 "> 
        <img className='w-[6em] ' src={leaf} alt="leaf" />
        <img src={honey1} className='w-[2em] h-[2em] mt-2 mr-3 ' alt="honey1" />
        </div>
        <div className="flex justify-between "> 
        <img className='ml-9' src={honey2} alt="honey" />
        <img className=' mr-[2.2em] ' src={honey3} alt="honey" />
        </div>
      </div>
      <h1 className=""> HONEYBEE</h1>
      <div className="">
        <Button name="vIEW MORE" />
      </div>
    </div>
  )
}

export default Mainbar
