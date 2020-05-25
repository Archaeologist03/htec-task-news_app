const capitalizeFirstChar = (str) => {
  const uppercaseFirstLetter = str.charAt(0).toUpperCase();
  const stringWithoutFirstLetter = str.slice(1);

  return uppercaseFirstLetter + stringWithoutFirstLetter;
};

export default capitalizeFirstChar;
