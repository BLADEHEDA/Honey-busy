import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons'
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
// links to the pages
const pageLinks=[
  {name:"ABOUT US", href:"" },
  {name:"OUR SERVICES", href:"" },
  {name:"CONTACT US", href:"" },
  // {name:"", href:"" },
]
const prodcutLinks=[
  {name:"THREE COLUMNS", href:"" },
  {name:"FOUR COLUMNS", href:"" },
  {name:"FULL WIDTH", href:"" },
]
const shoPageLinks=[
  {name:"MY ACCOUNT", href:"" },
  {name:"CART", href:"" },
  {name:"CHECKOUT", href:"" },
]
const blogLinks=[
  {name:"MASONRY", href:"" },
  {name:"RIGHT SIDEBAR", href:"" },
  {name:"LEFT SIDEBAR", href:"" },
  {name:"NO SIDEBAR", href:"" },
]
const postTypeLinks=[
  {name:"STANDARD", href:"" },
  {name:"GALLERY", href:"" },
  {name:"QUOTE", href:"" },
  {name:"NO SIDEBAR", href:"" },
  {name:"LINK", href:"" },
  {name:"AUDIO", href:"" },
  {name:"VIDEO", href:"" },
  {name:"NO SIDEBAR", href:"" },
]
const listTypeLinks=[
  {name:"STANDARD", href:"" },
  {name:"GALLERY", href:"" },
  {name:"GALLERY JOINED", href:"" },
  {name:"MASONRY", href:"" },
]
const layoutLinks=[
  {name:"TWO COLUMNS", href:"" },
  {name:"THREE COLUMNS", href:"" },
  {name:"THREE COLUMNS WIDE", href:"" },
  {name:"FOUR COLUMNS", href:"" },
  {name:"FOUR COLUMNS WIDE", href:"" },
  {name:"FIVE COLUMNS", href:"" },
  {name:"FIVE COLUMNS WIDE", href:"" },
  {name:"SIX COLUMNS", href:"" },
]
const singleTypesLinks=[
  {name:"SMALL IMAGES", href:"" },
  {name:"BIG IMAGES", href:"" },
  {name:"SMALL GALLERY", href:"" },
  {name:"BIG GALLERY", href:"" },
  {name:"SMALL MANSONRY", href:"" },
  {name:"BIG MANSONRY", href:"" },
  {name:"SLIDER", href:"" },
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
             >{navlink.name} 
             </Link>
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
       <div className="navlin relative">
        <p className="font-[500] text-[0.95em] text-[black]">PAGES</p>
      {/* hover-div */}
        <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-2em] hidden ">
        
        {pageLinks.map((pageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={pageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {pageLink.name}
            </Link>
          </div>
        ] )

        }
          </div> 
       </div>
       <div className="navlin relative">
        <p className="font-[500] text-[0.95em] text-[black]">PRODUCTS</p>
      {/* hover-div */}
      <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-2em] hidden ">
        <div className="mb-2">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            SHOP LIST
            </Link>
          </div>
          <div className="mb-2">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            SHOP SINGLE
            </Link>
          </div>
          {/* main hover */}
          <div className="mb-2 borde border-[red] flex justify-between pr-[3em]">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            LAYOUTS
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
          {/* subsection hover to be hidden */}
          <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
        absolute w-[14em] z-[999] shadow-md left-[14em] top-[1.4em] hidden ">  
        {prodcutLinks.map((prodcutLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={prodcutLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {prodcutLink.name}
            </Link>
          </div>
        ] )
        }
          </div> 
          {/* end  */}

          <div className="mb-2 borde border-[red] flex justify-between pr-[3em] relative">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            SHOP PAGES
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
                 {/* subsection hover to be hidden */}
        <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
        absolute w-[14em] z-[999] shadow-md left-[14em] top-[3em] hidden ">  
        {shoPageLinks.map((shoPageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={shoPageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {shoPageLink.name}
            </Link>
          </div>
        ] )
        }
          </div> 
          </div> 
             {/* end  of product hover div and sunsections */}
       </div>
       <div className="navlin relative ">
        <p className="font-[500] text-[0.95em] text-[black]">BLOG</p>
      {/* hover-div */}
      <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-1em] hidden ">
        
        {blogLinks.map((blogLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={blogLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {blogLink.name}
            </Link>
          </div>
        ] )
        }
            <div className="mb-2 borde border-[red] flex justify-between pr-[3em] relative">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            POST TYPES
            </Link>
            </div>
            <div className=" ">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
          </div> 
                           {/* subsection hover to be hidden */}
        <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
        absolute w-[14em] z-[999] shadow-md left-[13.0em] top-[9.5em] hidden ">  
        {postTypeLinks.map((postTypeLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={postTypeLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {postTypeLink.name}
            </Link>
          </div>
        ] )
        }
          </div> 
          {/* end  */}
          
        {/* end of changes */}
       </div>
       {/* portfolio section and its hiiden subsections */}
       <div className="navlin relative  ">
        <p className="font-[500] text-[0.95em] text-[black]">PORTFOLIO</p>
        <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-2em] hidden ">
          {/* main hover */}
          <div className="mb-2 borde border-[red] flex justify-between flex-row-reverse pr-[3em]">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            LIST TYPES
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretLeft} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
          {/* subsection hover to be hidden */}
          <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pr-[1.7em] 
        absolute w-[14em] z-[999] shadow-md right-[14.005em] bottom-[-2.0em] top-[1em hidden text-end ">  
        {listTypeLinks.map((listTypeLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={listTypeLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full  '
            >
            {listTypeLink.name}
            </Link>
          </div>
        ] )
        }
          </div> 
          {/* end  */}
          {/*nextmain hover  */}
          <div className="mb-2 borde border-[red] flex justify-between flex-row-reverse pr-[3em]">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            LAYOUTS
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretLeft} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
                 {/* subsection hover to be hidden //  */}
        <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pr-[1.7em] 
        absolute w-[14em] z-[999] shadow-md right-[14em] top-[-1em] hidden text-end  ">  
        {layoutLinks.map((layoutLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={layoutLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {layoutLink.name}
            </Link>
          </div>
        ] )
        }
          </div> 
          {/* MAIN HOEVR 3 */}
          <div className="mb-2 borde border-[red] flex justify-between flex-row-reverse pr-[3em]">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full ' > 
            SINGLE TYPES
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretLeft} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
        {/* subsection hover to be hidden */}
        <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pr-[1.7em] text-end 
        absolute w-[14em] z-[999] shadow-md right-[14em] top-[1em] hidden ">  
        {singleTypesLinks.map((shoPageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={shoPageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full '
            >
            {shoPageLink.name}
            </Link>
          </div>
        ] )
        }
          </div>
          </div> 
             {/* end  of product hover div and sunsections */}
       </div>
       {/* portfolio end */}
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
