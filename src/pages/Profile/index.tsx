import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import LastRadarUser from "../../components/Graphics/LastRadarUser";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useAuth } from "../../contexts/Auth";
import { useEffect, useState } from "react";
import { useUsers } from "../../contexts/Users";
import ProfileIcon from "../../../public/icon/Profile_Icon.svg";
import Image from "next/image";
import { UserTypes } from "types/interfaces";

interface ProfileProps {
  name: string;
}

const Profile: NextPage<ProfileProps> = () => {
  const { checkTokenExpiration, logged } = useAuth();
  const { user, users } = useUsers();
  const [image, setImage] = useState("");
  const [newTest, setNewTest] = useState(false);
  const [contTest, setContTest] = useState<number>();

  useEffect(() => {
    checkTokenExpiration?.();
  }, []);

  useEffect(() => {
    setImage(user?.profilePicture ?? "");
    if (user?.isAdmin) {
      const badgeNumber = users?.reduce(
        (acc: number, user: UserTypes): number => {
          if (user?.results?.at(-1)?.isValided === null) {
            setNewTest(true);
            return acc + 1;
          }
          return acc;
        },
        0 as number
      );

      setContTest(badgeNumber);
    }
  }, [user, logged]);

  const background = useColorModeValue(
    "linear-gradient(111.58deg, rgba(37,27,113, .40) 21.73%, rgba(37, 29, 103, 0.50) 78.27%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const handleVerify = () => {
    if (user?.results?.at(-1)?.isValided === "Sim") {
      return "Aprovado";
    } else if (user?.results?.at(-1)?.isValided === null) {
      return "Aguardando";
    } else if (user?.results?.at(-1)?.isValided === "Não") {
      return "Reprovado";
    } else {
      return "Não realizado";
    }
  };

  return (
    <Flex
      as="main"
      display={"flex"}
      h="100vh"
      w="100vw"
      px={{ xl: "5rem", lg: "1.5rem" }}
      py="30px"
      justifyContent={{ sm: "center", md: "space-between" }}
      position="relative"
    >
      <Head>
        {newTest ? (
          <title>({contTest}) Profile - Self Awareness</title>
        ) : (
          <title>Profile - Self Awareness</title>
        )}
        <meta
          name="Pagina do perfil do usuário"
          content="Primeira pagina do perfil"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}

        <Flex
          w={{ xl: "20rem", lg: "15rem" }}
          display={{ lg: "flex", sm: "none" }}
          position="fixed"
        >
          <MenuProfile path="Perfil" />
        </Flex>

        {/* Column 2 - Content */}
        <Flex
          ml={{ xl: "350px", lg: "230px" }}
          mr={{ lg: "30px", md: "60px" }}
          w={{ xl: "calc(100% - 20rem)", lg: "80%", sm: "100%" }}
          flexDir="column"
          px="3%"
          py={{ sm: "20%", md: "2%" }}
        >
          <Flex
            p="15px"
            borderRadius="15px"
            bg={background}
            color={"white"}
            w="100%"
            justify={{ sm: "center", md: "initial" }}
            position="relative"
            alignItems={"center"}
          >
            <Flex mr={4}>
              <Image
                src={image ? image : ProfileIcon}
                alt="Imagem de perfil"
                width={"95%"}
                height={"100%"}
                objectFit={"cover"}
                style={{ borderRadius: "50%", background: "#dee0e3" }}
              />
            </Flex>
            <Heading
              fontWeight="bold"
              letterSpacing="2%"
              fontSize={{ sm: "xl", md: "2xl" }}
              lineHeight={1.5}
            >
              {"<"}Welcome back{"/>"}{" "}
              <Flex fontWeight="normal" ml={"1.2rem"}>
                {user?.name?.split(" ")[0]}
              </Flex>
            </Heading>
          </Flex>
          <Flex
            flexDir={{ sm: "column", md: "row" }}
            justifyContent="space-between"
            w="100%"
            py="50px"
            color={"white"}
          >
            <Flex
              w={{ sm: "100%", md: "50%" }}
              p="30px"
              bg={background}
              borderRadius="20px"
              mr={4}
              h={"23rem"}
              mb={{ sm: "2rem" }}
              direction="column"
            >
              <Text fontSize="xl" mx="auto" mb={1} fontWeight="bold">
                Último teste - {handleVerify()}
              </Text>
              <LastRadarUser />
            </Flex>
            <Flex
              w={{ sm: "100%", md: "50%" }}
              py="30px"
              px={{ sm: "30px", md: "20px", lg: "30px" }}
              bg={background}
              borderRadius="20px"
              h={"23rem"}
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl" mx="auto" mb={3} fontWeight="bold">
                Informações
              </Text>

              <Flex
                fontSize={{ sm: "md", md: "lg" }}
                alignItems={"center"}
                w="100%"
                justify={{ sm: "space-between", md: "center" }}
                direction={{ sm: "column", md: "row" }}
              >
                <Text color={"gray.300"} mr={{ md: 4, sm: "0" }}>
                  Nome completo:
                </Text>
                <Text>{user?.name}</Text>
              </Flex>
              <Flex
                fontSize={{ sm: "md", md: "lg" }}
                alignItems={"center"}
                w="100%"
                justify={{ sm: "space-between", md: "center" }}
                direction={{ sm: "column", md: "row" }}
              >
                <Text color={"gray.300"} mr={{ md: 4, sm: "0" }}>
                  Email:
                </Text>
                <Text>{user?.email}</Text>
              </Flex>
              <Flex
                fontSize={{ sm: "md", md: "lg" }}
                alignItems={"center"}
                w="100%"
                justify={{ sm: "space-between", md: "center" }}
              >
                <Text color={"gray.300"} mr={{ md: 4, sm: "0" }}>
                  Chapter:
                </Text>
                <Text>{user?.chapter ? user.chapter : `...`}</Text>
              </Flex>
              <Flex
                fontSize={{ sm: "md", md: "lg" }}
                alignItems={"center"}
                w="100%"
                justify={{ sm: "space-between", md: "center" }}
              >
                <Text color={"gray.300"} mr={{ md: 4, sm: "0" }}>
                  Time:
                </Text>
                <Text>{user?.team ? user.team : `...`}</Text>
              </Flex>
              <Flex
                fontSize={{ sm: "md", md: "lg" }}
                alignItems={"center"}
                w="100%"
                justify={{ sm: "space-between", md: "center" }}
              >
                <Text color={"gray.300"} mr={{ md: 4, sm: "0" }}>
                  Função:
                </Text>
                <Text>{user?.role ? user.role : `...`}</Text>
              </Flex>
              <Flex
                fontSize={{ sm: "md", md: "lg" }}
                alignItems={"center"}
                w="100%"
                justify={{ sm: "space-between", md: "center" }}
              >
                <Text color={"gray.300"} mr={{ md: 4, sm: "0" }}>
                  Data de contratação:
                </Text>
                <Text>
                  {`${new Date(user?.createdAt || 0).toLocaleDateString()}`}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <AsideMenu currentPage="Perfil" />
    </Flex>
  );
};

export default Profile;
