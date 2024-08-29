import React, { useState, useEffect } from 'react';
import FormGroupMolecule from '../molecules/FormGroupMolecule';
import MenuTreeOrganism from '../organisms/MenuTreeOrganism';
import ButtonAtom from '../atoms/ButtonAtom';

const MenuManagementTemplate = ({ getMenus, getMenuById, saveMenu }) => {
    const [menus, setMenus] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState({});
    const [name, setName] = useState('');
    const [depth, setDepth] = useState('');

    useEffect(() => {
        async function fetchMenus() {
            const response = await getMenus();
            setMenus(response);
        }
        fetchMenus();
    }, []);

    useEffect(() => {
        if (selectedMenu.id) {
            setName(selectedMenu.name);
            setDepth(selectedMenu.depth);
        }
    }, [selectedMenu]);

    const handleSelectMenu = async (menu) => {
        const response = await getMenuById(menu.id);
        setSelectedMenu(response);
    };

    const handleSaveMenu = async () => {
        const updatedMenu = {
            ...selectedMenu,
            name,
            depth,
        };
        await saveMenu(updatedMenu);
        setMenus(menus.map(menu => (menu.id === updatedMenu.id ? updatedMenu : menu)));
    };

    return (
        <div className="flex">
            <div className="w-1/3 p-4">
                <MenuTreeOrganism menus={menus} onSelectMenu={handleSelectMenu} />
            </div>
            <div className="w-2/3 p-4">
                <FormGroupMolecule 
                    menuID={selectedMenu.id} 
                    depth={depth} 
                    parentData={selectedMenu.parent} 
                    name={name} 
                    setName={setName} 
                    setDepth={setDepth} 
                />
                <ButtonAtom label="Save" onClick={handleSaveMenu} />
            </div>
        </div>
    );
};

export default MenuManagementTemplate;
