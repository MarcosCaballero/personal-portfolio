import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "./routesOps";

const Navbar = () => {
  return (
    <header className="w-full fixed -top-0 bg-white flex justify-between">
      <div className="xlm:w-full mx-auto p-5 flex justify-center ">
        <h1 className="text-3xl font-bold underline">
          marcos caballero full stack developer
        </h1>
      </div>
      <nav className="flex w-2/4 items-center justify-around">
        {routes.map((route, index: number) => (
          <NavLink
            className=" tracking-widest text-xl uppercase"
            key={index}
            to={route.ph}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
