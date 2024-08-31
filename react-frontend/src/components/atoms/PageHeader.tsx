// src/components/PageHeader.tsx
import React from 'react';
import { FaFolder } from 'react-icons/fa';

interface PageHeaderProps {
  menuName: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ menuName }) => {
  return (
    <div className="flex items-center mb-4">
      <FaFolder className="text-sm mr-2 text-gray-400" /> {/* Light gray color for the icon */}
      <span className="text-sm font-semibold text-gray-400">/ {menuName}</span> {/* Light gray color for the text */}
    </div>
  );
};

export default PageHeader;
