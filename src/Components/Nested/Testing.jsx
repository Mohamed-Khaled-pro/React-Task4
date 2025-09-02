import React from "react";

export default function Testing() {
  return (
    <div className="text-gray-300 leading-13 text-3xl font-bold ">
      When components use things like useLoaderData, {"<Link>"}, etc, they are
      required to be rendered in context of a React Router app. The
      createRoutesStub function creates that context to test components in
      isolation.
    </div>
  );
}
