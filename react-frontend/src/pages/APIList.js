import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { PiSquaresFour } from 'react-icons/pi';
const ApiListPage = () => {
    return (_jsxs("div", { className: "p-6", children: [_jsx(PageHeader, { menuName: "API List" }), _jsx(PageContent, { icon: PiSquaresFour, menuName: "API List" })] }));
};
export default ApiListPage;
