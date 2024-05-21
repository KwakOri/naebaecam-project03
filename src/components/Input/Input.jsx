/* eslint-disable react/prop-types */
import { StInput } from "./Input.styled";

const Input = ({
  value,
  setValue,
  type,
  name,
  displayedName,
  placeholder = "",
}) => {
  return (
    <StInput>
      <label htmlFor={name}>{displayedName}</label>
      <input
        value={value}
        onChange={setValue}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </StInput>
  );
};

export { Input };
