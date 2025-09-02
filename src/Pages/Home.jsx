import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <>
    <div className="flex justify-center items-center flex-col  mt-50">
      <h1 className="text-white text-6xl font-stretch-20% font-extrabold font-sans">
        React Router Home Page
      </h1>
      <Link
        to={"documentation"}
        className=" hover:scale-110 hover:bg-purple-700 hover:text-white  flex justify-center items-center p-3 text-2xl  rounded-2xl mt-10 font-bold cursor-pointer bg-white text-purple-700"
      >
        Documentation
      </Link>
    </div>
    <div className="flex justify-center">
<h2 className="text-white absolute bottom-0 mb-2 text-xl">&copy; {new Date().getFullYear()} Mohamed Khaled</h2>
    </div>
   </>
  );
}
