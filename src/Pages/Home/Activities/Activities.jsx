import React from "react";
import OurProtfolio from "../OurProtfolio/OurProtfolio";

const Activities = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-20 mx-auto mt-20">
      <div className="space-y-5 lg:text-left text-center">
        <div className="w-full  ">
          <h2 className="text-3xl font-bold mb-5 ">
            Learn to work School <strong className="text-orange-400">Activities</strong> Good <br /> Solution of Kids in the
            world
          </h2>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't <br /> anything embarrassing hidden in the middle
            of text.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 text-left justify-center md:grid-cols-1 w-[500px] gap-4 font-bold text-xl">
          <h1 className="shadow-lg w-60 p-3 border mt-2 border-l-8 border-l-orange-600 rounded-e ">
            # Learn to Play
          </h1>
          <h1 className="shadow-lg w-60 p-3 border mt-2 border-l-8 border-l-orange-600 rounded-e ">
            # Safe and Security
          </h1>
          <h1 className="shadow-lg w-60 p-3 border mt-2 border-l-8 border-l-orange-600 rounded-e ">
            # Best Quality
          </h1>
          <h1 className="shadow-lg w-60 p-3 border mt-2 border-l-8 border-l-orange-600 rounded-e ">
            # Nice Environment
          </h1>
        </div>
        <button className="btn btn-success">About Us</button>
      </div>
      <img
      className="rounded-lg lg:w-[400px]"
        src="https://themesfamily.com/tm/hadi/assets/img/portfolio/3.jpg"
        alt="logo"
      />
    </div>
  );
};

export default Activities;
