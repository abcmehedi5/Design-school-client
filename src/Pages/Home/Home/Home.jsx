import React from "react";
import Cover from "../Cover/Cover";
import PopulerClass from "../../Shared/PopulerClass/PopulerClass";
import Slider from "../Slider/Slider";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
const Home = () => {
  return (
    // <div className="max-w-[1400px] mx-auto">
    <div>
      <Cover></Cover>
      <PopulerClass></PopulerClass>
      <Slider></Slider>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;
