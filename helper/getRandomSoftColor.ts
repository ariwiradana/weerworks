export function getRandomSoftColor() {
  const hue = Math.floor(Math.random() * 360); // Full color spectrum
  const saturation = 40; // Low saturation for softness
  const lightness = 90; // High lightness for pastel tone
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
