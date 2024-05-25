import { configureStore } from "@reduxjs/toolkit";
import spendingListSlice from "./spendingListSlice";

const store = configureStore({
  reducer: {
    spendingList: spendingListSlice.reducer,
  },
});

export default store;
