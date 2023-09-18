import React from 'react'
import image from "../assets/h1-img-14.png"; 
import Button from './Button';

const Newsletter = () => {
  return (
    <main className='px-[1.7em] mt-[3em] md:px-[3.5em] lg:px-[5em] lg:flex  ' >
      <section className="flex-[50%] ">
      <img src={image} alt="image" />
      </section>

      <section className="flex-[50%] mt-0 ml-0  lg:mt-[4em] lg:ml-[3em] ">
      <h1 className="text-[black] text-start text-[2.1em] font-[900] mb-5 mt-[1.5em] mr-[2em]">NEWSLETTER SIGN UP</h1>
      <p className="text-[1.15em] text-start mr-2 mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor
       sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
       labore et dolore magnam aliquam quaerat voluptatem dolores.</p>
       <article className="mt-[3em] md:flex ">
        <div className="flex-[75%]">
            <input 
            type="text" 
            placeholder='Email Address'
            className="border-2 border-[#705B68] p-3.5 w-full bg-[#F7F3F0] text-[1.2em] mb-2 focus:outline-none" />
             </div>
        <div className="w-full flex-[25%] md:ml-2"> 
        <Button
        name='SUBSCRIBE'
        style={{
            width:'100%',
            padding:'1.1em'
        }}
        />
         </div>
       </article>
       </section>
    </main>
  )
}

export default Newsletter
