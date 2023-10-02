import React from 'react';

interface ButtonProps {
  name: string;
  style: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ name, style }) => {
  return (
    <div>
      <button className="bg-[#c74817] text-[white]" style={style}>
        {name}
      </button>
    </div>
  );
};

export default Button;
