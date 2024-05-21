import styled from "styled-components";

const StUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 40px 40px;
  border-bottom: 1px solid #ccc;

  li {
    button {
      font-size: 16px;
      border-radius: 16px;
      border: none;
      width: 100%;
      height: 60px;
      cursor: pointer;
      &:hover {
        background-color: #3b82f6;
        color: white;
      }
    }
    button.selected {
      background-color: #3b82f6;
      color: white;
      pointer-events: none;
    }
  }
`;

export { StUl };
