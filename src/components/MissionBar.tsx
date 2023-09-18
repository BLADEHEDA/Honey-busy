import React from 'react'
import ReactPlayer from 'react-player'
import thumbnailUrl from "../assets/h1-img6-768x492.jpg"
const MissionBar = () => {
    const videoUrl = "https://vimeo.com/44384072";
  return (
    <main className='px-8 py-7 ' > 
   <div className="block md:hidden ">
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="12em"
        light={thumbnailUrl} // Set the thumbnail image URL here
       />
   </div>
   <div className="hidden md:block lg:hidden ">
   <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="22em"
        light={thumbnailUrl} // Set the thumbnail image URL here
      />
   </div>
   <div className="hidden lg:block ">
   <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="28em"
        light={thumbnailUrl} // Set the thumbnail image URL here
      />
   </div>
    </main>
  )
}

export default MissionBar
