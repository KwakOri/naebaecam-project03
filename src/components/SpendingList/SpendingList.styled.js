import { Link } from "react-router-dom";
import styled from "styled-components";

const StLink = styled(Link)`
  text-decoration: none;
`;

const StUl = styled.div`
  width: 100%;
  height: 100%;
`;

const NoResult = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.2rem;
  }
`;

const StSpendingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  .info {
    width: 90%;
    display: flex;
    flex-direction: column;

    .date {
      font-size: 0.8rem;
      color: #9e9e9e;
    }

    .description {
      font-size: 1rem;
      color: #212121;
      margin-top: 4px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .cost {
    color: #212121;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export { NoResult, StLink, StSpendingItem, StUl };
