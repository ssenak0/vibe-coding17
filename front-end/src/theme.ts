import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { THEME_COLORS } from "@/constants/campaign";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: THEME_COLORS.primary,
      600: "#319795",
      700: "#2C7A7B",
      800: "#285E61",
      900: "#234E52",
    },
    accent: {
      500: THEME_COLORS.secondary,
    },
  },
  styles: {
    global: {
      body: {
        bg: "#f8fafc",
      },
      "button, .chakra-button": {
        borderRadius: "lg",
      },
      ".card": {
        borderRadius: "lg",
      },
    },
  },
});

export default theme;
