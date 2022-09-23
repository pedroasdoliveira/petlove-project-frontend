import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, useColorModeValue } from "@chakra-ui/react";

const HistoryList = () => {
  const titleColor = useColorModeValue("#171d28", "#cbdae9");
  
  return (
    <TableContainer
     marginTop={6}
    >
      <Table variant="striped" size="md">
        <TableCaption color={titleColor}>Ultimos testes realizados</TableCaption>
        <Thead>
          <Tr>
            <Th color={titleColor}>Data do teste</Th>
            <Th color={titleColor}>Nivel de senioriedade</Th>
            <Th color={titleColor}>Aprovação</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>20/03/2018</Td>
            <Td>Junior</Td>
            <Td>Aprovado</Td>
          </Tr>
          <Tr>
            <Td>13/10/2018</Td>
            <Td>Pleno</Td>
            <Td>Pendente</Td>
          </Tr>
          <Tr>
            <Td>06/05/2020</Td>
            <Td>Senior</Td>
            <Td>Reprovado</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HistoryList;
