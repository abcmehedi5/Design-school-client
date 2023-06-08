import React, { useContext, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="uppercase text-2xl text-center mt-5 font-bold">
        my classes ({classes.length})
      </h1>
    </div>
  );
};

export default MyClasses;
