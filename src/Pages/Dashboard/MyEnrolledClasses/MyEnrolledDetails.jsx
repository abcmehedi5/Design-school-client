import React from "react";

const MyEnrolledDetails = ({ myclasses }) => {
  const { name, image, instructorEmail, instructorName } = myclasses;
  console.log(myclasses);
  return (
    <div className="shadow-md rounded-lg p-4 border mt-3 bg-slate-100 flex  items-center gap-4">
      <img
        src={image}
        alt="Card Image"
        className="w-150px] h-[150px] mb-4 rounded-lg border p-1"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-4">
          Instructor Email: {instructorEmail}
        </p>
        <p className="text-gray-700 mb-4">Instructor Name: {instructorName}</p>
      </div>
    </div>
  );
};

export default MyEnrolledDetails;
