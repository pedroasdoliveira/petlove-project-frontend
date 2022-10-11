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
  });

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
      px={{ xl: "5rem", lg: "1.5rem" }}
      py="30px"
      justifyContent={{ sm: "center", md: "space-between" }}
      position="relative"
    >
      <Head>
        <title>Histórico do usuário</title>
        <meta
          name="Pagina do histórico do usuário"
          content="Pagina contendo gráficos e informações para o usuário"
        />
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
              height={"25rem"}
            >
              <Heading as="h3" fontSize={{ sm: "lg", md: "xl" }}>
                Histórico de evolução
              </Heading>

              <Swiper
                navigation={true}
                modules={[Navigation]}
                style={{ width: "100%", height: "100%" }}
              >
                <SwiperSlide>
                  <AllRadarUser />
                </SwiperSlide>
                <SwiperSlide>
                  <OneLineUser subject="Influence" />
                </SwiperSlide>
                <SwiperSlide>
                  <OneLineUser subject="Person" />
                </SwiperSlide>
                <SwiperSlide>
                  <OneLineUser subject="Process" />
                </SwiperSlide>
                <SwiperSlide>
                  <OneLineUser subject="System" />
                </SwiperSlide>
                <SwiperSlide>
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
