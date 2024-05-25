/* eslint-disable react/prop-types */
import { router } from "@routes/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export { App };
