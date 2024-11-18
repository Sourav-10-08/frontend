import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Font settings
const fonts = {
  heading: "Now, BlinkMacSystemFont, 'Segoe UI', Raleway, Helvetica, Arial, sans-serif",
  body: "Raleway, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};

const colors = {
  brand: {
    50: "#e5e6f7",
    100: "#bec0ed",
    200: "#9699e2",
    300: "#6f72d7",
    400: "#585bc6",
    500: "#2F327D",
    600: "#252965",
    700: "#1c204d",
    800: "#121635",
    900: "#080b1e",
  },
  secondary: {
    50: "#ffe9cf",
    100: "#ffc99f",
    200: "#ffa96e",
    300: "#ff893e",
    400: "#f5731e",
    500: "#F48C06",
    600: "#c66e05",
    700: "#985104",
    800: "#6a3402",
    900: "#3d1801",
  },
  gray: {
    50: "#f9f9f9",
    100: "#f2f2f2",
    200: "#e3e3e3",
    300: "#d1d1d1",
    400: "#b1b1b1",
    500: "#9e9e9e",
    600: "#7e7e7e",
    700: "#626262",
    800: "#424242",
    900: "#212121",
  },
};

// Global styles
const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("gray.50", "gray.900")(props),
      color: mode("gray.800", "gray.100")(props),
      fontFamily: "Raleway, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    },
    button: {
      fontFamily: "Now, BlinkMacSystemFont, 'Segoe UI', Raleway, Helvetica, Arial, sans-serif",
    },
  }),
};

// Component styles for buttons
const components = {
  Button: {
    baseStyle: {
      fontFamily: "Now, BlinkMacSystemFont, 'Segoe UI', Raleway, Helvetica, Arial, sans-serif",
    },
  },
};

const customTheme = extendTheme({
  config,
  colors,
  styles,
  fonts,
  components,
});

export default customTheme;
