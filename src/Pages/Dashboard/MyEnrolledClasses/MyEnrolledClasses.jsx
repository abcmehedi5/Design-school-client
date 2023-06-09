import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Providers/AuthProvider";
import MyEnrolledDetails from "./MyEnrolledDetails";

const MyEnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: enrolledClass = [], isLoading } = useQuery({
    queryKey: ["enrolledClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enroll?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      {isLoading ? (
        <h4 className="text-center">Loading....</h4>
      ) : (
        <>
          {enrolledClass.length <= 0 ? (
            <h3 className="min-h-screen hero text-5xl">
              {" "}
              Sorry !! You are not enrolled in any class
            </h3>
          ) : (
            <div>
              <h1 className="uppercase text-2xl text-center mt-5 font-bold">
                My enrolled Class ({enrolledClass.length})
              </h1>

              <div className="grid lg:grid-cols-2 md: grid-cols-1">
                {enrolledClass.map((myclasses) => (
                  <MyEnrolledDetails
                    myclasses={myclasses}
                    key={myclasses._id}
                  ></MyEnrolledDetails>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyEnrolledClasses;
