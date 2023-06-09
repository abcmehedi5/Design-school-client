import React from "react";
import { FaCommentDollar, FaHome, FaUsers ,FaPeopleArrows } from "react-icons/fa";
import { BiSelectMultiple, BiAddToQueue,BiMessageAlt } from "react-icons/bi";
import { RiAccountPinBoxFill} from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";
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
                  <MdManageHistory size={20} /> Manage classes
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          {isInstractor && (
            <>
              <li>
                <NavLink to={"/dashboard/my-classes"}> < RiAccountPinBoxFill size={20} />My Classes</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/total-enroll-student"}> <FaPeopleArrows size={20} />Total Enrolled Students</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/feedback"}> <BiMessageAlt size={20} />Feedback</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/Add-Class"}> <BiAddToQueue size={20}/>Add a Class</NavLink>
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
             <SiGoogleclassroom size={20}/> My Enrolled Class
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/my-selected-classes"}>
             <BiSelectMultiple size={20}/> My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment-history"}> <FaCommentDollar size={20}/>Payment history</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
