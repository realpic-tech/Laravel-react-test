import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FaFolder, FaRegFolder } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (_jsxs("div", { className: `bg-[#101828] text-white h-full ${collapsed ? "w-16" : "w-"} transition-width duration-300 rounded-lg shadow-lg mx-4 my-2`, children: [_jsxs("div", { className: "flex items-center justify-between p-2 border-b border-[#101828] mb-4", children: [!collapsed && (_jsx("img", { src: "/assets/gobbler.svg" // Replace with the path to your logo
                        , alt: "Logo", className: "h-5 w-auto" })), _jsx("button", { onClick: () => setCollapsed(!collapsed), className: "bg-transparent border-none p-2 rounded focus:outline-none", children: _jsx("img", { src: "/assets/icons/collapse.ico" // Use the same .ico icon for both states
                            , alt: "Collapse Icon", className: `h-6 w-6 ${collapsed ? "transform rotate-180" : ""}` }) })] }), _jsxs("div", { className: "mt-4", children: [_jsx("div", { className: "mb-4", children: _jsx("div", { className: "rounded-lg bg-[#1D2938] mx-2 ", children: _jsxs("ul", { className: "space-y-1", children: [" ", _jsx("li", { children: _jsxs(NavLink, { to: "/systems", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${isActive
                                                ? "text-white bg-[#98E940] px-4 py-2"
                                                : "text-gray-400 backdrop-blur-xl hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(FaFolder, { className: "mr-2" }), " ", !collapsed && "Systems"] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/system-code", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${isActive
                                                ? "text-white bg-[#98E940] px-4 py-2"
                                                : "text-gray-400 hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(PiSquaresFour, { className: "mr-2" }), " ", !collapsed && "System Code"] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/properties", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${isActive
                                                ? "text-white bg-[#98E940] px-4 py-2"
                                                : "text-gray-400 hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(PiSquaresFour, { className: "mr-2" }), " ", !collapsed && "Properties"] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/menus", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${isActive
                                                ? "text-white bg-[#98E940] px-4 py-2"
                                                : "text-gray-400 hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(PiSquaresFour, { className: "mr-2" }), " ", !collapsed && "Menus"] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/api-list", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${isActive
                                                ? "text-white bg-[#98E940] px-4 py-2"
                                                : "text-gray-400 hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(PiSquaresFour, { className: "mr-2" }), " ", !collapsed && "API List"] }) })] }) }) }), _jsxs("ul", { children: [_jsx("li", { children: _jsxs(NavLink, { to: "/users-groups", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 mx-2 ${isActive
                                        ? "text-white bg-[#98E940] px-4 py-2"
                                        : "text-gray-400 bg-[#101828] hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(FaRegFolder, { className: "mr-2" }), " ", !collapsed && "Users & Groups"] }) }), _jsx("li", { children: _jsxs(NavLink, { to: "/competition", className: ({ isActive }) => `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 mx-2 ${isActive
                                        ? "text-white bg-[#98E940] px-4 py-2"
                                        : "text-gray-400 bg-[#101828] hover:bg-[#98E940] px-4 py-2"}`, children: [_jsx(FaRegFolder, { className: "mr-2" }), " ", !collapsed && "Competition"] }) })] })] })] }));
};
export default Sidebar;
