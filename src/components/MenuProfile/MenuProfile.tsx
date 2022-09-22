import { EditIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface SettingsMenuProps {
  path: "Perfil" | "Histórico"
}

const MenuProfile = ({ path }: SettingsMenuProps) => {
  const menuBackground = useColorModeValue("#6dacd152", "#1d1d3190");
  const menuPatchBackground = useColorModeValue("#6dacd1d5", "#1d1d31ea");
  const pageBackground = useColorModeValue("#3b49da", "#141a55");

  return (
    <Flex
      as="nav"
      flexDir="column"
      w="20rem"
      h="100%"
      backgroundColor={pageBackground}
      borderRadius="10px"
      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.75)"
      p="40px"
      paddingY={"5"}
      fontSize="20px"
    >
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        background={path === "Perfil" ? menuPatchBackground : menuBackground}
        borderRadius={"10px"}
      >
        <SettingsIcon w={"15"} pr={"3"} />
        <Flex mr={"6"}>Perfil</Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        background={path === "Histórico" ? menuPatchBackground : menuBackground}
        borderRadius={"10px"}
      >
        <TimeIcon w={"15"} pr={"3"} />
        <Flex mr={"6"}>Histórico</Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        background={menuBackground}
        borderRadius={"10px"}
      >
        <ViewIcon w={"15"} pr={"3"} />
        <Flex mr={"6"}>Comparações</Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        background={menuBackground}
        borderRadius={"10px"}
      >
        <EditIcon w={"15"} pr={"3"} />
        <Flex mr={"6"}>Mudar conta</Flex>
      </Flex>
      <Flex
        mb={"2"}
        p={"3"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        background={menuBackground}
        borderRadius={"10px"}
      >
        <Flex mr={"6"}>Administrador</Flex>
      </Flex>
    </Flex>
  );
};

export default MenuProfile;
