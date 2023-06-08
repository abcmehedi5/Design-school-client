import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useToast from "../../../Hooks/useToast";

const MangeClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allClasses");
      return res.data;
    },
  });

  // handle status update
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
          .put(`/classes/${id}`, { data })
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
            useToast("error", error);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="uppercase text-2xl text-center mt-5 font-bold">
        manage classes ({classes.length})
      </h1>

      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="text-center bg-cyan-300">
          <tr className="mt-10">
            <th>SL</th>
            <th>Title</th>
            <th>instructorName</th>
            <th>Email</th>
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
                <td>{cls?.instructorName}</td>
                <td>{cls?.instructorEmail}</td>
                <td>{cls?.availableSeats}</td>
                <td>{cls?.enroll}</td>
                <select
                  className={` ${
                    (cls.status == "pending" && "bg-red-300") ||
                    (cls?.status == "approved" && "bg-green-300")
                  } select select-bordered  mt-1`}
                  onChange={(event) => handleRole(cls?._id, event)}
                >
                  <option disabled selected>
                    {cls?.status}
                  </option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                </select>

                <td>
                  <button className="btn btn-sm px-6  bg-red-400 text-white">
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
  );
};

export default MangeClasses;
