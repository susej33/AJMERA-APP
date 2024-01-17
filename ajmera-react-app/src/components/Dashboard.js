import React from 'react';
import Home from './pages/Home';
import Sidebar from './Sidebar';

const Dashboard = () => {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="p-6">
        <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
