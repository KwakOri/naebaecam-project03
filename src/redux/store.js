import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import spendingListSlice from "./spendingListSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    spendingList: spendingListSlice.reducer,
  },
});

export default store;
