import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight } from '@fortawesome/free-solid-svg-icons'
import products from  "../components/Data"
// define the data fpr the cards

const HoneyCards = (props) => {  
    return (
      <div className='bg-white py-4 px-[1.2em] my-5 ' >
        <div className="my-3 "><img src={props.image} alt={props.name} /></div>
        <h2 className="font-[800] text-[1.4em] text-[black] ">{props.head} </h2>
        <p className="w-[90%] text-[1.1em] mb-2 ">{props.content} </p>
        {/* <h4 className=""> </h4> */}
        <h4 className="text-[#C74817] text-[0.95em] font-[600]"> <span className="  hover:mr-[0.2em] ">LEARN MORE</span> 
      <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.8em] ' /></h4>
      </div>
    )
  }

const Honeytypes = () => {
    const productCards = products.slice(0,4)
    console.log('The productCards',productCards[0].image1 );
    console.log('here is the data', products );
    
  return (
    <div className='px-[1.7em] mt-[7em]' >
    <h1 className="text-[black] text-center text-[2.1em] font-[900] mb-5 mt-[1.5em] ">TYPES OF HONEY</h1>
      <p className="text-[1.15em] text-center mr-2 mb-5">Learn more about some of the products we take special pride in.</p>
        {/*map and dispaly thecards  */}
        {productCards.map((productCard,index)=>(
          <HoneyCards
            key={index}
            image={productCard.image1}
            head={productCard.name}
            content={productCard.description}
          />
        ) )}
        

    </div>
  )
}

export default Honeytypes
