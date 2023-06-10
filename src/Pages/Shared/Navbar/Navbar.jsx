import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useToast from "../../../Hooks/useToast";
import useInstractor from "../../../Hooks/useInstractor";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
const [isInstractor] =useInstractor()
const [isAdmin] =useAdmin()
  const handleLogout = () => {
    logOut()
      .then((result) => {
        useToast("success", "logout successfull");
      })
      .catch((error) => {
        useToast("error", error.message);
      });
  };
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">DESIGN SCHOOL</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="classes">Classes</Link>
          </li>
          {user && (
            <li>
              <Link to={`/dashboard/${isAdmin && 'admin-home' || isInstractor && 'instructor-home' || 'user-home'}`}>Dashboard</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="flex gap-14">
            <button onClick={() => handleLogout()} className="btn btn-success">
              logout
            </button>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-20 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
