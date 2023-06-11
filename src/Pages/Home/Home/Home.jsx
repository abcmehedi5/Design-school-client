import React, { useEffect, useRef } from "react";
import Cover from "../Cover/Cover";
import PopulerClass from "../../Shared/PopulerClass/PopulerClass";
import Slider from "../Slider/Slider";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurProtfolio from "../OurProtfolio/OurProtfolio";
import ContactInfo from "../ContactInfo/ContactInfo";
import Activities from "../Activities/Activities";
import {Slide } from "react-awesome-reveal";
const Home = () => {
  return (
    // <div className="max-w-[1400px] mx-auto">
    <div>
      <Cover></Cover>
      <PopulerClass></PopulerClass>
      <Slider></Slider>
      <PopularInstructors></PopularInstructors>
      <Slide direction="right">
        <OurProtfolio></OurProtfolio>
      </Slide>
      <Slide>
        <Activities></Activities>
      </Slide>
      <Slide>
        <ContactInfo ></ContactInfo>
      </Slide>
    </div>
  );
};

export default Home;
