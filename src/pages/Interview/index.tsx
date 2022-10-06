import {
  Flex,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ToggleMode } from "types/interfaces";
import { useToggle } from "hooks/useToggle";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import StepsForm from "components/Steps/Steps";
import AsideMenu from "components/AsideMenu/AsideMenu";

const Interview: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  return (
    <Flex
      as="section"
      flexDir="column"
      h="100vh"
      w="100vw"
      px={{xl: "30px", md: "25px", sm: "2px"}}
      py="30px"
      position="relative"
      overflow="hidden"
    >
      <Head>
        <title>Interview</title>
        <meta name="description" content="Questions to answer" />
        <link rel="icon" href="./public/favicon.ico" />
      </Head>

      <StepsForm />

      <AsideMenu currentPage="Administrador" direction="column" path="Interview"/>
    </Flex>
  );
};

export default Interview;
