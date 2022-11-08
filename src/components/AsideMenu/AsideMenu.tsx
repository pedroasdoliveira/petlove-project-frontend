import {
  Badge,
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
import { useEffect, useState } from "react";
import { useUsers } from "contexts/Users";

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
  const { logout, logged } = useAuth();
  const { user, users } = useUsers();

  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;
  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");
  const textColor = useColorModeValue("#000000", "#ffffff");
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState<number>();

  useEffect(() => {
    if (user?.isAdmin) {
      const badgeNumber = users?.reduce((acc: number, user: any): number => {
        if (user?.results?.at(-1)?.isValided === null) {
          setNewTest(true);
          return acc + 1;
        }
        return acc;
      }, 0 as number);

      setContTest(badgeNumber);
    }
  }, [user, logged]);

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
                  {newTest && (
                    <Badge
                      ml="1"
                      colorScheme="green"
                      style={{
                        position: "absolute",
                        top: "1.7rem",
                        right:"-0.5rem",
                        zIndex: 2,
                        width: "22px",
                        height: "21px",
                        borderRadius: "50%",
                        background: "red",
                        border: "1px solid #fff",
                        fontSize: "11px",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {contTest && (contTest > 9 ? "9+" : contTest)}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Button
                mx={{ md: "1.5rem", sm: "" }}
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
              <DrawerMenu path={currentPage} />
              <Button
                m={{ md: "1.5rem 0 0 0", sm: "" }}
                onClick={logout}
                alignItems="center"
              >
                <Icon as={AiOutlineLogout} />
              </Button>
            </>
          )}
        </Flex>
      )}
    </>
  );
};

export default AsideMenu;
