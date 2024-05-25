/* eslint-disable react/prop-types */
import { StUl } from "./Calendar.styled";

const Calendar = ({ selectedMonth, setSelectedMonth }) => {
  const onClick = (e) => {
    setSelectedMonth(Number(e.target.id));
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
