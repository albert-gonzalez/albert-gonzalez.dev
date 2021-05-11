export interface Theme {
  colors: Record<string, string>;
  components: Record<string, any>;
  breakpoints: Record<string, string>;
}

export const lightTheme = {
  colors: {
    white: "#fff",
    black: "#000",
    darkGray: "#333",
    mediumGray: "#999",
    lightGray: "#fafafa",
  },
  components: {
    margin: "20px",
  },
  breakpoints: {
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1280px",
  },
};
