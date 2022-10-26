import {
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useToggle } from "../../hooks/useToggle";
import { ToggleMode } from "../../types/interfaces";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import { AiFillHome, AiFillProfile, AiOutlineLogout } from "react-icons/ai";
import { useAuth } from "../../contexts/Auth";

interface Prop {
  direction?: any;
  path?: "Interview";
  currentPage?:
    | "Perfil"
    | "Histórico"
    | "Especialidades"
    | "Mudar conta"
    | "Administrador"
    | undefined;
}

const AsideMenu = ({ path, direction, currentPage }: Prop) => {
  const { logout } = useAuth();

  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;
  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");
  const textColor = useColorModeValue("#000000", "#ffffff");

  // h={direction === "column" ? (path === "Interview" ? "6%" : "25%") : "75%"}
  // {...(path === "Interview" ? { top: "10rem" } : { right: {} })}

  return (
    <>
      {direction === "row" ? (
        <Flex
          as="aside"
          p="3px"
          borderRadius="10px"
          h={
            direction === "column"
              ? path === "Interview"
                ? "6%"
                : "35%"
              : "75%"
          }
          alignItems="center"
          direction={direction}
          justifyContent="space-between"
          zIndex={1}
          gap="1rem"
          backdropFilter={"blur(42px)"}
          color={textColor}
          {...(path === "Interview" && { top: "10rem" })}
          right={1}
        >
          <Button
            onClick={() => {
              toggleColorMode();
              setToggle(!toggle);
            }}
          >
            {toggle ? <SunIcon /> : <MoonIcon />}
          </Button>
          {path === "Interview" ? (
            ""
          ) : (
            <>
              <Link href={"/Homepage"}>
                <Button>
                  <Icon as={AiFillHome} />
                </Button>
              </Link>
              <Link href={"/Profile"}>
                <Button>
                  <Icon as={AiFillProfile} />
                </Button>
              </Link>
              <Button
                m={direction === "column" ? "1.5rem 0 0 0" : "0 0 0 1.5rem"}
                onClick={logout}
              >
                <Icon as={AiOutlineLogout} />
              </Button>
            </>
          )}
        </Flex>
      ) : (
        <Flex
          as="aside"
          border={`1px solid ${borderColor}`}
          p="3px"
          borderRadius="10px"
          h={{ md: path === "Interview" ? "6%" : "40%", sm: "10%" }}
          alignItems="center"
          direction={{ sm: "row", md: "column" }}
          justifyContent="space-between"
          position={"fixed"}
          zIndex={1}
          gap="1rem"
          backdropFilter={"blur(42px)"}
          color={textColor}
          {...(path === "Interview" && { top: "10rem" })}
          right={{ md: 1 }}
        >
          <Button
            onClick={() => {
              toggleColorMode();
              setToggle(!toggle);
            }}
          >
            {toggle ? <SunIcon /> : <MoonIcon />}
          </Button>
          {path === "Interview" ? (
            ""
          ) : (
            <>
              <Link href={"/Homepage"}>
                <Button>
                  <Icon as={AiFillHome} />
                </Button>
              </Link>
              <Link href={"/Profile"}>
                <Button>
                  <Icon as={AiFillProfile} />
                </Button>
              </Link>
              <Button
                m={{ md: "1.5rem 0 0 0", sm: "" }}
                onClick={logout}
                alignItems="center"
              >
                <Icon as={AiOutlineLogout} />
              </Button>
              <DrawerMenu path={currentPage} />
            </>
          )}
        </Flex>
      )}
    </>
  );
};

export default AsideMenu;
