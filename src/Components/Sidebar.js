import React from "react";
import { Link } from 'react-router-dom';
import { BiHome, BiTask, BiSolidReport, BiStats} from "react-icons/bi";
import '../Styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <BiHome className="logo-icon" />
        <h2>Hr App</h2>
      </div>
      <div className="menu--list">
        <Link to="/" className="item active">
          <BiHome className="icon" />
          Dashboard
        </Link>
        <Link to="/leave" className="item">
          <BiTask className="icon" />
          Leave
        </Link>
        <Link to="/employees" className="item">
          <BiSolidReport className="icon" />
          Employees
        </Link>
        <Link to="/payroll" className="item">
          <BiStats className="icon" />
          Payroll
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
