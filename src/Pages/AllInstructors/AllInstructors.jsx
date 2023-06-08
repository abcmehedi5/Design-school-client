import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import AllInstructorDetails from "./AllInstructorDetails";

const AllInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instractors = [], isLoading } = useQuery({
    queryKey: "instractor",
    queryFn: async () => {
      const res = await axiosSecure.get("/allInstractor");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl mt-5 text-center mb-10 uppercase font-bold">
        Instractor ({instractors.length})
      </h1>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 ">
          {instractors.map((instractor) => (
            <AllInstructorDetails
              instractor={instractor}
              key={instractor._id}
            ></AllInstructorDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInstructors;
