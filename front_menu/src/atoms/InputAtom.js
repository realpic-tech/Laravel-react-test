import React from 'react';

const InputAtom = ({ label, value, onChange, readOnly = false }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default InputAtom;
