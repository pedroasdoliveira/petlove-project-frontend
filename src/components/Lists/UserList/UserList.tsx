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
import ModalLastUserAdm from "components/ModalLastUserAdm/ModalLastUserAdm";
import { useUsers } from "contexts/Users";

const UserList = () => {
  const { users } = useUsers();
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption>Testes dos usuários</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Data do teste</Th>
            <Th>Função atual</Th>
            <Th>Teste</Th>
            <Th w={"1rem"}>Validar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user, index) => {
            const lastResult = user.results.at(-1);

            const roleAtual = user.role;

            if (lastResult?.isValided === null) {
              return (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{`${new Date(lastResult.createdAt).toLocaleDateString()}`}</Td>
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
