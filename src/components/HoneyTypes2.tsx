import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight } from '@fortawesome/free-solid-svg-icons'
import products from  "../components/Data"
interface HoneyCardprops{
    image1:string,
    name:string,
    head:string,
    content:string,
  }
  
   export const HoneyCards2:React.FC<HoneyCardprops> = ({image1,name,head,content}) => {  
      return (
        <main className='bg-[#FCFAF9] pb-4 px-[1.2em] my-5 lg:px-[2em] border- ' >
          <section className="my-3 md:mr-[3em] lg:w-full border- flex justify-center lg:x-[1em]">
            <img src={image1} alt={name} />
            </section>
          <section className=" md:mt-[1em] text-center">
          <h2 className="font-[800] text-[1.4em] text-[black] ">{head} </h2>
          <p className="w-full border-  text-[1em] mb-2 ">{content} </p>
          {/* <h4 className=""> </h4> */}
          <h4 className="text-[#C74817] text-[0.95em] font-[600]"> <span className="  hover:mr-[0.2em] ">LEARN MORE</span> 
        <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.8em] ' /></h4>
        </section>
        </main>
      )
    }
  
const HoneyTypes2 = () => {
  const productCards = products.slice(5,8)  
  return (
    <div className='px-[1.7em] pb-[7em] md:px-[3.5em] lg:px-[6em] bg-[#F7F3F0] overflow-x-hidden ' >
    <h1 className="text-[black] text-center text-[2.1em] font-[900] mb-5 mt-[1.5em] md:text-[2.3em] lg:text-[2.5em]  ">
      TYPES OF HONEY</h1>
      <p className="text-[1.15em] text-center mr-2 mb-5 md:mb-[2.2em] ">
        Learn more about some of the products we take special pride in.</p>
        {/*map and dispaly thecards  */}
        <div className="honeytypescards2 border- ">
        {productCards.map((productCard,index)=>(
          <HoneyCards2
            key={index}
            image1={productCard.image1}
            head={productCard.name}
            content={productCard.description}
            NAME={productCard.name}
          />
        ) )}
         </div>
    </div>
  )
}

export default HoneyTypes2
