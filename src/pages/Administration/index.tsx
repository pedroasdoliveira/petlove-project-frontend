import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";

const Administration: NextPage = () => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  return (
    <Flex
      as="main"
      h="100vh"
      w="100vw"
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Admin</title>
        <meta
          name="Página do administrador"
          content="Página do administrador"
        />
      </Head>

      <Flex w={"100%"} direction={"column"}>
        <MenuProfile path="Administrador" />

        <Flex w={"calc(100% - 20rem)"} h="100%" px="3%" py="2%" ml="20rem">
          <Flex
            direction={"column"}
            p={8}
            borderRadius={"15px"}
            w={"100%"}
            height={"25rem"}
            bg={background}
          >
            <Heading as="h3">Testes recentes - Users</Heading>
          </Flex>
        </Flex>
      </Flex>

      <AsideMenu direction="column" />
    </Flex>
  );
};

export default Administration;
