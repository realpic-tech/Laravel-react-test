import React from 'react';

interface ButtonProps {
  onClick: () => void;
  iconSrc: string;
  iconAlt: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, iconSrc, iconAlt, className }) => (
  <button
    onClick={onClick}
    className={`bg-transparent border-none p-2 rounded focus:outline-none ${className}`}
  >
    <img src={iconSrc} alt={iconAlt} className="h-6 w-6" />
  </button>
);

export default Button;
