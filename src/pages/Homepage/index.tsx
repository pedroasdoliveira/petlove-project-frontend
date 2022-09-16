import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import * as Style from "./style";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";

const Homepage: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");
  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");

  return (
    <Flex
      as="main"
      bg={pageBackground}
      h={"100%"}
      w={"100%"}
      direction={"column"}
      cursor={"default"}
    >
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/public/favicon.ico" />
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
          mx={6}
        >
          <Heading as="h2" fontSize={"2xl"} fontWeight="medium">
            Questionario
          </Heading>
          <Flex gap={12} alignItems={"center"}>
            <Heading as="h2" fontSize={"2xl"} fontWeight="medium">
              Sobre
            </Heading>
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
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"5rem"}
      >
        <Heading as="h1" fontSize={"3xl"} fontWeight="bold">
          Avalie suas capacidades!
        </Heading>

        <Text my={6} fontSize={"xl"} fontWeight="normal">
          Faça um teste agora mesmo
        </Text>
      </Flex>
    </Flex>
  );
};

export default Homepage;
