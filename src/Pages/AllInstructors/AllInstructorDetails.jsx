import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const AllInstructorDetails = ({ instractor }) => {
  const { email, image, name } = instractor;
  const [ axiosSecure] = useAxiosSecure()
  const {data: classes =[] } = useQuery({
    queryKey:"classes",
    queryFn: async () =>{
        const res = await axiosSecure.get(`/classes?email=${email}`);
        return res.data;
    }
  })

  console.log(classes);
  return (
    <div className="card w-60 overflow-hidden bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className=" w-40 h-40 rounded-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{classes.length}</h3>
      </div>
    </div>
  );
};

export default AllInstructorDetails;
