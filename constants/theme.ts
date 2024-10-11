import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200ea", // Customize the primary color
    secondary: "#03dac6", // Customize the secondary color
    background: "#f6f6f6", // Customize background color
    text: "#000000", // Customize text color
    secondaryContainer: "#e0e0e0",
  },
};

export default theme;
