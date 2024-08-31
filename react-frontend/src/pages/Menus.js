import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import PageHeader from "../components/atoms/PageHeader.js";
import SecondPageHeader from "../components/atoms/SecondPageHeader.js";
import { PiSquaresFour } from "react-icons/pi";
const MenusPage = () => {
    const [menuData, setMenuData] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [formData, setFormData] = useState({
        menuId: "",
        depth: "",
        parentData: "",
        name: "",
    });
    const [expandedItems, setExpandedItems] = useState([]);
    const [activeButton, setActiveButton] = useState(null);
    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await fetch("/assets/data/menuData.json"); // Adjust the path if needed
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setMenuData(data);
            }
            catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };
        fetchMenuData();
    }, []);
    const handleSelect = (e) => {
        const id = parseInt(e.target.value);
        setSelectedMenu(id);
        const selected = menuData.find((menu) => menu.id === id);
        if (selected) {
            setFormData({
                menuId: selected.id.toString(),
                depth: selected.depth?.toString() || "",
                parentData: selected.parentId?.toString() || "",
                name: selected.name,
            });
        }
        else {
            setFormData({
                menuId: "",
                depth: "",
                parentData: "",
                name: "",
            });
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSave = () => {
        // Handle save logic here
        console.log("Saved data:", formData);
    };
    const toggleExpand = (id) => {
        if (expandedItems.includes(id)) {
            setExpandedItems(expandedItems.filter((item) => item !== id));
        }
        else {
            setExpandedItems([...expandedItems, id]);
        }
    };
    const expandAll = () => {
        const allIds = [];
        const collectIds = (items) => {
            items.forEach((item) => {
                allIds.push(item.id);
                if (item.subMenus) {
                    collectIds(item.subMenus);
                }
            });
        };
        collectIds(menuData);
        setExpandedItems(allIds);
        setActiveButton("expand");
    };
    const collapseAll = () => {
        setExpandedItems([]);
        setActiveButton("collapse");
    };
    const handleMenuClick = (item) => {
        setSelectedMenu(item.id);
        setFormData({
            menuId: item.id.toString(),
            depth: item.depth?.toString() || "",
            parentData: item.parentId?.toString() || "",
            name: item.name,
        });
    };
    const renderMenu = (items, level = 0) => {
        return (_jsx("ul", { className: `list-none`, style: { paddingLeft: `${level * 20}px` }, children: items.map((item) => (_jsxs("li", { className: `menu-item ${item.subMenus ? "menu-item-has-children" : "menu-item-children"} ${expandedItems.includes(item.id) ? "menu-item-expanded" : ""}`, onClick: () => handleMenuClick(item), children: [_jsxs("div", { className: "py-1 flex items-center cursor-pointer", children: [item.subMenus && (_jsx("span", { onClick: (e) => {
                                    e.stopPropagation();
                                    toggleExpand(item.id);
                                }, className: "cursor-pointer mr-2", children: expandedItems.includes(item.id) ? "V" : ">" })), item.name] }), item.subMenus &&
                        expandedItems.includes(item.id) &&
                        renderMenu(item.subMenus, level + 1)] }, item.id))) }));
    };
    const menuOptions = menuData.map((menu) => (_jsx("option", { value: menu.id, children: menu.name }, menu.id)));
    const selectedMenuData = menuData.find((menu) => menu.id === selectedMenu)?.subMenus || [];
    return (_jsxs("div", { className: "p-6 flex", children: [_jsxs("div", { className: "flex-1 flex flex-col space-y-4 mr-4", style: { flexBasis: "50%" }, children: [_jsx(PageHeader, { menuName: "Menus" }), _jsx(SecondPageHeader, { icon: PiSquaresFour, menuName: "Menus" }), _jsxs("div", { className: "mt-4 mr-12", children: [_jsx("label", { className: "block text-sm font-light text-gray-600", children: "Menu" }), _jsxs("select", { className: "block w-full my-1 mr-4 p-2 border border-gray-300 rounded", onChange: handleSelect, value: selectedMenu || "", children: [_jsx("option", { value: "", children: "Select Menu" }), menuOptions] }), _jsxs("div", { className: "flex space-x-4 mt-4", children: [_jsx("button", { onClick: expandAll, className: `px-4 py-2 rounded-full border ${activeButton === "expand"
                                            ? "bg-black text-white"
                                            : "border-black bg-gray-300 text-black"}`, children: "Expand All" }), _jsx("button", { onClick: collapseAll, className: `px-4 py-2 rounded-full border ${activeButton === "collapse"
                                            ? "bg-black text-white"
                                            : "border-black bg-gray-300 text-black"}`, children: "Collapse All" })] })] }), _jsx("div", { className: "", children: selectedMenuData.length > 0
                            ? renderMenu(selectedMenuData)
                            : "Please select a menu" })] }), _jsxs("div", { className: "flex-1 ml-4 mt-44", style: { flexBasis: "50%" }, children: [_jsx("div", { className: "grid grid-cols-2 gap-4", children: _jsxs("div", { className: "col-span-2", children: [_jsx("label", { className: "text-sm font-light text-gray-600", children: "Menu ID" }), _jsx("input", { type: "text", name: "menuId", value: formData.menuId, onChange: handleInputChange, placeholder: "Menu ID", className: "border border-gray-300 p-2 rounded-lg mb-4 w-full" })] }) }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "text-sm font-light text-gray-600", children: "Depth" }), _jsx("input", { type: "text", name: "depth", value: formData.depth, onChange: handleInputChange, placeholder: "Depth", className: "border border-gray-300 p-2 rounded-lg mb-4 w-full" })] }) }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "text-sm font-light text-gray-600", children: "Parent Data" }), _jsx("input", { type: "text", name: "parentData", value: formData.parentData, onChange: handleInputChange, placeholder: "Parent Data", className: "border border-gray-300 p-2 rounded-lg mb-4 w-full" })] }) }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: _jsxs("div", { className: "col-span-1", children: [_jsx("label", { className: "text-sm font-light text-gray-600", children: "Name" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleInputChange, placeholder: "Name", className: "border border-gray-300 p-2 rounded-lg mb-4 w-full" })] }) }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: _jsx("div", { className: "col-span-1", children: _jsx("button", { onClick: handleSave, className: "px-4 py-2 rounded-full bg-blue-500 text-white w-full mt-4", children: "Save" }) }) })] })] }));
};
export default MenusPage;
