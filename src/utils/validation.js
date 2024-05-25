const validateInputs = ({ date, category, cost, description }) => {
  if (!date || !category || !cost || !description) {
    alert("모든 항목을 입력해주세요!");
    return { result: false, errorType: "empty" };
  }
  const trimedDate = date.replace(/(\s*)/g, "").split("-");
  if (
    trimedDate.length !== 3 ||
    trimedDate[1] < 0 ||
    trimedDate[1] > 12 ||
    trimedDate[2] < 0 ||
    trimedDate[2] > 31
  ) {
    alert("올바른 날짜를 입력해주세요!");
    return { result: false, errorType: "invalidDate" };
  }
  return { result: true };
};

export { validateInputs };
