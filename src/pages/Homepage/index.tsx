/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import * as Style from "./style";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";
import DefaultButton from "components/Button/Button";

const Homepage: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");
  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");
  const textColor = useColorModeValue("#2D3748", "#CBD5E0");
  const bgCardColor = useColorModeValue("#f4f5f9", "#000");
  const shadowColor = useColorModeValue("#1d1d31", "#8e6dd1");

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
          mx={8}
        >
          <Heading as="h2" fontSize={"2xl"} fontWeight="medium">
            Questionario
          </Heading>
          <Flex gap={16} alignItems={"center"}>
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

        <Text
          marginTop={6}
          fontSize={"xl"}
          fontWeight="normal"
          color={textColor}
        >
          Faça um teste agora mesmo
        </Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={8} my={12}>
          <GridItem
            bg={bgCardColor}
            w={"285px"}
            h={"340px"}
            borderRadius={"15px"}
            boxShadow={`10px 5px 15px ${shadowColor}`}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
              wrap={"wrap"}
              p={4}
              w="full"
              h="full"
            >
              <Image
                src="/public/icon/Icon_check.svg"
                width={"20px"}
                height={"20px"}
              />

              <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                vitae ullam odit voluptates id explicabo aperiam saepe ipsa,
                magnam, esse voluptas! Accusantium adipisci optio recusandae?
                Nam nostrum velit vitae autem.
              </Text>
            </Flex>
          </GridItem>

          <GridItem
            bg={bgCardColor}
            w={"285px"}
            h={"340px"}
            borderRadius={"15px"}
            boxShadow={`10px 5px 15px ${shadowColor}`}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
              wrap={"wrap"}
              p={4}
              w="full"
              h="full"
            >
              <Image
                src="/public/icon/Icon_check.svg"
                width={"20px"}
                height={"20px"}
              />

              <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                vitae ullam odit voluptates id explicabo aperiam saepe ipsa,
                magnam, esse voluptas! Accusantium adipisci optio recusandae?
                Nam nostrum velit vitae autem.
              </Text>
            </Flex>
          </GridItem>

          <GridItem
            bg={bgCardColor}
            w={"285px"}
            h={"340px"}
            borderRadius={"15px"}
            boxShadow={`10px 5px 15px ${shadowColor}`}
          >
            <Flex
              direction={"column"}
              alignItems={"center"}
              justifyContent={"space-around"}
              wrap={"wrap"}
              p={4}
              w="full"
              h="full"
            >
              <Image
                src="/public/icon/Icon_check.svg"
                width={"20px"}
                height={"20px"}
              />

              <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                vitae ullam odit voluptates id explicabo aperiam saepe ipsa,
                magnam, esse voluptas! Accusantium adipisci optio recusandae?
                Nam nostrum velit vitae autem.
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        <DefaultButton />
      </Flex>
    </Flex>
  );
};

export default Homepage;
