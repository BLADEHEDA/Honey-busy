// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const CartButton = () => {
  return (
    <div className="flex justify-center mt-5 ">
    <div className="">
      <FontAwesomeIcon icon={faBasketShopping} className=' hover:ml-[0.2em] mr-1 ' /> 
       </div>
    <div className="font-[700] text-[0.8em] mt-1  ">ADD TO CART</div>
</div>
  )
}

export default CartButton
