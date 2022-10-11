import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Table,
  Text,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import ModalLastUserAdm from "components/ModalLastUserAdm/ModalLastUserAdm";
import ModalUserAdm from "components/ModalUserAdm/ModalUserAdm";
import { dataAdm, specialities } from "components/obj/obj";
import { useUsers } from "contexts/Users";
import { useState } from "react";

const AllUserList = () => {
  const { users } = useUsers();
  const color = useColorModeValue("whiteAlpha", "facebook");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("asc");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleFilter = (event: any) => {
    setFilter(event);
  };

  const handleOrder = (event: any) => {
    setOrder(event);
  };

  const filteredData = users?.filter((item) => {
    const speciality = specialities.map((item) => item.name);

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
        (item.name!.toLowerCase().includes(search.toLowerCase()) ||
          item.email!.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (filter === speciality.find((item) => item === filter)) {
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
    <>
      <Flex
        marginTop={4}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Input
          placeholder="Pesquisar... (nome, email, cargo, chapter, equipe)"
          w={"400px"}
          color="white"
          _placeholder={{
            color: "#bbbaba",
          }}
          value={search}
          onChange={handleChange}
        />
        <Menu>
          <Flex alignItems={"center"} gap="1rem">
            <Text>Filtrar:</Text>
            <MenuButton as={Button} colorScheme="blue">
              {filter === "all" ? "Todos" : filter === "new" ? "Novos" : filter}
            </MenuButton>
          </Flex>
          <MenuList minWidth="240px">
            <MenuOptionGroup
              defaultValue="asc"
              title="Ordem"
              type="radio"
              onChange={handleOrder}
            >
              <MenuItemOption value="asc">crescente</MenuItemOption>
              <MenuItemOption value="desc">decrescente</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup
              defaultValue="all"
              type="radio"
              title="Filtrar por:"
              onChange={handleFilter}
            >
              <MenuItemOption value="all">Todos</MenuItemOption>
              <MenuItemOption value="new">Novos usuários</MenuItemOption>
              <Text m={"0.5rem"} fontWeight="500">
                Função:
              </Text>
              {specialities.map((item) => (
                <MenuItemOption value={item.name} key={item.id}>
                  {item.name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
      <TableContainer marginTop={6}>
        <Table variant="striped" size="md" colorScheme={color}>
          <TableCaption>Detalhes dos usuários</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Chapter</Th>
              <Th>Função</Th>
              <Th>Equipe</Th>
              <Th>Testes</Th>
              <Th w={"1rem"}>Detalhes</Th>
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
                  <Td>
                    {user.name}{" "}
                    {roleAtual === null &&
                      chapterAtual === null &&
                      teamAtual === null && <Badge colorScheme="green" variant='solid'>Novo</Badge>}
                  </Td>
                  {chapterAtual === null ? (
                    <Td>...</Td>
                  ) : (
                    <Td>{chapterAtual}</Td>
                  )}
                  {roleAtual === null ? (
                    <Td>...</Td>
                  ) : (
                    <Td>{roleAtual}</Td>
                  )}
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
    </>
  );
};

export default AllUserList;
