import React from 'react';

const MenuTreeOrganism = ({ menus, onSelectMenu }) => {
    const renderTree = (menu) => {
        return (
            <li key={menu.id} className="ml-4 mt-2">
                <span 
                    className="cursor-pointer text-blue-600 hover:underline"
                    onClick={() => onSelectMenu(menu)}
                >
                    {menu.name}
                </span>
                {menu.children && (
                    <ul>
                        {menu.children.map((child) => renderTree(child))}
                    </ul>
                )}
            </li>
        );
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ul>
                {menus.map((menu) => renderTree(menu))}
            </ul>
        </div>
    );
};

export default MenuTreeOrganism;
