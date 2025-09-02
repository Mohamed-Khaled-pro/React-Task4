import React from "react";
import { motion } from "framer-motion";
export default function Installation() {
  return (
    <motion.div initial={{y:"150px" , opacity:0}} whileInView={{y:"0px" , opacity:1}} transition={{duration:1.7}} className="text-gray-300 leading-13 text-3xl font-bold ">
      You can start with a React template from Vite and choose "React",
      otherwise bootstrap your application Next install React Router from npm: .
      <br />
      <h1 className="text-red-200">npm i react-router</h1>
      Copy code to clipboard Install React Router Next install React Router from
      npm: npm i react-router
    </motion.div>
  );
}
