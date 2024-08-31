import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from '../atoms/IconType.js'; // Import IconType from the appropriate location

interface MenuItemProps {
  to: string;
  icon: IconType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, icon: Icon, label, isActive, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={`flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${
          isActive
            ? 'text-white bg-[#98E940] px-4 py-2'
            : 'text-gray-400 bg-[#101828] hover:bg-[#98E940] px-4 py-2'
        }`}
        onClick={onClick}
      >
        <Icon className="mr-2" />
        {!isActive && label}
      </NavLink>
    </li>
  );
};

export default MenuItem;
