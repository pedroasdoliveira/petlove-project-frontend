import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";

const Profile: NextPage = () => {
  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;
  return (
    <Flex
      as="section"
      display={"flex"}
      h="100vh"
      w="100vw"
      bgColor={pageBackground}
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}
        <MenuProfile path="Perfil"/>

        {/* Column 2 - Content */}
        <Flex
          w="100%"
          flexDir="column"
          px="3%"
          py="2%"
        >
          <Flex p="15px" borderRadius="15px"
            background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box"
          >
            <Heading fontWeight="normal"  letterSpacing="tight">
              Welcome back,{" "}
              <Flex fontWeight="bold" display="inline-flex">Nicolas Cage</Flex>
            </Heading>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="100%"
            py="50px"
          >
            <Flex w="50%" p="30px" background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box" borderRadius="20px" mr={4}>
              <Text fontSize="xl" mx="auto">Grafico</Text>
            </Flex>
            <Flex w="50%" p="30px" background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box" borderRadius="20px">
              <Text fontSize="xl" mx="auto">Informação</Text>
            </Flex>
          </Flex>
          <Flex
            py="50px"
            background="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box"
            borderRadius="15px"
          >
            <Text fontSize="xl" mx="auto">Outros</Text>
          </Flex>
        </Flex>
      </Flex>

      <Button
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

export default Profile;
