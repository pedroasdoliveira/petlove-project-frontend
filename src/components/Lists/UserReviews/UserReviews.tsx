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

const UserReviews = () => {
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption>Historicos de avaliacões dos usuários</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Data do teste</Th>
            <Th>Testes Realizados</Th>
            <Th>#</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Nicolas Kim Copolla</Td>
            <Td>27/09/2022</Td>
            <Td>4</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
          <Tr>
            <Td>Keanu Reeves</Td>
            <Td>02/10/2022</Td>
            <Td>6</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
          <Tr>
            <Td>Pedro Pascal</Td>
            <Td>29/09/2022</Td>
            <Td>2</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserReviews;
