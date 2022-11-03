import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  Flex,
  Divider,
  TableContainer,
  Table,
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Select,
  Button,
} from "@chakra-ui/react";
import AllRadarUserAdm from "components/Graphics/AllRadarUserAdm";
import AreaComposedChartAdm from "components/Graphics/AreaComposedChartAdm";
import LastRadarUserAdm from "components/Graphics/LastRadarUserAdm";
import OneLineUserAdm from "components/Graphics/OneLineUserAdm";
import toast from "react-hot-toast";
import { api } from "services";

interface Props {
  user: any;
  value: any;
  handleUserEspeciality: (params: any) => void;
  specialtyss: any;
  colorOption: any;
  handleUserValidate: (params: any) => void;
  requisition: boolean;
  setRequisition: (params: any) => void;
  userValidate: any;
  buttonColorReverse: any;
  buttonColorReverseHover: any;
  userEspeciality: any;
  handleGetUsers: () => void;
  onClose: () => void;
}

const ModalTabDataLastUserAdm = ({
  user,
  value,
  handleUserEspeciality,
  specialtyss,
  colorOption,
  handleUserValidate,
  requisition,
  setRequisition,
  userValidate,
  buttonColorReverse,
  buttonColorReverseHover,
  userEspeciality,
  handleGetUsers,
  onClose,
}: Props) => {
  return (
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Todos os testes - Função - Linha
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"} mt="1rem">
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Sistema
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"} mt="1rem">
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Processos
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"} mt="1rem">
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Pessoas
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"} mt="1rem">
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Tecnologia
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"} mt="1rem">
                <OneLineUserAdm subject="Technology" user={user} />
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Influencia
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"} mt="1rem">
                <OneLineUserAdm subject="Influence" user={user} />
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
      <Divider orientation="vertical" mx={"-4.5rem"} />
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
                    <Th color={"white"} fontSize={"11px"}>
                      {`${new Date(result.createdAt).toLocaleDateString()}`}
                      <Divider orientation="horizontal" w={"460%"} />
                    </Th>
                    <Th color={"white"} fontSize={"11px"}>
                      {result.nextRole}
                    </Th>
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
              {specialtyss?.map((speciality: any) => (
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
      </Flex>
    </Flex>
  );
};

export default ModalTabDataLastUserAdm;
