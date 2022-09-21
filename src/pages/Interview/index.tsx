import {
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
  Button,
  Progress,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ToggleMode } from "types/interfaces";
import { useToggle } from "hooks/useToggle";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import StepsForm from "components/Steps/Steps";

const Interview: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");

  return (
    <Flex
      as="section"
      flexDir="column"
      h="100vh"
      maxWidth="2000px"
      bgColor={pageBackground}
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Interview</title>
        <meta name="description" content="Questions to answer" />
        <link rel="icon" href="./public/favicon.ico" />
      </Head>

      <StepsForm />

      <Button
        position="absolute"
        top="25%"
        onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}
      >
        {toggle ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
};

export default Interview;
