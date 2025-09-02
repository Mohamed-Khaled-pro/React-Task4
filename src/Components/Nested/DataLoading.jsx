import React from "react";
import { motion } from "framer-motion";
export default function DataLoading() {
  return (
    <motion.div initial={{y:"150px" , opacity:0}} whileInView={{y:"0px" , opacity:1}} transition={{duration:1.7}} className="text-gray-300 leading-13 text-3xl font-bold ">
      Data is provided to the route component from loader and clientLoader.
      Loader data is automatically serialized from loaders and deserialized in
      components. In addition to primitive values like strings and numbers,
      loaders can return promises, maps, sets, dates and more. The type for the
      loaderData prop is automatically generated.
    </motion.div>
  );
}
