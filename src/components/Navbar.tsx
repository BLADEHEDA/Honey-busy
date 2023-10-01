import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCaretRight } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/New-logo-png1.png"
import { Link } from 'react-router-dom'
import "../App.css"
import { useState } from 'react'
import {faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

const navLinks=[
  { name: "HOME", href: "/" },
  { name: "PAGES", href: "/pages" },
  { name: "PRODUCTS", href: "/products" },
  { name: "BLOG", href: "/blog" },
  { name: "PORTFOLIO", href: "/portfolio" },
]

const Navbar = () => {
  const [navlink, setnaLinks]= useState(true)

  const navstyle= navlink ?"navlinks":"navlinksshow"
  const toggleNav=()=>{
    setnaLinks(!navlink)
  }
  
  return (
    <main className="navbar"> 
    <section className=" bg-[white] mobilenav px-5 py-3 lg:hidden  "> 
    <article className='flex justify-between ' >
      <div className=""> <img src={logo } className='w-[11em] ' alt="" /> </div>
      <div onClick={toggleNav} className=""> <FontAwesomeIcon icon={faBars } className=' text-[1.3em] mt-2 ' /></div>
    </article>
          {/* section for navlinks */}
          <article className={`px-2 mt-[3em] border-  ${navstyle}`}>
          { navLinks.map((navlink,index)=>(
        <div className="flex justify-between mb-1">
              <ul className="">
            <Link
             key={index} 
             to={navlink.href}
             className="font-[500] text-[0.95em] text-[black] "
             >{navlink.name} </Link>
          </ul>
          <p className=""> 
          <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' /></p>
        </div>
          ) )

          }
      </article>
    </section>
    {/* desktop nav */}
    <section className="desktop hidden bg-[#F7F3F0] px-[6em] py-[2.2em] lg:flex justify-between  ">
    <article className='flex-[25%] border- border-[blue] mr-[5em] ' >
      <div className=""> <img src={logo } className='w-[14em] ' alt="" /> </div>
    </article>
    <article className={`px-2  border-   border-[green] flex justify-between flex-[55%] mt-2`}>
       <div className="navlin list-none ">
        <p className="font-[500] text-[0.95em] text-[black] ">HOME</p>
      {/* hover-div */}
        <div className=" "></div> 
       </div>
       <div className="navlin list-none">
        <p className="font-[500] text-[0.95em] text-[black]">PAGES</p>
      {/* hover-div */}
        <div className=""></div> 
       </div>
       <div className="navlin list-none">
        <p className="font-[500] text-[0.95em] text-[black]">PRODUCTS</p>
      {/* hover-div */}
        <div className=""></div> 
       </div>
       <div className="navlin ">
        <p className="font-[500] text-[0.95em] text-[black]">BLOG</p>
      {/* hover-div */}
        <div className=""></div> 
       </div>
       <div className="navlin">
        <p className="font-[500] text-[0.95em] text-[black]">PORTFOLIO</p>
      {/* hover-div */}
        <div className=""></div> 
       </div>
      </article>
      <article className=" flex border- border-[red] flex-[20%] ml-[3em] justify-between ">
      <div className="">
      <FontAwesomeIcon icon={faBasketShopping} className='mt-3 text-[1.3em] ' /> 
       </div>
        <div className=""> 
          <Button 
          name='CONTACT'
          style={{
            backgroundColor:'#D3A863',
            paddingLeft:'3em',
            fontSize:'0.85em',
            paddingRight:'3em',
            paddingTop:'1em',
            paddingBottom:'1em',

            
          }}
          />
        </div>
      </article>
    </section>
    </main>
  )
}

export default Navbar
