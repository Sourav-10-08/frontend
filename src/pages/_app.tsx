import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/theme"; // Assuming your custom theme is saved in "theme.ts" in the `src` directory

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
