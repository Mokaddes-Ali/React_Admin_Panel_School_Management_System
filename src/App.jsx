import React, { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Dashboard from './Pages/Dashboard';
import Students from './Pages/Students';
import Teachers from './Pages/Teachers';
import Classes from './Pages/Classes';
import Subjects from './Pages/Subjects';
import Schedule from './Pages/Schedule';
import Attendance from './Pages/Attendance';
import Exams from './Pages/Exams';
import Results from './Pages/Results';
import Fees from './Pages/Fees';
import Library from './Pages/Library';
import Transport from './Pages/Transport';
import Hostel from './Pages/Hostel';
import Notifications from './Pages/Notifications';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import Support from './Pages/Support';
import Security from './Pages/Security';
import Logout from './Pages/Logout';
import './App.css';
import { GlobalProvider } from './Components/GlobalContext';
import Layout from './Components/Layout';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Fragment>
      <GlobalProvider>
    <BrowserRouter>
        <div className="main-content  flex-grow p-4">
          <Layout>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
           <Routes>
              <Route path="/" exact component={Dashboard} />
              <Route path="/students" component={Students} />
              <Route path="/teachers" component={Teachers} />
              <Route path="/classes" component={Classes} />
              <Route path="/subjects" component={Subjects} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/attendance" component={Attendance} />
              <Route path="/exams" component={Exams} />
              <Route path="/results" component={Results} />
              <Route path="/fees" component={Fees} />
              {/* <Route path="/library" component={Library} /> */}
              <Route path="/transport" component={Transport} />
              <Route path="/hostel" component={Hostel} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} />
              <Route path="/support" component={Support} />
              <Route path="/security" component={Security} />
              <Route path="/logout" component={Logout} />
              </Routes>
          </motion.div>
          </Layout>
        </div>
      </BrowserRouter>
      </GlobalProvider>
      </Fragment>
  );
}

export default App;