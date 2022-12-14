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
import { ResultType, SpecialtiesType, UserTypes } from "types/interfaces";

interface Props {
  user: UserTypes;
  value: ResultType;
  handleUserEspeciality: (params: any) => void;
  specialties: SpecialtiesType[] | undefined;
  colorOption: string;
  handleUserValidate: (params: any) => void;
  requisition: boolean;
  setRequisition: (params: any) => void;
  userValidate: string;
  buttonColorReverse: string;
  buttonColorReverseHover: string;
  userEspeciality: string;
  handleGetUsers: () => void;
  onClose: () => void;
}

const ModalTabDataLastUserAdm = ({
  user,
  value,
  handleUserEspeciality,
  specialties,
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
                Todos os testes - Fun????o - Linha
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
                Evolu????o - Sistema
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
                Evolu????o - Processos
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
                Evolu????o - Pessoas
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
                Evolu????o - Tecnologia
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
                Evolu????o - Influencia
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
                  <Th>Fun????o</Th>
                  <Th>Aprova????o</Th>
                </Tr>
              </Thead>
              <Divider orientation="horizontal" w={"310%"} />
              <Tbody>
                {user.results.map((result: ResultType) => (
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
          <Text>Nova fun????o:</Text>
          <Flex gap={"1rem"} w="100%" mt={"0.5rem"}>
            <Select
              isRequired={true}
              defaultValue={value.nextRole}
              onChange={handleUserEspeciality}
              w={"35%"}
            >
              {specialties?.map((speciality: SpecialtiesType) => (
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
                value="N??o"
                style={{
                  background: colorOption,
                  color: "white",
                }}
              >
                N??o
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
                      toast.success("Fun????o atualizada com sucesso!");
                      setRequisition(false);
                      handleGetUsers();
                      onClose();
                    })
                    .catch(() => {
                      toast.error("Erro ao atualizar fun????o!");
                      setRequisition(false);
                    });
                } else {
                  toast.error("Selecione se foi aprovado ou n??o!");
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
