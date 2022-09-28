import { Flex } from "@chakra-ui/react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";

const Administration: NextPage = () => {
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
        <meta name="Página do administrador" content="Página do administrador" />
      </Head>

      <Flex w={"100%"} direction={"column"}>
        <MenuProfile path="Administrador"  />

        <Flex
          w={"calc(100% - 20rem)"}
          h="auto"
          px="3%"
          py="2%"
          ml="20rem"
          direction={"column"}
        >
          
        </Flex>
      </Flex>

      <AsideMenu direction="column" />
    </Flex>
  );
};

export default Administration;
