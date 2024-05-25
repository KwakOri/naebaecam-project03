/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../";
import { myContext } from "../../context/context";
import { getDate, validateInputs } from "../../util";
import { StButton, StForm } from "./Form.styled";

const Form = () => {
  const { setSpendingList } = useContext(myContext);
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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isValid = validateInputs(inputs);
    if (!isValid.result) {
      if (isValid.errorType === "invalidDate") {
        setInputs((prev) => {
          return { ...prev, date: getDate() };
        });
      }
      return;
    }
    setSpendingList((prev) => {
      const newSpendingList = [...prev, { ...inputs, id: uuidv4() }];
      localStorage.setItem("spendingList", JSON.stringify(newSpendingList));
      return newSpendingList;
    });
    setInputs({
      date: getDate(),
      category: "",
      cost: "",
      description: "",
    });
  };
  return (
    <StForm onSubmit={handleFormSubmit}>
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
        placeholder={"지출항목"}
      />

      <Input
        value={cost}
        setValue={handleInputChange}
        type="number"
        name="cost"
        label={"금액"}
        placeholder={"지출 금액"}
      />

      <Input
        value={description}
        setValue={handleInputChange}
        type="text"
        name="description"
        label={"내용"}
        placeholder={"지출 내용"}
      />
      <StButton>저장</StButton>
    </StForm>
  );
};

export { Form };
