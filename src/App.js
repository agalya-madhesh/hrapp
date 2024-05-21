import React from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard"
import Sidebar from './Components/Sidebar';
import Employees from "./Components/Employees";
import Leave from "./Components/Leave";
import Payroll from "./Components/Payroll";
import { Routes, Route} from 'react-router-dom';
import Notifications from './Components/Notifications'
import Settings from './Components/Settings'
import Logout from './Components/Logout'
import Search from './Components/Search'


function AppContent() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard--content">
        <Routes>
        <Route path='/' element={<Dashboard />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/leave' element={<Leave />} />
          <Route path='/payroll' element={<Payroll />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/search' element={<Search />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppContent