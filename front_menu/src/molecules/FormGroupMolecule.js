import React from 'react';
import InputAtom from '../atoms/InputAtom';

const FormGroupMolecule = ({ menuID, depth, parentData, name, setName, setDepth }) => {
    return (
        <div>
            <InputAtom label="Menu ID" value={menuID} readOnly={true} />
            <InputAtom label="Depth" value={depth} onChange={(e) => setDepth(e.target.value)} />
            <InputAtom label="Parent Data" value={parentData} readOnly={true} />
            <InputAtom label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};

export default FormGroupMolecule;
