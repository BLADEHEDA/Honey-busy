import React from 'react'
import image from "../assets/h1-img-14.png"; 
import Button from './Button';

const Newsletter = () => {
  return (
    <div className='px-[1.7em] mt-[3em]' >
      <img src={image} alt="image" />
      <h1 className="text-[black] text-start text-[2.1em] font-[900] mb-5 mt-[1.5em] mr-[2em]">NEWSLETTER SIGN UP</h1>
      <p className="text-[1.15em] text-start mr-2 mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor
       sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
       labore et dolore magnam aliquam quaerat voluptatem dolores.</p>
       <div className="mt-[3em]">
        <div className="">
            <input 
            type="text" 
            placeholder='Email Address'
            className="border-2 border-[#705B68] p-3.5 w-full bg-[#F7F3F0] text-[1.2em] mb-2 focus:outline-none" />
             </div>
        <div className="w-full"> 
        <Button
        name='SUBSCRIBE'
        style={{
            width:'100%',
            padding:'1.1em'
        }}
        />
         </div>
       </div>
    </div>
  )
}

export default Newsletter
