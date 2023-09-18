import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight } from '@fortawesome/free-solid-svg-icons'

const NewsProp=(props:any)=>{
    return(
        <div className="prop mb-[2.5em] lg:pl-[1em] ">
            <p className="date text-[#C74B4B] text-[0.9em] font-[700]  ">{props.date}</p>
            <h2 className="text-[black] text-[1.175em] font-[700] mb-3 hover:text-[#C74B4B] ">{props.head}</h2>
            <p className="content text-[#705B68] "> {props.content} </p>
        </div>
    )
}

const News = () => {
  return (
    <div  className='news bg-[white] mx-8 px-6 py-8 mb-[5em] '  >
      <h1 className='text-[black] text-[1.9em] font-[600] mb-6 lg:ml-[10px]' >NEWS</h1>
      <NewsProp
      date='MAY 14, 2020'
      head='SWEET HONEY PACKS FRESH RAW AND UNFILTERED'
      content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia des.'
      />
      <NewsProp
       date='MAY 14, 2020'
       head='RAW BEE HONEY PRODUCTS AND BEEKEEPING'
       content='Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia des null.'
      />
     <NewsProp
       date='MAY 13, 2020'
       head='BEES – HONEY BEES AND BEEKEEPING ONLINE GUIDE'
       content='Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint sunt in culpa qui officia des cupidatat non.'
      />
      <p className="text-[black] text-[0.85em] font-[600]"> <span className="  hover:mr-[0.2em] ">SHOW MORE NEWS </span> 
      <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' /></p>
    </div>
  ) 
}

export default News
