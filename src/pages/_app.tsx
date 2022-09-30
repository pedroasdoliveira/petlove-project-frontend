import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import GlobalStyles from "styles/globals";
import { mode } from "@chakra-ui/theme-tools";
import Providers from "contexts";

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

      "::-webkit-scrollbar": {
        width: "5px",
        backgroundColor: "gray.600",
      },

      "::-webkit-scrollbar-track": {
        boxShadow: "0 0 6px gray",
      },

      "::-webkit-scrollbar-thumb": {
        backgroundColor: "gray.700",
        borderRadius: "2px",
        height: "2px",
      },
    }),
  },
  breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '96em',
      
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Providers>
        <GlobalStyles />
        <Component {...pageProps} />
      </Providers>
    </ChakraProvider>
  );
}

export default MyApp;
