import {
  Flex,
  Text,
  useColorModeValue,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  specialtyss: any;
  filter: string;
  search: string;
  setSearch: (value: string) => void;
  setFilter: (value: string) => void;
  setOrder: (value: string) => void;
}

const AllUserListMenu = ({
  specialtyss,
  filter,
  search,
  setFilter,
  setSearch,
  setOrder,
}: Props) => {
  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleFilter = (event: any) => {
    setFilter(event);
  };

  const handleOrder = (event: any) => {
    setOrder(event);
  };

  return (
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
            {specialtyss?.map(
              (item: any): ReactElement<any, any> => (
                <MenuItemOption
                  value={item.performance}
                  key={item.id}
                  _focus={{
                    background: "gray.600",
                  }}
                >
                  {item.performance}
                </MenuItemOption>
              )
            )}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default AllUserListMenu;
