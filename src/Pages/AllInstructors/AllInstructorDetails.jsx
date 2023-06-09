import React from "react";
const AllInstructorDetails = ({ instractor }) => {
  const { email, image, name } = instractor;

  return (
    <div className="card w-60 overflow-hidden bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className=" w-40 h-40 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h3>{name}</h3>
        <h3 className="text-slate-400 text-sm">{email}</h3>
      </div>
    </div>
  );
};

export default AllInstructorDetails;
