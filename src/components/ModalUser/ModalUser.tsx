import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import ComparisonBarUser from "../../components/Graphics/ComparisonBarUser";
import ComparisonRadarUser from "../../components/Graphics/ComparisonRadarUser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ModalUser = ({ value }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonColor = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgb(59, 72, 218) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgb(10, 14, 35) 100%)"
  );

  const colorModal = useColorModeValue("whiteAlpha", "yellow");

  return (
    <>
      <Button
        width={{ sm: "100%", md: "45%" }}
        onClick={onOpen}
        background={buttonColor}
      >
        Detalhes
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent
          w={"100%"}
          h={"70%"}
          background={background}
          color={"gray.100"}
        >
          <ModalHeader>Comparação em gráficos</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={"100%"} h={"100%"}>
            <Tabs
              variant="enclosed"
              mt={"-1rem"}
              w={"100%"}
              h={"93%"}
              colorScheme={colorModal}
            >
              <TabList>
                <Tab>Radar</Tab>
                <Tab>Barras</Tab>
              </TabList>
              <TabPanels w={"100%"} h={"100%"}>
                <TabPanel w={"100%"} h={"100%"}>
                  <Flex
                    w={"100%"}
                    h="100%"
                    style={{
                      background: "rgba(6, 11, 40, 0.94)",
                      borderRadius: "10px",
                    }}
                    direction={"column"}
                  >
                    <Text
                      fontSize={"1.5rem"}
                      fontWeight={"bold"}
                      color={"white"}
                      textAlign={"center"}
                      mt={"1rem"}
                      mb={"-1rem"}
                    >
                      Radar
                    </Text>
                    <ComparisonRadarUser value={value} />
                  </Flex>
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"}>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <SwiperSlide>
                      <Flex
                        justifyContent={"center"}
                        w="100%"
                        h="100%"
                        alignItems={"center"}
                        style={{
                          background: "rgba(6, 11, 40, 0.94)",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex w="80%" h="100%">
                          <ComparisonBarUser
                            value={value}
                            subject="Influence"
                          />
                        </Flex>
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex
                        justifyContent={"center"}
                        w="100%"
                        h="100%"
                        alignItems={"center"}
                        style={{
                          background: "rgba(6, 11, 40, 0.94)",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex w="80%" h="100%">
                          <ComparisonBarUser value={value} subject="Person" />
                        </Flex>
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex
                        justifyContent={"center"}
                        w="100%"
                        h="100%"
                        alignItems={"center"}
                        style={{
                          background: "rgba(6, 11, 40, 0.94)",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex w="80%" h="100%">
                          <ComparisonBarUser value={value} subject="Process" />
                        </Flex>
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex
                        justifyContent={"center"}
                        w="100%"
                        h="100%"
                        alignItems={"center"}
                        style={{
                          background: "rgba(6, 11, 40, 0.94)",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex w="80%" h="100%">
                          <ComparisonBarUser value={value} subject="System" />
                        </Flex>
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex
                        justifyContent={"center"}
                        w="100%"
                        h="100%"
                        alignItems={"center"}
                        style={{
                          background: "rgba(6, 11, 40, 0.94)",
                          borderRadius: "10px",
                        }}
                      >
                        <Flex w="80%" h="100%">
                          <ComparisonBarUser
                            value={value}
                            subject="Technology"
                          />
                        </Flex>
                      </Flex>
                    </SwiperSlide>
                  </Swiper>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUser;
