import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaFolder } from 'react-icons/fa';
const PageHeader = ({ menuName }) => {
    return (_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(FaFolder, { className: "text-sm mr-2 text-gray-400" }), " ", _jsxs("span", { className: "text-sm font-semibold text-gray-400", children: ["/ ", menuName] }), " "] }));
};
export default PageHeader;
