import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className=" w-full min-h-screen object-fit bg-center bg-cover bg-no-repeat bg-white flex justify-center items-center "
      style={{
        backgroundImage: ` url("../../public/assets/img/wave-haikei (1).svg")`,
      }}
    >
      <div className="text-center w-[100%]  md:w-[50%] p-5">
        <h1 className="text-indigo-600 text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Build Your Brand-New Resume.
        </h1>
        <p className=" py-2 md:py-4 text-xl md:2xl">
          The online resume builder getting folks hired by BBC, Google, Apple,
          Tesla, and Airbnb.
        </p>
        <Link to="/dashboard">
          <Button>Build Resume</Button>
        </Link>
        <p className="text-gray-600 mt-2">Try it for free.</p>
      </div>
    </section>
  );
};

export default Hero;
