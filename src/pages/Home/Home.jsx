import { styled } from "styled-components";
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Calendar, Form, SpendingList } from "../../components/";

const StDiv = styled.div``;

const Home = ({ spendingList, setSpendingList }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  useEffect(() => {
    const lastSelectedMonth = Number(localStorage.getItem("lastSelectedMonth"));
    setSelectedMonth(lastSelectedMonth);
  }, []);
  return (
    <StDiv>
      <Form setSpendingList={setSpendingList} />
      <Calendar
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <SpendingList selectedMonth={selectedMonth} spendingList={spendingList} />
    </StDiv>
  );
};

export { Home };
