import React from "react";
import { motion } from "framer-motion";
export default function Deploying() {
  return (
    <motion.div initial={{y:"150px" , opacity:0}} whileInView={{y:"0px" , opacity:1}} transition={{duration:1.7}} className="text-gray-300 leading-13 text-3xl font-bold ">
      React Router can be deployed two ways: Fullstack Hosting Static Hosting
      The official React Router templates can help you bootstrap an application
      or be used as a reference for your own application. When deploying to
      static hosting, you can deploy React Router the same as any other single
      page application with React.
    </motion.div>
  );
}
