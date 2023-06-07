import axios from "axios";
import React, { useEffect, useState } from "react";
import PopulerClassCard from "./PopulerClassCard";

const PopulerClass = () => {
  const [classes, setClasses] = useState([]);
  console.log(classes);
  useEffect(() => {
    axios.get("/classes.json").then((data) => {
      setClasses(data.data);
    });
  }, []);
  return (
    <div>
      <div className="flex gap-5 flex-wrap justify-center mt-10">
        {classes.map((cls) => (
          <PopulerClassCard key={cls._id} cls={cls}></PopulerClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
