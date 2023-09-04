import React from 'react'
import products from  "../components/Data"

const Products = () => {
    // get the first 3 elemnts from the lists of products 
    const homeProducts = products.slice(0,3)
    console.log('here are the home products',homeProducts);
    
  return (
    <div className='px-8 ' >
      <h1 className="head text-[black] text-[1.9em] font-[500] mb-3 ">OUR PRODUCTS</h1>
      <p className=" text-[1.15em] text-start mr-2 mb-8">Check out our online shop for cute bee-themed apparel, unique bee suits, 
      educational tools, gift certificates and more.</p>
      {/* render the products */}
      {
        homeProducts.map((product,index)=>(
            <div key={product.id} >
                {/* display the new sign on a particular product in this case product 2 */}
                {index===1 && <div className="">NEW</div>  }
                <img src={product.image} alt={product.name} />
                <h1 className="">{product.name} </h1>
                <p className=""> ${product.price} </p>
                <p className="">{product.description} </p>


            </div>

        ))
      }
    </div>
  )
}

export default Products
