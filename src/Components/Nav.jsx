import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="fixed top-0 w-full Nav bg-gray-950/70 border-b-2 border-white flex justify-between p-5 items-center text-white font-bold ">
      <h1 className="text-3xl ">
        <Link to={"/"}>React-Router</Link>
      </h1>
      <ul className="flex justify-center items-center gap-10 mx-20 text-xl  ">
        {[
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/documentation", name: "Documentation" },
        ].map((e, i) => (
          <li
            className="border-b-2 border-transparent hover:border-purple-700 hover:scale-110 transition-all duration-500 "
            key={i}
          >
            <Link to={e.path}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
