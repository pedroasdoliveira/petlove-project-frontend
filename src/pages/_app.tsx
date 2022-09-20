import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import GlobalStyles from "styles/globals";
import { ToggleContextProvider } from "contexts/ToggleModeStyles";

const theme = extendTheme({
  components: {
    Steps
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ToggleContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ToggleContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
