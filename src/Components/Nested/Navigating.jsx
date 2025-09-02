import React from "react";
import { motion } from "framer-motion";
export default function Navigating() {
  return (
    <motion.div initial={{y:"150px" , opacity:0}} whileInView={{y:"0px" , opacity:1}} transition={{duration:1.7}} className="text-gray-300 leading-13 text-3xl font-bold ">
      Users navigate your application with <br />
      <h1 className="text-red-300">{"<Link>, <NavLink>, <Form>"}</h1>
      redirect, and useNavigate.
    </motion.div>
  );
}
