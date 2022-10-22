/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from "@chakra-ui/react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import MenuProfile from "components/MenuProfile/MenuProfile";
import Specialties from "components/Specialties/Specialties";
import { useAuth } from "contexts/Auth";
import { useTest } from "contexts/testQuests";
import { useUsers } from "contexts/Users";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Specialty: NextPage = () => {
  const { checkTokenExpiration } = useAuth();
  const { handleGetTest } = useTest();
  const { handleGetUsers, users, user } = useUsers();
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState(0);

  useEffect(() => {
    checkTokenExpiration!();
    handleGetTest!();
  }, []);

  useEffect(() => {
    if(user?.isAdmin) {
      users?.map((user, index) => {
        if(user?.results?.at(-1)?.isValided === null) {
          setNewTest(true);
          setContTest(contTest + 1);
        }
      })
    }
  }, [user]);

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
        {newTest ?
          <title>({contTest}) Especialidades - Self Awareness</title>
        :
        <title>Especialidades - Self Awareness</title>
        }
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
