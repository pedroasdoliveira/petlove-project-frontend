import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Flex,
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
import { dataAdm } from "components/obj/obj";

const UserList = () => {
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
            <Th>Função </Th>
            <Th w={"1rem"}>Validar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataAdm.map((user) => {
            const lastResult = user.results[user.results.length - 1];

            const roleAtual = user.role;

            if (lastResult.isValide === "null") {
              return (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{lastResult.createdAt}</Td>
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
