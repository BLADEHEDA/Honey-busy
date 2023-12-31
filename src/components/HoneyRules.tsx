// import React from 'react'
import bee1 from "../assets/h2-img-3.jpg"     
import bee2 from "../assets/h2-img-1.jpg" 
import bee3 from "../assets/h2-img-2.jpg" 
const HoneyRules = () => {
  return (
    <main className=" " >
        {/* mobile */}
        <section className=" px-[2em] py-[6em] md:hidden  ">
        <article>
            <div className="">
                <h1 className="text-[black] font-[500] text-[2.1em] ">
                    WHAT ARE <span className="text-[#D3A863]">HONEYBEES</span> </h1>  
                <h2 className="text-[black] font-[500] text-[1.4em] mt-2 ">15 BEEKEEPING RULES</h2>
            </div>
            <div className="">
                <img src={bee1} alt="h2-img-3.jpg" className=" my-[3em] " />
            </div>
            <div className=" py-[2em] text-[#4B3B4B] text-[1.1em] ">
            <p className=" pb-[1.4em]  ">Honeybees are essential pollinators, vital for agriculture and our ecosystem. 
               <span className="text-[black] font-[500] ">They collect nectar, make honey</span> They collect nectar, make honey, and  live in intricate hives with a 
                complex social structure.</p>

            <p>Their decline due to threats like pesticides and habitat
                loss poses environmental and food supply concerns.
                <span className="text-[black] font-[500] ">Protecting these 
                insects</span>  is crucial for our planet's well-being.</p> 
            </div>
            <div className="my-[1.5em]">
                <img src={bee2} alt="h2-img-3.jpg" className="  " />
                <p className="text-[13px] pt-1 ">"Bright as a sunflower."</p>
            </div>
            <div className="my-[1.5em]">
                <img src={bee3} alt="h2-img-3.jpg" className="  " />
                <p className="text-[13px] pt-1 ">"Garden sweet garden."</p>
            </div>
            <p className="pb-[2em text-[#4B3B4B] text-[1.1em]">
            Protecting these remarkable insects is essential for our planet's well-being.
             Their cooperation and communication within the colony are remarkable, 
             benefiting agriculture by <span className="text-[black] font-[500] ">fertilizing crops.</span>
               However, their decline due to <span className="text-[black] font-[500] ">
               various threats poses a significant concern for our environment</span>
                various threats poses a significant concern for our environment and 
              food supply. It's crucial to safeguard these remarkable 
            creatures for the sake of our planet and the global food supply.
                </p>
        </article>
        <article></article>
        </section>
        <section className=" hidden md:flex px-[2.5em] lg:px-[5.5em] pt-[5em] pb-[7em] ">
                <article className="flex-[50%] lg:flex-[40%] ">
                <div className="">
                <h1 className="text-[black] font-[400] lg:font-[600] text-[1.9em] ">
                    WHAT ARE <span className="text-[#D3A863]">HONEYBEES</span>
                 </h1>  
                <h2 className="text-[black] font-[500] lg:font-[600] text-[1.4em] mt-2 ">
                    15 BEEKEEPING RULES</h2>
                 </div>
                 <div className="">
                <img src={bee1} alt="h2-img-3.jpg" className=" my-[3em] " />
                 </div>
                </article>

                <article className="flex-[50%] lg:flex-[60%] ">
                <div className=" pb-[1.5em] text-[#4B3B4B] text-[1.1em] ">
                <p className=" pb-[1.4em]  ">Honeybees are essential pollinators, vital for agriculture and our ecosystem. 
                <span className="text-[black] font-[500] ">They collect nectar, make honey</span> They collect nectar, make honey, and  live in intricate hives with a 
                    complex social structure.
                </p>

                <p>Their decline due to threats like pesticides and habitat
                    loss poses environmental and food supply concerns.
                    <span className="text-[black] font-[500] ">Protecting these 
                    insects</span>  is crucial for our planet's well-being.</p> 
                </div>
                <div className="flex">
                <div className="my-[1.5em] flex-[50%] mr-2 ">
                <img src={bee2} alt="h2-img-3.jpg" className="  " />
                <p className="text-[13px] pt-1 ">"Bright as a sunflower."</p>
                </div>
                <div className="my-[1.5em] flex-[50%] ml-2 ">
                    <img src={bee3} alt="h2-img-3.jpg" className="  " />
                    <p className="text-[13px] pt-1 ">"Garden sweet garden."</p>
                </div>
                </div>
                <p className="pb-[2em text-[#4B3B4B] text-[1.1em]">
            Protecting these remarkable insects is essential for our planet's well-being.
             Their cooperation and communication within the colony are remarkable, 
             benefiting agriculture by <span className="text-[black] font-[500] ">fertilizing crops.</span>
               However, their decline due to <span className="text-[black] font-[500] ">
               various threats poses a significant concern for our environment</span>
                various threats poses a significant concern for our environment and 
              food supply. It's crucial to safeguard these remarkable 
            creatures for the sake of our planet and the global food supply.
                </p>
                </article>
        </section>
    
    </main>
  )
}

export default HoneyRules
