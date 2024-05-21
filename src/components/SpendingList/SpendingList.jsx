/* eslint-disable react/prop-types */
import { SpendingItem } from "./SpendingItem";
import { NoResult, StLink, StUl } from "./SpendingList.styled";

const SpendingList = ({ selectedMonth, spendingList }) => {
  const filteredSpendingList = spendingList.filter((spending) => {
    return new Date(spending.date).getMonth() + 1 === selectedMonth;
  });
  const result = () => {
    if (filteredSpendingList.length !== 0) {
      return filteredSpendingList.map((item) => {
        const { id } = item;
        return (
          <li key={id}>
            <StLink to={`/detail/${id}`}>
              <SpendingItem item={item} />
            </StLink>
          </li>
        );
      });
    } else {
      return (
        <NoResult>
          <p>검색 결과가 없습니다.</p>
        </NoResult>
      );
    }
  };
  return <StUl>{result()}</StUl>;
};

export { SpendingList };
