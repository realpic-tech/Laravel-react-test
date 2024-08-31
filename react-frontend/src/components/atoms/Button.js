import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ onClick, iconSrc, iconAlt, className }) => (_jsx("button", { onClick: onClick, className: `bg-transparent border-none p-2 rounded focus:outline-none ${className}`, children: _jsx("img", { src: iconSrc, alt: iconAlt, className: "h-6 w-6" }) }));
export default Button;
