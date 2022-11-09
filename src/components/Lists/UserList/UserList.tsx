import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserTypes } from "types/interfaces";
import ModalLastUserAdm from "../../../components/ModalLastUserAdm/ModalLastUserAdm";
import { useUsers } from "../../../contexts/Users";

const UserList = () => {
  const { users } = useUsers();
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption color="gray.200">Testes dos usuários</TableCaption>
        <Thead>
          <Tr>
            <Th color="gray.200">Nome</Th>
            <Th color="gray.200">Data do teste</Th>
            <Th color="gray.200">Função atual</Th>
            <Th color="gray.200">Teste</Th>
            <Th w={"1rem"} color="gray.200">
              Validar
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user: UserTypes) => {
            const lastResult = user.results.at(-1);

            const roleAtual = user.role;

            if (lastResult?.isValided === null) {
              return (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{`${new Date(
                    lastResult.createdAt
                  ).toLocaleDateString()}`}</Td>
                  {roleAtual === null ? (
                    <Td>Contratado</Td>
                  ) : (
                    <Td>{roleAtual}</Td>
                  )}
                  <Td>{lastResult.nextRole}</Td>

                  <Td>
                    <ModalLastUserAdm value={lastResult} user={user} />
                  </Td>
                </Tr>
              );
            }
            return null;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
