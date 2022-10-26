import {
  Badge,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
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
import LastRadarUserAdm from "../../components/Graphics/LastRadarUserAdm";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AllRadarUserAdm from "../../components/Graphics/AllRadarUserAdm";
import OneLineUserAdm from "../../components/Graphics/OneLineUserAdm";
import AreaComposedChartAdm from "../../components/Graphics/AreaComposedChartAdm";
import AllRadarSpecialityAdm from "../../components/Graphics/AllRadarSpecialityAdm";
import { ErrorMessage } from "../../style/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/Users";
import { useSpecialtyss } from "../../contexts/specialtyss";
import { useAuth } from "../../contexts/Auth";

interface EditData {
  email: string;
  name: string;
  password: string;
  newPassword?: string;
  confirmPassword?: string;
  team: string;
  chapter: string;
  role: string;
}

const editSchema = yup.object().shape({
  email: yup
    .string()
    .email("Entre com um email válido")
    .required("Email é obrigatório"),

  name: yup
    .string()
    .min(15, "Nome deve ter no mínimo 15 caracteres")
    .max(40, "Nome deve ter no máximo 40 caracteres")
    .required("Nome é obrigatório"),

  team: yup.string().required("Time é obrigatório"),
});

const ModalLastUserAdm = ({ value, user }: any) => {
  const { specialtyss } = useSpecialtyss();
  const { requisition, setRequisition } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userRole, setUserRole] = useState(user.role);
  const [userChapter, setUserChapter] = useState(user.chapter);
  const { handleGetUsers } = useUsers();

  const buttonColor = useColorModeValue(
    "linear-gradient(111.58deg, #313baf 21.73%, rgba(45, 56, 175, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgb(59, 72, 218) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgb(10, 14, 35) 100%)",
  );

  const colorModal = useColorModeValue("whiteAlpha", "yellow");
  const colorHeader = useColorModeValue("aqua", "gray");
  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");

  const buttonColorReverse = useColorModeValue(
    "rgba(6, 11, 40, 0.94)",
    "#3B49DA",
  );
  const buttonColorReverseHover = useColorModeValue(
    "#313bad",
    "rgba(13, 24, 83, 0.94)",
  );

  const {
    register: edit,
    handleSubmit: editHandleSubmit,
    formState: { errors: editErrors },
    reset,
  } = useForm<EditData>({ resolver: yupResolver(editSchema) });

  const handleEdit = (data: EditData) => {
    if (userRole === null) {
      return alert("Selecione uma função");
    }

    if (userChapter === null) {
      return alert("Selecione um chapter");
    }

    setRequisition(true);

    data.role = userRole;
    data.chapter = userChapter;

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .patch(`/User/${user.email}`, data, headers)
      .then(() => {
        toast.success("Usuário editado com sucesso!");
        handleGetUsers();
        setRequisition(false);
        reset();
        onClose();
      })
      .catch(() => {
        toast.error("Erro ao editar usuário!");
        setRequisition(false);
      });
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
            <Text>
              {user.role === null &&
                user.chapter === null &&
                user.team === null && (
                  <Badge colorScheme="green" variant="solid" fontSize="0.8em">
                    Novo
                  </Badge>
                )}
            </Text>
            <Text>{user.name} </Text>
            {user.role === null ? (
              <Text fontSize={"17px"} color={colorHeader}>
                Contratado
              </Text>
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.role}
              </Text>
            )}
            {user.role === null ? (
              ""
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.team}
              </Text>
            )}
            {user.role === null ? (
              ""
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.chapter}
              </Text>
            )}
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
                  <Tab>Editar</Tab>
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
                          <SwiperSlide>
                            <Text fontSize="xl" mx="auto" textAlign="center">
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
                            Último teste e todas especialidades
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
                                    Último teste -{" "}
                                    {value?.nextRole
                                      ? value?.nextRole
                                      : "Nenhum teste"}
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
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <form>
                    <Flex flexDir="column" justifyContent="center">
                      {/* Input name  */}
                      <Text
                        fontSize="xl"
                        mx="auto"
                        mb={1}
                        textAlign="center"
                        mt={2}
                        fontWeight="bold"
                      >
                        Editar informações:
                      </Text>

                      <Flex
                        flexDir="row"
                        gap="3.2rem"
                        justifyContent={"center"}
                        w="100%"
                        mt={"2rem"}
                      >
                        {/* Input senha atual + nova senha + confirmar senha */}
                        <Flex alignItems="center" direction={"column"} w="20%">
                          <Text>Nome:</Text>
                          <FormControl>
                            <Input
                              defaultValue={user.name}
                              variant={"flushed"}
                              isInvalid={!!editErrors.name}
                              mb={3}
                              {...edit("name")}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  editHandleSubmit(handleEdit)();
                                }
                              }}
                              color="white"
                              _placeholder={{
                                color: "#bbbaba",
                              }}
                            />
                            <ErrorMessage
                              color={useColorModeValue("#ffee00", "red")}
                            >
                              {editErrors.name?.message || ""}
                            </ErrorMessage>
                          </FormControl>
                        </Flex>

                        <Flex alignItems="center" direction={"column"} w="20%">
                          <Text>Email:</Text>
                          <FormControl>
                            <Input
                              defaultValue={user.email}
                              variant={"flushed"}
                              isInvalid={!!editErrors.email}
                              mb={3}
                              {...edit("email")}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  editHandleSubmit(handleEdit)();
                                }
                              }}
                              color="white"
                              _placeholder={{
                                color: "#bbbaba",
                              }}
                            />
                            <ErrorMessage
                              color={useColorModeValue("#ffee00", "red")}
                            >
                              {editErrors.email?.message || ""}
                            </ErrorMessage>
                          </FormControl>
                        </Flex>
                      </Flex>
                      <Flex
                        alignItems="center"
                        justifyContent="space-around"
                        mb={8}
                        mt="4rem"
                      >
                        {/* Input team + chapter + role */}
                        <Flex alignItems="center" direction={"column"} w="10%">
                          <Text>Time:</Text>
                          <FormControl>
                            <Input
                              textAlign="center"
                              defaultValue={user.team}
                              variant={"flushed"}
                              isInvalid={!!editErrors.team}
                              mb={3}
                              {...edit("team")}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  editHandleSubmit(handleEdit)();
                                }
                              }}
                              color="white"
                              _placeholder={{
                                color: "#bbbaba",
                              }}
                            />
                            <ErrorMessage
                              color={useColorModeValue("#ffee00", "red")}
                            >
                              {editErrors.team?.message || ""}
                            </ErrorMessage>
                          </FormControl>
                        </Flex>
                        <Flex direction={"column"} w="10%">
                          <Text>Chapter:</Text>
                          <FormControl>
                            <Menu>
                              <MenuButton as={Button} colorScheme="blue">
                                {userChapter !== null
                                  ? userChapter
                                  : "Selecione"}
                              </MenuButton>
                              <MenuList
                                minWidth="240px"
                                style={{
                                  background: colorOption,
                                  color: "white",
                                }}
                              >
                                <MenuOptionGroup
                                  type="radio"
                                  defaultValue={userChapter}
                                  onChange={setUserChapter}
                                >
                                  <MenuItemOption
                                    value={"backend"}
                                    _focus={{
                                      background: "gray.600",
                                    }}
                                  >
                                    Backend
                                  </MenuItemOption>
                                  <MenuItemOption
                                    value={"frontend"}
                                    _focus={{
                                      background: "gray.600",
                                    }}
                                  >
                                    Frontend
                                  </MenuItemOption>
                                </MenuOptionGroup>
                              </MenuList>
                            </Menu>
                          </FormControl>
                        </Flex>
                        <Flex direction={"column"} w="10%">
                          <Text>Função:</Text>
                          <FormControl>
                            <Menu>
                              <MenuButton as={Button} colorScheme="blue">
                                {userRole !== null ? userRole : "Selecione"}
                              </MenuButton>
                              <MenuList
                                minWidth="240px"
                                style={{
                                  background: colorOption,
                                  color: "white",
                                }}
                              >
                                <MenuOptionGroup
                                  type="radio"
                                  defaultValue={userRole}
                                  onChange={setUserRole}
                                >
                                  {specialtyss?.map((speciality) => (
                                    <MenuItemOption
                                      key={speciality.id}
                                      value={speciality.performance}
                                      _focus={{
                                        background: "gray.600",
                                      }}
                                    >
                                      {speciality.performance}
                                    </MenuItemOption>
                                  ))}
                                </MenuOptionGroup>
                              </MenuList>
                            </Menu>
                          </FormControl>
                        </Flex>
                      </Flex>
                    </Flex>

                    {/* Button Form */}
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      mt={"3rem"}
                    >
                      <Button
                        isLoading={requisition}
                        background={buttonColorReverse}
                        _hover={{
                          background: buttonColorReverseHover,
                        }}
                        color="white"
                        variant="solid"
                        w={"80%"}
                        onClick={editHandleSubmit(handleEdit)}
                      >
                        editar
                      </Button>
                    </Flex>
                  </form>
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
