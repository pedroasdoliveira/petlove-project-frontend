import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LineBarAreaComposedChart from "components/Graphics/LineBarAreaComposedChart";
import HistoryList from "components/HistoryList/HistoryList";
import MenuProfile from "components/MenuProfile/MenuProfile";
import { useToggle } from "hooks/useToggle";
import type { NextPage } from "next";
import Head from "next/head";
import { ToggleMode } from "types/interfaces";

const History: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

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
        <title>Histórico do usuário</title>
        <meta
          name="Pagina do histórico do usuário"
          content="Pagina contendo gráficos e informações para o usuário"
        />
      </Head>

      <Flex w="100%" direction={"column"}>
        <MenuProfile path="Histórico" />

        <Flex w={"calc(100% - 20rem)"} h="100%" px="3%" py="2%" ml="20rem">
          <Flex
            direction={"column"}
            p={8}
            borderRadius={"15px"}
            w={"100%"}
            height={"25rem"}
            bg={background}
            color={"white"}
          >
            <Heading as="h3">Sua evolução</Heading>
            <Text>Veja como você está evoluindo em relação a sua função:</Text>

            <Flex w={"100%"} h={"80%"} marginTop={8}>
              <LineBarAreaComposedChart />
            </Flex>
          </Flex>
        </Flex>

        <Flex as="section" px={"3%"} w={"100%"} ml="20rem">
          <Flex
            direction={"column"}
            marginBottom={8}
            p={8}
            borderRadius={"15px"}
            w={"calc(100% - 20rem)"}
            bg={background}
            color={"white"}
          >
            <Heading as="h3">Histórico de evolução</Heading>

            <HistoryList />
          </Flex>
        </Flex>
      </Flex>
      <Button
        onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}
      >
        {toggle ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
};

export default History;
