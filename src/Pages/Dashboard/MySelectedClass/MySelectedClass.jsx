import React from "react";
import useCart from "../../../Hooks/useCart";

const MySelectedClass = () => {
  const [cart, refetch, isLoading] = useCart();
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
                    <button>Delete</button>
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
