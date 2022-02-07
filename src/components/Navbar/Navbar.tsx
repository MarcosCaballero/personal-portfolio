import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes: { ph: string; name: string }[] = [
    {
      ph: "/",
      name: "inicio",
    },
    {
      ph: "/about-me",
      name: "sobre mi",
    },
    {
      ph: "/projects",
      name: "proyectos",
    },
    {
      ph: "/certificates",
      name: "certificaciones",
    },
    {
      ph: "/contact",
      name: "contacto",
    },
  ];

  return (
    <header className="container sm xl p-2.5 flex justify-between bg-yellow-300">
      <div className="container sm xl mx-auto p-2.5 flex justify-center ">
        <h1 className="text-3xl font-bold undrline">
          marcos caballero full Stack developer
        </h1>
      </div>
      <nav className="flex container items-center justify-evenly">
        {routes.map((route, index: number) => (
          <NavLink className="font-bold text-xl" key={index} to={route.ph}>
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
