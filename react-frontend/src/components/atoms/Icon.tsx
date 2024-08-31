// Icon.tsx
import React from 'react';
import { IconType } from './IconType.js';  // Adjust the path according to your file structure

interface IconProps {
  Icon: IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ Icon, className }) => {
  return <Icon className={className} />;
};

export default Icon;
