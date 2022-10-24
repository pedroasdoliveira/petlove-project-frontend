import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CheckIcon from "../../../public/icon/Icon_check.svg";
import ClockIcon from "../../../public/icon/Icon_Clock.svg";
import ProfileIcon from "../../../public/icon/Profile_Icon.svg";
import {
  Badge,
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

const Homepage: NextPage = () => {
  const { checkTokenExpiration } = useAuth();
  const { user, users } = useUsers();
  const [image, setImage] = useState("");
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState(0);

  useEffect(() => {
    checkTokenExpiration!();
  }, []);

  useEffect(() => {
    setImage(user?.profilePicture ?? "");
    if (user?.isAdmin) {
      users?.map((user, index) => {
        if (user?.results?.at(-1)?.isValided === null) {
          setNewTest(true);
          setContTest(contTest + 1);
        }
      });
    }
  }, [user]);

  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");
  const textColor = "white";
  const bgCardColor = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
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
          justifyContent={{md: 'space-between', sm: 'center'}}
          alignItems={"center"}
          mx={8}
          color={"white"}
        >
          <Heading display={{md: 'block', sm: 'none'}} as="h2" fontSize={"2xl"} fontWeight="medium" ml={"2"}>
            Questionário
          </Heading>
          <Flex position="absolute" right="300" top="0.2">
            <Image
              src={image ? image : ProfileIcon}
              alt="Imagem de perfil"
              width={"60%"}
              height={"60%"}
              objectFit={"cover"}
              style={{ borderRadius: "50%", background: "#dee0e3" }}
            />
          </Flex>
          {newTest && (
            <Badge
              ml="1"
              colorScheme="green"
              style={{
                position: "absolute",
                top: "2.5rem",
                right: "6.5rem",
                zIndex: 2,
                width: "22px",
                height: "21px",
                borderRadius: "50%",
                background: "red",
                border: "1px solid #fff",
                fontSize: "11px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {contTest > 9 ? "9+" : contTest}
            </Badge>
          )}

          <AsideMenu direction="row"/>
        </Flex>
      </Flex>

      <Flex
        as="section"
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"8rem"}
        marginBottom={"5rem"}
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
          Faça um teste agora mesmo
        </Text>
      </Flex>

        <Grid templateColumns={{lg: "repeat(3, 1fr)", sm: "repeat(1, 1fr)"}} gap={8} my={12}>
          <GridItem
            bg={bgCardColor}
            w={{lg: "285px", md: '500px', sm:'285px'}}
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
              <Image src={CheckIcon} width={"60px"} height={"60px"} />

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
            w={{lg: "285px", md: '500px', sm:'285px'}}
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
              <Image src={ClockIcon} width={"60px"} height={"60px"} />

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
            w={{lg: "285px", md: '500px', sm:'285px'}}
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
              <Image src={ProfileIcon} width={"60px"} height={"60px"} />

              <Text textAlign={"center"} color={textColor} lineHeight={"165%"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                vitae ullam odit voluptates id explicabo aperiam saepe ipsa,
                magnam, esse voluptas! Accusantium adipisci optio recusandae?
                Nam nostrum velit vitae autem.
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
