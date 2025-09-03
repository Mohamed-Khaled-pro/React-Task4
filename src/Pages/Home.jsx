import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col  mt-50 w-full h-full">
        <h1 className="text-white text-6xl font-stretch-20% font-extrabold font-sans">
          ✨ Everything You Need in One Place
        </h1>
        <p className="text-white text-xl w-[1300px] text-center mt-10 font-stretch-20% font-extrabold font-sans">
          Discover a wide range of high-quality products at unbeatable prices.
          From fashion and accessories to home essentials and tech gadgets – all
          just a click away.{" "}
        </p>
        <Link
          to={"products"}
          className=" hover:bg-[rgb(6,43,250)] hover:text-white hover:border-transparent transition-all  duration-500   text-white  flex justify-center border-2 border-white items-center p-3 text-xl  rounded-xl mt-10 font-bold cursor-pointer  "
        >
          Shop Now
        </Link>
      </div>
      <div className="flex justify-center">
        <h2 className="text-white absolute bottom-0 mb-2 text-sm">
          &copy; {new Date().getFullYear()} Mohamed Khaled
        </h2>
      </div>
    </>
  );
}
