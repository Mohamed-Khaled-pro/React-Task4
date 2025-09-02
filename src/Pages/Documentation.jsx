import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Documentation() {
  return (
    <div className="flex justify-center items-center flex-col  mt-30 ">
      <h1 className="hover:scale-105 transition-all  duration-500 text-white text-4xl font-stretch-20% font-extrabold font-sans shadow-lg shadow-purple-700">
        Documentation
      </h1>
      <div className="flex justify-center items-center gap-10">
        <Link
          to="installation"
          className="hover:scale-105 transition-all  duration-500  hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Installation
        </Link>
        <Link
          to="deploying"
          className="hover:scale-105 transition-all  duration-500  hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Deploying
        </Link>
        <Link
          to="navigating"
          className="hover:scale-105 transition-all  duration-500  hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Navigating
        </Link>
        <Link
          to="actions"
          className="hover:scale-105 transition-all  duration-500  hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Actions
        </Link>
        <Link
          to="testing"
          className="hover:scale-105 transition-all  duration-500  hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Testing
        </Link>
        <Link
          to="rendering"
          className="hover:scale-105 transition-all  duration-500 hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Rendering
        </Link>
        <Link
          to="dataloading"
          className="hover:scale-105 transition-all  duration-500  hover:bg-purple-700 hover:text-white flex justify-center items-center p-3 rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
        >
          Data Loading
        </Link>
      </div>
      <div className="p-10 mx-10 text-3xl bg-black/70 mt-10 rounded-3xl h-96 w-[1200px] overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
