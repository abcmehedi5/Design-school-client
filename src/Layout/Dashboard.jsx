import React from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstractor] = useInstractor();
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
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/manage-user"}>
                  <FaUsers size={20} /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manage-classes"}>
                  <FaUsers size={20} /> Manage classes
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          {isInstractor && (
            <>
              <li>
                <NavLink to={"/dashboard/my-classes"}>My Classes</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/total-enroll-student"}>Total Enrolled Students</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/feedback"}>Feedback</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/Add-Class"}>Add a Class</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome size={20} /> Home
            </NavLink>
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
            <NavLink to={"/dashboard/payment-history"}>Payment history</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
