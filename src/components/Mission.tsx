import React from 'react'
import signlogo from '../assets/h1-img2.png'

const Mission = () => {
  return (
    <main className='mission px-8  '>
      <h1 className="head text-[black] text-[1.9em] font-[500] mb-3  lg:text-[2.5em]  ">OUR MISSION</h1>
      <p className="content text-[1.15em] text-start mr-2 mb-8 ">The bees live as they naturally would and their benefits reach more people. Our goal is to raise
        <span className="cont font-[900]"> San Diego’s bee population</span>throughout the city and at the same time 
        <span className="cont font-[900]"> spread awareness among the community.</span>
      </p>
      <p className=' text-[1.15em] text-start mb-7' >
      Our hope is that these backyard hives will facilitate a dialogue among neighbours,
       friends, family and the community at large about the huge importance of bees.
      </p>
      <div className="mb-[5em]"><img src={signlogo} alt="source-logo" /></div>
    </main>
  )
}

export default Mission
