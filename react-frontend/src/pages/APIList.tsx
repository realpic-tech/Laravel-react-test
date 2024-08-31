// src/pages/ApiListPage.tsx
import React from 'react';
import PageHeader from '../components/atoms/PageHeader.js';
import PageContent from '../components/atoms/SecondPageHeader.js';
import { PiSquaresFour } from 'react-icons/pi';

const ApiListPage: React.FC = () => {
  return (
    <div className="p-6">
      <PageHeader menuName="API List" />
      <PageContent icon={PiSquaresFour} menuName="API List" />
    </div>
  );
};

export default ApiListPage;
