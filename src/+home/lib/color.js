export function getColor(value) {
  // 0 red, 1 green
  const hue = (value * 120).toString(10);
  return [`hsl(${hue}, 90%, 60%)`].join('');
}
