import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Table,
  TableCaption,
  TableContainer,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Divider,
  Flex,
} from "@chakra-ui/react";
import PieAdm from "components/Graphics/PieAdm";
import ModalUserAdm from "components/ModalUserAdm/ModalUserAdm";
import { dataAdm } from "components/obj/obj";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ComparisonBarAdm from "components/Graphics/ComparisonBarAdm";
import ComparisonBarAdmTeams from "components/Graphics/ComparisonBarAdmTeams";

const UserComparisons = () => {
  const color = useColorModeValue("whiteAlpha", "facebook");

  const dataAdmFiltered = dataAdm.sort((item, item2) => {
    const lastResult = item.results[item.results.length - 1];
    const lastResult2 = item2.results[item2.results.length - 1];
    const plus =
      lastResult.system +
      lastResult.person +
      lastResult.technology +
      lastResult.process +
      lastResult.influence;

    const plus2 =
      lastResult2.system +
      lastResult2.person +
      lastResult2.technology +
      lastResult2.process +
      lastResult2.influence;

    return plus2 - plus;
  });

  const teamMap = dataAdm.map((item) => {
    //separar cada usuario por team

    return item.team;
  });

  console.log(teamMap, "teamMap");

  // remover duplicados

  const teamMapFiltered = teamMap.filter((item, index) => {
    return teamMap.indexOf(item) === index;
  });

  console.log(teamMapFiltered);

  // filtrar por team

  const teamMapFiltered2 = teamMapFiltered.map((item) => {
    const teamFiltered = dataAdm.filter((item2) => {
      return item2.team === item;
    });

    return teamFiltered;
  });

  console.log(teamMapFiltered2);
  console.log(dataAdm, "oi");

  console.log(dataAdmFiltered, "isso");
  console.log(teamMapFiltered2, "isso");

  return (
    <>
      <TableContainer marginTop={6}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          marginBottom={4}
          textAlign="center"
        >
          Ranking de usuários - Total de usuários: {dataAdm.length}
        </Text>
        <Table variant="striped" size="md" colorScheme={color}>
          <TableCaption>
            Ranking de usuários com base no último resultado
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Pontos</Th>
              <Th>Nome</Th>
              <Th>Chapter</Th>
              <Th>Função</Th>
              <Th>Função</Th>
              <Th>Detalhes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataAdmFiltered.map((user) => {
              const lastResult = user.results[user.results.length - 1];

              const plus =
                lastResult.system +
                lastResult.person +
                lastResult.technology +
                lastResult.process +
                lastResult.influence;
              const roleAtual = user.role;
              const chapterAtual = user.chapter;
              const teamAtual = user.team;
              return (
                <Tr key={user.id}>
                  <Th>{plus}</Th>
                  <Td>
                    {user.name}{" "}
                    {roleAtual === null &&
                      chapterAtual === null &&
                      teamAtual === null && (
                        <Badge colorScheme="green" variant="solid">
                          Novo
                        </Badge>
                      )}
                  </Td>
                  {chapterAtual === null ? (
                    <Td>...</Td>
                  ) : (
                    <Td>{chapterAtual}</Td>
                  )}
                  {roleAtual === null ? <Td>...</Td> : <Td>{roleAtual}</Td>}
                  {teamAtual === null ? <Td>...</Td> : <Td>{teamAtual}</Td>}
                  <Td>
                    <ModalUserAdm value={lastResult} user={user} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider
        marginTop={"4rem"}
        marginBottom={"1rem"}
        borderColor="gray.200"
        variant="dashed"
      />
      <TableContainer marginTop={6}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          marginBottom={4}
          textAlign="center"
        >
          Ranking de equipes - Total de equipes: {teamMapFiltered.length}
        </Text>
        <Table variant="striped" size="md" colorScheme={color}>
          <TableCaption>
            Ranking de usuários com base no último resultado
          </TableCaption>
          <Thead>
            <Tr>
              <Th textAlign="start" w={"1rem"} p="0.1rem">
                Media/pontos
              </Th>
              <Th>Equipe</Th>
              <Th>Devs</Th>
              <Th>Back-end</Th>
              <Th>Front-end</Th>
              <Th>Função majoritária</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teamMapFiltered2.map((item) => {
              //fazer a media de cada team
              const plus = item.reduce((acc, item2) => {
                const lastResult = item2.results[item2.results.length - 1];
                const plus2 =
                  lastResult.system +
                  lastResult.person +
                  lastResult.technology +
                  lastResult.process +
                  lastResult.influence;

                return acc + plus2;
              }, 0);

              const media = plus / item.length;

              //quantidade de devs backend

              const back = item.filter((item2) => {
                return item2.chapter === "backend";
              });

              //quantidade de devs frontend

              const front = item.filter((item2) => {
                return item2.chapter === "frontend";
              });

              // ver qual função é mais presente (Especialista, Tech Lead, Senior, Pleno, Junior, Trainee)

              const speciality = item.reduce(
                (acc, item2) => {
                  const role = item2.role;
                  if (role === "Especialista") {
                    acc.specialist += 1;
                  } else if (role === "Tech Lead") {
                    acc.techLead += 1;
                  } else if (role === "Senior") {
                    acc.senior += 1;
                  } else if (role === "Pleno") {
                    acc.pleno += 1;
                  } else if (role === "Junior") {
                    acc.junior += 1;
                  } else if (role === "Trainee") {
                    acc.trainee += 1;
                  } else {
                    acc.null += 1;
                  }

                  return acc;
                },
                {
                  specialist: 0,
                  techLead: 0,
                  senior: 0,
                  pleno: 0,
                  junior: 0,
                  trainee: 0,
                  null: 0,
                }
              );

              const specialityArray = Object.entries(speciality);

              const specialityFiltered = specialityArray.filter((item) => {
                return (
                  item[1] ===
                  Math.max(...specialityArray.map((item) => item[1]))
                );
              });

              return (
                <Tr key={item[0].id}>
                  <Th p="1rem">{media.toFixed(2)}</Th>
                  <Td>{item[0].team ? item[0].team : "Sem equipe"}</Td>
                  <Td>{item.length}</Td>
                  <Td>{back.length}</Td>
                  <Td>{front.length}</Td>
                  <Td>
                    {specialityFiltered[0][0] === "null"
                      ? "Contratados"
                      : specialityFiltered[0][0]}{" "}
                    ({specialityFiltered[0][1]})
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Divider
        marginTop={"4rem"}
        marginBottom={"1rem"}
        borderColor="gray.200"
        variant="dashed"
      />
      <Text
        fontSize="xl"
        fontWeight="bold"
        marginBottom={4}
        textAlign="center"
        marginTop={6}
      >
        Gráficos
      </Text>

      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        simulateTouch={false}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide>
            <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom={4}
            textAlign="center"
          >
              Comparação de usuários por total - Total de devs: {dataAdm.length}
              </Text>

          <Flex w={"100%"} h="100%">
            <ComparisonBarAdm value={dataAdmFiltered} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom={4}
            textAlign="center"
          >
            Divisão de Devs por equipes
          </Text>

          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            mb={6}
          >
            <Text textAlign="center" fontSize="md" fontWeight="bold">
              Total de equipes: {teamMapFiltered.length}
            </Text>

            <Text textAlign="center" fontSize="md" fontWeight="bold">
              Total de devs: {dataAdmFiltered.length}
            </Text>
          </Flex>
          <Flex w={"100%"} h="100%">
            <PieAdm names={teamMapFiltered} quantity={teamMapFiltered2} />
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
            <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom={4}
            textAlign="center"
          >
              Comparação de equipes pela media - Total de equipes: {teamMapFiltered.length}
              </Text>

          <Flex w={"100%"} h="100%">
            <ComparisonBarAdmTeams value={teamMapFiltered} teamMapFiltered2={teamMapFiltered2} />
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default UserComparisons;
