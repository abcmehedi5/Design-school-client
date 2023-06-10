import axios from "axios";
import React, { useEffect, useState } from "react";
import PopulerClassCard from "./PopulerClassCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const PopulerClass = () => {
  // const [classes, setClasses] = useState([]);
  // console.log(classes);

  const [axiosSecure] = useAxiosSecure()
  const {data:classes =[], isLoading} = useQuery({
    queryKey:["classes"],
    queryFn: async () =>{
      const res = await  axiosSecure.get('/mostEnrolledApprovedClasses' )
      return res.data
    }

  })
  useEffect(() => {
    axios.get("/classes.json").then((data) => {
      setClasses(data.data);
    });
  }, []);
  return (
    <div>
      <h1 className="text-3xl mt-10 text-center mb-10 uppercase font-bold">
        Popular Classes
      </h1>
      <div className="flex gap-5 flex-wrap justify-center ">
        {classes.map((cls) => (
          <PopulerClassCard key={cls._id} cls={cls}></PopulerClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
