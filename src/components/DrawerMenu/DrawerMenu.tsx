import {
  EditIcon,
  HamburgerIcon,
  SettingsIcon,
  TimeIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Badge,
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
import { useUsers } from "contexts/Users";
import React, { useEffect, useState } from "react";
import { ImUserTie } from "react-icons/im";

interface SettingsMenuProps {
  path:
    | "Perfil"
    | "Histórico"
    | "Especialidades"
    | "Mudar conta"
    | "Administrador"
    | undefined;
}

const DrawerMenu = ({ path }: SettingsMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, users } = useUsers();
  const [newTest, setNewTest] = useState(false);

  const menuPatchBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.19)",
    "rgba(27, 28, 51, 0.71)"
  );
  const pageBackground = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, .95) 35%, rgba(37, 29, 103, 0.50) 78.27%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  useEffect(() => {
    if (user?.isAdmin) {
      users?.map((user: any): void => {
        if (user?.results?.at(-1)?.isValided === null) {
          setNewTest(true);
        }
      });
    }
  }, [user]);

  return (
    <>
      <IconButton
        display={{ sm: "block", lg: "none" }}
        aria-label=""
        w="48px"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
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
            <Link href={"/Specialties"}>
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
            {user?.isAdmin && (
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
