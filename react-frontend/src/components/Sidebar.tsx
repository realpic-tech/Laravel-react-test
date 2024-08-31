import React, { useState } from "react";
import {
  FaFolder,
  FaChevronLeft,
  FaCogs,
  FaSlidersH,
  FaList,
  FaExternalLinkAlt,
  FaRegFolder
} from "react-icons/fa";
import {
  PiSquaresFour
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`bg-[#101828] text-white h-full ${
        collapsed ? "w-16" : "w-"
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
            className={`h-6 w-6 ${collapsed ? "transform rotate-180" : ""}`} // Optional: Apply rotation if needed
          />
        </button>
      </div>
      <div className="mt-4">
        <div className="mb-4">
          <div className="rounded-lg bg-[#1D2938] mx-2 ">
            <ul className="space-y-1">
              {" "}
              {/* Space between menu items */}
              <li>
                <NavLink
                  to="/systems"
                  className={({ isActive }) =>
                    `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-[#98E940] px-4 py-2"
                        : "text-gray-400 backdrop-blur-xl hover:bg-[#98E940] px-4 py-2"
                    }`
                  }
                >
                  <FaFolder className="mr-2" /> {!collapsed && "Systems"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/system-code"
                  className={({ isActive }) =>
                    `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-[#98E940] px-4 py-2"
                        : "text-gray-400 hover:bg-[#98E940] px-4 py-2"
                    }`
                  }
                >
                  <PiSquaresFour className="mr-2" /> {!collapsed && "System Code"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/properties"
                  className={({ isActive }) =>
                    `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-[#98E940] px-4 py-2"
                        : "text-gray-400 hover:bg-[#98E940] px-4 py-2"
                    }`
                  }
                >
                  <PiSquaresFour className="mr-2" /> {!collapsed && "Properties"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menus"
                  className={({ isActive }) =>
                    `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-[#98E940] px-4 py-2"
                        : "text-gray-400 hover:bg-[#98E940] px-4 py-2"
                    }`
                  }
                >
                  <PiSquaresFour className="mr-2" /> {!collapsed && "Menus"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/api-list"
                  className={({ isActive }) =>
                    `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-[#98E940] px-4 py-2"
                        : "text-gray-400 hover:bg-[#98E940] px-4 py-2"
                    }`
                  }
                >
                  <PiSquaresFour className="mr-2" />{" "}
                  {!collapsed && "API List"}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <ul>
          <li>
            <NavLink
              to="/users-groups"
              className={({ isActive }) =>
                `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 mx-2 ${
                  isActive
                    ? "text-white bg-[#98E940] px-4 py-2"
                    : "text-gray-400 bg-[#101828] hover:bg-[#98E940] px-4 py-2"
                }`
              }
            >
              <FaRegFolder className="mr-2" /> {!collapsed && "Users & Groups"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competition"
              className={({ isActive }) =>
                `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 mx-2 ${
                  isActive
                    ? "text-white bg-[#98E940] px-4 py-2"
                    : "text-gray-400 bg-[#101828] hover:bg-[#98E940] px-4 py-2"
                }`
              }
            >
              <FaRegFolder className="mr-2" /> {!collapsed && "Competition"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
