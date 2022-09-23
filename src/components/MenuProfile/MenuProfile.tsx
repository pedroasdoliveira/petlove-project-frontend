import { EditIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface SettingsMenuProps {
  path: "Perfil" | "Histórico" | "Comparações" | "Mudar conta" | "Administrador";
}

const MenuProfile = ({ path }: SettingsMenuProps) => {
  const menuPatchBackground = useColorModeValue("rgba(255, 255, 255, 0.19)", "rgba(27, 28, 51, 0.71)");
  const pageBackground = useColorModeValue(
    "linear-gradient(123deg, #3B49DA 42.33%, rgba(59, 73, 218, 0.49) 73.76%)",
    "linear-gradient(130.87deg, rgba(6, 11, 40, 0.94) 40.59%, rgba(10, 14, 35, 0.49) 64.14%)"
  );

  return (
    <Flex
      as="nav"
      flexDir="column"
      w="20rem"
      h="43.5rem"
      bg={pageBackground}
      borderRadius="10px"
      p="40px"
      paddingY={"5"}
      fontSize="20px"
      position={"fixed"}
    >
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        alignItems={"center"}
        background={path === "Perfil" ? menuPatchBackground : "none"}
        // bold
        fontWeight={"bold"}
        color={path === "Perfil" ? "white" : "gray.400"}
        borderRadius={"10px"}
      >
        <SettingsIcon w={"15"} pr={"3"} />
        <Flex mr={"4"} ml={"2"}>
          Perfil
        </Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        alignItems={"center"}
        background={path === "Histórico" ? menuPatchBackground : "none"}
        color={path === "Histórico" ? "white" : "gray.400"}
        borderRadius={"10px"}
      >
        <TimeIcon w={"15"} pr={"3"} />
        <Flex mr={"4"} ml={"2"}>
          Histórico
        </Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        alignItems={"center"}
        background={path === "Comparações" ? menuPatchBackground : "none"}
        color={path === "Comparações" ? "white" : "gray.400"}
        borderRadius={"10px"}
      >
        <ViewIcon w={"15"} pr={"3"} />
        <Flex mr={"4"} ml={"2"}>
          Comparações
        </Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        alignItems={"center"}
        background={path === "Mudar conta" ? menuPatchBackground : "none"}
        color={path === "Mudar conta" ? "white" : "gray.400"}
        borderRadius={"10px"}
      >
        <EditIcon w={"15"} pr={"3"} />
        <Flex mr={"4"} ml={"2"}>
          Mudar conta
        </Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        alignItems={"center"}
        background={path === "Administrador" ? menuPatchBackground : "none"}
        color={path === "Administrador" ? "white" : "gray.400"}
        borderRadius={"10px"}
      >
        <Flex mr={"4"} ml={"2"}>
          Administrador
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MenuProfile;
