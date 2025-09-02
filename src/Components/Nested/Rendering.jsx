import React from "react";
import { motion } from "framer-motion";
export default function Rendering() {
  return (
    <motion.div initial={{y:"150px" , opacity:0}} whileInView={{y:"0px" , opacity:1}} transition={{duration:1.7}} className="text-gray-300 leading-13 text-3xl font-bold ">
      There are three rendering strategies in React Router: Client Side
      Rendering Server Side Rendering Static Pre-rendering
    </motion.div>
  );
}
