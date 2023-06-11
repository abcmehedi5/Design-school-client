import React, { useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { useToaster } from "react-hot-toast";
import Swal from "sweetalert2";
const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [role, setRole] = useState("");

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  // handle role update
  const handleRole = (id, event) => {
    const data = event.target.value;
    console.log(id, data);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/users/${id}`, { data })
          .then((result) => {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data} has been created`,
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error.message);
            useToaster("success", error);
          });
      }
    });
  };

  // mange user delete

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((result) => {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };


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
                <tr key={index} className="bg-slate-100 p-5">
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phoneNumber}</td>
                  {/* <td><button className="btn btn-sm px-6 bg-green-500">{user?.status}</button></td> */}
                  <select
                    className={` ${
                      (user.status == "admin" && "bg-yellow-500") ||
                      (user?.status == "instractor" && "bg-success")
                    } select select-bordered  mt-1`}
                    onChange={(event) => handleRole(user?._id, event)}
                  >
                    <option disabled selected>
                      {user?.status}
                    </option>
                    <option value="admin">Admin</option>
                    <option value="instractor">Instractor</option>
                    <option value="user">User</option>
                  </select>

                  <td>
                    <button onClick={() => handleDelete(user._id)} className="btn btn-sm px-6  bg-red-500">
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
