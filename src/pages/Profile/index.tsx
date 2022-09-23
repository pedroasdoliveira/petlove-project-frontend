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
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  return (
    <Flex
      as="section"
      display={"flex"}
      h="100vh"
      w="100vw"
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}
        <MenuProfile path="Perfil" />

        {/* Column 2 - Content */}
        <Flex
          w={"calc(100% - 20rem)"}
          flexDir="column"
          px="3%"
          py="2%"
          ml="20rem"
        >
          <Flex p="15px" borderRadius="15px" bg={background} color={"white"}>
            <Heading fontWeight="normal" letterSpacing="tight">
              Welcome back,{" "}
              <Flex fontWeight="bold" display="inline-flex">
                Nicolas Cage
              </Flex>
            </Heading>
          </Flex>
          <Flex justifyContent="space-between" w="100%" py="50px" color={"white"}>
            <Flex w="50%" p="30px" bg={background} borderRadius="20px" mr={4} h={"23rem"}>
              <Text fontSize="xl" mx="auto">
                Grafico
              </Text>
            </Flex>
            <Flex w="50%" p="30px" bg={background} borderRadius="20px" h={"23rem"}>
              <Text fontSize="xl" mx="auto">
                Informação
              </Text>
            </Flex>
          </Flex>
          <Flex py="50px" bg={background} borderRadius="15px" color={"white"}>
            <Text fontSize="xl" mx="auto">
              Outros
            </Text>
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
