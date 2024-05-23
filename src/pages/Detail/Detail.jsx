/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components";
import { getDate, validateInputs } from "../../util";
import { StBtns, StButton, StDiv, StForm } from "./Detail.styled";

const Detail = ({ spendingList, setSpendingList }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    date: getDate(),
    category: "",
    cost: "",
    description: "",
  });

  const { date, category, cost, description } = inputs;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const { id } = useParams();
  const spendingDetail = spendingList.find((item) => item.id === id);

  useEffect(() => {
    setInputs({
      date: spendingDetail.date,
      category: spendingDetail.category,
      cost: spendingDetail.cost,
      description: spendingDetail.description,
    });
  }, []);

  const handleModifyBtn = (event) => {
    event.preventDefault();

    const isValid = validateInputs(inputs);
    if (!isValid.result) {
      return;
    }
    setSpendingList((prev) => {
      const _prev = [...prev];
      const newSpendingList = _prev.map((item) => {
        if (item.id === id) {
          return {
            ...inputs,
            id,
          };
        }
        return item;
      });
      localStorage.setItem("spendingList", JSON.stringify(newSpendingList));
      return newSpendingList;
    });

    navigate("/");
  };
  const handleCancelBtn = () => {
    navigate("/");
  };

  const handleDeleteBtn = () => {
    setSpendingList((prev) => {
      const newSpendingList = prev.filter((item) => item.id !== id);
      localStorage.setItem("spendingList", JSON.stringify(newSpendingList));
      return newSpendingList;
    });
    navigate("/");
  };

  return (
    <>
      <StDiv>
        <StForm>
          <Input
            value={date}
            setValue={handleInputChange}
            type="text"
            name="date"
            label={"날짜"}
          />

          <Input
            value={category}
            setValue={handleInputChange}
            type="text"
            name="category"
            label={"항목"}
          />

          <Input
            value={cost}
            setValue={handleInputChange}
            type="number"
            name="cost"
            label={"금액"}
          />

          <Input
            value={description}
            setValue={handleInputChange}
            type="text"
            name="description"
            label={"내용"}
          />
          <StBtns>
            <StButton type={"modify"} onClick={handleModifyBtn}>
              수정
            </StButton>
            <StButton type={"delete"} onClick={handleDeleteBtn}>
              삭제
            </StButton>
            <StButton type={"cancel"} onClick={handleCancelBtn}>
              취소
            </StButton>
          </StBtns>
        </StForm>
      </StDiv>
    </>
  );
};

export { Detail };
