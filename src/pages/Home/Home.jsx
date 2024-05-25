import { styled } from "styled-components";
/* eslint-disable react/prop-types */
import { Calendar, Form, SpendingList } from "@components/";

const StDiv = styled.div``;

const Home = () => {
  return (
    <StDiv>
      <Form />
      <Calendar />
      <SpendingList />
    </StDiv>
  );
};

export { Home };
