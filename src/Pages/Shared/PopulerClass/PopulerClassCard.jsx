import React from "react";

const PopulerClassCard = ({ cls }) => {
  const { image, name, instructor, availableSeats, price } = cls;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-60 w-full" src={image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <div className="card-actions justify-center mt-10 mb-4">
          <div className="badge badge-outline font-bold">$ {price}</div>
          <div className="badge badge-outline">{availableSeats}</div>
          <div className="badge badge-outline">{instructor}</div>
        </div>
        <button className="btn bg-red-500 text-white ">Select</button>
      </div>
    </div>
  );
};

export default PopulerClassCard;
