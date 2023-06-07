import React from "react";
import { FaGofore } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <button className="btn btn-active btn-ghost w-full">
        <FaGofore size={26} /> sign in with google
      </button>
    </div>
  );
};

export default SocialLogin;
