const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  let outline = color;
  return [color, outline];
};

export default getRandomColor;
