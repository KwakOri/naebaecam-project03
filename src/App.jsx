/* eslint-disable react/prop-types */
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpendingItem } from "./components/SpendingList/SpendingItem";
import { myContext } from "./context/context";
import mock from "./mock";
import { Detail, Home } from "./pages";

function App() {
  const [spendingList, setSpendingList] = useState(() => {
    const localData = localStorage.getItem("spendingList");
    return localData ? JSON.parse(localData) : mock;
  });
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <>
      <myContext.Provider
        value={{ spendingList, SpendingItem, selectedMonth, setSelectedMonth }}
      >
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
      </myContext.Provider>
    </>
  );
}

export default App;
