const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const getFirstLetter = (str) => {
  if (str && typeof str === 'string') {
    return str.charAt(0);
  }
  return str;
};

const capitalize = (str) => {
  if (str && typeof str === 'string') {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }
  return str;
};

export { getFirstLetter, getRandomColor, capitalize };
