import {
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import { user } from "components/obj/obj";
import LastRadarUser from "components/Graphics/LastRadarUser";
import AsideMenu from "components/AsideMenu/AsideMenu";

interface ProfileProps {
  name: string;
}

const Profile: NextPage<ProfileProps> = () => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  return (
    <Flex
      as="main"
      display={"flex"}
      h="100vh"
      w="100vw"
      px={{xl: "5rem", lg: "1.5rem"}}
      py="30px"
      justifyContent={{sm: 'center', md: 'space-between'}}
      position="relative"
    >
      <Head>
        <title>Profile</title>
        <meta
          name="Pagina do perfil do usuário"
          content="Primeira pagina do perfil"
        />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}
        
        <Flex w={{xl: '20rem', lg: '15rem'}} display={{lg: 'flex', sm: 'none'}} position="fixed">
          <MenuProfile path="Perfil" />
        </Flex>

        {/* Column 2 - Content */}
        <Flex
          ml={{xl: '350px', lg: "230px"}}
          mr={{lg: '30px', md: '60px'} }
          w={{xl: "calc(100% - 20rem)", lg: "80%", sm: '100%'}}
          flexDir="column"
          px="3%"
          py={{sm: '20%', md: '2%'}}
        >
          <Flex p="15px" borderRadius="15px" bg={background} color={"white"} w="100%" justify={{sm: 'center', md: 'initial'}}>
            <Heading fontWeight="normal" letterSpacing="tight" fontSize={{sm: 'xl', md: '2xl'}}>
              Welcome back,{" "}
              <Flex fontWeight="bold" display="inline-flex">
                {user.name.split(" ")[0]}
              </Flex>
            </Heading>
          </Flex>
          <Flex
            flexDir={{sm: "column", md: "row"}}
            justifyContent="space-between"
            w="100%"
            py="50px"
            color={"white"}
          >
            <Flex
              w={{sm: '100%', md: "50%"}}
              p="30px"
              bg={background}
              borderRadius="20px"
              mr={4}
              h={"23rem"}
              mb={{sm: '2rem'}}
            >
              <LastRadarUser />
            </Flex>
            <Flex
              w={{sm: '100%', md: "50%"}}
              py="30px"
              px={{sm: "30px", md: "20px", lg: "30px"}}
              bg={background}
              borderRadius="20px"
              h={"23rem"}
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="xl" mx="auto" mb={3}>
                Informações
              </Text>

              <Flex fontSize={{sm: 'md', md: 'lg'}} alignItems={"center"} w="100%" justify={{sm: "space-between", md: "center"}}>
                <Text  color={"gray.300"} mr={{md: 4, sm: "0"}}>
                  Nome completo:
                </Text>
                <Text>{user.name}</Text>
              </Flex>
              <Flex fontSize={{sm: 'md', md: 'lg'}} alignItems={"center"} w="100%" justify={{sm: "space-between", md: "center"}}>
                <Text  color={"gray.300"} mr={{md: 4, sm: "0"}}>
                  Email:
                </Text>
                <Text>{user.email}</Text>
              </Flex>
              <Flex fontSize={{sm: 'md', md: 'lg'}} alignItems={"center"} w="100%" justify={{sm: "space-between", md: "center"}}>
                <Text  color={"gray.300"} mr={{md: 4, sm: "0"}}>
                  Chapter:
                </Text>
                <Text>{user.chapter}</Text>
              </Flex>
              <Flex fontSize={{sm: 'md', md: 'lg'}} alignItems={"center"} w="100%" justify={{sm: "space-between", md: "center"}}>
                <Text  color={"gray.300"} mr={{md: 4, sm: "0"}}>
                  Time:
                </Text>
                <Text>{user.team}</Text>
              </Flex>
              <Flex fontSize={{sm: 'md', md: 'lg'}} alignItems={"center"} w="100%" justify={{sm: "space-between", md: "center"}}>
                <Text  color={"gray.300"} mr={{md: 4, sm: "0"}}>
                  Função:
                </Text>
                <Text>{user.role}</Text>
              </Flex>
              <Flex fontSize={{sm: 'md', md: 'lg'}}  alignItems={"center"} w="100%" justify={{sm: "space-between", md: "center"}}>
                <Text color={"gray.300"} mr={{md: 4, sm: "0"}}>
                  Data de contratação:
                </Text>
                <Text>
                  {`${new Date(`${user.createdAt}`).toLocaleDateString()}`}
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
