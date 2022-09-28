import { Flex } from "@chakra-ui/react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import MenuProfile from "components/MenuProfile/MenuProfile";
import Specialties from "components/Specialties/Specialties";
import type { NextPage } from "next";
import Head from "next/head";

const Specialty: NextPage = () => {
  return (
    <Flex
      as="main"
      display={"flex"}
      h="100vh"
      w="100vw"
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Especialidades</title>
        <meta name="Specialties" content="Página de especialidades" />
      </Head>

      <Flex w="100%" direction={"column"}>
        {/* Column 1 - Menu */}
        <MenuProfile path="Especialidades" />

        {/* Column 2 - Content */}
        <Flex
          w={"calc(100% - 20rem)"}
          h="auto"
          px="3%"
          py="2%"
          ml="20rem"
          direction={"column"}
        >
          <Specialties />
        </Flex>
      </Flex>
      <AsideMenu direction="column" />
    </Flex>
  );
};

export default Specialty;
