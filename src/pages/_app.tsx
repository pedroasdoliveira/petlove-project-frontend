import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import GlobalStyles from 'styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
