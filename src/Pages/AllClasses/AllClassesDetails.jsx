import React from "react";
import useAdmin from "../../Hooks/useAdmin";
import useInstractor from "../../Hooks/useInstractor";
import { TbReportMoney ,TbArmchair} from "react-icons/tb";
import { BsBookFill,BsCartDashFill} from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";

const AllClassesDetails = ({ cls, handleSelect }) => {
  const { image, name, instructorName, availableSeats,enroll, price, _id } = cls;
  const [isAdmin] = useAdmin();
  const [isInstractor] = useInstractor();
  const isButtonDisabled = availableSeats == 0 || isAdmin || isInstractor;
  return (
   <Zoom>
     <div
      className={` ${
        availableSeats == 0 && "bg-red-100 "
      } card w-80 bg-base-100 border relative shadow-xl p-3`}
    >
      <figure>
        <img className="h-40 w-full rounded-lg" src={image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className=" text-center text-xl mb-3 font-bold text-slate-700 ">{name}</h2>
        <div className="card-actions justify-center  mb-4">
          <div className="badge border p-2  flex gap-1 "><TbReportMoney size={20}/> $ {price}</div>
          <div className="badge border p-2  flex gap-1"> <TbArmchair size={16}/> {availableSeats}</div>
          <div className="badge border p-2  flex gap-1"> <BsBookFill size={16}/> {enroll}</div>
          <div className="text-slate-400">  {instructorName}</div>
        </div>
        <button
          disabled={isButtonDisabled}
          onClick={() => handleSelect(cls)}
          className="btn bg-orange-600 text-white hover:bg-orange-500 absolute bottom-1 mx-1 right-0 left-0 "
        >
        <BsCartDashFill size={20}/>  Select
        </button>
      </div>
    </div>
   </Zoom>
  );
};

export default AllClassesDetails;
