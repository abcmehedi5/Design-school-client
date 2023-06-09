import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineCancel } from "react-icons/md";

const Feedback = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: feedback = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback?email=${user?.email}`);
      return res.data;
    },
  });
  refetch()
  return (
    <div>
      <h1 className="uppercase text-2xl text-center mt-5 font-bold">
        Admin Feedback ({feedback.length})
      </h1>
      {feedback.map((feed) => (
        <div className="alert alert-success bg-slate-200 mt-5 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div className="flex items-center gap-4">
            <img className="w-20 h-20 rounded-full" src={feed.image} alt="" />
            <div className="flex flex-col">
              <span className="text-md">{feed.message}</span>
              <span className="font-bold">Class name: {feed.name}</span>
              <span>Class id: {feed.classesId}</span>
            </div>
            <button className="btn btn-circle absolute right-10"><MdOutlineCancel size={40}/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
