import React from "react";
import { tecOps } from "./tecops";
import "./index.css";

const Tecnologies = () => {
  return (
    <div className=" w-100% ">
      <h2 className="text-5xl px-10 py-5 font-bold text-center mb-10">
        Tecnologias que utilizo
      </h2>
      <div className="slider">
        <div className="slider-track">
          {tecOps.map((tec, index: number) => (
            //  mb-10
            <div className="slide w-30" key={index}>
              {/* mx-20  */}
              <img
                className="w-20 mx-3 sm:mx-10 lg:mx-35"
                src={tec.logo}
                alt={tec.name}
              />
              {/* mx-20 */}
              <h4 className=" w-20 mx-3 sm:mx-10 md:mx-35 text-center">
                {tec.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-center items-center"></div> */}
    </div>
  );
};

export default Tecnologies;
