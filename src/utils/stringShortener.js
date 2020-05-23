const stringShortener = (str, strLength = 100) => {
  if (!str) return '';

  const shortenStr = str.substring(0, strLength);

  if (str.length > 100) return `${shortenStr}...`;
  if (str.length === 0) return 'Description currently UNAVAILABLE.';
  return shortenStr;
};

export default stringShortener;
