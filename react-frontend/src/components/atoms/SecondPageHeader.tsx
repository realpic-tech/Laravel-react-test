import React from 'react';
import { IconType } from '../atoms/IconType.js';

interface SecondPageHeaderProps {
  icon: IconType;
  menuName: string;
}

const SecondPageHeader: React.FC<SecondPageHeaderProps> = ({ icon: Icon, menuName }) => {
  return (
    <div className="flex items-center space-x-2 py-4">
      <div className="bg-[#253BFF] text-white p-2 rounded-full">
        <Icon className="text-white" />
      </div>
      <h1 className="text-2xl font-bold text-black">{menuName}</h1>
    </div>
  );
};

export default SecondPageHeader;
