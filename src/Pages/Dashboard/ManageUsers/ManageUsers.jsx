import React from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);
  return (
    <div>
      <h1 className="text-lg font-bold text-center mt-10 mb-10">
        MANAGE USER ({users.length}){" "}
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="text-center bg-cyan-300">
            <tr className="mt-10">
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {!isLoading ? (
            <tbody className="text-center">
              {users.map((user, index) => (
                <tr className="bg-slate-100 p-5">
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phoneNumber}</td>
                  <td>{user?.status}</td>
                  <td>
                    <button className="btn btn-sm px-6  bg-red-500">
                      <MdDelete size={20} color="white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <span className="loading loading-spinner loading-lg "></span>
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
