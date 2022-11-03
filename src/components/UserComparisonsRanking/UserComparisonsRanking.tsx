import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Badge,
  TableCaption,
  Td,
  Text,
  TableContainer,
} from "@chakra-ui/react";
import ModalUserAdm from "components/ModalUserAdm/ModalUserAdm";

interface Props {
  color: any;
  removedNull: any;
}

const UserComparisonsRanking = ({ color, removedNull }: Props) => {
  const dataAdmFiltered = removedNull?.sort((item: any, item2: any) => {
    const lastResult = item.results[item.results.length - 1];
    const lastResult2: any = item2.results[item2.results.length - 1];
    const plus =
      lastResult?.system +
      lastResult?.person +
      lastResult?.technology +
      lastResult?.process +
      lastResult?.influence;

    const plus2: any =
      lastResult2?.system +
      lastResult2?.person +
      lastResult2?.technology +
      lastResult2?.process +
      lastResult2?.influence;

    return plus2 - plus;
  });

  return (
    <TableContainer marginTop={6}>
      <Text fontSize="xl" fontWeight="bold" marginBottom={4} textAlign="center">
        Ranking de usuários - {removedNull?.length} usuários validados
      </Text>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption color="gray.200">
          Ranking de usuários com base no último resultado
        </TableCaption>
        <Thead>
          <Tr>
            <Th color="gray.200">Pontos</Th>
            <Th color="gray.200">Nome</Th>
            <Th color="gray.200">Chapter</Th>
            <Th color="gray.200">Função</Th>
            <Th color="gray.200">Equipe</Th>
            <Th color="gray.200">Detalhes</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataAdmFiltered?.map((user: any) => {
            const lastResult = user.results[user.results.length - 1];

            const plus =
              lastResult?.system +
              lastResult?.person +
              lastResult?.technology +
              lastResult?.process +
              lastResult?.influence;
            const roleAtual = user.role;
            const chapterAtual = user.chapter;
            const teamAtual = user.team;
            return (
              <Tr key={user.id}>
                <Th color="gray.200">{plus}</Th>
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
                {chapterAtual === null ? <Td>...</Td> : <Td>{chapterAtual}</Td>}
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
  );
};

export default UserComparisonsRanking;
