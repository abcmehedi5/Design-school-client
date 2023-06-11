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
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

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
        element: (
          <AdminRoute>
            {" "}
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "user-home",
        element: (
          <PrivateRouter>
            <UserHome></UserHome>
          </PrivateRouter>
        ),
      },
      {
        path: "instructor-home",
        element: (
          <InstructorRoute>
            <InstructorHome></InstructorHome>
          </InstructorRoute>
        ),
      },
      {
        path: "my-enrolled-classes",
        element: (
          <PrivateRouter>
            <MyEnrolledClasses></MyEnrolledClasses>
          </PrivateRouter>
        ),
      },
      {
        path: "my-selected-classes",
        element: (
          <PrivateRouter>
            {" "}
            <MySelectedClass></MySelectedClass>
          </PrivateRouter>
        ),
      },
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <MangeClasses></MangeClasses>
          </AdminRoute>
        ),
      },
      {
        path: "total-enroll-student",
        element: <TotalEnrollClasses></TotalEnrollClasses>,
      },
      {
        path: "feedback",
        element: (
          <InstructorRoute>
            <Feedback></Feedback>
          </InstructorRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRouter>
            <Payment></Payment>
          </PrivateRouter>
        ),
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
export default router;
