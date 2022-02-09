import React from "react";
import { tecOps } from "./tecops";

const Tecnologies = () => {
  return (
    <div className=" w-100% ">
      <h2 className="text-5xl px-10 py-5 font-bold text-center mb-10">
        Tecnologias que utilizo
      </h2>
      <div className="bg-white h-auto m-0 overflow-hidden relative w-full before:slider-before after:slider-after">
        <div className="slider-track flex w-[calc(250px * 4)] animate-scroll  ">
          {tecOps.map((tec, index: number) => (
            //  mb-10
            <div className="slide w-screen mx-3 md:mx-5 lg:mx-11" key={index}>
              {/* mx-20  */}
              <img className="w-20 " src={tec.logo} alt={tec.name} />
              {/* mx-20 */}
              <h4 className=" w-20 text-center">{tec.name}</h4>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-center items-center"></div> */}
    </div>
  );
};

export default Tecnologies;
