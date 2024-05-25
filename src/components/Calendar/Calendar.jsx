/* eslint-disable react/prop-types */
import { setMonth } from "@redux/spendingListSlice";
import { useDispatch, useSelector } from "react-redux";
import { StUl } from "./Calendar.styled";

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.spendingList.month);
  const onClick = (e) => {
    dispatch(setMonth(e.target.id));
    localStorage.setItem("lastSelectedMonth", e.target.id);
  };

  return (
    <StUl>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
        <li key={month}>
          <button
            id={month}
            onClick={onClick}
            className={selectedMonth === month ? "selected" : ""}
          >
            {month}월
          </button>
        </li>
      ))}
    </StUl>
  );
};

export { Calendar };
