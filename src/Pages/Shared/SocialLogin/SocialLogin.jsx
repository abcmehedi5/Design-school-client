import React, { useContext } from "react";
import { FaGofore } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSingin } = useContext(AuthContext);
  const handlegoogleSingin = () => {
    googleSingin()
      .then((result) => {
        const user = result.user;
        console.log(user);
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
