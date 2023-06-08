import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useInstractor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstractor, isLoading: isInstractorLoading } = useQuery({
    queryKey: ["isInstractor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instractor/${user?.email}`);
      return res.data.instractor;
    },
  });
  return [isInstractor, isInstractorLoading];
};

export default useInstractor;
