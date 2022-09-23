import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";
import LoginComponent from "components/Login/Login";
import RegisterComponent from "components/RegisterComponent/RegisterComponent";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";

const Login: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const pageBackground = useColorModeValue("#7d54ce", "#1d1d31");
  const formBackground = useColorModeValue("#ffffffa2", "#000000");

  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Head>
        <title>Login </title>
        <meta name="pagina inicial e de login" content="Pagina de Login" />
      </Head>

      <Flex
        direction={"column"}
        background={formBackground}
        w={"450px"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Tabs isFitted>
          <TabList mb="2em" mt="-2em">
            <Tab>Login</Tab>
            <Tab>Registro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginComponent />
            </TabPanel>
            <TabPanel p={0}>
              <RegisterComponent />
            </TabPanel>
          </TabPanels>
        </Tabs>
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

export default Login;
