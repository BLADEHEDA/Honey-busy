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
    minHeight: '100vh', // Set the minimum height to cover the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <div style={heroStyle}>
      <h1>{heading}</h1>
    </div>
  );
};

export default HeroSection;
