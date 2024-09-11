import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  const { isSidebarOpen, isDarkMode } = useContext(GlobalContext);

  return (
    <div className={`App -ml-24 ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content flex-grow p-4">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;