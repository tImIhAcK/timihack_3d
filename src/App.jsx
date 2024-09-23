import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import { Hero, About, Experience, Tech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
      </div>
    </BrowserRouter>
  );
};

export default App;
