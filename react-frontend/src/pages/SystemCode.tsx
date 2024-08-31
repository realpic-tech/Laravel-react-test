// src/pages/SystemCodePage.tsx
import React from 'react';
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { FaCogs } from 'react-icons/fa';

const SystemCodePage: React.FC = () => {
  return (
    <div className="p-6">
      <PageHeader menuName="System Code" />
      <PageContent icon={FaCogs} menuName="System Code" />
    </div>
  );
};

export default SystemCodePage;
