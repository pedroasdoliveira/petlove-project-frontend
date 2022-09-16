import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "styles/globals";
import { ToggleContextProvider } from "contexts/ToggleModeStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ToggleContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ToggleContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
