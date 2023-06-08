import React from "react";

const AllClassesDetails = ({ cls ,handleSelect }) => {
  const { image, name, instructorName, availableSeats, price ,_id } = cls;
  return (
    <div className="card w-80 bg-base-300 shadow-xl">
      <figure>
        <img className="h-40 w-full" src={image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <div className="card-actions justify-center  mb-4">
          <div className="badge badge-outline font-bold">$ {price}</div>
          <div className="badge badge-outline">{availableSeats}</div>
          <div className="badge badge-outline">{instructorName}</div>
        </div>
        <button onClick={() =>handleSelect(cls)} className="btn bg-red-500 text-white hover:bg-orange-500 ">
          Select
        </button>
      </div>
    </div>
  );
};

export default AllClassesDetails;
