import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.js'
import Systems from './pages/Systems.js';
import SystemCode from './pages/SystemCode.js';
import Properties from './pages/Properties.js';
import Menus from './pages/Menus.js';
import APIList from './pages/APIList.js';
import UsersAndGroups from './pages/UsersAndGroups.js';
import Competition from './pages/Competition.js';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/systems" element={<Systems />} />
            <Route path="/system-code" element={<SystemCode />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/api-list" element={<APIList />} />
            <Route path="/users-groups" element={<UsersAndGroups />} />
            <Route path="/competition" element={<Competition />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
