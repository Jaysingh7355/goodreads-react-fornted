import React from "react";
import Logo from "Assets/Images/logo-color.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-40 h-[100vh]">
      <div className="h-48 w-38">
        <img className="w-full h-full" alt="logo" src={Logo} />
      </div>
      <div className="flex  items-center justify-around gap-10 text-3xl">
        <div className="w-2/4 text-center font-semibold basis-1/2">
          <h1 className="text-5xl tracking-widest leading-normal">
            BookShelf <br />
            <span className="text-warning">
              Your personal library and social network forbookworms
            </span>
          </h1>
        </div>
        <div>
          <button className="btn btn-primary rounded-md px-4 py-3 text-xl ">
            Register
          </button>
          <button className="btn btn-warning mx-1 rounded-md px-4 py-3 text-xl ">

            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
