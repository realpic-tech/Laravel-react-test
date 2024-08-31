import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { FaSlidersH } from 'react-icons/fa';
const PropertiesPage = () => {
    return (_jsxs("div", { className: "p-6", children: [_jsx(PageHeader, { menuName: "Properties" }), _jsx(PageContent, { icon: FaSlidersH, menuName: "Properties" })] }));
};
export default PropertiesPage;
