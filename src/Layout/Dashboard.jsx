import React from "react";
import {
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/my-enrolled-classes"}>
              My Enrolled Class
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/my-selected-classes"}>
              My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/Add-Class"}>Add a Class</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manage-user"}>Manage Users</NavLink>
          </li>

          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
