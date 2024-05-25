/* eslint-disable react/prop-types */
import { useContext } from "react";
import { myContext } from "../../context/context";
import { SpendingItem } from "./SpendingItem";
import { NoResult, StLink, StUl } from "./SpendingList.styled";

const SpendingList = () => {
  const { selectedMonth, spendingList } = useContext(myContext);
  const filteredSpendingList = spendingList.filter(
    (spending) => new Date(spending.date).getMonth() + 1 === selectedMonth
  );

  return (
    <StUl>
      {filteredSpendingList.length !== 0 ? (
        filteredSpendingList.map((item) => (
          <li key={item.id}>
            <StLink to={`/detail/${item.id}`}>
              <SpendingItem item={item} />
            </StLink>
          </li>
        ))
      ) : (
        <NoResult>
          <p>검색 결과가 없습니다.</p>
        </NoResult>
      )}
    </StUl>
  );
};

export { SpendingList };
