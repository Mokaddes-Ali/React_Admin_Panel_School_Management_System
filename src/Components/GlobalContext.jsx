import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, toggleSidebar, isDarkMode, toggleDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};