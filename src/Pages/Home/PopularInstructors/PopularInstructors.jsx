import React from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: "instractor",
    queryFn: async () => {
      const res = await axiosSecure.get("/allInstractor");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl mt-10 text-center mb-10 uppercase font-bold">
        Popular instructors
      </h1>

      <div>
        <div className="flex gap-5 flex-wrap justify-center ">
          {instructors.slice(0,5).map((instructor) => (
            <PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
