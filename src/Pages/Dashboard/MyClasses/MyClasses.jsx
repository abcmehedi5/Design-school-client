import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useToast from "../../../Hooks/useToast";
const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [updateClass, setUpdateClass] = useState({});
  const [update, setUpdate] = useState({});
  console.log(updateClass);
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
    axiosSecure.get(`/allupdateclasses/${id}`).then((data) => {
      setUpdateClass(data.data);
    });
  };

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
          .delete(`/classes/${id}`)
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

  const handleUpdateChange = (event) => {
    const newUpdate = { ...update };
    newUpdate[event.target.name] = event.target.value;
    setUpdate(newUpdate);
  };

  const handleUpdata = (event) => {
    event.preventDefault();
    const id = updateClass._id;
    axiosSecure
      .put(`/classUpdate/${id}`, update)
      .then((result) => {
        refetch();

        useToast("success", "data update successfull");
      })
      .catch((error) => {
        console.log(error);
      });
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
            <th>Price</th>
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
                <td>$ {cls?.price}</td>
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
                  <button
                    onClick={() => handleDelete(cls?._id)}
                    className="btn btn-sm px-6  bg-red-400 text-white"
                  >
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
          <h3 className="font-bold text-lg mb-5">Update Your class!</h3>

          <form>
            <label className="mt-4 ">Title</label>
            <input
              defaultValue={updateClass.name}
              type="text"
              placeholder="Title"
              className="input input-bordered w-full mb-4"
              name="name"
              onChange={handleUpdateChange}
            />
            <label>Available Seats</label>
            <input
              defaultValue={updateClass.availableSeats}
              type="text"
              placeholder="Available Seats	"
              className="input input-bordered w-full  mb-4"
              name="availableSeats"
              onChange={handleUpdateChange}
            />
            <label className="mt-4 ">Price</label>
            <input
              defaultValue={updateClass.price}
              type="text"
              placeholder="price"
              className="input input-bordered w-full "
              name="price"
              onChange={handleUpdateChange}
            />
            <button
              onClick={handleUpdata}
              className="btn absolute bottom-5 left-5"
            >
              {/* {loading && (
                  <span className="loading loading-spinner loading-md"></span>
                )} */}
              update
            </button>
          </form>
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
