import React from "react";
import imagen1 from "../../assets/images/foto (1).png";

const Landing = () => {
  return (
    <div className=" w-full h-full mx-auto py-20 flex">
      <div className="w-full my-auto">
        <img
          className="w'full h-auto m-auto"
          src={imagen1}
          alt="foto cv marcos caballero"
        />
      </div>
    </div>
  );
};

export default Landing;
