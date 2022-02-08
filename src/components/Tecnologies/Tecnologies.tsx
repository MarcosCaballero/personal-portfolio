import React from "react";
import { tecOps } from "./tecops";
import image1 from "../../assets/images/iconos/icons8-python-144.png";

const Tecnologies = () => {
  return (
    <div className=" w-[calc(100%-40px)] m-10 ">
      <h2 className="text-5xl font-bold text-center mb-10">
        Tecnologias que utilizo
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {tecOps.map((tec, index: number) => (
          <div className="mb-10" key={index}>
            <img className="mx-20 w-20 " src={tec.logo} alt={tec.name} />
            <h4 className="mx-20 w-20 text-center">{tec.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologies;
