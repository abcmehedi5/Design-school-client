import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRouter from "./PrivateRouter";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import MangeClasses from "../Pages/Dashboard/MangeClasses/MangeClasses";
import TotalEnrollClasses from "../Pages/Dashboard/TotalEnrollClasses/TotalEnrollClasses";
import Feedback from "../Pages/Dashboard/Feedback/Feedback";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "classes",
        element: <AllClasses></AllClasses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "my-enrolled-classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "my-selected-classes",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "manage-user",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manage-classes",
        element: <MangeClasses></MangeClasses>,
      },
      {
        path: "total-enroll-student",
        element: <TotalEnrollClasses></TotalEnrollClasses>,
      },
      {
        path: "feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
export default router;
