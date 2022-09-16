import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");
  const formBackground = useColorModeValue("#dee0e3", "#000000");
  const buttonBackground = useColorModeValue("#472dba", "#5030dd");
  const buttonHover = useColorModeValue("#000000", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  return (
    <Flex
      bg={pageBackground}
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Head>
        <title>Log In </title>
        <meta name="description" content="Log In page" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Flex
        direction={"column"}
        background={formBackground}
        w={"450px"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={6} textAlign={"center"} cursor="default">
          Login
        </Heading>

        <Input
          placeholder="Seu email..."
          variant={"flushed"}
          mb={3}
          type="email"
        />

        <Input
          placeholder="Sua senha..."
          variant={"flushed"}
          mb={6}
          type="password"
        />

        <Button background={buttonBackground} _hover={{background: buttonHover, color: buttonColor}} color="#b2aec2" variant="ghost">
          Log In
        </Button>

        <Box
          position={"absolute"}
          top={2}
          right={2}
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode();
            setToggle(!toggle);
          }}
        >
          {toggle ? <SunIcon /> : <MoonIcon />}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
