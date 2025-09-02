import React from "react";
import { motion } from "framer-motion";
export default function Testing() {
  return (
    <motion.div initial={{y:"150px" , opacity:0}} whileInView={{y:"0px" , opacity:1}} transition={{duration:1.7}} className="text-gray-300 leading-13 text-3xl font-bold ">
      When components use things like useLoaderData, {"<Link>"}, etc, they are
      required to be rendered in context of a React Router app. The
      createRoutesStub function creates that context to test components in
      isolation.
    </motion.div>
  );
}
