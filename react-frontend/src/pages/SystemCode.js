import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { FaCogs } from 'react-icons/fa';
const SystemCodePage = () => {
    return (_jsxs("div", { className: "p-6", children: [_jsx(PageHeader, { menuName: "System Code" }), _jsx(PageContent, { icon: FaCogs, menuName: "System Code" })] }));
};
export default SystemCodePage;
