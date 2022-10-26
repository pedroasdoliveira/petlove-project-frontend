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
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import StepsAdmForm from "../../components/StepsAdm/StepsAdm";
import LastRadarUserAdm from "../../components/Graphics/LastRadarUserAdm";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AllRadarUserAdm from "../../components/Graphics/AllRadarUserAdm";
import OneLineUserAdm from "../../components/Graphics/OneLineUserAdm";
import AreaComposedChartAdm from "../../components/Graphics/AreaComposedChartAdm";
import AllRadarSpecialityAdm from "../../components/Graphics/AllRadarSpecialityAdm";
import toast from "react-hot-toast";
import { api } from "../../services";
import { useUsers } from "../../contexts/Users";
import { useSpecialtyss } from "../../contexts/specialtyss";
import { useAuth } from "../../contexts/Auth";

const ModalLastUserAdm = ({ value, user }: any) => {
  const { specialtyss } = useSpecialtyss();
  const { handleGetUsers } = useUsers();
  const { requisition, setRequisition } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userEspeciality, setUserEspeciality] = useState(value.nextRole);
  const [userValidate, setUserValidate] = useState("");
  const [userTest, setUserTest] = useState({} as any);

  const buttonColor = useColorModeValue(
    "linear-gradient(111.58deg, #313baf 21.73%, rgba(45, 56, 175, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );
  const buttonColorReverse = useColorModeValue(
    "rgba(6, 11, 40, 0.94)",
    "#3B49DA",
  );
  const buttonColorReverseHover = useColorModeValue(
    "#313bad",
    "rgba(13, 24, 83, 0.94)",
  );
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgb(59, 72, 218) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgb(10, 14, 35) 100%)",
  );

  const colorModal = useColorModeValue("whiteAlpha", "yellow");
  const colorHeader = useColorModeValue("aqua", "gray");
  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");

  useEffect(() => {
    setUserTest({
      system: value.system,
      technology: value.technology,
      person: value.person,
      influence: value.influence,
      process: value.process,
    });
    setUserValidate("");
  }, [isOpen, value]);

  const handleUserEspeciality = (event: any) => {
    setUserEspeciality(event.target.value);
  };

  const handleUserValidate = (event: any) => {
    setUserValidate(event.target.value);
  };

  const handleUserTest = (event: any) => {
    if (isNaN(event.target.value)) {
      toast.error("Digite um número");
      return;
    }
    if (event.target.value > 5 || event.target.value < 0) {
      toast.error("A nota deve ser entre 0 e 5");
      return;
    }
    const number = +event.target.value;
    setUserTest({
      ...userTest,
      [event.target.name]: number,
    });
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
      <Button width={"50%"} onClick={onOpen} background={buttonColor}>
        <ExternalLinkIcon w={"25px"} h={"25px"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent
          w={"100%"}
          h={"80%"}
          background={background}
          color={"gray.100"}
        >
          <ModalHeader display={"flex"} flexDirection={"row"} gap="1rem">
            <Text>{user.name}</Text>
            {user.role === null ? (
              <Text fontSize={"17px"} color={colorHeader}>
                Contratado
              </Text>
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.role}
              </Text>
            )}
            <Text fontSize={"17px"} color={colorHeader}>
              {user.team}
            </Text>
            <Text fontSize={"17px"} color={colorHeader}>
              {user.chapter}
            </Text>
            <Text fontSize={"17px"} color={colorHeader}>
              {user.email}
            </Text>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody w={"100%"} h={"80%"}>
            <Tabs
              variant="enclosed"
              mt={"-1rem"}
              w={"100%"}
              h={"93%"}
              colorScheme={colorModal}
            >
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Teste a ser validado
                            </Text>
                            <LastRadarUserAdm testUser={value} type="user" />
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Todos os testes - Radar
                            </Text>
                            <AllRadarUserAdm user={user} />
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Todos os testes - Função - Linha
                            </Text>
                            <Flex
                              w={"100%"}
                              h="100%"
                              justifyContent={"center"}
                              mt="1rem"
                            >
                              <AreaComposedChartAdm user={user} />
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Evolução - Sistema
                            </Text>
                            <Flex
                              w={"100%"}
                              h="100%"
                              justifyContent={"center"}
                              mt="1rem"
                            >
                              <OneLineUserAdm subject="System" user={user} />
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Evolução - Processos
                            </Text>
                            <Flex
                              w={"100%"}
                              h="100%"
                              justifyContent={"center"}
                              mt="1rem"
                            >
                              <OneLineUserAdm subject="Process" user={user} />
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Evolução - Pessoas
                            </Text>
                            <Flex
                              w={"100%"}
                              h="100%"
                              justifyContent={"center"}
                              mt="1rem"
                            >
                              <OneLineUserAdm subject="Person" user={user} />
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Evolução - Tecnologia
                            </Text>
                            <Flex
                              w={"100%"}
                              h="100%"
                              justifyContent={"center"}
                              mt="1rem"
                            >
                              <OneLineUserAdm
                                subject="Technology"
                                user={user}
                              />
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                        <SwiperSlide>
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
                              fontSize="xl"
                              mx="auto"
                              mb={1}
                              textAlign="center"
                            >
                              Evolução - Influencia
                            </Text>
                            <Flex
                              w={"100%"}
                              h="100%"
                              justifyContent={"center"}
                              mt="1rem"
                            >
                              <OneLineUserAdm subject="Influence" user={user} />
                            </Flex>
                          </Flex>
                        </SwiperSlide>
                      </Swiper>
                    </Flex>
                    <Divider orientation="vertical" mx={"-4rem"} />
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
                          borderTop="1px solid gray"
                          borderBottom="1px solid gray"
                          borderRadius={"10px"}
                        >
                          <Table variant={"unstyled"} colorScheme="whiteAlpha">
                            <Thead>
                              <Tr>
                                <Th>Data</Th>
                                <Th>Função</Th>
                                <Th>Aprovação</Th>
                              </Tr>
                            </Thead>
                            <Divider orientation="horizontal" w={"310%"} />
                            <Tbody>
                              {user.results.map((result: any) => (
                                <Tr key={result.id}>
                                  <Th color={"white"}>
                                    {`${new Date(
                                      result.createdAt,
                                    ).toLocaleDateString()}`}
                                    <Divider
                                      orientation="horizontal"
                                      w={"460%"}
                                    />
                                  </Th>
                                  <Th color={"white"}>{result.nextRole}</Th>
                                  <Th color={"white"}>
                                    {result.isValided === null
                                      ? "Aguardando"
                                      : result.isValided}
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
                            {specialtyss?.map((speciality) => (
                              <option
                                key={speciality.id}
                                value={speciality.performance}
                                style={{
                                  background: colorOption,
                                  color: "white",
                                }}
                              >
                                {speciality.performance}
                              </option>
                            ))}
                          </Select>
                          <Select
                            isRequired={true}
                            onChange={handleUserValidate}
                            defaultValue={""}
                            w={"35%"}
                          >
                            <option
                              disabled={true}
                              value={""}
                              style={{
                                background: colorOption,
                                color: "#c0c0c0",
                              }}
                            >
                              Aprovado?
                            </option>
                            <option
                              value="Sim"
                              style={{
                                background: colorOption,
                                color: "white",
                              }}
                            >
                              Sim
                            </option>
                            <option
                              value="Não"
                              style={{
                                background: colorOption,
                                color: "white",
                              }}
                            >
                              Não
                            </option>
                          </Select>

                          <Button
                            isLoading={requisition}
                            background={buttonColorReverse}
                            _hover={{
                              background: buttonColorReverseHover,
                            }}
                            onClick={() => {
                              if (userValidate !== "") {
                                setRequisition(true);
                                const token = localStorage.getItem("token");

                                const headers = {
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                };

                                const data = {
                                  nextRole: userEspeciality,
                                  isValided: userValidate,
                                };

                                api
                                  .patch(`/Result/${value.id}`, data, headers)
                                  .then(() => {
                                    toast.success(
                                      "Função atualizada com sucesso!",
                                    );
                                    setRequisition(false);
                                    handleGetUsers();
                                    onClose();
                                  })
                                  .catch(() => {
                                    toast.error("Erro ao atualizar função!");
                                    setRequisition(false);
                                  });
                              } else {
                                toast.error(
                                  "Selecione se foi aprovado ou não!",
                                );
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
                    <Flex
                      w={"100%"}
                      h="100%"
                      style={{
                        background: "rgba(6, 11, 40, 0.94)",
                        borderRadius: "10px",
                      }}
                      direction={"column"}
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
                            fontSize="xl"
                          >
                            Teste recente e todas especialidades
                          </Text>

                          <AllRadarSpecialityAdm user={user} />
                        </SwiperSlide>

                        {specialtyss?.map((speciality) => (
                          <SwiperSlide key={speciality.id}>
                            <Flex w={"100%"} h="90%" justifyContent="center">
                              <Flex w={"50%"} h="100%">
                                <Flex
                                  w={"100%"}
                                  h="100%"
                                  direction={"column"}
                                  alignItems="center"
                                >
                                  <Text fontSize="xl">
                                    Teste recente - {value.nextRole}
                                  </Text>
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
                                  <Text fontSize="xl">
                                    Estimativa - {speciality.performance}
                                  </Text>
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
                    </Flex>
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
                          {specialtyss?.map((speciality) => (
                            <option
                              key={speciality.id}
                              value={speciality.performance}
                              style={{
                                background: colorOption,
                                color: "white",
                              }}
                            >
                              {speciality.performance}
                            </option>
                          ))}
                        </Select>
                        <Select
                          isRequired={true}
                          onChange={handleUserValidate}
                          defaultValue={""}
                          w={"12%"}
                        >
                          <option
                            disabled={true}
                            value={""}
                            style={{
                              background: colorOption,
                              color: "#c0c0c0",
                            }}
                          >
                            Aprovado?
                          </option>
                          <option
                            value="Sim"
                            style={{
                              background: colorOption,
                              color: "white",
                            }}
                          >
                            Sim
                          </option>
                          <option
                            value="Não"
                            style={{
                              background: colorOption,
                              color: "white",
                            }}
                          >
                            Não
                          </option>
                        </Select>

                        <Button
                          isLoading={requisition}
                          background={buttonColorReverse}
                          _hover={{
                            background: buttonColorReverseHover,
                          }}
                          onClick={() => {
                            if (userValidate !== "") {
                              setRequisition(true);
                              const token = localStorage.getItem("token");

                              const headers = {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              };

                              const data = {
                                nextRole: userEspeciality,
                                isValided: userValidate,
                              };

                              api
                                .patch(`/Result/${value.id}`, data, headers)
                                .then(() => {
                                  toast.success(
                                    "Função atualizada com sucesso!",
                                  );
                                  setRequisition(false);
                                  handleGetUsers();
                                  onClose();
                                })
                                .catch(() => {
                                  toast.error("Erro ao atualizar função!");
                                  setRequisition(false);
                                });
                            } else {
                              toast.error("Selecione se foi aprovado ou não!");
                            }
                          }}
                        >
                          Validar
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel
                  w={"100%"}
                  h={"100%"}
                  textAlign="center"
                  display={"flex"}
                >
                  <Flex flexDirection="column" gap={"1.5rem"} w="50%">
                    <Text fontSize="1.5rem" fontWeight={"bold"}>
                      Teste recente
                    </Text>
                    <Flex
                      w={"100%"}
                      alignItems="center"
                      justifyContent={"center"}
                      gap="0.5rem"
                    >
                      <Text fontWeight={"bold"}>Sistema:</Text>
                      <Input
                        onChange={handleUserTest}
                        name="system"
                        value={userTest.system}
                        w="20%"
                      />
                    </Flex>
                    <Flex
                      w={"100%"}
                      alignItems="center"
                      justifyContent={"center"}
                      gap="0.5rem"
                    >
                      <Text fontWeight={"bold"}>Pessoa:</Text>

                      <Input
                        onChange={handleUserTest}
                        value={userTest.person}
                        name="person"
                        w="20%"
                      />
                    </Flex>
                    <Flex
                      w={"100%"}
                      alignItems="center"
                      justifyContent={"center"}
                      gap="0.5rem"
                    >
                      <Text fontWeight={"bold"}>Tecnologia:</Text>

                      <Input
                        onChange={handleUserTest}
                        name="technology"
                        value={userTest.technology}
                        w="20%"
                      />
                    </Flex>
                    <Flex
                      w={"100%"}
                      alignItems="center"
                      justifyContent={"center"}
                      gap="0.5rem"
                    >
                      <Text fontWeight={"bold"}>Processos:</Text>

                      <Input
                        onChange={handleUserTest}
                        name="process"
                        value={userTest.process}
                        w="20%"
                      />
                    </Flex>
                    <Flex
                      w={"100%"}
                      alignItems="center"
                      justifyContent={"center"}
                      gap="0.5rem"
                    >
                      <Text fontWeight={"bold"}>Influencia:</Text>

                      <Input
                        onChange={handleUserTest}
                        name="influence"
                        value={userTest.influence}
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
                      <Text fontSize="1.5rem" fontWeight={"bold"}>
                        Nova função:
                      </Text>
                      <Select
                        isRequired={true}
                        onChange={handleUserEspeciality}
                        defaultValue={value.nextRole}
                        w={"60%"}
                      >
                        {specialtyss?.map((speciality) => (
                          <option
                            key={speciality.id}
                            value={speciality.performance}
                            style={{
                              background: colorOption,
                              color: "white",
                            }}
                          >
                            {speciality.performance}
                          </option>
                        ))}
                      </Select>
                      <Select
                        isRequired={true}
                        onChange={handleUserValidate}
                        defaultValue={""}
                        w={"60%"}
                      >
                        <option
                          disabled={true}
                          value={""}
                          style={{
                            background: colorOption,
                            color: "#c0c0c0",
                          }}
                        >
                          Aprovado?
                        </option>
                        <option
                          value="Sim"
                          style={{
                            background: colorOption,
                            color: "white",
                          }}
                        >
                          Sim
                        </option>
                        <option
                          value="Não"
                          style={{
                            background: colorOption,
                            color: "white",
                          }}
                        >
                          Não
                        </option>
                      </Select>

                      <Button
                        isLoading={requisition}
                        background={buttonColorReverse}
                        _hover={{
                          background: buttonColorReverseHover,
                        }}
                        onClick={() => {
                          if (userValidate !== "") {
                            const token = localStorage.getItem("token");

                            const headers = {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            };

                            const data = {
                              nextRole: userEspeciality,
                              isValided: userValidate,
                              ...userTest,
                            };

                            api
                              .patch(`/Result/${value.id}`, data, headers)
                              .then(() => {
                                toast.success("Função atualizada com sucesso!");
                                setRequisition(false);
                                handleGetUsers();
                                onClose();
                              })
                              .catch(() => {
                                toast.error("Erro ao atualizar função!");
                                setRequisition(false);
                              });
                          } else {
                            toast.error("Selecione se foi aprovado ou não!");
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
                    onClose={onClose}
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
