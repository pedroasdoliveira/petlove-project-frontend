import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
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
  Tooltip,
} from "@chakra-ui/react";
import ModalUserAdm from "../../components/ModalUserAdm/ModalUserAdm";
import { useSpecialtyss } from "../../contexts/specialtyss";
import { useUsers } from "../../contexts/Users";
import { useState } from "react";
import Image from "next/image";
import ProfileIcon from "../../../public/icon/Profile_Icon.svg";

const AllUserList = () => {
  const { users } = useUsers();
  const { specialtyss } = useSpecialtyss();

  const color = useColorModeValue("whiteAlpha", "facebook");
  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");

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
    const speciality = specialtyss?.map((item) => item.performance);

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

    if (filter === speciality?.find((item) => item === filter)) {
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
          <MenuList
            minWidth="240px"
            style={{
              background: colorOption,
            }}
          >
            <MenuOptionGroup
              defaultValue="asc"
              title="Ordem"
              type="radio"
              onChange={handleOrder}
            >
              <MenuItemOption
                value="asc"
                _focus={{
                  background: "gray.600",
                }}
              >
                crescente
              </MenuItemOption>
              <MenuItemOption
                value="desc"
                _focus={{
                  background: "gray.600",
                }}
              >
                decrescente
              </MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup
              defaultValue="all"
              type="radio"
              title="Filtrar por:"
              onChange={handleFilter}
            >
              <MenuItemOption
                value="all"
                _focus={{
                  background: "gray.600",
                }}
              >
                Todos
              </MenuItemOption>
              <MenuItemOption
                value="new"
                _focus={{
                  background: "gray.600",
                }}
              >
                Novos usuários
              </MenuItemOption>
              <Text m={"0.5rem"} fontWeight="500">
                Função:
              </Text>
              {specialtyss?.map((item) => (
                <MenuItemOption
                  value={item.performance}
                  key={item.id}
                  _focus={{
                    background: "gray.600",
                  }}
                >
                  {item.performance}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
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
                          user?.profilePicture
                            ? user.profilePicture
                            : ProfileIcon
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
                  {chapterAtual === null ? (
                    <Td>...</Td>
                  ) : (
                    <Td>{chapterAtual}</Td>
                  )}
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
    </>
  );
};

export default AllUserList;
