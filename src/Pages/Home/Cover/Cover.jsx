import React from "react";
const Cover = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold"> Summer Camp Design School</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-red-700 border-none text-slate-200">Register for Capm</button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
