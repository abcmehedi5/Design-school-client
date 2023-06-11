import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import Chart from "./Chart";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUser, FaDollarSign, FaThList } from "react-icons/fa";

const AdminHome = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const alluser = stats.allUser;
  return (
    <>
      {isLoading ? (
       <div className="flex justify-center min-h-screen"> <span className="loading loading-spinner loading-lg"></span></div>
      ) : (
        <div>
          {/* Main Content */}
          <div className="flex flex-col p-8">
            <h1 className="text-2xl mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
              {/* Users */}
              <div className="bg-white p-4 rounded shadow bg-gradient-to-r from-lime-400 via-yellow-200 to-amber-300 relative">
                <h2 className="text-lg font-semibold"> Users</h2>
                <span className="absolute top-4 right-4">
                  <FaUser color="blue" size={60} />
                </span>
                <p className="text-3xl font-bold">{stats.users}</p>
              </div>

              {/* Classes */}
              <div className="bg-white p-4 rounded shadow bg-gradient-to-r from-green-400 via-green-200 to-green-300 relative">
                <h2 className="text-lg font-semibold">Classes</h2>
                <span className="absolute top-4 right-4">
                  <FaThList color="blue" size={60} />
                </span>
                <p className="text-3xl font-bold">{stats.classes}</p>
              </div>

              {/* Sales */}
              <div className="bg-white p-4 rounded shadow bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-300 relative">
                <h2 className="text-lg font-semibold">Sales</h2>
                <span className="absolute top-4 right-4">
                  <FaDollarSign color="blue"  size={60} />
                </span>
                <p className="text-3xl font-bold">$ {stats.revenue}</p>
              </div>

              {/* Add more components here */}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center  bg-gradient-to-r from-cyan-400 via-green-200 to-sky-300 p-14 rounded-lg">
              <img
                className="w-40 h-40 mx-auto rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <h4 className="mt-4 text-3xl">{user?.displayName}</h4>
              <h4 className="mt-4 text-md">{user?.email}</h4>
              <h4 className="mt-4 text-md">Admin</h4>
            </div>
            <Chart></Chart>
          </div>

          {/* table -------------------------------- */}
          <h4 className="text-center mb-3 font-bold mt-10">10 RECENT USERS</h4>
          <div className="overflow-x-auto">
            <table className="table  text-center">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {alluser?.map((user, index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
