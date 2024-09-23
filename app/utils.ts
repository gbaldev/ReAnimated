export function generateRandomColor(): string {
  // Generate random values for Red, Green, and Blue channels
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert RGB values to hexadecimal format
  const hexRed = red.toString(16).padStart(2, '0');
  const hexGreen = green.toString(16).padStart(2, '0');
  const hexBlue = blue.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal values
  const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;

  return hexColor;
}
