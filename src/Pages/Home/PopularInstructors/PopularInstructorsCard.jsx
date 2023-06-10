import React from "react";

const PopularInstructorsCard = ({instructor}) => {
  console.log(instructor);
    const {name,image,email,status} = instructor;
  return (
    // <div className="card w-96 bg-base-100 shadow-xl">
    <div className=" card w-80 bg-base-100 border relative shadow-xl p-3">
      <figure>
        <img className=" w-40 h-40 rounded-full" src={image} alt="classes" />
      </figure>
      <div className="card-body text-center">
        <h2 className=" text-xl font-bold text-center">{name}</h2>
        <h4 className="text-slate-400">{email}</h4>
        <h4 className="text-slate-400">instructor</h4>
    
        {/* <button className="btn bg-red-500 text-white ">Select</button> */}
      </div>
    </div>
  );
};

export default PopularInstructorsCard;
