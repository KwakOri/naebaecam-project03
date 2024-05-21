const formatDate = (year, month, day) => {
  const _month = String(month).length > 1 ? month : "0" + month;
  const _day = String(day).length > 1 ? day : "0" + day;
  return `${year}-${_month}-${_day}`;
};

const getDate = () => {
  const date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];
  return formatDate(year, month, day);
};

export { getDate };
