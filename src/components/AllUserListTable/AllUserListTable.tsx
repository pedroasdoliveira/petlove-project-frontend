import {
  Flex,
  Text,
  Badge,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import ModalUserAdm from "components/ModalUserAdm/ModalUserAdm";
import { useUsers } from "contexts/Users";
import Image from "next/image";
import ProfileIcon from "../../../public/icon/Profile_Icon.svg";

interface Props {
  order: string;
  specialtyss: any;
  filter: string;
  search: string;
}

const AllUserListTable = ({
  order,
  specialtyss,
  filter,
  search,
}: Props) => {
  const { users } = useUsers();

  const color = useColorModeValue("whiteAlpha", "facebook");

  const filteredData = users?.filter((item) => {
    const speciality = specialtyss?.map((item: any) => item.performance);

    if (filter === "all") {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.role?.toLowerCase().includes(search.toLowerCase()) ||
        item.chapter?.toLowerCase().includes(search.toLowerCase()) ||
        item.team?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter === "new") {
      return (
        (item.role === null || item.chapter === null || item.team === null) &&
        (item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.email?.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (filter === speciality?.find((item: any) => item === filter)) {
      return (
        item.role?.includes(filter) &&
        (item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.role?.toLowerCase().includes(search.toLowerCase()) ||
          item.chapter?.toLowerCase().includes(search.toLowerCase()) ||
          item.team?.toLowerCase().includes(search.toLowerCase()))
      );
    }
  });
  const filterOrder = filteredData?.sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return (
    <TableContainer marginTop={6}>
      <Table variant="striped" size="md" colorScheme={color}>
        <TableCaption color="gray.200">Detalhes dos usuários</TableCaption>
        <Thead>
          <Tr>
            <Th color="gray.200">#</Th>
            <Th color="gray.200">Nome</Th>
            <Th color="gray.200">Chapter</Th>
            <Th color="gray.200">Função</Th>
            <Th color="gray.200">Equipe</Th>
            <Th color="gray.200">Testes</Th>
            <Th w={"1rem"} color="gray.200">
              Detalhes
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filterOrder?.map((user) => {
            const lastResult = user.results[user.results.length - 1];

            const roleAtual = user.role;
            const chapterAtual = user.chapter;
            const teamAtual = user.team;
            return (
              <Tr key={user.id}>
                <Td position="relative">
                  <Flex
                    w={"3rem"}
                    h={"3rem"}
                    ml={"-1.5rem"}
                    position={"absolute"}
                    top={"3"}
                    left={"10"}
                  >
                    <Image
                      src={
                        user?.profilePicture ? user.profilePicture : ProfileIcon
                      }
                      alt="Imagem de perfil"
                      width={"98%"}
                      height={"98%"}
                      objectFit={"cover"}
                      style={{ borderRadius: "50%", background: "#dee0e3" }}
                    />
                  </Flex>
                </Td>
                <Td>
                  {roleAtual === null &&
                    chapterAtual === null &&
                    teamAtual === null && (
                      <Badge colorScheme="green" variant="solid" mr="-2.3rem">
                        Novo
                      </Badge>
                    )}
                  {user.name.length > 25 ? (
                    <Tooltip
                      label={user.name}
                      aria-label="A tooltip"
                      placement="top"
                    >
                      <Text>{user.name.slice(0, 25)}...</Text>
                    </Tooltip>
                  ) : (
                    <Text>{user.name}</Text>
                  )}
                </Td>
                {chapterAtual === null ? <Td>...</Td> : <Td>{chapterAtual}</Td>}
                {roleAtual === null ? <Td>...</Td> : <Td>{roleAtual}</Td>}
                {teamAtual === null ? <Td>...</Td> : <Td>{teamAtual}</Td>}
                <Td>{user.results.length} </Td>
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

export default AllUserListTable;
