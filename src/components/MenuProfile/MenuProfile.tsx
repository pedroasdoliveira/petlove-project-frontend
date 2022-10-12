import { EditIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { ImUserTie } from 'react-icons/im'
import Link from "next/link";
import { useUsers } from "contexts/Users";

interface SettingsMenuProps {
  path:
    | "Perfil"
    | "Histórico"
    | "Especialidades"
    | "Mudar conta"
    | "Administrador";
}

const MenuProfile = ({ path }: SettingsMenuProps) => {
  const { user } = useUsers();

  const menuPatchBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.19)",
    "rgba(27, 28, 51, 0.71)"
  );
  const pageBackground = useColorModeValue(
    "linear-gradient(123deg, #3B49DA 42.33%, rgba(59, 73, 218, 0.49) 73.76%)",
    "linear-gradient(130.87deg, rgba(6, 11, 40, 0.94) 40.59%, rgba(10, 14, 35, 0.49) 64.14%)"
  );

  return (
    <Flex
      as="aside"
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
      <Link href={"/Profile"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Perfil" ? menuPatchBackground : "none"}
          fontWeight={path === "Perfil" ? "bold" : "normal"}
          color={path === "Perfil" ? "white" : "gray.400"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{
            background: menuPatchBackground,
            color: "white",
          }}
        >
          <SettingsIcon w={"15"} pr={"3"} />
          <Flex mr={"4"} ml={"2"}>
            Profile
          </Flex>
        </Flex>
      </Link>
      <Link href={"/History"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Histórico" ? menuPatchBackground : "none"}
          color={path === "Histórico" ? "white" : "gray.400"}
          fontWeight={path === "Histórico" ? "bold" : "normal"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{
            background: menuPatchBackground,
            color: "white",
          }}
        >
          <TimeIcon w={"15"} pr={"3"} />
          <Flex mr={"4"} ml={"2"}>
            Histórico
          </Flex>
        </Flex>
      </Link>
      <Link href={"/Specialty"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Especialidades" ? menuPatchBackground : "none"}
          color={path === "Especialidades" ? "white" : "gray.400"}
          fontWeight={path === "Especialidades" ? "bold" : "normal"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{
            background: menuPatchBackground,
            color: "white",
          }}
        >
          <ViewIcon w={"15"} pr={"3"} />
          <Flex mr={"4"} ml={"2"}>
            Especialidades
          </Flex>
        </Flex>
      </Link>
      <Link href={"/Edit"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Mudar conta" ? menuPatchBackground : "none"}
          fontWeight={path === "Mudar conta" ? "bold" : "normal"}
          color={path === "Mudar conta" ? "white" : "gray.400"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{
            background: menuPatchBackground,
            color: "white",
          }}
        >
          <EditIcon w={"15"} pr={"3"} />
          <Flex mr={"4"} ml={"2"}>
            Mudar conta
          </Flex>
        </Flex>
      </Link>

      {user?.isAdmin && (
        <Link href={"/Administration"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Administrador" ? menuPatchBackground : "none"}
          color={path === "Administrador" ? "white" : "gray.400"}
          fontWeight={path === "Administrador" ? "bold" : "normal"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{
            background: menuPatchBackground,
            color: "white",
          }}
        >
          <Icon as={ImUserTie} w={8} pr={"3"} />
          <Flex mr={"4"} ml={"2"}>
            Administrador
          </Flex>
        </Flex>
      </Link>
      )}
    </Flex>
  );
};

export default MenuProfile;
