import React from 'react'
import Button from '../../components/Button'

const FormBar = () => {
  return (
    <div className='bg-[white] py-[2em] px-[2.5em] mx-[1.5em] mb-[8em] ' >
        <h1 className="font-[700] text-[1.9em] mb-[1.2em]">GET IN TOUCH</h1>
      <div className="">
        <input type="text" placeholder='First Name' 
        className="border-2  mb-3  border-[grey] w-full  mb-3 text-[1.15em]
         py-3 pl-5 lg:py-[1em] text-[black] focus:outline-none lg:mb-[1.4em]" />
      </div>
      <div className="">
        <input type="text" placeholder='Last Name' 
        className="border-2  mb-3 border-[grey] w-full mb-3 text-[1.15em] 
        py-3 lg:py-[1em]  lg:py-[1em] pl-5 text-[black]  focus:outline-none lg:mb-[1.4em] " />
      </div>
      <div className="">
        <input type="text" placeholder='Email Address' 
        className="border-2 border-[grey] w-full mb-3 text-[1.15em] py-3 pl-5 text-[black]
        focus:outline-none lg:mb-[1.4em] " />
      </div>
      <div className="">
        <input type="text" placeholder='Phone' 
        className="border-2  mb-3 lg:mb-[1.4em] border-[grey] w-full  mb-3 text-[1.15em] py-3 pl-5 text-[black] 
        focus:outline-none  lg:py-[1em] " />
      </div>
      <div className="">
      <textarea 
      className='border-2 w-full  mb-3 border-[grey]  
      mb-5  lg:mb-[1.3em] text-[1.15em] py-3 pl-5 text-[black] h-[10em] lg:h-[12em  focus:outline-none   '
       placeholder='Message' ></textarea>
      </div>
      <div className=" w-full border- border-[green] ">
        <Button
        name='SEND MESSAGE'
        style={{
            background:'#C74817',
            color:'white',
            fontSize:'1em',
            fontWeight:'500',
            paddingTop:'1em',
            paddingBottom:'1em',
            paddingLeft:'3em',
            paddingRight:'3em',
            width:'100%'
        }}
        />
      </div>
    </div>
  )
}

export default FormBar
