import { Button, Flex, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiFillHome, AiFillProfile } from "react-icons/ai";

interface Prop {
  direction: "column" | "row";
  path?: "Interview";
}

const AsideMenu = ({ direction, path }: Prop) => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;
  const borderColor = useColorModeValue("#1d1d31", "#8e6dd1");

  return (
    <Flex
    as="aside"
    border={`1px solid ${borderColor}`}
    p="3px"
    borderRadius="10px"
    h={direction === "column" ? "25%" : "75%"}
    alignItems="center"
    direction={direction}
    justifyContent="space-between"
    position={"fixed"}
    zIndex={1}
    gap="1rem"
    backdropFilter={"blur(42px)"}
    {...(path === "Interview" ? { top: "10rem" } : { right: "1rem" })}
  >
    <Button
      onClick={() => {
        toggleColorMode();
        setToggle(!toggle);
      }}
    >
      {toggle ? <SunIcon /> : <MoonIcon />}
    </Button>
    <Link href={"/Homepage"}>   
    <Button >
      <Icon as={AiFillHome}/>
    </Button>
    </Link>
    <Link href={"/Profile"}>   
    <Button >
      <Icon as={AiFillProfile}/>
    </Button>
    </Link>
  </Flex>
  );
};

export default AsideMenu;
