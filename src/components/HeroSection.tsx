import React, { FC } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  heading: string;
}

const HeroSection: FC<HeroSectionProps> = ({ backgroundImage, heading }) => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // minHeight: '40vh', // Set the minimum height to cover the viewport
    display: 'flex',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };
  return (
    <div className='border-[blue] border- h-[15em] md:h-[20em] lg:h-[22em]
    ' style={heroStyle}>
      <h1 className='font-[900] text-[280%] mt-[1em md:text-[3.5em]
      md:text-[3.5em] ' >{heading}</h1>
    </div>
  )
}

export default HeroSection



