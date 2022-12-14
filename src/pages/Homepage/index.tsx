/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CheckIcon from "../../../public/icon/Icon_check.svg";
import ClockIcon from "../../../public/icon/Icon_Clock.svg";
import ProfileIcon from "../../../public/icon/Profile_Icon.svg";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultButton from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useAuth } from "../../contexts/Auth";
import { useUsers } from "../../contexts/Users";
import { UserTypes } from "types/interfaces";

const Homepage: NextPage = () => {
  const { checkTokenExpiration, logged } = useAuth();
  const { user, users, handleGetUsers } = useUsers();
  const [image, setImage] = useState("");
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState<number>();

  useEffect(() => {
    checkTokenExpiration?.();
    handleGetUsers?.();
  }, []);

  useEffect(() => {
    setImage(user?.profilePicture ?? "");
    if (user?.isAdmin) {
      const badgeNumber = users?.reduce(
        (acc: number, user: UserTypes): number => {
          if (user?.results?.at(-1)?.isValided === null) {
            setNewTest(true);
            return acc + 1;
          }
          return acc;
        },
        0 as number
      );

      setContTest(badgeNumber);
    }
  }, [user]);

  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");
  const textColor = "white";
  const bgCardColor = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, .40) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );
  const shadowColor = useColorModeValue("#1d1d31", "#8e6dd1");

  return (
    <Flex
      as="main"
      minH={"100vh"}
      w={"100vw"}
      direction={"column"}
      cursor={"default"}
      alignItems={"center"}
    >
      <Head>
        {newTest ? (
          <title>({contTest}) Homepage - Self Awareness</title>
        ) : (
          <title>Homepage - Self Awareness</title>
        )}
        <meta name="description" content="Homepage" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex
        as="nav"
        alignItems={"center"}
        w={"90%"}
        h={"4rem"}
        py={2}
        position={"fixed"}
        zIndex={1}
        backdropFilter={"blur(42px)"}
        mt={5}
        border={`1px solid ${borderColor}`}
        borderRadius={"10px"}
      >
        <Flex
          direction={"row"}
          w={"100%"}
          h={"100%"}
          justifyContent={{ md: "space-between", sm: "center" }}
          alignItems={"center"}
          mx={3}
          color={"white"}
        >
          <Heading
            display={{ md: "block", sm: "none" }}
            as="h2"
            fontSize={"2xl"}
            fontWeight="medium"
            ml={"2"}
          >
            {"<"}Self Awareness {"/>"}
          </Heading>
          <Flex position="absolute" right={{ md: "310", sm: "-6" }} top="0.2">
            <Image
              src={image ? image : ProfileIcon}
              alt="Imagem de perfil"
              width={"60%"}
              height={"60%"}
              objectFit={"cover"}
              style={{ borderRadius: "50%", background: "#dee0e3" }}
            />
          </Flex>

          <AsideMenu direction="row" />
        </Flex>
      </Flex>

      <Flex
        as="section"
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"8rem"}
        marginBottom={"3rem"}
      >
        <Heading as="h1" fontSize={"4xl"} fontWeight="bold" textAlign="center">
          Avalie suas capacidades!
        </Heading>

        <Text
          marginTop={6}
          fontSize={"xl"}
          fontWeight="normal"
          color={textColor}
        >
          Descubra o seu potencial
        </Text>
      </Flex>

      <Grid
        templateColumns={{ lg: "repeat(3, 1fr)", sm: "repeat(1, 1fr)" }}
        gap={8}
        mb={12}
      >
        <GridItem
          bg={bgCardColor}
          w={{ lg: "285px", md: "500px", sm: "285px" }}
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
              alt="check icon"
              src={CheckIcon}
              width={"60px"}
              height={"60px"}
            />

            <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
              Testes suas compet??ncias e capacidades como profissional e avalie
              seus pontos de melhoria para a sua evolu????o.
            </Text>
          </Flex>
        </GridItem>

        <GridItem
          bg={bgCardColor}
          w={{ lg: "285px", md: "500px", sm: "285px" }}
          h={"340px"}
          borderRadius={"15px"}
          boxShadow={`9px 5px 15px ${shadowColor}`}
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
              alt="clock icon"
              src={ClockIcon}
              width={"60px"}
              height={"60px"}
            />

            <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
              Tenha acesso ao seu hist??rico de evolu????o profissional de forma r??pida com os
              comparativos em gr??ficos.
            </Text>
          </Flex>
        </GridItem>

        <GridItem
          bg={bgCardColor}
          w={{ lg: "285px", md: "500px", sm: "285px" }}
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
              alt="profile icon"
              src={ProfileIcon}
              width={"60px"}
              height={"60px"}
            />

            <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
              Administradores tem acesso a diferentes fun????es sobre os usu??rios
              cadastrados, desde o hist??rico de evolu????o, valida????o de testes, at?? a edi????o de cada
              time e usu??rio.
            </Text>
          </Flex>
        </GridItem>
      </Grid>

      <DefaultButton valueButton="Realizar teste" />

      <Footer />
    </Flex>
  );
};

export default Homepage;
