import React from "react";
import Landing from "../components/Landing/Landing";
import Navbar from "../components/Navbar/Navbar";
import Tecnologies from "../components/Tecnologies/Tecnologies";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Navbar />
      <Landing />
      <Tecnologies />
      <Projects />
    </div>
  );
};

export default Home;
