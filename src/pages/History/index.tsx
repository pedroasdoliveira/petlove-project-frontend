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
import LineBarAreaComposedChart from "components/Graphics/AreaComposedChart";
import HistoryList from "components/HistoryList/HistoryList";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import AllRadarUser from "components/Graphics/AllRadarUser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import OneLineUser from "components/Graphics/OneLineUser";

const History: NextPage = () => {
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
            height={"25rem"}
          >
            <Heading as="h3">Histórico de evolução</Heading>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <AllRadarUser />
              </SwiperSlide>
              <SwiperSlide>
                <OneLineUser subject="Influence"/>
              </SwiperSlide>
              <SwiperSlide>
              <OneLineUser subject="Person"/>
              </SwiperSlide>
              <SwiperSlide>
              <OneLineUser subject="Process"/>
              </SwiperSlide>
              <SwiperSlide>
              <OneLineUser subject="System"/>
              </SwiperSlide>
              <SwiperSlide >
              <OneLineUser subject="Technology"/>
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
