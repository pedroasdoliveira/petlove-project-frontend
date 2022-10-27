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
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import UserComparisons from "../../components/Lists/UserComparisons/UserComparisons";
import UserList from "../../components/Lists/UserList/UserList";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import { useAuth } from "../../contexts/Auth";
import { useEffect } from "react";
import AllUserList from "../../components/AllUserList/AllUserList";
import { useUsers } from "../../contexts/Users";

const Administration: NextPage = () => {
  const { checkTokenExpiration, logged } = useAuth();
  const { handleGetUsers } = useUsers();

  useEffect(() => {
    checkTokenExpiration?.();
  }, []);

  useEffect(() => {
    if (logged) handleGetUsers?.();
  }, [logged]);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, .40) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
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
      cursor="default"
    >
      <Head>
        <title>Admin - Self Awareness</title>
        <meta
          name="Página do administrador"
          content="Página do administrador"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex w={"100%"}>
        <Flex
          w={{ xl: "20rem", lg: "15rem" }}
          display={{ lg: "flex", sm: "none" }}
          position="fixed"
        >
          <MenuProfile path="Administrador" />
        </Flex>

        <Flex
          ml={{ xl: "350px", lg: "230px" }}
          mr={{ lg: "30px", md: "60px" }}
          w={{ xl: "calc(100% - 20rem)", lg: "80%", sm: "100%" }}
          flexDir="column"
          px="3%"
          py={{ sm: "20%", md: "2%" }}
        >
          {/* #1 Accordion: Teste dos usuários */}

          <Flex as="section" w={"100%"}>
            <Accordion w="100%" defaultIndex={[0]} allowToggle>
              <AccordionItem w={"100%"} border={"none"}>
                <Flex
                  direction={"column"}
                  marginBottom={8}
                  py={8}
                  px={{ sm: 3, md: 8 }}
                  borderRadius={"15px"}
                  bg={background}
                  color={"white"}
                >
                  <AccordionButton justifyContent={"space-between"}>
                    <Flex direction={"column"} alignItems="start">
                      <Heading as="h3" fontSize={{ sm: "lg", md: "xl" }}>
                        Testes para validar
                      </Heading>
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

          <Flex as="section" w={"100%"}>
            <Accordion w={"100%"} defaultIndex={[0]} allowToggle>
              <AccordionItem w={"100%"} border={"none"}>
                <Flex
                  direction={"column"}
                  marginBottom={8}
                  py={8}
                  px={{ sm: 3, md: 8 }}
                  borderRadius={"15px"}
                  bg={background}
                  color={"white"}
                >
                  <AccordionButton justifyContent={"space-between"}>
                    <Flex direction={"column"} alignItems="start">
                      <Heading as="h3" fontSize={{ sm: "lg", md: "xl" }}>
                        Usuários
                      </Heading>
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
          <Flex as="section" w={"100%"}>
            <Accordion w={"100%"} defaultIndex={[0]} allowToggle>
              <AccordionItem w={"100%"} border={"none"}>
                <Flex
                  direction={"column"}
                  marginBottom={8}
                  py={8}
                  px={{ sm: 3, md: 8 }}
                  borderRadius={"15px"}
                  bg={background}
                  color={"white"}
                >
                  <AccordionButton justifyContent={"space-between"}>
                    <Flex direction={"row"} alignItems="start">
                      <Heading as="h3" fontSize={{ sm: "lg", md: "xl" }}>Comparações</Heading>
                    </Flex>
                    <AccordionIcon w={10} h={10} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Flex direction={"column"}>
                      <UserComparisons />
                    </Flex>
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
            </Accordion>
          </Flex>
        </Flex>

      </Flex>
      <AsideMenu currentPage="Administrador" />
    </Flex>
  );
};

export default Administration;
