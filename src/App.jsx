/* eslint-disable react/prop-types */
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import mock from "./mock";
import { Detail, Home } from "./pages";

function App() {
  const [spendingList, setSpendingList] = useState(() => {
    const localData = localStorage.getItem("spendingList");
    return localData ? JSON.parse(localData) : mock;
  });
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                spendingList={spendingList}
                setSpendingList={setSpendingList}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Detail
                spendingList={spendingList}
                setSpendingList={setSpendingList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
