/* eslint-disable react-hooks/exhaustive-deps */
import { Flex } from "@chakra-ui/react";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import Specialties from "../../components/Specialties/Specialties";
import { useAuth } from "../../contexts/Auth";
import { useTest } from "../../contexts/testQuests";
import { useUsers } from "../../contexts/Users";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Specialty: NextPage = () => {
  const { checkTokenExpiration } = useAuth();
  const { handleGetTest } = useTest();
  const { users, user } = useUsers();
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState(0);

  useEffect(() => {
    checkTokenExpiration?.();
    handleGetTest?.();
  }, []);

  useEffect(() => {
    if (user?.isAdmin) {
      users?.map((user) => {
        if (user?.results?.at(-1)?.isValided === null) {
          setNewTest(true);
          setContTest(contTest + 1);
        }
      });
    }
  }, [user]);

  return (
    <Flex
      as="main"
      display={"flex"}
      h="100vh"
      w="100vw"
      px={{ xl: "5rem", lg: "1.5rem" }}
      py="30px"
      justifyContent={{ sm: "center", md: "space-between" }}
      position="relative"
    >
      <Head>
        {newTest ? (
          <title>({contTest}) Especialidades - Self Awareness</title>
        ) : (
          <title>Especialidades - Self Awareness</title>
        )}
        <meta name="Specialties" content="Página de especialidades" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}

        <Flex
          w={{ xl: "20rem", lg: "15rem" }}
          display={{ lg: "flex", sm: "none" }}
          position="fixed"
        >
          <MenuProfile path="Especialidades" />
        </Flex>

        {/* Column 2 - Content */}
        <Flex
          ml={{ xl: "350px", lg: "230px" }}
          mr={{ lg: "30px", md: "60px" }}
          w={{ xl: "calc(100% - 20rem)", lg: "80%", sm: "100%" }}
          flexDir="column"
          px="3%"
          py={{ sm: "20%", md: "2%" }}
        >
          <Specialties />
        </Flex>
      </Flex>
      <AsideMenu currentPage="Especialidades" />
    </Flex>
  );
};

export default Specialty;
