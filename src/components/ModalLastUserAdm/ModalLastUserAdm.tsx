import {
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { obj, specialities } from "components/obj/obj";
import StepsAdmForm from "components/StepsAdm/StepsAdm";
import LastRadarUserAdm from "components/Graphics/LastRadarUserAdm";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AllRadarUserAdm from "components/Graphics/AllRadarUserAdm";
import OneLineUserAdm from "components/Graphics/OneLineUserAdm";
import AreaComposedChartAdm from "components/Graphics/AreaComposedChartAdm";
import AllRadarSpecialityAdm from "components/Graphics/AllRadarSpecialityAdm";
import toast from "react-hot-toast";

const ModalLastUserAdm = ({ value, user }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const questions = [
    { label: "Sistemas", Content: obj.sistemas },
    { label: "Processos", Content: obj.processos },
    { label: "Pessoas", Content: obj.pessoas },
    { label: "Ferramentarias", Content: obj.ferramentarias },
    { label: "Design", Content: obj.designs },
    { label: "Teste", Content: obj.testes },
    { label: "Computacionais", Content: obj.computacionais },
  ];

  const [userEspeciality, setUserEspeciality] = useState("");
  const [userValidate, setUserValidate] = useState("");
  const [userTest, setUserTest] = useState("" as any);

  useEffect(() => {
    setUserTest(value);
  }, [isOpen, value]);

  const handleUserEspeciality = (event: any) => {
    setUserEspeciality(event.target.value);
  };

  const handleUserValidate = (event: any) => {
    setUserValidate(event.target.value);
  };

  const handleUserTest = (event: any) => {

    if (event.target.value > 5 || event.target.value < 0) {
      toast.error("A nota deve ser entre 0 e 5");
      return;
    }
    setUserTest(event.target.value);
  };

  const respostas = {
    Sistemas: 0,
    Processos: 0,
    Pessoas: 0,
    Ferramentarias: 0,
    Design: 0,
    Teste: 0,
    Computacionais: 0,
  };

  const handleResetRespostas = () => {
    respostas.Sistemas = 0;
    respostas.Processos = 0;
    respostas.Pessoas = 0;
    respostas.Ferramentarias = 0;
    respostas.Design = 0;
    respostas.Teste = 0;
    respostas.Computacionais = 0;
  };

  return (
    <>
      <Button width={"50%"} onClick={onOpen}>
        <ExternalLinkIcon w={"25px"} h={"25px"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent w={"100%"} h={"80%"}>
          <ModalHeader display={"flex"} flexDirection={"row"} gap="1rem">
            <Text>{user.name}</Text>
            {user.role === null ? (
              <Text fontSize={"17px"} color="gray">
                Contratado
              </Text>
            ) : (
              <Text fontSize={"17px"} color="gray">
                {user.role}
              </Text>
            )}
            <Text fontSize={"17px"} color="gray">
              {user.team}
            </Text>
            <Text fontSize={"17px"} color="gray">
              {user.chapter}
            </Text>
            <Text fontSize={"17px"} color="gray">
              {user.email}
            </Text>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody w={"100%"} h={"80%"}>
            <Tabs variant="enclosed" mt={"-1rem"} w={"100%"} h={"93%"}>
              <TabList justifyContent={"space-between"}>
                <Flex>
                  <Tab>Dados gerais</Tab>
                  <Tab>Comparação Especialidades</Tab>
                </Flex>
                <Flex>
                  <Tab>Editar teste</Tab>
                  <Tab>Refazer teste</Tab>
                </Flex>
              </TabList>
              <TabPanels w={"100%"} h={"100%"}>
                <TabPanel w={"100%"} h={"100%"} overflowY="auto">
                  <Flex
                    w={"100%"}
                    h={"100%"}
                    gap="5rem"
                    justifyContent={"center"}
                    alignItems="end"
                  >
                    <Flex w={"58%"} h={"100%"} direction="column">
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Teste a ser validado
                          </Text>
                          <LastRadarUserAdm testUser={value} type="user" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Todos os testes - Radar
                          </Text>
                          <AllRadarUserAdm user={user} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Todos os testes - Função - Linha
                          </Text>
                          <Flex w={"100%"} h="100%" justifyContent={"center"}>
                            <AreaComposedChartAdm user={user} />
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Evolução - Sistema
                          </Text>
                          <Flex w={"100%"} h="100%" justifyContent={"center"}>
                            <OneLineUserAdm subject="System" user={user} />
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Evolução - Processos
                          </Text>
                          <OneLineUserAdm subject="Process" user={user} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Evolução - Pessoas
                          </Text>
                          <OneLineUserAdm subject="Person" user={user} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Evolução - Tecnologia
                          </Text>
                          <OneLineUserAdm subject="Technology" user={user} />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Text
                            fontSize="xl"
                            mx="auto"
                            mb={1}
                            textAlign="center"
                          >
                            Evolução - Influencia
                          </Text>
                          <OneLineUserAdm subject="Influence" user={user} />
                        </SwiperSlide>
                      </Swiper>
                    </Flex>
                    <Divider orientation="vertical" mx={"-2.4rem"} />
                    <Flex
                      direction={"column"}
                      w={"40%"}
                      h={"100%"}
                      justifyContent={"space-between"}
                      overflowY="auto"
                      alignItems={"center"}
                    >
                      <Flex direction={"column"}>
                        <Text mb={"1rem"}>Testes realizados:</Text>
                        <TableContainer
                          border="1px solid gray"
                          borderRadius={"10px"}
                        >
                          <Table variant={"striped"}>
                            <Thead>
                              <Tr>
                                <Th>Data</Th>
                                <Th>Função</Th>
                                <Th>Aprovação</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {user.results.map((result: any) => (
                                <Tr key={result.id}>
                                  <Th color={"white"}>{result.createdAt}</Th>
                                  <Th color={"white"}>{result.nextRole}</Th>
                                  <Th color={"white"}>
                                    {result.isValide === "null"
                                      ? "Aguardando"
                                      : result.isValide}
                                  </Th>
                                </Tr>
                              ))}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Flex>
                      <Flex direction={"column"} mt={"1.5rem"}>
                        <Text>Nova função:</Text>
                        <Flex gap={"1rem"} w="100%" mt={"0.5rem"}>
                          <Select
                            isRequired={true}
                            defaultValue={value.nextRole}
                            onChange={handleUserEspeciality}
                            w={"35%"}
                          >
                            {specialities.map((speciality) => (
                              <option
                                key={speciality.id}
                                value={speciality.name}
                              >
                                {speciality.name}
                              </option>
                            ))}
                          </Select>
                          <Select
                            isRequired={true}
                            onChange={handleUserValidate}
                            defaultValue={"null"}
                            w={"35%"}
                          >
                            <option disabled={true} value={"null"}>
                              Aprovado?
                            </option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                          </Select>

                          <Button
                            onClick={() => {
                              // mostrar role que o usuario selecionou no select, no caso agora so conectar com api
                              if (userValidate !== "null") {
                                console.log(userEspeciality, value.userId);
                              }
                            }}
                          >
                            Validar
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"}>
                  <Flex
                    w={"100%"}
                    h="100%"
                    direction={"column"}
                    alignItems="center"
                  >
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <SwiperSlide style={{ width: "100%", height: "100%" }}>
                        <Text
                          position={"absolute"}
                          textAlign="center"
                          w={"100%"}
                        >
                          Teste recente e todas especialidades
                        </Text>

                        <AllRadarSpecialityAdm user={user} />
                      </SwiperSlide>

                      {specialities.map((speciality) => (
                        <SwiperSlide key={speciality.id}>
                          <Flex w={"100%"} h="90%" justifyContent="center">
                            <Flex w={"50%"} h="100%">
                              <Flex
                                w={"100%"}
                                h="100%"
                                direction={"column"}
                                alignItems="center"
                              >
                                <Text>Teste recente - {value.nextRole}</Text>
                                <LastRadarUserAdm
                                  testUser={value}
                                  type="user"
                                />
                              </Flex>
                            </Flex>
                            <Flex w={"50%"} h="100%">
                              <Flex
                                w={"100%"}
                                h="100%"
                                direction={"column"}
                                alignItems="center"
                              >
                                <Text>Estimativa - {speciality.name}</Text>
                                <LastRadarUserAdm
                                  testUser={speciality}
                                  type="specialities"
                                />
                              </Flex>
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Flex w={"100%"} h="10%">
                      <Flex
                        gap={"1rem"}
                        w="100%"
                        mt={"0.5rem"}
                        justifyContent="end"
                        textAlign={"center"}
                        alignItems="center"
                      >
                        <Text w="16%">Nova função:</Text>
                        <Select
                          isRequired={true}
                          onChange={handleUserEspeciality}
                          defaultValue={value.nextRole}
                          w={"12%"}
                        >
                          {specialities.map((speciality) => (
                            <option key={speciality.id} value={speciality.name}>
                              {speciality.name}
                            </option>
                          ))}
                        </Select>
                        <Select
                          isRequired={true}
                          onChange={handleUserValidate}
                          defaultValue={"null"}
                          w={"12%"}
                        >
                          <option disabled={true} value={"null"}>
                            Aprovado?
                          </option>
                          <option value="Sim">Sim</option>
                          <option value="Não">Não</option>
                        </Select>

                        <Button
                          onClick={() => {
                            // mostrar role que o usuario selecionou no select, no caso agora so conectar com api
                            if (userValidate !== "null") {
                              console.log(userEspeciality, value.userId);
                            }
                          }}
                        >
                          Validar
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"} textAlign="center" display={"flex"}>
                  <Flex flexDirection="column" gap={"1.5rem"} w="50%">
                  <Text fontSize="1.5rem" fontWeight={"bold"}>Teste recente</Text>
                  <Flex w={"100%"} alignItems="center" justifyContent={"center"} gap="0.5rem">
                    <Text fontWeight={"bold"}>Sistema:</Text>
                    <Input
                      onChange={handleUserTest}
                      value={userTest.system}
                      type="number"
                      w="20%"
                    />
                  </Flex>
                  <Flex w={"100%"} alignItems="center" justifyContent={"center"} gap="0.5rem">
                    <Text fontWeight={"bold"}>Pessoa:</Text>

                    <Input
                      onChange={handleUserTest}
                      value={userTest.person}
                      type="number"
                      w="20%"
                    />
                  </Flex>
                  <Flex w={"100%"} alignItems="center" justifyContent={"center"} gap="0.5rem">
                    <Text fontWeight={"bold"}>Tecnologia:</Text>

                    <Input
                      onChange={handleUserTest}
                      value={userTest.technology}
                      type="number"
                      w="20%"
                    />
                  </Flex>
                  <Flex w={"100%"} alignItems="center" justifyContent={"center"} gap="0.5rem">
                    <Text fontWeight={"bold"}>Processos:</Text>

                    <Input
                      onChange={handleUserTest}
                      value={userTest.process}
                      type="number"
                      w="20%"
                    />
                  </Flex>
                  <Flex w={"100%"} alignItems="center" justifyContent={"center"} gap="0.5rem">
                    <Text fontWeight={"bold"}>Influencia:</Text>

                    <Input
                      onChange={handleUserTest}
                      value={userTest.influence}
                      type="number"
                      w="20%"
                    />
                  </Flex>
                  </Flex>

                  <Divider orientation="vertical" />
                  
                  <Flex w={"50%"} h="10%" direction="column">
                      <Flex
                        gap={"1rem"}
                        w="100%"
                        justifyContent="end"
                        textAlign={"center"}
                        alignItems="center"
                        direction="column"
                      >
                        <Text fontSize="1.5rem" fontWeight={"bold"}>Nova função:</Text>
                        <Select
                          isRequired={true}
                          onChange={handleUserEspeciality}
                          defaultValue={value.nextRole}
                          w={"60%"}
                        >
                          {specialities.map((speciality) => (
                            <option key={speciality.id} value={speciality.name}>
                              {speciality.name}
                            </option>
                          ))}
                        </Select>
                        <Select
                          isRequired={true}
                          onChange={handleUserValidate}
                          defaultValue={"null"}
                          w={"60%"}
                        >
                          <option disabled={true} value={"null"}>
                            Aprovado?
                          </option>
                          <option value="Sim">Sim</option>
                          <option value="Não">Não</option>
                        </Select>

                        <Button
                          onClick={() => {
                            // mostrar role que o usuario selecionou no select, no caso agora so conectar com api
                            if (userValidate !== "null") {
                              console.log(userEspeciality, value.userId);
                            }
                          }}
                        >
                          Validar
                        </Button>
                      </Flex>
                    </Flex>
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"} overflowY="auto">
                  <StepsAdmForm
                    lastTest={value}
                    respostas={respostas}
                    handleResetRespostas={handleResetRespostas}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLastUserAdm;
