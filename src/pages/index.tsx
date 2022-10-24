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
import LoginComponent from "../components/Login/Login";
import RegisterComponent from "../components/RegisterComponent/RegisterComponent";
import { useToggle } from "../hooks/useToggle";
import { ToggleMode } from "../types/interfaces";
import { useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import Router from "next/router";

const Login: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;
  const { checkTokenExpiration, logged } = useAuth();

  useEffect(() => {
    if (logged) Router.push("/Homepage");
  }, [logged]);

  const formBackground = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );

  const [tabIndex, setTabIndex] = useState<number>(0);

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
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex
        direction={"column"}
        background={formBackground}
        w={"450px"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Tabs
         
          data-testid='tab-index'
          onChange={(index) => setTabIndex(index)}
          index={tabIndex}
          isFitted
         
          variant={"soft-rounded"}
         
          colorScheme="blue"
         
          ringColor={"cyan"}
        
        >
          <TabList mb="2em" mt="-2em">
            <Tab data-testid='tab-login' color={"white"}>Login</Tab>
            <Tab data-testid='tab-register' color={"white"}>Registro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginComponent />
            </TabPanel>
            <TabPanel p={0}>
              <RegisterComponent setTabIndex={setTabIndex} />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box
          data-testid="icon"
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
