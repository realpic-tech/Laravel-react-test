import React, { useState } from 'react';
import { FaFolder, FaCogs, FaSlidersH, FaList, FaExternalLinkAlt, FaUsers, FaTrophy, FaRegFolder } from 'react-icons/fa';
import { PiSquaresFour } from 'react-icons/pi';
import MenuItem from '../molecules/MenuItem.js'; // Import MenuItem component

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { to: '/systems', icon: FaFolder, label: 'Systems' },
    { to: '/system-code', icon: FaCogs, label: 'System Code' },
    { to: '/properties', icon: FaSlidersH, label: 'Properties' },
    { to: '/menus', icon: FaList, label: 'Menus' },
    { to: '/api-list', icon: PiSquaresFour, label: 'API List' },
    { to: '/users-groups', icon: FaUsers, label: 'Users & Groups' },
    { to: '/competition', icon: FaTrophy, label: 'Competition' },
  ];

  return (
    <div
      className={`bg-[#101828] text-white h-full ${
        collapsed ? 'w-16' : 'w-48'
      } transition-width duration-300 rounded-lg shadow-lg mx-4 my-2`}
    >
      <div className="flex items-center justify-between p-2 border-b border-[#101828] mb-4">
        {!collapsed && (
          <img
            src="/assets/gobbler.svg" // Replace with the path to your logo
            alt="Logo"
            className="h-5 w-auto"
          />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-transparent border-none p-2 rounded focus:outline-none"
        >
          <img
            src="/assets/icons/collapse.ico" // Use the same .ico icon for both states
            alt="Collapse Icon"
            className={`h-6 w-6 ${collapsed ? 'transform rotate-180' : ''}`} // Optional: Apply rotation if needed
          />
        </button>
      </div>
      <div className="mt-4">
        <div className="mb-4">
          <div className="rounded-lg bg-[#1D2938] mx-2">
            <ul className="space-y-1">
              {menuItems.slice(0, 5).map(item => (
                <MenuItem
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  isActive={false} // Update based on actual active state
                  onClick={() => {}}
                />
              ))}
            </ul>
          </div>
        </div>
        <ul>
          {menuItems.slice(5).map(item => (
            <MenuItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isActive={false} // Update based on actual active state
              onClick={() => {}}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
