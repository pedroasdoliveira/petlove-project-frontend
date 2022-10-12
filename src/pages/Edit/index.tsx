/* eslint-disable react-hooks/exhaustive-deps */
import {
  Flex, Heading, Text,
  useColorModeValue
} from "@chakra-ui/react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import EditForm from "components/EditForm/EditForm";
import MenuProfile from "components/MenuProfile/MenuProfile";
import { useAuth } from "contexts/Auth";
import { useUsers } from "contexts/Users";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

interface ProfileProps {
  name: string;
}

const Edit: NextPage<ProfileProps> = () => {
  const { checkTokenExpiration } = useAuth();
  const { user } = useUsers();
  useEffect(() => {
    checkTokenExpiration!();
  }, []);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

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
        <title>Editar</title>
        <meta
          name="Pagina de edição de dados do usuário"
          content="Pagina de edição de dados do usuário"
        />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}
        <MenuProfile path="Mudar conta" />

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
              Editar dados {" "}
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

      <AsideMenu direction="column"/>
    </Flex>
  );
};

export default Edit;