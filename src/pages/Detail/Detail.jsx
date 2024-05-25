/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Input } from "@components";
import { deleteRecord, modifyRecord } from "@redux/spendingListSlice";
import { validateInputs } from "@utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { StBtns, StButton, StDiv, StForm } from "./Detail.styled";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spendingList = useSelector((state) => state.spendingList.list);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(() =>
    spendingList.find((item) => item.id === id)
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleModifyBtn = (event) => {
    event.preventDefault();
    const isValid = validateInputs(inputs);
    if (!isValid.result) {
      return;
    }
    dispatch(modifyRecord({ id, newRecord: inputs }));
    navigate("/");
  };
  const handleCancelBtn = () => {
    navigate("/");
  };
  const handleDeleteBtn = () => {
    dispatch(deleteRecord({ id }));
    navigate("/");
  };

  return (
    <>
      <StDiv>
        <StForm>
          <Input
            value={inputs.date}
            setValue={handleInputChange}
            type="text"
            name="date"
            label={"날짜"}
          />

          <Input
            value={inputs.category}
            setValue={handleInputChange}
            type="text"
            name="category"
            label={"항목"}
          />

          <Input
            value={inputs.cost}
            setValue={handleInputChange}
            type="number"
            name="cost"
            label={"금액"}
          />

          <Input
            value={inputs.description}
            setValue={handleInputChange}
            type="text"
            name="description"
            label={"내용"}
          />
          <StBtns>
            <StButton $type={"modify"} onClick={handleModifyBtn}>
              수정
            </StButton>
            <StButton $type={"delete"} onClick={handleDeleteBtn}>
              삭제
            </StButton>
            <StButton $type={"cancel"} onClick={handleCancelBtn}>
              취소
            </StButton>
          </StBtns>
        </StForm>
      </StDiv>
    </>
  );
};

export { Detail };
