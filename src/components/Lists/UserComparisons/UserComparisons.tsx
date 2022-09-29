import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";

interface Prop {
  search: string;
}

const UserComparisons = ({search}: Prop) => {
  const color = useColorModeValue("whiteAlpha", "facebook");

  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption>Comparações entre usuários</TableCaption>
        <Thead>
          <Tr>
            <Th>Posição</Th>
            <Th>Nome</Th>
            <Th>Senioriedade</Th>
            <Th>Equipe</Th>
            <Th>#</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>#1</Td>
            <Td>Nicolas Kim Copolla</Td>
            <Td>Junior</Td>
            <Td>Black</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
          <Tr>
            <Td>#2</Td>
            <Td>Keanu Reeves</Td>
            <Td>Tech Lead</Td>
            <Td>Red</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
          <Tr>
            <Td>#3</Td>
            <Td>Pedro Pascal</Td>
            <Td>Pleno</Td>
            <Td>Blue</Td>
            <Td cursor={"pointer"}>
              <ExternalLinkIcon w={"25px"} h={"25px"} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserComparisons;
