// import React from 'react';
// import { FaBars, FaBell, FaUserCircle, FaMoon, FaSun, FaGlobe, FaFlag } from 'react-icons/fa';

// const Topbar = ({ toggleSidebar, toggleDarkMode }) => {
//   return (
//     <div className="topbar w-screen -mt-[680px] flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
//       <button onClick={toggleSidebar} className="text-xl"><FaBars /></button>
//       <div className="topbar-right flex items-center space-x-4">
//         <button onClick={toggleDarkMode} className="text-xl">
//           <FaMoon className="dark:hidden" />
//           <FaSun className="hidden dark:block" />
//         </button>
//         <button className="text-xl"><FaBell /></button>
//         <button className="text-xl"><FaUserCircle /></button>
//         <select className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
//           <option value="en">English</option>
//           <option value="es">Spanish</option>
//           {/* Add more languages here */}
//         </select>
//         <select className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
//           <option value="us">USA</option>
//           <option value="in">India</option>
//           {/* Add more countries here */}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import React, { useContext } from 'react';
import { FaBars, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { GlobalContext } from './GlobalContext';

const Topbar = () => {
  const { toggleSidebar, toggleDarkMode, isDarkMode } = useContext(GlobalContext);

  return (
    <div className="topbar w-screen flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
      <button onClick={toggleSidebar} className="text-gray-800 dark:text-white">
        <FaBars />
      </button>
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="text-gray-800 dark:text-white">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="text-gray-800 dark:text-white">
          <FaBell />
        </button>
        <button className="text-gray-800 dark:text-white">
          <FaUserCircle />
        </button>
        <select className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          {/* Add more languages here */}
        </select>
        <select className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
          <option value="us">USA</option>
          <option value="in">India</option>
          {/* Add more countries here */}
        </select>
      </div>
    </div>
  );
};

export default Topbar;