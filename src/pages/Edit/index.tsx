/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import EditForm from "../../components/EditForm/EditForm";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import { useAuth } from "../../contexts/Auth";
import { useUsers } from "../../contexts/Users";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

interface ProfileProps {
  name: string;
}

const Edit: NextPage<ProfileProps> = () => {
  const { checkTokenExpiration } = useAuth();
  const { users, user } = useUsers();
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState(0);

  useEffect(() => {
    checkTokenExpiration?.();
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

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );

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
          <title>({contTest}) Editar - Self Awareness</title>
        ) : (
          <title>Editar - Self Awareness</title>
        )}
        <meta
          name="Pagina de edição de dados do usuário"
          content="Pagina de edição de dados do usuário"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}
        <Flex
          w={{ xl: "20rem", lg: "15rem" }}
          display={{ lg: "flex", sm: "none" }}
          position="fixed"
        >
          <MenuProfile path="Mudar conta" />
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
          <Flex
            p="15px"
            borderRadius="15px"
            bg={background}
            color={"white"}
            justify={{ sm: "center", md: "initial" }}
          >
            <Heading
              fontWeight="normal"
              letterSpacing="tight"
              fontSize={{ sm: "2xl", md: "3xl" }}
            >
              Editar dados{" "}
              <Flex fontWeight="bold" display="inline-flex">
                {user.name?.split(" ")[0]}?
              </Flex>
            </Heading>
          </Flex>

          <Flex
            w="100%"
            p="30px"
            bg={background}
            borderRadius="20px"
            h={"34rem"}
            my="50px"
            flexDir="column"
            justifyContent="space-between"
            color={"white"}
            fontWeight="bold"
          >
            <Text fontSize="xl" mx="auto" mb={3}>
              Informações
            </Text>

            {/* Form */}

            <EditForm />
          </Flex>
        </Flex>
      </Flex>

      <AsideMenu currentPage="Mudar conta" />
    </Flex>
  );
};

export default Edit;
