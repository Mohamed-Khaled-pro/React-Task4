import React from "react";

export default function Actions() {
  return (
    <div className="text-gray-300 leading-13 text-3xl font-bold ">
      Data mutations are done through Route actions. When the action completes,
      all loader data on the page is revalidated to keep your UI in sync with
      the data without writing any code to do it. Route actions defined with
      action are only called on the server while actions defined with
      clientAction are run in the browser.
    </div>
  );
}
