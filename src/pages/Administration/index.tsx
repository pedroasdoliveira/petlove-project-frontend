/* eslint-disable react-hooks/exhaustive-deps */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import UserComparisons from "components/Lists/UserComparisons/UserComparisons";
import UserList from "components/Lists/UserList/UserList";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import { useAuth } from "contexts/Auth";
import { useEffect } from "react";
import AllUserList from "components/AllUserList/AllUserList";

const Administration: NextPage = () => {
  const { checkTokenExpiration } = useAuth();

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
      h="100vh"
      w="100vw"
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
      cursor={"default"}
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

        {/* #1 Accordion: Teste dos usuários */}
        <Flex as="section" px={"3%"} w={"100%"} ml="20rem">
          <Accordion w={"calc(100% - 20rem)"} defaultIndex={[0]} allowToggle>
            <AccordionItem w={"100%"} border={"none"}>
              <Flex
                direction={"column"}
                marginBottom={8}
                p={8}
                borderRadius={"15px"}
                bg={background}
                color={"white"}
              >
                <AccordionButton justifyContent={"space-between"}>
                  <Flex direction={"column"} alignItems="start">
                    <Heading as="h3">Testes para validar</Heading>
                  </Flex>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <UserList />
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          </Accordion>
        </Flex>

        <Flex as="section" px={"3%"} w={"100%"} ml="20rem">
          <Accordion w={"calc(100% - 20rem)"} defaultIndex={[0]} allowToggle>
            <AccordionItem w={"100%"} border={"none"}>
              <Flex
                direction={"column"}
                marginBottom={8}
                p={8}
                borderRadius={"15px"}
                bg={background}
                color={"white"}
              >
                <AccordionButton justifyContent={"space-between"}>
                  <Flex direction={"column"} alignItems="start">
                    <Heading as="h3">Usuários</Heading>
                  </Flex>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <AllUserList />
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          </Accordion>
        </Flex>

        {/* #3 Accordion: Comparações entre usuários */}
        <Flex as="section" px={"3%"} w={"100%"} ml="20rem">
          <Accordion w={"calc(100% - 20rem)"} defaultIndex={[0]} allowToggle>
            <AccordionItem w={"100%"} border={"none"}>
              <Flex
                direction={"column"}
                marginBottom={8}
                p={8}
                borderRadius={"15px"}
                bg={background}
                color={"white"}
              >
                <AccordionButton justifyContent={"space-between"}>
                  <Flex direction={"row"} alignItems="start">
                    <Heading as="h3">Comparações</Heading>
                  </Flex>
                  <AccordionIcon w={10} h={10} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Flex direction={"column"} >
                    <UserComparisons />
                  </Flex>
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>

      <AsideMenu direction="column" />
    </Flex>
  );
};

export default Administration;
