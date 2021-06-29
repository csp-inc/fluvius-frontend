import { createMuiTheme } from "@material-ui/core/styles";

// Based on CSP aesthetics Guide

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#636466", //AL Grey
      // main: "rgb(0, 73, 131)", //CSP Blue
      light: "rgb(81, 118, 164)", //Denim Blue
      contrastText: "#ffffff", //white
    },
    secondary: {
      main: "rgb(190, 215, 71)", //Bright Green
      light: "rgb(206, 216, 215)", //pale grey-green
      dark: "rgb(107, 179, 150)", //blue tinted forest green
      contrastText: "#000000", //black
    },
    error: {
      light: "rgb(207, 31, 837)", //red
      main: "rgb(226, 85, 38)", //dark tangerine
      dark: "rgb(26, 32, 44)", //black
      contrastText: "#fffff", //white
    },
    initial: {
      main: "#cccccc", //light grey
      contrastText: "#000000", //black
    },
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  // typography: {
  //   fontFamily: "Roboto",
  // }
});

export default theme;
