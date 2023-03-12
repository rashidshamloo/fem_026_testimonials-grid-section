function randomColor() {
  const hue = Math.floor(Math.random() * 361);
  const saturation = Math.floor(Math.random() * 100) + 1;
  const brightness = Math.floor(Math.random() * 100) + 1;
  return `hsl(${hue},${saturation}%,${brightness}%)`;
}

export default randomColor;
