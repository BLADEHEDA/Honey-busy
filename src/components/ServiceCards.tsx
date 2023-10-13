// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCaretRight } from '@fortawesome/free-solid-svg-icons'
import products from  "../components/Data"
import { HoneyCards} from './Honeytypes'

const ServiceCards = () => {
    const productCards = products.slice(0,4)   
  return (
    <div className='px-[1.7em] py-[3em] md:px-[3.5em] lg:px-[6em] border- border-[red] bg-[#F7F3F0] '>
         {/*map and dispaly thecards  */}
         <div className="honeytypescards border- ">
        {productCards.map((productCard,index)=>(
          <HoneyCards
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

export default ServiceCards
