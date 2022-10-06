import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AsideMenu from "components/AsideMenu/AsideMenu";
import UserComparisons from "components/Lists/UserComparisons/UserComparisons";
import UserList from "components/Lists/UserList/UserList";
import UserReviews from "components/Lists/UserReviews/UserReviews";
import MenuProfile from "components/MenuProfile/MenuProfile";
import MenuFilter from "components/MenuFilter/MenuFilter";
import type { NextPage } from "next";
import Head from "next/head";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CSSTransition } from 'react-transition-group';
import { useAuth } from "contexts/Auth";
import { useEffect } from "react";

const Administration: NextPage = () => {
  const { checkTokenExpiration } = useAuth();
  useEffect(() => {
    checkTokenExpiration!();
  });

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const [search, setSearch] = useState<string>("");

  const searchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
        <title>Admin</title>
        <meta
          name="Página do administrador"
          content="Página do administrador"
        />
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
                  px={{sm: 3, md: 8}}
                  borderRadius={"15px"}
                  bg={background}
                  color={"white"}
                >
                  <AccordionButton justifyContent={"space-between"} >
                    <Flex direction={"column"} >
                      <Heading as="h3" fontSize={{sm: 'lg', md: 'xl'}}>Testes dos usuários</Heading>
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

          {/* #2 Accordion: Historico de avaliações dos usuários */}
          <Flex as="section" w={"100%"}>
            <Accordion w="100%" defaultIndex={[0]} allowToggle>
              <AccordionItem w={"100%"} border={"none"}>
                <Flex
                  direction={"column"}
                  marginBottom={8}
                  py={8}
                  px={{sm: 3, md: 8}}
                  borderRadius={"15px"}
                  bg={background}
                  color={"white"}
                >
                  <AccordionButton justifyContent={"space-between"}>
                    <Flex direction={"column"} alignItems="start">
                      <Heading as="h3" fontSize={{sm: 'lg', md: 'xl'}}>
                        Historico de avaliações dos usuários
                      </Heading>
                    </Flex>
                    <AccordionIcon w={10} h={10} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <UserReviews />
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
            </Accordion>
          </Flex>

          {/* #3 Accordion: Comparações entre usuários */}
          <Flex as="section" w={"100%"}>
            <Accordion w="100%" defaultIndex={[0]} allowToggle>
              <AccordionItem w={"100%"} border={"none"}>
                <Flex
                  direction={"column"}
                  marginBottom={8}
                  py={8}
                  px={{sm: 3, md: 8}}
                  borderRadius={"15px"}
                  bg={background}
                  color={"white"}
                >
                  <AccordionButton justifyContent={"space-between"}>
                    <Flex direction={"row"} alignItems="start">
                      <Heading fontSize={{sm: 'lg', md: 'xl'}} as="h3">Comparações entre usuários</Heading>
                    </Flex>
                    <AccordionIcon w={10} h={10} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Flex direction={"column"}>
                      <Flex
                        marginTop={4}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-evenly"}
                      >
                        <Input
                          type="text"
                          placeholder="Pesquisar..."
                          w={"250px"}
                          color="white"
                          _placeholder={{
                            color: "#bbbaba",
                          }}
                          value={search}
                          onChange={searchUser}
                        />

                        {/* <Menu>
                        <MenuButton>Filtrar</MenuButton>
                        <MenuList>
                          <MenuItem>Senioriedade</MenuItem>
                          <MenuItem>Equipe</MenuItem>
                        </MenuList>
                      </Menu> */}

                        <MenuFilter />
                      </Flex>
                      <UserComparisons search={search} />
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
