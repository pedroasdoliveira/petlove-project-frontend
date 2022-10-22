import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
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

import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";
import { useRouter } from "next/router";
import ChangePasswordComponent from "components/ChangePassword/ChangePassword";

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  return {
    props: {
      params,
    },
  };
};

const ChangePassword: NextPage = () => {
  const router = useRouter();

  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const formBackground = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Head>
        <title>Trocar senha - Self Awareness</title>
        <meta name="Page for changing password" content="Change Password" />
      </Head>

      <Flex
        direction={"column"}
        background={formBackground}
        w={"450px"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <ChangePasswordComponent query={router.query.index}/>

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

export default ChangePassword;
