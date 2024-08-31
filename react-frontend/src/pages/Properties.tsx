// src/pages/PropertiesPage.tsx
import React from 'react';
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { FaSlidersH } from 'react-icons/fa';

const PropertiesPage: React.FC = () => {
  return (
    <div className="p-6">
      <PageHeader menuName="Properties" />
      <PageContent icon={FaSlidersH} menuName="Properties" />
    </div>
  );
};

export default PropertiesPage;
