import React, { useContext, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";
import { MdDelete, MdEdit } from "react-icons/md";
const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes?email=${user?.email}`);
      return res.data;
    },
  });

  const handleEdit = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1 className="uppercase text-2xl text-center mt-5 font-bold">
        my classes ({classes.length})
      </h1>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="text-center bg-cyan-300">
          <tr className="mt-10">
            <th>SL</th>
            <th>Title</th>
            <th>Available Seats</th>
            <th>Enroll</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {!isLoading ? (
          <tbody className="text-center">
            {classes.map((cls, index) => (
              <tr key={index} className="bg-slate-100 p-5">
                <td>{index + 1}</td>
                <td>{cls?.name}</td>
                <td>{cls?.availableSeats}</td>
                <td>{cls?.enroll}</td>
                <td
                  className={` ${
                    (cls.status == "pending" && "text-yellow-600 font-bold") ||
                    (cls?.status == "approved" && "text-green-700 font-bold") ||
                    (cls?.status == "deny" && "text-red-600 font-bold")
                  }`}
                >
                  {cls.status}
                </td>

                <td>
                  <button className="btn btn-sm px-6  bg-red-400 text-white">
                    <MdDelete size={20} color="white" />
                  </button>
                  <button
                    className="btn btn-sm px-6  bg-green-600 text-white"
                    onClick={() => {
                      window.my_modal_1.showModal(), handleEdit(cls?._id);
                    }}
                  >
                    <MdEdit size={20} color="white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <span className="loading loading-spinner loading-lg "></span>
        )}
      </table>

      {/* modal start */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>

      {/* modal end */}
    </div>
  );
};

export default MyClasses;
