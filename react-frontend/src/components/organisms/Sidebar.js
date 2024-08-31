import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { FaFolder, FaCogs, FaSlidersH, FaList, FaUsers, FaTrophy } from 'react-icons/fa';
import { PiSquaresFour } from 'react-icons/pi';
import MenuItem from '../molecules/MenuItem.js'; // Import MenuItem component
const Sidebar = () => {
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
    return (_jsxs("div", { className: `bg-[#101828] text-white h-full ${collapsed ? 'w-16' : 'w-48'} transition-width duration-300 rounded-lg shadow-lg mx-4 my-2`, children: [_jsxs("div", { className: "flex items-center justify-between p-2 border-b border-[#101828] mb-4", children: [!collapsed && (_jsx("img", { src: "/assets/gobbler.svg" // Replace with the path to your logo
                        , alt: "Logo", className: "h-5 w-auto" })), _jsx("button", { onClick: () => setCollapsed(!collapsed), className: "bg-transparent border-none p-2 rounded focus:outline-none", children: _jsx("img", { src: "/assets/icons/collapse.ico" // Use the same .ico icon for both states
                            , alt: "Collapse Icon", className: `h-6 w-6 ${collapsed ? 'transform rotate-180' : ''}` }) })] }), _jsxs("div", { className: "mt-4", children: [_jsx("div", { className: "mb-4", children: _jsx("div", { className: "rounded-lg bg-[#1D2938] mx-2", children: _jsx("ul", { className: "space-y-1", children: menuItems.slice(0, 5).map(item => (_jsx(MenuItem, { to: item.to, icon: item.icon, label: item.label, isActive: false, onClick: () => { } }, item.to))) }) }) }), _jsx("ul", { children: menuItems.slice(5).map(item => (_jsx(MenuItem, { to: item.to, icon: item.icon, label: item.label, isActive: false, onClick: () => { } }, item.to))) })] })] }));
};
export default Sidebar;
