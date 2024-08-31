import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SecondPageHeader = ({ icon: Icon, menuName }) => {
    return (_jsxs("div", { className: "flex items-center space-x-2 py-4", children: [_jsx("div", { className: "bg-[#253BFF] text-white p-2 rounded-full", children: _jsx(Icon, { className: "text-white" }) }), _jsx("h1", { className: "text-2xl font-bold text-black", children: menuName })] }));
};
export default SecondPageHeader;
