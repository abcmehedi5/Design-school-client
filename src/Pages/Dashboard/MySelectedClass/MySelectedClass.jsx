import React from "react";
import useCart from "../../../Hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useToast from "../../../Hooks/useToast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [cart, refetch, isLoading] = useCart();
  const total = cart.reduce((sum, item) => parseFloat(item.price) + sum, 0);
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
    <>
      {cart.length <= 0 ? (
        <h3 className="min-h-screen hero text-4xl">
          Sorry !! you have not selected any class
        </h3>
      ) : (
        <div>
          {isLoading ? (
            <div>
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <>
              <h1 className="uppercase text-2xl text-center mt-5 font-bold">
                my selected classes
              </h1>
              <div className="overflow-x-auto flex gap-4 p-4">
                <div className="w-2/6  border mx-auto p-4 bg-white shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Selected Cart</h2>
                    <span className="text-gray-500">({cart.length} items)</span>
                  </div>
                  <ul className="space-y-4">
                    {/* Render your cart items dynamically */}
                    {/* Example item */}
                    <li className="flex items-center space-x-4">
                      <div>
                        <p className="text-gray-500">
                          {" "}
                          Total Amount: $ {total}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link to="/dashboard/payment">
                    <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded">
                      Checkout
                    </button>
                  </Link>
                </div>
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
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MySelectedClass;
