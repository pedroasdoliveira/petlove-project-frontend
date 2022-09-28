import { CheckIcon, CloseIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";
import { dataApi } from "components/obj/obj";

const HistoryList = () => {
  const color = useColorModeValue("whiteAlpha", "facebook");
  const colorValided = useColorModeValue("#093c88", "#df0303");

  const isValideColor = (value: string) => {
      if (value === "Sim") {
        return "#00FF00";
      } else if (value === "Não") {
        return "#df0303";
      } else {
        return "#f1ee04";
      }

  };

  const isValideIcon = (value: string) => {
    if (value === "Sim") {
      return <CheckIcon />;
    } else if (value === "Não") {
      return <CloseIcon />;
    } else {
      return <WarningTwoIcon />;
    }
  };
  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption color={"white"}>Ultimos testes realizados</TableCaption>
        <Thead>
          <Tr>
            <Th color={"white"}>Data do teste</Th>
            <Th color={"white"}>Nivel de senioriedade</Th>
            <Th color={"white"}>Aprovação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataApi.map((item) => {
            return (
              <Tr key={item.id}>
                <Td color={"white"}>{item.createdAt}</Td>
                <Td color={"white"}>{item.nextRole}</Td>
                <Td
                  width="7.5rem"
                  color={isValideColor(item.isValide)}
                  fontSize="1.5rem"
                  textAlign="center"
                >
                  {isValideIcon(item.isValide)}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HistoryList;
