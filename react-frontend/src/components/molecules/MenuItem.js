import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
const MenuItem = ({ to, icon: Icon, label, isActive, onClick }) => {
    return (_jsx("li", { children: _jsxs(NavLink, { to: to, className: `flex items-center p-4 text-xs rounded-lg transition-colors duration-200 ${isActive
                ? 'text-white bg-[#98E940] px-4 py-2'
                : 'text-gray-400 bg-[#101828] hover:bg-[#98E940] px-4 py-2'}`, onClick: onClick, children: [_jsx(Icon, { className: "mr-2" }), !isActive && label] }) }));
};
export default MenuItem;
