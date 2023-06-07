import React from "react";

const PopularInstructorsCard = ({instructor}) => {
    const {name,image,classes,classesName  } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-50 w-full" src={image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <div className="card-actions justify-center mt-10 mb-4">
          <div className="badge badge-outline">{classes}</div>
        </div>
        {/* <button className="btn bg-red-500 text-white ">Select</button> */}
      </div>
    </div>
  );
};

export default PopularInstructorsCard;
