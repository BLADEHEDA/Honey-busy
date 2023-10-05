import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCaretDown,faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/New-logo-png1.png"
import { Link } from 'react-router-dom'
import "../App.css"
import { useState } from 'react'
import {faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'


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
  // define the hoverr staes 
  const [page, setPage] = useState(false);
  const [products, setProducts] = useState(false);
  const [blog, setBlog] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [layouts, setLayouts] = useState(false);
  const [shoppages, setShopPages] = useState(false);
  const [postTypes, setPostTypes] = useState(false);
  const [listTypes, setListTypes] = useState(false);
  const [singleTypes, setSingleTypes] = useState(false);
  const [showArrow1, setShowArrow1] = useState(true)
  const [showArrow2, setShowArrow2] = useState(true)
  const [showArrow3, setShowArrow3] = useState(true)
  const [showArrow4, setShowArrow4] = useState(true)
  const [showArrow5, setShowArrow5] = useState(true)
  const [showArrow6, setShowArrow6] = useState(true)
  const [showArrow7, setShowArrow7] = useState(true)
  const [showArrow8, setShowArrow8] = useState(true)
  const [showArrow9, setShowArrow9] = useState(true)
  const [showArrow10, setShowArrow10] = useState(true)
  const [showArrow11, setShowArrow11] = useState(true)
  const [showArrow12, setShowArrow12] = useState(true)
  const navstyle= navlink ?"navlinks":"navlinksshow"
  const toggleNav=()=>{
    setnaLinks(!navlink)
  }

  return (
    <main
    onMouseLeave={() => {
      setProducts(false);
      setBlog(false);
      setPortfolio(false);
      setPage(false)
      setPostTypes(false) 
    }}
    onMouseEnter={()=>{ 
      setPostTypes(false) 
      setLayouts(false)
      setListTypes(false)
      setSingleTypes(false)
    }} 
    // onMouseLeave={()=>setBlog(false)}
    className="navbar "> 
    <section className=" bg-[red h-full mobilenav px-5 py-3 lg:hidden  "> 
    <article className='flex justify-between ' >
      <div className=""> <img src={logo } className='w-[11em] ' alt="" /> </div>
      <div onClick={toggleNav} className=""> <FontAwesomeIcon icon={faBars } className=' text-[1.3em] mt-2 ' /></div>
    </article>
          {/* section for navlinks */}
          <article className={`px-2 mt-[3em] bg-white  border-  ${navstyle}`}>
        <div onClick={()=>setShowArrow1(!showArrow1) }className="flex justify-between mb-1 border-">
          <ul className="">
            <Link to="/" className="font-[500] text-[0.95em] text-[black] hover:text-[#c74817] ">
              HOME
            </Link>
          </ul>
          <p  className="">
        {showArrow1 ?  ( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </p>
        </div>
        <div onClick={()=>{
          setShowArrow2(!showArrow2)
           setPage(!page) 
           setProducts(false)
           setBlog(false)
           setPortfolio(false)
           setShowArrow3(true)
           setShowArrow1(true)
           setShowArrow4(true)
           setShowArrow5(true)
          }} 
        className="flex justify-between mb-1  ">
          <ul className=" ">
            <Link to="/pages" 
            className="font-[500] text-[0.95em] text-[black] hover:text-[#c74817]">
              PAGES
            </Link>
          </ul>
          <p className="">
        { showArrow2 ?  ( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </p>
        </div>
                {/* hide and show show div */}
                { page && <div className="
                 w-full borer-2   ">
        
        {pageLinks.map((pageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={pageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] '
            >
            {pageLink.name}
            </Link>
          </div>
        ] )

        }
        
          </div> }
        {/* end  */}
        <div onClick={()=>{
          setProducts(!products)
          setPage(false)
          setBlog(false)
          setPortfolio(false)  
          // setLayouts(false)
          setShowArrow2(true)
          setShowArrow3(!showArrow3)
          setShowArrow1(true)
          setShowArrow4(true)
          setShowArrow5(true)
          setShowArrow6(true)
          } } 
          className="flex justify-between mb-1">
          <ul className="">
            <Link to="/products" className="font-[500] text-[0.95em] text-[black] hover:text-[#c74817]">
              PRODUCTS
            </Link>
          </ul>
          <p  className="">
        {showArrow3 ?  ( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </p>
        </div>

          { products &&   <div className="bg-[white] 
       ">
        <div className="mb-2">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] ' > 
            SHOP LIST
            </Link>
          </div>
          <div className="mb-2 ">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            SHOP SINGLE
            </Link>
          </div>
          {/* main hover */}
          <div 
        onClick={()=>{
          setShowArrow6(!showArrow6)
          setLayouts(!layouts) 
          setShopPages(false)
          setShowArrow7(true)
        }}
          className="mb-2 border- border-[red] flex justify-between  ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full 
             hover:text-[#c74817] ' > 
            LAYOUTS
            </Link>
            </div>
            {showArrow6 ?( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </div>
          {/* subsection hover to be hidden */}
   {  layouts && <div className="bg-[white]">  
        {prodcutLinks.map((prodcutLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={prodcutLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  '
            >
            {prodcutLink.name}
            </Link>
          </div>
        ] )
        }
          </div> }
          {/* end  */}

          <div 
          onClick={()=>{
            setShowArrow7(!showArrow7)
            setShowArrow6(true)
            setShopPages(!shoppages)
            setLayouts(false)
          } }
          className="mb-2 border-[red] border-  flex justify-between  ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            SHOP PAGES
            </Link>
            </div>
            <p  className="">
            {showArrow7 ?( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </p>
          </div>
                 {/* subsection hover to be hidden */}
  {  shoppages &&    <div className="bg-[white] pl-[2em] border- border-[black]  ">  
        {shoPageLinks.map((shoPageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={shoPageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] '
            >
            {shoPageLink.name}
            </Link>
          </div>
        ] )
        }
          </div> }
          </div> }
             {/* end  of product hover div and sunsections */}
        {/* end */}
        <div onClick={()=>{
          setProducts(false)
          setPage(false)
          setBlog(!blog)
          setPortfolio(false)  
          setShowArrow2(true)
          setShowArrow3(!showArrow3)
          setShowArrow1(true)
          setShowArrow4(!showArrow4)
          setShowArrow5(true)
          
          } } className="flex justify-between mb-1">
          <ul className="">
            <Link to="/blog" className="font-[500] text-[0.95em] text-[black] hover:text-[#c74817]">
              BLOG
            </Link>
          </ul>
          <p  className="">
        {showArrow4 ?  ( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </p>
        </div>
                {/* mobile product hover-div */}
        {/* { page && <div className="bg-[white] 
                 pr-[15em  w-full borer-2 ">
          </div> }
                setProducts(!products)
          setPage(false)
          setBlog(false)
          setPortfolio(false)  
          setShowArrow2(true)
          setShowArrow3(!showArrow3)
          setShowArrow1(true)
          setShowArrow4(true)
          setShowArrow5(true)
          */}
          
        {/* hover blog */}
      { blog &&   <div className="bg-[white]  ">
        
        {blogLinks.map((blogLink,index)=>[
          <div className="mb-2 ">
            <Link
              onMouseEnter={()=> setPostTypes(false) } 
            key={index}
            to={blogLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full  hover:text-[#c74817] '
            >
            {blogLink.name}
            </Link>
          </div>
        ] )
        }
            <div 
            onMouseEnter={()=> setPostTypes(true) } 
            // onMouseLeave={()=>setPostTypes(false)}
            className="mb-2  flex justify-between pr-[3em]
             relative pl-[1.7em] hover:text-[#c74817]  ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            POST TYPES
            </Link>
            </div>
            <div className=" ">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
          </div> }

        {/* end */}
        <div onClick={()=>setShowArrow5(!showArrow5) } className="flex justify-between mb-1">
          <ul className="">
            <Link to="/portfolio" className="font-[500] text-[0.95em] text-[black] hover:text-[#c74817]">
              PORTFOLIO
            </Link>
          </ul>
          <p className="">
        {showArrow5 ?  ( <FontAwesomeIcon icon={faCaretRight} className='text-[1em] ' />):
            <FontAwesomeIcon icon={faCaretDown} className='text-[1em] ' />}
          </p>
        </div>
      </article>
{/* section of the navbar to be shown when  */}


    </section>
    {/* desktop nav */}
    <section className="desktop hidden bg-[#F7F3F0] px-[6em] py-[2.2em] lg:flex justify-between  ">
    <article className='flex-[25%] border- border-[blue] mr-[5em] ' >
      <div className=""> <img src={logo } className='w-[14em] ' alt="" /> </div>
    </article>
    <article className={`px-2 flex justify-between flex-[55%] mt-2`}>
       <div className="navlin list-none ">
        <p 
          onMouseEnter={()=> setPage(false) }
        className="font-[500] text-[0.95em] text-[black] cursor-pointer ">HOME</p>
      {/* hover-div */}
        <div className=" "></div> 
       </div>
       <div className="navlin relative">
        <p 
        onMouseEnter={()=>{ 
          setPage(true)
          setProducts(false)
         }}
 
        className="font-[500] text-[0.95em] text-[black] cursor-pointer cursor-pointer ">PAGES</p>
      {/* hover-div */}
  { page && <div className="bg-[white] mt-[2.5em] py-[1.2em] pl-[1.7em] 
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-2em]  ">
        
        {pageLinks.map((pageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={pageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] '
            >
            {pageLink.name}
            </Link>
          </div>
        ] )

        }
          </div> }
       </div>
       <div className="navlin relative">
        <p 
         onMouseEnter={()=> {
          setProducts(true)
          setPage(false)
          setBlog(false)
          setLayouts(false) 
          setShopPages(false) 
        } } 
        //  onMouseLeave={()=>setProducts(false)}
        className="font-[500] text-[0.95em] text-[black] cursor-pointer ">PRODUCTS</p>
      {/* hover-div */}
 { products &&   <div className="bg-[white] mt-[2.5em] py-[1.2em]
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-2em] hidde ">
        <div className="mb-2  pl-[1.7em] ">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] ' > 
            SHOP LIST
            </Link>
          </div>
          <div 
             onMouseEnter={()=>{ 
              setLayouts(false) 
              setShopPages(false) 
             
            }}
          className="mb-2 ">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  pl-[1.7em]  ' > 
            SHOP SINGLE
            </Link>
          </div>
          {/* main hover */}
          <div 
            onMouseEnter={()=>{ 
              setLayouts(true) 
              setShopPages(false) 
             
            }} 
          className="mb-2 borde border-[red] flex justify-between pr-[3em] ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full 
             hover:text-[#c74817]  pl-[1.7em] ' > 
            LAYOUTS
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
          {/* subsection hover to be hidden */}
   {  layouts && <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
        absolute w-[14em] z-[999] shadow-md left-[14em] top-[1.4em]  ">  
        {prodcutLinks.map((prodcutLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={prodcutLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  '
            >
            {prodcutLink.name}
            </Link>
          </div>
        ] )
        }
          </div> }
          {/* end  */}

          <div 
            onMouseEnter={()=> {
              setShopPages(true) 
              setLayouts(false)
            }} 
            // onMouseLeave={()=>setShopPages(false)}
          className="mb-2 borde border-[red] flex justify-between pr-[3em] relative  pl-[1.5em] ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            SHOP PAGES
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
                 {/* subsection hover to be hidden */}
  {  shoppages &&    <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
        absolute w-[14em] z-[999] shadow-md left-[14em] top-[3em]  ">  
        {shoPageLinks.map((shoPageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={shoPageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] '
            >
            {shoPageLink.name}
            </Link>
          </div>
        ] )
        }
          </div> }
          </div> }
             {/* end  of product hover div and sunsections */}
       </div>
       <div className="navlin relative ">
        <p 
         onMouseEnter={()=>{
          setBlog(true)
          setProducts(false)
          setPortfolio(false)
          }} 
        className="font-[500] text-[0.95em] text-[black] cursor-pointer ">BLOG</p>
      {/* hover-div */}
  { blog &&   <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em 
       pr-[15em absolute w-[14em] z-[999] shadow-md left-[-1em] hidde ">
        
        {blogLinks.map((blogLink,index)=>[
          <div className="mb-2 pl-[1.7em]">
            <Link
              onMouseEnter={()=> setPostTypes(false) } 
            key={index}
            to={blogLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full  hover:text-[#c74817] '
            >
            {blogLink.name}
            </Link>
          </div>
        ] )
        }
            <div 
            onMouseEnter={()=> setPostTypes(true) } 
            // onMouseLeave={()=>setPostTypes(false)}
            className="mb-2  flex justify-between pr-[3em]
             relative pl-[1.7em] hover:text-[#c74817]  ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            POST TYPES
            </Link>
            </div>
            <div className=" ">
              <FontAwesomeIcon icon={faCaretRight} className=' hover:ml-[0.2em] ' />
            </div>
          </div>
          </div> }
           {/* subsection hover to be hidden */}
  { postTypes && <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pl-[1.7em] 
        absolute w-[14em] z-[999] shadow-md left-[13.0em] top-[9.5em]  ">  
        {postTypeLinks.map((postTypeLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={postTypeLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  '
            >
            {postTypeLink.name}
            </Link>
          </div>
        ] )
        }
          </div> }
          {/* end  */}
          
        {/* end of changes */}
       </div>
       {/* portfolio section and its hiiden subsections */}
       <div className="navlin relative  ">
        <p
         onMouseEnter={()=> {
          setPortfolio(true)
          setBlog(false)
          setSingleTypes(false)
          setLayouts(false)
          setListTypes(false) 
         }} 
        className="font-[500] text-[0.95em] text-[black] cursor-pointer">PORTFOLIO</p>
    { portfolio && <section className="bg-[white] mt-[2.5em] border- border-[black]
     py-[1.2em] pl-[1.7em 
      absolute w-[14em] z-[999] shadow-md left-[-2em] border-  ">
          {/* main hover */}
          <div 
           onMouseEnter={()=>{ 
            setListTypes(true)
            setLayouts(false)
            setSingleTypes(false)
          } } 
          className="mb-2 borde border-[red] flex justify-between
          flex-row-reverse pr-[3em] border- pl-[1.7em] ">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            LIST TYPES
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretLeft} className=' hover:ml-[0.2em] hover:text-[#c74817] ' />
            </div>
          </div>
          {/* subsection hover to be hidden */}
  {  listTypes && <div className="bg-[white] mt-[2.5em]  py-[1.2em] pr-[1.7em] 
        absolute w-[14em] z-[999] shadow-md right-[14.005em]
         bottom-[-2.0em] top-[1em hidde text-end  ">  
        {listTypeLinks.map((listTypeLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={listTypeLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  '
            >
            {listTypeLink.name}
            </Link>
          </div>
        ] )
        }
          </div> }
          {/* end  */}
          {/*nextmain hover  */}
          <div 
           onMouseEnter={()=>{ 
            setLayouts(true)
            setListTypes(false)
            setSingleTypes(false)
          } } 
        //  onMouseLeave={()=>setLayouts(false)}
          className="mb-2 borde border-[red] flex justify-between flex-row-reverse 
          pr-[3em] border- pl-[1.7em]">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817]  ' > 
            LAYOUTS
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretLeft} className=' hover:ml-[0.2em] hover:text-[#c74817] ' />
            </div>
          </div>
                 {/* subsection hover to be hidden //  */}
 { layouts && <article
 className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pr-[1.7em] 
        absolute w-[14em] z-[999] shadow-md right-[14em] top-[-1em] hidde text-end  ">  
        {layoutLinks.map((layoutLink,index)=>[
          <div className="mb-2">
            <Link         
            key={index}
            to={layoutLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] '
            >
            {layoutLink.name}
            </Link>
          </div>
        ] )
        }
          </article> }
          {/* MAIN HOEVR 3 */}
          <div 
           onMouseEnter={()=>{ 
            setSingleTypes(true)
            setLayouts(false)
            setListTypes(false)   
           }}
          className="mb-2 border-[red] flex justify-between flex-row-reverse 
          pr-[3em] border- pl-[1.7em]">
            <div className="">
            <Link
            to="/shoplist"
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] ' > 
            SINGLE TYPES
            </Link>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faCaretLeft} className=' hover:ml-[0.2em] hover:text-[#c74817] ' />
            </div>
          </div>
        {/* subsection hover to be hidden */}
  { singleTypes &&  <div className="bg-[white] mt-[2.5em] border- border-[black] py-[1.2em] pr-[1.7em] text-end 
        absolute w-[14em] z-[999] shadow-md right-[14em] top-[1em]  ">  
        {singleTypesLinks.map((shoPageLink,index)=>[
          <div className="mb-2">
            <Link
            key={index}
            to={shoPageLink.href}
            className='font-[500] text-[0.85em] text-[black] w-full hover:text-[#c74817] hover:text-[#c74817]  '
            >
            {shoPageLink.name}
            </Link>
          </div>
        ] )
        }
          </div>}
          </section> }
             {/* end  of portfolio hover div and sunsections */}
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
