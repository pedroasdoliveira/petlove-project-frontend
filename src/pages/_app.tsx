import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import GlobalStyles from "styles/globals";
import { ToggleContextProvider } from "contexts/ToggleModeStyles";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  components: {
    Steps,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bgImage: mode("b.png", "/a.png")(props),
        bgSize: "cover",
        bgPosition: "center center",
        bgRepeat: "no-repeat",
        bgAttachment: "fixed",
        overflowX: "hidden",
      },
    }),
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <ToggleContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ToggleContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
