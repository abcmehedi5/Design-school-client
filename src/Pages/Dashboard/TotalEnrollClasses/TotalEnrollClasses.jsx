import React, { useContext, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";

const TotalEnrollClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [enrollUser , setUserEnroll] = useState({})
  const { data: enrollStudent = [], isLoading } = useQuery({
    queryKey: ["enrollStudent", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/enroll/instructor?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <h1>total enrolled</h1>
    </div>
  );
};

export default TotalEnrollClasses;
