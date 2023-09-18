import React from 'react'
import products from  "../components/Data"
import CartButton from './CartButton';

const Products = () => {
    // get the first 3 elemnts from the lists of products 
    const homeProducts = products.slice(11,14)
    
  return (
    <div className='px-8 mt-[8em] md:px-[3.5em] lg:px-[5em] ' >
      <h1 className="head text-[black] text-center text-[1.9em] font-[500] mb-3 lg:text-[2.5em]  ">OUR PRODUCTS</h1>
      <p className=" text-[1.15em] text-center mr-2 mb-5 lg:w-[47%] lg:mx-auto ">
        Check out our online shop for cute bee-themed apparel, unique bee suits, 
      educational tools, gift certificates and more.</p>
      {/* render the products */}
      <div className="productcards">
      {
        homeProducts.map((product,index)=>(
            <div key={product.id} className='mb-[2em] relative ' >
                {/* display the new sign on a particular product in this case product 2 */}
                {index===1 && <div className="absolute left-[16em] top-5 text-[white] bg-[#C74817] w-9 text-[0.9em] ">NEW</div>  }
                <img className='mb-[-3em]' src={product.image} alt={product.name} />
                <h1 className="text-[black] text-[1.5em] text-center font-[700]  hover:text-[#C74817]">{product.name} </h1>
                <p className="text-[#C74817] text-[1.275em] text-center my-2 "> ${product.price} </p>
                <p className="text-center text-[#705B68] ">{product.description} </p>
                <div className=''>
                    <CartButton />
                </div>
            </div>

        ))
      }
      </div>
    </div>
  )
}

export default Products
