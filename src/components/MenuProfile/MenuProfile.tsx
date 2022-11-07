import { EditIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { Badge, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { ImUserTie } from "react-icons/im";
import Link from "next/link";
import { useUsers } from "../../contexts/Users";
import { useState, useEffect } from "react";

interface SettingsMenuProps {
  path:
    | "Perfil"
    | "Histórico"
    | "Especialidades"
    | "Mudar conta"
    | "Administrador";
}

const MenuProfile = ({ path }: SettingsMenuProps) => {
  const { user, users } = useUsers();
  const [newTest, setNewTest] = useState(false);

  useEffect(() => {
    if (user?.isAdmin) {
      users?.map((user: any) => {
        if (user?.results?.at(-1)?.isValided === null) {
          setNewTest(true);
        }
      });
    }
  }, [user]);

  const menuPatchBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.19)",
    "rgba(27, 28, 51, 0.71)",
  );
  const pageBackground = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, .95) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );

  return (
    <Flex
      as="aside"
      flexDir="column"
      w="100%"
      h="43.5rem"
      bg={pageBackground}
      borderRadius="10px"
      p={{xl: '40px', lg: '15px'}}
      paddingY={"5"}
      fontSize="20px"
    >
      <Link href={"/Profile"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Perfil" ? menuPatchBackground : "none"}
          fontWeight={path === "Perfil" ? "bold" : "normal"}
          color={path === "Perfil" ? "white" : "gray.300"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{
            background: menuPatchBackground,
            color: "white",
          }}
        >
          <SettingsIcon w={"15"} pr={"3"} />
          <Flex mr={"4"} ml={"2"}>
            Perfil
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
          color={path === "Histórico" ? "white" : "gray.300"}
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
      <Link href={"/Specialties"}>
        <Flex
          mb={"2"}
          p={"3"}
          display={"flex"}
          alignItems={"center"}
          background={path === "Especialidades" ? menuPatchBackground : "none"}
          color={path === "Especialidades" ? "white" : "gray.300"}
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
          color={path === "Mudar conta" ? "white" : "gray.300"}
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
            color={path === "Administrador" ? "white" : "gray.300"}
            fontWeight={path === "Administrador" ? "bold" : "normal"}
            borderRadius={"10px"}
            cursor={"pointer"}
            _hover={{
              background: menuPatchBackground,
              color: "white",
            }}
          >
            <Icon as={ImUserTie} w={8} pr={"3"} />
            <Flex mr={"4"} ml={"2"} position="relative">
              Administrador
              {newTest && path !== "Administrador" && (
                <Badge
                  ml="1"
                  colorScheme="green"
                  style={{
                    position: "absolute",
                    top: "1.1rem",
                    right: "9.8rem",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    background: "red",
                    border: "1px solid #fff",
                  }}
                />
              )}
            </Flex>
          </Flex>
        </Link>
      )}
    </Flex>
  );
};

export default MenuProfile;
