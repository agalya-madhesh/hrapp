import React from "react";
import { Link } from "react-router-dom";
import {
  BiHome,
  BiLogOut,
  BiBell,
  BiSearch,
  BiCog,
  BiGroup,
  BiCalculator,
  BiCalendarAlt,
} from "react-icons/bi";
import "../Styles/Sidebar.css";
import profilePic from './P1.jpg';

function Sidebar() {
  return (
    <div className="d-flex">
      <div className="icon-sidebar">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <Link to="/search" className="icon-item">
          <BiSearch />
        </Link>
        <Link to="/notifications" className="icon-item">
          <BiBell />
        </Link>
        <Link to="/settings" className="icon-item">
          <BiCog />
        </Link>
        <Link to="/logout" className="icon-item">
          <BiLogOut />
        </Link>
      </div>

      <div className="full-sidebar">
      <div className="logo">
          <h2 className="header">Hr App</h2>
        </div>
        <div className="menu-list">
          <Link to="/" className="full-item">
            <BiHome className="icon" />
            Dashboard
          </Link>
          <Link to="/leave" className="full-item">
            <BiCalendarAlt className="icon" />
            Leave
          </Link>
          <Link to="/employees" className="full-item">
            <BiGroup className="icon" />
            Employees
          </Link>
          <Link to="/payroll" className="full-item">
            <BiCalculator className="icon" />
            Payroll
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
