import styled from "styled-components";

const StButton = styled.button`
  margin-right: 10px;
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background-color: ${({ $type }) => {
    switch ($type) {
      case "modify":
        return "orange";
      case "delete":
        return "red";
      case "cancel":
        return "gray";
    }
  }};
  color: white;
`;

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 2rem;
`;

const StBtns = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { StBtns, StButton, StDiv, StForm };
