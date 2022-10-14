/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import LastRadarUser from "components/Graphics/LastRadarUser";
import AsideMenu from "components/AsideMenu/AsideMenu";
import { useAuth } from "contexts/Auth";
import { useEffect } from "react";
import { useUsers } from "contexts/Users";

interface ProfileProps {
  name: string;
}

const Profile: NextPage<ProfileProps> = () => {
  const { checkTokenExpiration } = useAuth();
  const { user, handleGetUsers } = useUsers();
  useEffect(() => {
    checkTokenExpiration!();
    handleGetUsers!();
  }, []);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const handleVerify = () => {
    if (user?.results?.at(-1).isValided === "Sim") {
      return "Aprovado";
    } else if (user?.results?.at(-1).isValided === null) {
      return "Aguardando";
    } else {
      return "Reprovado";
    }
  };

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
        <title>Profile</title>
        <meta
          name="Pagina do perfil do usuário"
          content="Primeira pagina do perfil"
        />
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
                {user.name?.split(" ")[0]}
              </Flex>
            </Heading>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="100%"
            py="50px"
            color={"white"}
          >
            <Flex
              w="50%"
              p="30px"
              bg={background}
              borderRadius="20px"
              mr={4}
              h={"23rem"}
              direction="column"
            >
              <Text fontSize="xl" mx="auto" mb={1} fontWeight="bold">
                Último teste - {handleVerify()}
              </Text>
              <LastRadarUser />
            </Flex>
            <Flex
              w="50%"
              p="30px"
              bg={background}
              borderRadius="20px"
              h={"23rem"}
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl" mx="auto" mb={3} fontWeight="bold">
                Informações
              </Text>

              <Flex alignItems={"center"}>
                <Text fontSize="xl" mr={3} color={"gray.300"}>
                  Nome completo:
                </Text>
                <Text>{user.name}</Text>
              </Flex>
              <Flex alignItems={"center"}>
                <Text fontSize="xl" mr={3} color={"gray.300"}>
                  Email:
                </Text>
                <Text>{user.email}</Text>
              </Flex>
              <Flex alignItems={"center"}>
                <Text fontSize="xl" mr={3} color={"gray.300"}>
                  Chapter:
                </Text>
                <Text>{user.chapter ? user.chapter : `...`}</Text>
              </Flex>
              <Flex alignItems={"center"}>
                <Text fontSize="xl" mr={3} color={"gray.300"}>
                  Time:
                </Text>
                <Text>{user.team ? user.team : `...`}</Text>
              </Flex>
              <Flex alignItems={"center"}>
                <Text fontSize="xl" mr={3} color={"gray.300"}>
                  Função:
                </Text>
                <Text>{user.role ? user.role : `...`}</Text>
              </Flex>
              <Flex alignItems={"center"}>
                <Text fontSize="xl" mr={3} color={"gray.300"}>
                  Data de contratação:
                </Text>
                <Text>
                  {`${new Date(user.createdAt).toLocaleDateString()}`}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <AsideMenu direction="column" />
    </Flex>
  );
};

export default Profile;
