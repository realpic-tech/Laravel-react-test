import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Systems from './pages/Systems.js';
import SystemCode from './pages/SystemCode.js';
import Properties from './pages/Properties.js';
import Menus from './pages/Menus.js';
import APIList from './pages/APIList.js';
import UsersAndGroups from './pages/UsersAndGroups.js';
import Competition from './pages/Competition.js';
const App = () => {
    return (_jsx(Router, { children: _jsxs("div", { className: "flex h-screen", children: [_jsx(Sidebar, {}), _jsx("div", { className: "flex-1 p-6", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/systems", element: _jsx(Systems, {}) }), _jsx(Route, { path: "/system-code", element: _jsx(SystemCode, {}) }), _jsx(Route, { path: "/properties", element: _jsx(Properties, {}) }), _jsx(Route, { path: "/menus", element: _jsx(Menus, {}) }), _jsx(Route, { path: "/api-list", element: _jsx(APIList, {}) }), _jsx(Route, { path: "/users-groups", element: _jsx(UsersAndGroups, {}) }), _jsx(Route, { path: "/competition", element: _jsx(Competition, {}) })] }) })] }) }));
};
export default App;
