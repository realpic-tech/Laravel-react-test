import React from 'react';

const ButtonAtom = ({ label, onClick, type = 'button' }) => {
    return (
        <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            type={type}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ButtonAtom;
