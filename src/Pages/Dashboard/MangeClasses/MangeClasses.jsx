import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";

const MangeClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allClasses");
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="uppercase text-2xl text-center mt-5 font-bold">
        manage classes ({classes.length})
      </h1>
    </div>
  );
};

export default MangeClasses;
