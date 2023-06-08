import React from "react";
import useCart from "../../../Hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useToast from "../../../Hooks/useToast";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [cart, refetch, isLoading] = useCart();
  const [axiosSecure] = useAxiosSecure();
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
          .delete(`/carts/${id}`)
          .then((result) => {
            refetch()
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
      <h1>my selected class </h1>

      {isLoading ? (
        <div className="flex justify-center ">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-400 text-[15px]">
              <tr>
                <th>SL</th>
                <th>Image</th>
                <th>Name</th>
                <th>Instructor Email</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((crt, index) => (
                <tr key={crt._id} className="bg-slate-200">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center ">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={crt.image} alt="image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{crt.name}</td>
                  <td>{crt.instructorEmail}</td>
                  <td>{crt.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(crt._id)}
                      className="btn btn-success"
                    >
                      <AiFillDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MySelectedClass;
