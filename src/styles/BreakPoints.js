const size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "768px", // for tablets
  lg: "980px", // for laptops
  xl: "1200px", // for desktop / monitors
  xxl: "1500px", // for big screens
  xxxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
  xxxl: `(max-width: ${size.xxxl})`,
};
