import React from "react";
import imagen1 from "../../assets/images/foto (1).png";

const About = () => {
  return (
    <div className=" w-3/4 h-full mx-auto py-20 flex">
      <div className="w-full my-auto">
        <img
          className="h-full m-auto"
          src={imagen1}
          alt="foto cv marcos caballero"
        />
      </div>
    </div>
  );
};

export default About;
