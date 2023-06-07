import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("/instructor.json").then((data) => {
      setInstructors(data.data);
    });
  }, []);
  return (
    <div>
      <h1 className="text-3xl mt-10 text-center mb-10 uppercase font-bold">
        Popular instructors
      </h1>

      <div>
        <div className="flex gap-5 flex-wrap justify-center ">
          {instructors.map((instructor) => (
            <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
