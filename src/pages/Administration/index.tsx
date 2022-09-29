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
import React, { useState } from 'react';
import AsideMenu from "components/AsideMenu/AsideMenu";
import UserComparisons from "components/Lists/UserComparisons/UserComparisons";
import UserList from "components/Lists/UserList/UserList";
import UserReviews from "components/Lists/UserReviews/UserReviews";
import MenuProfile from "components/MenuProfile/MenuProfile";
import MenuFilter from "components/MenuFilter/MenuFilter"
import type { NextPage } from "next";
import Head from "next/head";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Administration: NextPage = () => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const [search, setSearch] = useState<string>("");
  

    const searchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }

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
                    <Heading as="h3">Testes dos usuários</Heading>
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
                    <Heading as="h3">
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
                    <Heading as="h3">Comparações entre usuários</Heading>
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

      <AsideMenu direction="column" />
    </Flex>
  );
};

export default Administration;
