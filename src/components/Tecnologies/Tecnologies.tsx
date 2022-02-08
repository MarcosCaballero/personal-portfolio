import React from "react";
import { tecOps } from "./tecops";
import image1 from "../../assets/images/iconos/icons8-python-144.png";

const Tecnologies = () => {
  return (
    <div className="overflow-hidden flex  justify-center items-center ">
      {tecOps.map((tec, index: number) => (
        <div className="" key={index}>
          <img className="mx-20 w-20" src={tec.logo} alt={tec.name} />
          <h4 className="mx-20 w-20 text-center">{tec.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Tecnologies;
