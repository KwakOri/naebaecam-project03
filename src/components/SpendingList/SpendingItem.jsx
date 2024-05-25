/* eslint-disable react/prop-types */
import { formatCost } from "@utils";
import { StSpendingItem } from "./SpendingList.styled";

const SpendingItem = ({ item: { date, cost, description } }) => {
  return (
    <StSpendingItem>
      <div className="info">
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>
      <p className="cost">{formatCost(cost)}원</p>
    </StSpendingItem>
  );
};

export { SpendingItem };
