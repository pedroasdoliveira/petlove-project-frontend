import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import AreaComposedChart from "../../components/Graphics/AreaComposedChart";
import HistoryList from "../../components/Lists/HistoryList/HistoryList";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import AllRadarUser from "../../components/Graphics/AllRadarUser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import OneLineUser from "../../components/Graphics/OneLineUser";
import { useAuth } from "../../contexts/Auth";
import { useEffect, useState } from "react";
import { useUsers } from "../../contexts/Users";
import { UserTypes } from "types/interfaces";

const History: NextPage = () => {
  const { checkTokenExpiration, logged } = useAuth();
  const { handleGetUsers, users, user } = useUsers();
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState<number>();

  useEffect(() => {
    checkTokenExpiration?.();
  }, []);

  useEffect(() => {
    if (logged) handleGetUsers?.();
  }, [logged]);

  useEffect(() => {
    if (user?.isAdmin) {
      handleContTest();
    }
  }, [user && user.isAdmin]);

  const handleContTest = () => {
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
  };

  const background = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, 95) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
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
    >
      <Head>
        {newTest ? (
          <title>({contTest}) Histórico do usuário - Self Awareness</title>
        ) : (
          <title>Histórico do usuário - Self Awareness</title>
        )}
        <meta
          name="Pagina do histórico do usuário"
          content="Pagina contendo gráficos e informações para o usuário"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex w="100%">
        {/* Menu User */}
        <Flex
          w={{ xl: "20rem", lg: "15rem" }}
          display={{ lg: "flex", sm: "none" }}
          position="fixed"
        >
          <MenuProfile path="Histórico" />
        </Flex>

        {/* Content */}
        <Flex
          ml={{ xl: "350px", lg: "230px" }}
          mr={{ lg: "30px", md: "60px" }}
          w={{ xl: "calc(100% - 20rem)", lg: "80%", sm: "100%" }}
          flexDir="column"
          px="3%"
          py={{ sm: "20%", md: "2%" }}
        >
          <Flex
            direction={"column"}
            py={8}
            px={{ sm: 3, md: 8 }}
            borderRadius={"15px"}
            w={"100%"}
            bg={background}
            color={"white"}
            mb={8}
          >
            <Heading as="h3" mb={4} fontSize={{ sm: "lg", md: "xl" }}>
              Sua evolução
            </Heading>
            <Text>Veja como você está evoluindo em relação a sua função:</Text>

            <Flex marginTop={12} h="15rem">
              <AreaComposedChart />
            </Flex>
          </Flex>

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
                        Histórico de evolução
                      </Heading>
                      <Text>Tabela com as suas evoluções</Text>
                    </Flex>
                    <AccordionIcon w={10} h={10} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <HistoryList />
                  </AccordionPanel>
                </Flex>
              </AccordionItem>
            </Accordion>
          </Flex>

          <Flex as="section" w={"100%"}>
            <Flex
              direction={"column"}
              marginBottom={8}
              py={8}
              px={{ sm: 3, md: 8 }}
              borderRadius={"15px"}
              w="100%"
              bg={background}
              color={"white"}
            >
              <Heading
                as="h3"
                fontSize={{ sm: "lg", md: "xl" }}
                textAlign="center"
              >
                Histórico de evolução em gráficos
              </Heading>

              <Swiper
                navigation={true}
                modules={[Navigation]}
                style={{ width: "100%", height: "100%" }}
              >
                <SwiperSlide>
                  <Text
                    fontSize={{ md: "1.5rem", sm: "1rem" }}
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"center"}
                    mt={"1rem"}
                    mb={"0rem"}
                  >
                    Radar - Todos os testes
                  </Text>
                  <AllRadarUser />
                </SwiperSlide>
                <SwiperSlide>
                  <Text
                    fontSize={{ md: "1.5rem", sm: "1rem" }}
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"center"}
                    mt={"1rem"}
                    mb={"-0.5rem"}
                  >
                    Linha - Todos os testes - Influencia
                  </Text>
                  <OneLineUser subject="Influence" />
                </SwiperSlide>
                <SwiperSlide>
                  <Text
                    fontSize={{ md: "1.5rem", sm: "1rem" }}
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"center"}
                    mt={"1rem"}
                    mb={"-0.5rem"}
                  >
                    Linha - Todos os testes - Pessoas
                  </Text>
                  <OneLineUser subject="Person" />
                </SwiperSlide>
                <SwiperSlide>
                  <Text
                    fontSize={{ md: "1.5rem", sm: "1rem" }}
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"center"}
                    mt={"1rem"}
                    mb={"-0.5rem"}
                  >
                    Linha - Todos os testes - Processos
                  </Text>
                  <OneLineUser subject="Process" />
                </SwiperSlide>
                <SwiperSlide>
                  <Text
                    fontSize={{ md: "1.5rem", sm: "1rem" }}
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"center"}
                    mt={"1rem"}
                    mb={"-0.5rem"}
                  >
                    Linha - Todos os testes - Sistema
                  </Text>
                  <OneLineUser subject="System" />
                </SwiperSlide>
                <SwiperSlide>
                  <Text
                    fontSize={{ md: "1.5rem", sm: "1rem" }}
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"center"}
                    mt={"1rem"}
                    mb={"-0.5rem"}
                  >
                    Linha - Todos os testes - Tecnologia
                  </Text>
                  <OneLineUser subject="Technology" />
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <AsideMenu currentPage="Histórico" />
    </Flex>
  );
};

export default History;
