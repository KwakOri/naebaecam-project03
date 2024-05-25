import { styled } from "styled-components";
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { Calendar, Form, SpendingList } from "../../components/";
import { myContext } from "../../context/context";

const StDiv = styled.div``;

const Home = () => {
  const { selectedMonth, setSelectedMonth } = useContext(myContext);
  useEffect(() => {
    const lastSelectedMonth = Number(localStorage.getItem("lastSelectedMonth"));
    setSelectedMonth(lastSelectedMonth);
  }, [selectedMonth]);
  return (
    <StDiv>
      <Form />
      <Calendar />
      <SpendingList />
    </StDiv>
  );
};

export { Home };
