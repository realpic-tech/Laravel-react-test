import React, { useState, useEffect } from "react";
import PageHeader from "../components/atoms/PageHeader.js";
import SecondPageHeader from "../components/atoms/SecondPageHeader.js";
import { PiSquaresFour } from "react-icons/pi";

// Define the TypeScript interface for menu items
interface MenuItem {
  id: number;
  name: string;
  depth?: number;
  parentId?: number | null;
  subMenus?: MenuItem[];
}

const MenusPage: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    menuId: "",
    depth: "",
    parentData: "",
    name: "",
  });
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [activeButton, setActiveButton] = useState<
    "expand" | "collapse" | null
  >(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/assets/data/menuData.json"); // Adjust the path if needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    } else {
      setFormData({
        menuId: "",
        depth: "",
        parentData: "",
        name: "",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved data:", formData);
  };

  const toggleExpand = (id: number) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const expandAll = () => {
    const allIds: number[] = [];
    const collectIds = (items: MenuItem[]) => {
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

  const handleMenuClick = (item: MenuItem) => {
    setSelectedMenu(item.id);
    setFormData({
      menuId: item.id.toString(),
      depth: item.depth?.toString() || "",
      parentData: item.parentId?.toString() || "",
      name: item.name,
    });
  };

  const renderMenu = (items: MenuItem[], level: number = 0) => {
    return (
      <ul className={`list-none`} style={{ paddingLeft: `${level * 20}px` }}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${
              item.subMenus ? "menu-item-has-children" : "menu-item-children"
            } ${expandedItems.includes(item.id) ? "menu-item-expanded" : ""}`}
            onClick={() => handleMenuClick(item)}
          >
            <div className="py-1 flex items-center cursor-pointer">
              {item.subMenus && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(item.id);
                  }}
                  className="cursor-pointer mr-2"
                >
                  {expandedItems.includes(item.id) ? "V" : ">"}
                </span>
              )}
              {item.name}
            </div>
            {item.subMenus &&
              expandedItems.includes(item.id) &&
              renderMenu(item.subMenus, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  const menuOptions = menuData.map((menu) => (
    <option key={menu.id} value={menu.id}>
      {menu.name}
    </option>
  ));

  const selectedMenuData =
    menuData.find((menu) => menu.id === selectedMenu)?.subMenus || [];

  return (
    <div className="p-6 flex">
      {/* Left column: Menu and controls */}
      <div
        className="flex-1 flex flex-col space-y-4 mr-4"
        style={{ flexBasis: "50%" }}
      >
        <PageHeader menuName="Menus" />
        <SecondPageHeader icon={PiSquaresFour} menuName="Menus" />

        {/* Controls section */}
        <div className="mt-4 mr-12">
          <label className="block text-sm font-light text-gray-600">Menu</label>
          <select
            className="block w-full my-1 mr-4 p-2 border border-gray-300 rounded"
            onChange={handleSelect}
            value={selectedMenu || ""}
          >
            <option value="">Select Menu</option>
            {menuOptions}
          </select>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={expandAll}
              className={`px-4 py-2 rounded-full border ${
                activeButton === "expand"
                  ? "bg-black text-white"
                  : "border-black bg-gray-300 text-black"
              }`}
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className={`px-4 py-2 rounded-full border ${
                activeButton === "collapse"
                  ? "bg-black text-white"
                  : "border-black bg-gray-300 text-black"
              }`}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Menu rendering section */}
        <div className="">
          {selectedMenuData.length > 0
            ? renderMenu(selectedMenuData)
            : "Please select a menu"}
        </div>
      </div>

      {/* Right column: Menu Details */}
      <div className="flex-1 ml-4 mt-44" style={{ flexBasis: "50%" }}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-sm font-light text-gray-600">Menu ID</label>
            <input
              type="text"
              name="menuId"
              value={formData.menuId}
              onChange={handleInputChange}
              placeholder="Menu ID"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="text-sm font-light text-gray-600">Depth</label>
            <input
              type="text"
              name="depth"
              value={formData.depth}
              onChange={handleInputChange}
              placeholder="Depth"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="text-sm font-light text-gray-600">
              Parent Data
            </label>
            <input
              type="text"
              name="parentData"
              value={formData.parentData}
              onChange={handleInputChange}
              placeholder="Parent Data"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="text-sm font-light text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="border border-gray-300 p-2 rounded-lg mb-4 w-full"
            />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-full bg-blue-500 text-white w-full mt-4"
              >
                Save
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenusPage;
