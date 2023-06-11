import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PopulerClassCard from "./PopulerClassCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import useToast from "../../../Hooks/useToast";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const PopulerClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()
  const navigate = useNavigate()
  const {data:classes =[], isLoading} = useQuery({
    queryKey:["classes"],
    queryFn: async () =>{
      const res = await  axiosSecure.get('/mostEnrolledApprovedClasses' )
      return res.data
    }

  })



  const handleSelect = (cls) => {
    if (!user) {
      useToast("error", "Can't select without login ! please login..");
      return navigate("/login");
    }

    const data = {
        classId : cls._id,
        name : cls.name,
        instructorEmail : cls.instructorEmail,
        image : cls.image,
        price : cls.price,
        email:user.email
    }
    axiosSecure
      .post(`/carts`, data)
      .then((result) => {
        useToast("success", "selected successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl mt-10 text-center mb-10 uppercase font-bold">
        Popular Classes
      </h1>
      <div className="flex gap-5 flex-wrap justify-center ">
        {classes.map((cls) => (
          <PopulerClassCard handleSelect ={handleSelect} key={cls._id} cls={cls}></PopulerClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
