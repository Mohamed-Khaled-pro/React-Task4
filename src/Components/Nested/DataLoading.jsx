import React from "react";

export default function DataLoading() {
  return (
    <div className="text-gray-300 leading-13 text-3xl font-bold ">
      Data is provided to the route component from loader and clientLoader.
      Loader data is automatically serialized from loaders and deserialized in
      components. In addition to primitive values like strings and numbers,
      loaders can return promises, maps, sets, dates and more. The type for the
      loaderData prop is automatically generated.
    </div>
  );
}
