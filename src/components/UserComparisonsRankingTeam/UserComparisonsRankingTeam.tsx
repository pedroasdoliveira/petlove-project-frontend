import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  TableCaption,
  Td,
  Text,
  TableContainer,
  Tooltip,
} from "@chakra-ui/react";
import { reduceType, teamType, UserTypes } from "types/interfaces";

interface Props {
  color: string;
  teamMapFilteredReturnTeam: UserTypes[][];
  teamMapFiltered: (string | undefined)[] | undefined;
  users: UserTypes[] | undefined;
}

const UserComparisonsRankingTeam = ({
  color,
  teamMapFilteredReturnTeam,
  teamMapFiltered,
  users,
}: Props) => {
  // ranking por team da maior media para a menor
  const teamOrdered = teamMapFilteredReturnTeam?.map(
    (userFiltered: UserTypes[]): teamType => {
      let teamLength = 0;

      //fazer a media de cada team
      const plus = userFiltered?.reduce(
        (acc: number, user: UserTypes): number => {
          const lastResult = user.results[user.results.length - 1];

          if (lastResult !== null && lastResult !== undefined) {
            const plus =
              lastResult?.system +
              lastResult?.person +
              lastResult?.technology +
              lastResult?.process +
              lastResult?.influence;

            teamLength++;
            return acc + plus;
          }

          return acc;
        },
        0
      );

      const media = plus / (teamLength === 0 ? 1 : teamLength);

      return { media: media, team: userFiltered?.[0].team };
    }
  );

  // ordenar por media
  const teamOrderedFiltered = teamOrdered?.sort(
    (a: teamType, b: teamType): number => {
      return b.media - a.media;
    }
  );

  const teamOrderedFilteredMedia = teamOrderedFiltered?.map(
    (userFiltered: teamType): UserTypes[] => {
      const teamFiltered = users?.filter((user: UserTypes) => {
        return user.team === userFiltered.team;
      });

      return teamFiltered as UserTypes[];
    }
  );

  return (
    <TableContainer marginTop={6}>
      <Text fontSize="xl" fontWeight="bold" marginBottom={4} textAlign="center">
        Ranking de equipes - Total de equipes: {teamMapFiltered?.length}
      </Text>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption color="gray.200">
          Ranking de equipes com base na média do último resultado dos usuários
        </TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="start" w={"1rem"} p="0.1rem" color="gray.200">
              Media/pontos
            </Th>
            <Th color="gray.200">Equipe</Th>
            <Th color="gray.200">Devs</Th>
            <Th color="gray.200">Back-end</Th>
            <Th color="gray.200">Front-end</Th>
            <Th color="gray.200">Função majoritária</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teamOrderedFilteredMedia?.map((item: UserTypes[]) => {
            let teamLength = 0;
            //fazer a media de cada team
            const plus = item?.reduce(
              (acc: number, item2: UserTypes): number => {
                const lastResult = item2.results[item2.results.length - 1];

                if (lastResult !== null && lastResult !== undefined) {
                  const plus =
                    lastResult?.system +
                    lastResult?.person +
                    lastResult?.technology +
                    lastResult?.process +
                    lastResult?.influence;

                  teamLength++;

                  return acc + plus;
                }

                return acc;
              },
              0
            );

            const media = plus / (teamLength === 0 ? 1 : teamLength);

            //quantidade de devs backend

            const back = item?.filter((itemChapter: UserTypes): boolean => {
              return itemChapter.chapter === "backend";
            });

            //quantidade de devs frontend

            const front = item?.filter((itemChapter: UserTypes): boolean => {
              return itemChapter.chapter === "frontend";
            });

            // ver qual função é mais presente (Especialista, Tech Lead, Senior, Pleno, Junior, Trainee)

            const speciality = item?.reduce(
              (acc: reduceType, user: UserTypes): reduceType => {
                const role = user.role;
                if (role === "Especialista") {
                  acc.Especialista += 1;
                } else if (role === "Tech-lead") {
                  acc["Tech-Lead"] += 1;
                } else if (role === "Senior") {
                  acc.Senior += 1;
                } else if (role === "Pleno") {
                  acc.Pleno += 1;
                } else if (role === "Junior") {
                  acc.Junior += 1;
                } else if (role === "Trainee") {
                  acc.Trainee += 1;
                } else {
                  acc["Contratados"] += 1;
                }

                return acc;
              },
              {
                Especialista: 0,
                ["Tech-Lead"]: 0,
                Senior: 0,
                Pleno: 0,
                Junior: 0,
                Trainee: 0,
                ["Contratados"]: 0,
              }
            );

            const specialityArray = Object.entries(speciality);

            const specialityFiltered = specialityArray.filter(
              (speciality) => {
                return (
                  speciality[1] ===
                  Math.max(
                    ...(specialityArray.map(
                      (speciality: any) => speciality[1]
                    ) as unknown as any)
                  )
                );
              }
            );

            return (
              <Tr key={item?.[0].id}>
                <Th p="1rem" color="gray.200">
                  {media?.toFixed(2)}
                </Th>
                <Td>{item?.[0].team ? item?.[0].team : "Sem equipe"}</Td>
                <Td>{item?.length}</Td>
                <Td>{back?.length}</Td>
                <Td>{front?.length}</Td>
                <Td
                  display={"flex"}
                  flexDirection={"column"}
                  p="0.2rem"
                  gap="0.2rem"
                  pr="3.5rem"
                  alignItems="center"
                >
                  <Tooltip
                    label={`Função com mais devs na equipe, ou seja, devs na função majoritária`}
                    hasArrow
                  >
                    {`${specialityFiltered[0][0]}`}
                  </Tooltip>

                  <Tooltip
                    label={`quantidade de devs na função majoritária`}
                    hasArrow
                  >
                    {`(${specialityFiltered[0][1]})`}
                  </Tooltip>
                  <Tooltip
                    label={`devs na equipe que fizeram pelo menos um teste`}
                    hasArrow
                  >
                    {`(${teamLength})`}
                  </Tooltip>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserComparisonsRankingTeam;
