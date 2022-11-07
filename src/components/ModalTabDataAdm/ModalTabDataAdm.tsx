import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  Flex,
  Text,
  Divider,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import AllRadarUserAdm from "components/Graphics/AllRadarUserAdm";
import AreaComposedChartAdm from "components/Graphics/AreaComposedChartAdm";
import OneLineUserAdm from "components/Graphics/OneLineUserAdm";

interface Props {
  user: any;
}

const ModalTabDataAdm = ({ user }: Props) => {
  return (
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
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Todos os testes - Função - Linha
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"}>
                <AreaComposedChartAdm user={user} />
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Sistema
              </Text>
              <Flex w={"100%"} h="100%" justifyContent={"center"}>
                <OneLineUserAdm subject="System" user={user} />
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Processos
              </Text>
              <OneLineUserAdm subject="Process" user={user} />
            </SwiperSlide>
            <SwiperSlide>
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Pessoas
              </Text>
              <OneLineUserAdm subject="Person" user={user} />
            </SwiperSlide>
            <SwiperSlide>
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Tecnologia
              </Text>
              <OneLineUserAdm subject="Technology" user={user} />
            </SwiperSlide>
            <SwiperSlide>
              <Text fontSize="xl" mx="auto" mb={1} textAlign="center">
                Evolução - Influencia
              </Text>
              <OneLineUserAdm subject="Influence" user={user} />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
      <Divider orientation="vertical" mx={"-3.2rem"} />
      <Flex
        direction={"column"}
        w={"50%"}
        h={"100%"}
        justifyContent={"space-between"}
        overflowY="auto"
        alignItems={"center"}
      >
        <Flex direction={"column"} w="100%">
          <Text mb={"1rem"}>Testes realizados:</Text>
          <TableContainer
            borderTop="1px solid gray"
            borderBottom="1px solid gray"
            borderRadius={"10px"}
            overflowX="hidden"
          >
            <Table variant={"unstyled"} colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>Data</Th>
                  <Th>Função</Th>
                  <Th p="0">Aprovação</Th>
                </Tr>
              </Thead>
              <Divider orientation="horizontal" w={"310%"} />
              <Tbody>
                {user.results.map((result: any) => (
                  <Tr key={result.id}>
                    <Th color={"white"} fontSize={"11px"}>
                      {`${new Date(result.createdAt).toLocaleDateString()}`}
                      <Divider orientation="horizontal" w={"340%"} />
                    </Th>
                    <Th color={"white"} fontSize={"10px"}>
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
      </Flex>
    </Flex>
  );
};

export default ModalTabDataAdm;
