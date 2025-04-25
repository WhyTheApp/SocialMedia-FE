export const colors = {
  primary: "#7b515d",
  secondary: "#060012",
  accent: "#BBAA98",
  textSoft: "#777777",
  text: "#00000",
  text2: "wheat",
  gradientMidpoint: "#19181c",
};

const opacities = {
  background: 0.2,
};

const verticalGradient = (opacity: number) =>
  `10deg, ${hexToRgba(colors.primary, opacity)} 0%, ${hexToRgba(
    colors.secondary,
    opacity
  )} 50%`;

const hexToRgba = (hex: string, alpha: number): string => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const backgroundGradients = {
  vertical: {
    default: `linear-gradient(${verticalGradient(opacities.background)})`,
    webkit: `-webkit-linear-gradient(${verticalGradient(
      opacities.background
    )})`,
    moz: `-moz-linear-gradient(${verticalGradient(opacities.background)})`,
  },
};
