import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import { useToggle } from "hooks/useToggle";
import { ToggleMode } from "types/interfaces";

const Profile: NextPage = () => {
  const pageBackground = useColorModeValue("#8e6dd1", "#1d1d31");
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;
  return (
    <Flex>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex>
        {/* Column 1 - Menu */}
        <MenuProfile />
        <Flex>
          {/* Column 2 - Content */}
          <Flex>Nome</Flex>
          <Flex>
            <Flex>grafico</Flex>
            <Flex>informação</Flex>
          </Flex>
          <Flex>Outros</Flex>
        </Flex>
      </Flex>

      <Button
        position="absolute"
        top="25%"
        onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}
      >
        {toggle ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Flex>
  );
};

export default Profile;
