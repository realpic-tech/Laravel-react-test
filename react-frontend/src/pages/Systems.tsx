// src/pages/SystemsPage.tsx
import React from 'react';
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { FaFolder } from 'react-icons/fa';

const SystemsPage: React.FC = () => {
  return (
    <div className="p-6">
      <PageHeader menuName="Systems" />
      <PageContent icon={FaFolder} menuName="Systems" />
    </div>
  );
};

export default SystemsPage;
