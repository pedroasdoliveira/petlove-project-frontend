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
import ModalUser from "../../../components/ModalUser/ModalUser";
import { useUsers } from "../../../contexts/Users";

const HistoryList = () => {
  const { user } = useUsers();

  const color = useColorModeValue("whiteAlpha", "facebook");

  const isValideColor = (value: string): string => {
    if (value === "Sim") {
      return "#00FF00";
    } else if (value === "Não") {
      return "#df0303";
    } else {
      return "#f1ee04";
    }
  };

  const isValideIcon = (value: string): JSX.Element => {
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
            <Th color={"white"}>Mais detalhes</Th>
            <Th color={"white"}>Aprovação</Th>
          </Tr>
        </Thead>
        <Tbody>
          {user.results?.map((item: any) => {
            return (
              <Tr key={item.id}>
                <Td color={"white"}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </Td>
                <Td color={"white"}>{item.nextRole}</Td>
                <Td color={"white"}>
                  <ModalUser value={item} />
                </Td>
                <Td
                  width="7.5rem"
                  color={isValideColor(item.isValided)}
                  fontSize="1.5rem"
                  textAlign="center"
                >
                  {isValideIcon(item.isValided)}
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
