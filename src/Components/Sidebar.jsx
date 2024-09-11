// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaHome,FaBus, FaBed,FaUserCircle, FaUser, FaChartBar, FaSchool, FaBook, FaCalendar, FaCog, FaEnvelope, FaFileAlt, FaGraduationCap, FaLaptop, FaMoneyBill, FaPhone, FaQuestionCircle, FaShieldAlt, FaSignOutAlt, FaTasks, FaUserFriends, FaUsers, FaWrench, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const Sidebar = ({ isOpen }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <div className={`sidebar ${isOpen ? 'w-64' : 'w-16'}  bg-gray-800 text-white h-screen transition-width duration-300`}>
//       <ul className="space-y-2 p-4">
//         <li>
//           <NavLink to="/" exact activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaHome className="mr-2" /> Home
//           </NavLink>
//         </li>
//         <li>
//           <button onClick={toggleDropdown} className="flex items-center p-2 rounded hover:bg-gray-700 w-full">
//             <FaUser className="mr-2" /> Users {dropdownOpen ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
//           </button>
//           {dropdownOpen && (
//             <ul className="pl-4 space-y-2">
//               <li>
//                 <NavLink to="/students" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//                   <FaUser className="mr-2" /> Students
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/teachers" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//                   <FaUserFriends className="mr-2" /> Teachers
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <NavLink to="/classes" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaSchool className="mr-2" /> Classes
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/subjects" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaBook className="mr-2" /> Subjects
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/schedule" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaCalendar className="mr-2" /> Schedule
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/attendance" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaTasks className="mr-2" /> Attendance
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/exams" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaGraduationCap className="mr-2" /> Exams
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/results" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaFileAlt className="mr-2" /> Results
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/fees" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaMoneyBill className="mr-2" /> Fees
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/library" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaBook className="mr-2" /> Library
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/transport" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaBus className="mr-2" /> Transport
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/hostel" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaBed className="mr-2" /> Hostel
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/notifications" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaEnvelope className="mr-2" /> Notifications
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/settings" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaCog className="mr-2" /> Settings
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/profile" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaUserCircle className="mr-2" /> Profile
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/support" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaQuestionCircle className="mr-2" /> Support
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/security" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaShieldAlt className="mr-2" /> Security
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/logout" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
//             <FaSignOutAlt className="mr-2" /> Logout
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import { FaHome, FaUser, FaUserFriends, FaSchool, FaBook, FaCalendar, FaTasks, FaGraduationCap, FaFileAlt, FaMoneyBill, FaBus, FaBed, FaEnvelope, FaCog, FaUserCircle, FaQuestionCircle, FaShieldAlt, FaSignOutAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = () => {
  const { isSidebarOpen } = useContext(GlobalContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className={`sidebar ${isSidebarOpen ? 'w-64' : 'w-16'} bg-gray-800 text-white h-screen transition-width duration-300`}>
      <ul className="space-y-2 p-4">
        <li>
          <NavLink to="/" exact activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaHome className="mr-2" /> Home
          </NavLink>
        </li>
        <li>
          <button onClick={toggleDropdown} className="flex items-center p-2 rounded hover:bg-gray-700 w-full text-left">
            <FaUser className="mr-2" /> Users {dropdownOpen ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
          </button>
          {dropdownOpen && (
            <ul className="pl-8 space-y-2">
              <li>
                <NavLink to="/students" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
                  <FaUser className="mr-2" /> Students
                </NavLink>
              </li>
              <li>
                <NavLink to="/teachers" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
                  <FaUserFriends className="mr-2" /> Teachers
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/classes" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaSchool className="mr-2" /> Classes
          </NavLink>
        </li>
        <li>
          <NavLink to="/subjects" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaBook className="mr-2" /> Subjects
          </NavLink>
        </li>
        <li>
          <NavLink to="/schedule" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaCalendar className="mr-2" /> Schedule
          </NavLink>
        </li>
        <li>
          <NavLink to="/attendance" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaTasks className="mr-2" /> Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/exams" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaGraduationCap className="mr-2" /> Exams
          </NavLink>
        </li>
        <li>
          <NavLink to="/results" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaFileAlt className="mr-2" /> Results
          </NavLink>
        </li>
        <li>
          <NavLink to="/fees" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaMoneyBill className="mr-2" /> Fees
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaBook className="mr-2" /> Library
          </NavLink>
        </li>
        <li>
          <NavLink to="/transport" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaBus className="mr-2" /> Transport
          </NavLink>
        </li>
        <li>
          <NavLink to="/hostel" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaBed className="mr-2" /> Hostel
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaEnvelope className="mr-2" /> Notifications
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaCog className="mr-2" /> Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaUserCircle className="mr-2" /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaQuestionCircle className="mr-2" /> Support
          </NavLink>
        </li>
        <li>
          <NavLink to="/security" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaShieldAlt className="mr-2" /> Security
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="bg-gray-700" className="flex items-center p-2 rounded hover:bg-gray-700">
            <FaSignOutAlt className="mr-2" /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;