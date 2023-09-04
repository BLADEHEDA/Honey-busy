import React from 'react'
import ReactPlayer from 'react-player'
import thumbnailUrl from "../assets/h1-img6-768x492.jpg"
const MissionBar = () => {
    const videoUrl = "https://vimeo.com/44384072";
    // const thumbnailUrl = 'https://example.com/thumbnail.jpg';
  return (
    <main className='px-8 py-7 ' > 
        <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="12em"
        light={thumbnailUrl} // Set the thumbnail image URL here
      />
    </main>
  )
}

export default MissionBar
