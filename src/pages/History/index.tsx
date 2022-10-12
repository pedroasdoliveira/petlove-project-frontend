/* eslint-disable react-hooks/exhaustive-deps */
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
import AsideMenu from "components/AsideMenu/AsideMenu";
import AreaComposedChart from "components/Graphics/AreaComposedChart";
import HistoryList from "components/Lists/HistoryList/HistoryList";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import AllRadarUser from "components/Graphics/AllRadarUser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import OneLineUser from "components/Graphics/OneLineUser";
import { useAuth } from "contexts/Auth";
import { useEffect } from "react";

const History: NextPage = () => {
  const { checkTokenExpiration } = useAuth();
  useEffect(() => {
    checkTokenExpiration!();
  }, []);

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
              <AreaComposedChart />
            </Flex>
          </Flex>
        </Flex>

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
                    <Heading as="h3">Histórico de evolução</Heading>
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
        <Flex as="section" px={"3%"} w={"100%"} ml="20rem">
          <Flex
            direction={"column"}
            marginBottom={8}
            p={8}
            borderRadius={"15px"}
            w={"calc(100% - 20rem)"}
            bg={background}
            color={"white"}
            height={"35rem"}
          >
            <Heading as="h3">Histórico de evolução em gráfico</Heading>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                  mt={"1rem"}
                  mb={"-1rem"}
                >
                  Radar - Todos os testes
                </Text>
                <AllRadarUser />
              </SwiperSlide>
              <SwiperSlide>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                  mt={"1rem"}
                  mb={"-1rem"}
                >
                  Linha - Todos os testes - Influencia
                </Text>
                <OneLineUser subject="Influence" />
              </SwiperSlide>
              <SwiperSlide>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                  mt={"1rem"}
                  mb={"-1rem"}
                >
                  Linha - Todos os testes - Pessoas
                </Text>
                <OneLineUser subject="Person" />
              </SwiperSlide>
              <SwiperSlide>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                  mt={"1rem"}
                  mb={"-1rem"}
                >
                  Linha - Todos os testes - Processos
                </Text>
                <OneLineUser subject="Process" />
              </SwiperSlide>
              <SwiperSlide>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                  mt={"1rem"}
                  mb={"-1rem"}
                >
                  Linha - Todos os testes - Sistema
                </Text>
                <OneLineUser subject="System" />
              </SwiperSlide>
              <SwiperSlide>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"center"}
                  mt={"1rem"}
                  mb={"-1rem"}
                >
                  Linha - Todos os testes - Tecnologia
                </Text>
                <OneLineUser subject="Technology" />
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
      <AsideMenu direction="column" />
    </Flex>
  );
};

export default History;
