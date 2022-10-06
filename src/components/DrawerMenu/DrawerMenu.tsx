import { EditIcon, HamburgerIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import MenuProfile from "components/MenuProfile/MenuProfile";
import React from "react";
import { ImUserTie } from "react-icons/im";

interface SettingsMenuProps {
  path:
    | "Perfil"
    | "Histórico"
    | "Especialidades"
    | "Mudar conta"
    | "Administrador"
    | undefined
}

const DrawerMenu = ({ path }: SettingsMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuPatchBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.19)",
    "rgba(27, 28, 51, 0.71)"
  );
  const pageBackground = useColorModeValue(
    "linear-gradient(123deg, #3B49DA 42.33%, rgba(59, 73, 218, 0.49) 73.76%)",
    "linear-gradient(130.87deg, rgba(6, 11, 40, 0.94) 40.59%, rgba(10, 14, 35, 0.49) 64.14%)"
  );

  return (
    <>
      <IconButton display={{sm: "block", lg: "none"}} aria-label="" w="48px" icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent bg="transparent" boxShadow="none">
          <DrawerCloseButton />
          <DrawerBody
            as="aside"
            flexDir="column"
            w="100%"
            h="43.5rem"
            bg={pageBackground}
            borderRadius="10px"
            p={{ xl: "40px", lg: "25px" }}
            paddingY={"10"}
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
                background={
                  path === "Especialidades" ? menuPatchBackground : "none"
                }
                color={path === "Especialidades" ? "white" : "gray.400"}
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
                background={
                  path === "Mudar conta" ? menuPatchBackground : "none"
                }
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

            <Link href={"/Administration"}>
              <Flex
                mb={"2"}
                p={"3"}
                display={"flex"}
                alignItems={"center"}
                background={
                  path === "Administrador" ? menuPatchBackground : "none"
                }
                color={path === "Administrador" ? "white" : "gray.400"}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
