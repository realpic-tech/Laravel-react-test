import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { FaFolder } from 'react-icons/fa';
const SystemsPage = () => {
    return (_jsxs("div", { className: "p-6", children: [_jsx(PageHeader, { menuName: "Systems" }), _jsx(PageContent, { icon: FaFolder, menuName: "Systems" })] }));
};
export default SystemsPage;
