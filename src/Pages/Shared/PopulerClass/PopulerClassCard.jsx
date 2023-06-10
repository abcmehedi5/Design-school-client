import React from "react";
import useAdmin from "../../../Hooks/useAdmin";
import useInstractor from "../../../Hooks/useInstractor";

const PopulerClassCard = ({ cls ,handleSelect}) => {
  const { image, name, instructorName, availableSeats, price,enroll } = cls;

  const [isAdmin] = useAdmin();
  const [isInstractor] = useInstractor();
  const isButtonDisabled = availableSeats == 0 || isAdmin || isInstractor;
  return (
    <div
      className={` ${
        availableSeats == 0 && "bg-red-300 text-white"
      } card w-80 bg-base-100 shadow-xl p-3 border`}
    >
      <figure>
        <img className="h-40 w-full rounded-lg" src={image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <div className="card-actions justify-center  mb-4">
          <div className="badge badge-outline font-bold">$ {price}</div>
          <div className="badge badge-outline">{availableSeats}</div>
          <div className="badge badge-outline">{instructorName}</div>
        </div>
        <button
          disabled={isButtonDisabled}
          onClick={() => handleSelect(cls)}
          className="btn bg-orange-600 text-white hover:bg-orange-500 "
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default PopulerClassCard;
