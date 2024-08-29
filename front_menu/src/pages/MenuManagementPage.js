import React from 'react';
import MenuManagementTemplate from '../templates/MenuManagementTemplate';

// Mock functions for fetching and saving data
const getMenus = async () => {
    // Simulate fetching menus from the backend
    return [
        {
            id: '1',
            name: 'System Management',
            depth: 1,
            children: [
                {
                    id: '2',
                    name: 'Systems',
                    depth: 2,
                    children: [
                        {
                            id: '3',
                            name: 'System Code',
                            depth: 3,
                            children: [
                                {
                                    id: '4',
                                    name: 'Code Registration',
                                    depth: 4,
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
};

const getMenuById = async (id) => {
    // Simulate fetching a specific menu item from the backend by ID
    const menus = await getMenus();
    const findMenu = (menus, id) => {
        for (let menu of menus) {
            if (menu.id === id) return menu;
            if (menu.children) {
                const found = findMenu(menu.children, id);
                if (found) return found;
            }
        }
    };
    return findMenu(menus, id);
};

const saveMenu = async (menu) => {
    // Simulate saving a menu item to the backend
    console.log('Saving menu', menu);
};

const MenuManagementPage = () => {
    return (
        <MenuManagementTemplate
            getMenus={getMenus}
            getMenuById={getMenuById}
            saveMenu={saveMenu}
        />
    );
};

export default MenuManagementPage;
