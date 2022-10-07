import { ExternalLinkIcon } from "@chakra-ui/icons";
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

const UserList = () => {
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption>Testes para verificação</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Data do teste</Th>
            <Th>Senioriedade</Th>
            <Th>#</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Nicolas Kim Copolla</Td>
            <Td>27/09/2022</Td>
            <Td>Junior</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
