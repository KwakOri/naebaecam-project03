/* eslint-disable react/prop-types */
import { StUl } from "./Calendar.styled";

const Calendar = ({ selectedMonth, setSelectedMonth }) => {
  const onClick = (e) => {
    setSelectedMonth(() => {
      return Number(e.target.id);
    });
    localStorage.setItem("lastSelectedMonth", e.target.id);
  };

  const makeButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 12; i++) {
      buttons.push(
        <li key={i}>
          <button
            className={selectedMonth === i ? "selected" : null}
            id={i}
            onClick={onClick}
          >
            {i}월
          </button>
        </li>
      );
    }
    return buttons;
  };
  return <StUl>{makeButtons()}</StUl>;
};

export { Calendar };
