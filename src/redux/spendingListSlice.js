import { createSlice } from "@reduxjs/toolkit";
import mock from "../mock.json";

const getInitialList = () => {
  const localData = localStorage.getItem("spendingList");
  return localData ? JSON.parse(localData) : mock;
};

const getInitialMonth = () => {
  const localData = localStorage.getItem("lastSelectedMonth");
  return localData ? Number(localData) : 0;
};

const spendingListSlice = createSlice({
  name: "spendingListSlice",
  initialState: {
    month: getInitialMonth(),
    list: getInitialList(),
  },
  reducers: {
    addRecord: (state, action) => {
      // action.payload => {id:... , }
      state.list.push(action.payload);
      localStorage.setItem("spendingList", JSON.stringify(state.list));
    },
    modifyRecord: (state, action) => {
      //action.payload ={ id: XX, newRecord }
      const { id, newRecord } = action.payload;
      state.list = state.list.map((item) => {
        if (item.id === id) {
          return { ...newRecord, id };
        }
        return item;
      });
      localStorage.setItem("spendingList", JSON.stringify(state.list));
    },
    deleteRecord: (state, action) => {
      const id = action.payload.id;
      state.list = state.list.filter((item) => {
        console.log(item.id, id);
        if (item.id === id) {
          return false;
        }
        return true;
      });
      localStorage.setItem("spendingList", JSON.stringify(state.list));
    },
    setMonth: (state, action) => {
      state.month = Number(action.payload);
    },
  },
});

export default spendingListSlice;
export const { modifyRecord, addRecord, deleteRecord, setMonth } =
  spendingListSlice.actions;

// setSpendingList((prev) => {
//   const newSpendingList = prev.filter((item) => item.id !== id);
//   localStorage.setItem("spendingList", JSON.stringify(newSpendingList));
//   return newSpendingList;
// });
