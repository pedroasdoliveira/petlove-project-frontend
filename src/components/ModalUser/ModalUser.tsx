import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import ComparisonBarUser from "components/Graphics/ComparisonBarUser";
import ComparisonRadarUser from "components/Graphics/ComparisonRadarUser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const ModalUser = ({ value }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button width={"50%"} onClick={onOpen}>
        Detalhes
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent w={"100%"} h={"70%"}>
          <ModalHeader>Comparação</ModalHeader>
          <ModalCloseButton />
          <ModalBody w={"100%"} h={"100%"}>
            <Tabs variant="enclosed" mt={"-1rem"} w={"100%"} h={"93%"}>
              <TabList>
                <Tab>Radar</Tab>
                <Tab>Barras</Tab>
              </TabList>
              <TabPanels w={"100%"} h={"100%"}>
                <TabPanel w={"100%"} h={"100%"}>
                  <ComparisonRadarUser valueId={value.id} />
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"}>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <SwiperSlide>
                      <Flex justifyContent={"center"} w="90%" h="100%">
                        <ComparisonBarUser
                          valueId={value.id}
                          subject="Influence"
                        />
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex justifyContent={"center"} w="90%" h="100%">
                        <ComparisonBarUser
                          valueId={value.id}
                          subject="Person"
                        />
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex justifyContent={"center"} w="90%" h="100%">
                        <ComparisonBarUser
                          valueId={value.id}
                          subject="Process"
                        />
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex justifyContent={"center"} w="90%" h="100%">
                        <ComparisonBarUser
                          valueId={value.id}
                          subject="System"
                        />
                      </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Flex justifyContent={"center"} w="90%" h="100%">
                        <ComparisonBarUser
                          valueId={value.id}
                          subject="Technology"
                        />
                      </Flex>
                    </SwiperSlide>
                  </Swiper>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalUser;
