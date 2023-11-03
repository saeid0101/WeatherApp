import { extendTheme } from "@chakra-ui/react";

const colors = {
  // brand: {
  //   900: "#1a365d",
  //   800: "#153e75",
  //   700: "#2a69ac",
  // },
  primary: {
    300: "#af9e9e36",
    600: "#514d4d",

    700: "#403d3d",
  },
  secondary: {
    500: "white",
  },
  text: {
    200: "#baadad",
    500: "white",
  },
  accent: {
    200: "",
    500: "#FE6F26",
  },

  gray: {
    700: "#3994e0",
  },
};
const theme = extendTheme({ colors });

export default theme;
