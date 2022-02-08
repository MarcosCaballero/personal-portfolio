import React from "react";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Tecnologies from "../components/Tecnologies/Tecnologies";

const Home = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Navbar />
      <About />
      <Tecnologies />
    </div>
  );
};

export default Home;
