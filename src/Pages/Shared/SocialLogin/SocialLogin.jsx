import React, { useContext } from "react";
import { FaGofore } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import useToast from "../../../Hooks/useToast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { googleSingin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handlegoogleSingin = () => {
    googleSingin()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          phoneNumber: "",
          status: "user",
          image: loggedInUser.photoURL,
        };
        console.log(loggedInUser);
        axiosSecure.post("/users", saveUser).then((result) => {
          navigate(from, { replace: true });
          useToast("success", "account create successfull");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={() => handlegoogleSingin()}
        className="btn btn-active btn-ghost w-full"
      >
        <FaGofore size={26} /> sign in with google
      </button>
    </div>
  );
};

export default SocialLogin;
