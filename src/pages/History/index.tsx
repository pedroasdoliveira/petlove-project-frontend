import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading, Text, useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import LineBarAreaComposedChart from "components/Graphics/ComposedChart";
import HistoryList from "components/HistoryList/HistoryList";
import { useToggle } from "hooks/useToggle";
import type { NextPage } from "next";
import Head from "next/head";
import { ToggleMode } from "types/interfaces";

const History: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");
  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");
  const cardsBackground = useColorModeValue("#1d1d3175", "#8e6dd175");

  return (
    <Flex
      as="main"
      width="100vw"
      minHeight="100vh"
      direction={"column"}
      cursor={"default"}
      bg={pageBackground}
    >
      <Head>
        <title>Historico do usuário</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="nav"
        alignItems={"center"}
        w={"100%"}
        h={"65px"}
        py={2}
        position={"fixed"}
        zIndex={1}
        borderBottom={`1px solid ${borderColor}`}
      >
        <Flex
          direction={"row"}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mx={8}
        >
          <Heading as="h2" fontSize={"2xl"} fontWeight="medium">
            Questionario
          </Heading>
          <Flex alignItems={"center"} marginRight={12}>
            <Box
              cursor={"pointer"}
              onClick={() => {
                toggleColorMode();
                setToggle(!toggle);
              }}
            >
              {toggle ? <SunIcon /> : <MoonIcon />}
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        as="section"
        marginTop={"10rem"}
        marginBottom={"3rem"}
        px={8}
        w={"100%"}
        h={"700px"}
      >
        <Flex
          flexWrap={"wrap"}
          direction={"column"}
          p={8}
          border={`1px solid ${borderColor}`}
          borderRadius={"15px"}
          w={"100%"}
          h={"auto"}
          bg={cardsBackground}
        >
          <Heading as="h3">Sua evolução</Heading>
          <Text>Nivel de senioridade</Text>

          <Flex w={"100%"} h={"80%"} marginTop={8}>
            <LineBarAreaComposedChart />
          </Flex>
        </Flex>
      </Flex>

      <Flex as="section" px={12} w={"100%"}>
        <Flex
          flexWrap={"wrap"}
          direction={"column"}
          marginBottom={8}
          p={8}
          border={`1px solid ${borderColor}`}
          borderRadius={"15px"}
          w={"100%"}
          h={"auto"}
          bg={cardsBackground}
        >
          <Heading as="h3">Historico de evolução</Heading>

          <HistoryList />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default History;
