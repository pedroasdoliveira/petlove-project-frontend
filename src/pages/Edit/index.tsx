import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MenuProfile from "components/MenuProfile/MenuProfile";
import type { NextPage } from "next";
import Head from "next/head";
import { user } from "components/obj/obj";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "pages/style";
import * as yup from "yup";
import AsideMenu from "components/AsideMenu/AsideMenu";

interface EditData {
  email: string;
  name: string;
  password: string;
  newPassword?: string;
  confirmPassword?: string;
  team: string;
  chapter: string;
  role: string;
}

const editSchema = yup.object().shape(
  {
    email: yup
      .string()
      .email("Entre com um email válido")
      .required("Email é obrigatório"),

    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        `Necessário ao menos: 
    1 letra maiúscula, 1 número e 1 caractere especial`
      )
      .required("Senha é obrigatória"),

    newPassword: yup.string().when("newPassword", {
      is: (val: string) => (val ? true : false),
      then: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
          `Necessário ao menos:
        1 letra maiúscula, 1 número e 1 caractere especial`
        ),
    }),

    confirmPassword: yup.string().when("confirmPassword", {
      is: (val: string) => (val ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("newPassword"), null], "Senhas não conferem"),
    }),

    name: yup
      .string()
      .min(3, "Nome deve ter no mínimo 3 caracteres")
      .max(40, "Nome deve ter no máximo 40 caracteres")
      .required("Nome é obrigatório"),

    team: yup.string().required("Time é obrigatório"),

    chapter: yup.string().required("Chapter é obrigatório"),

    role: yup.string().required("Cargo é obrigatório"),
  },
  [
    ["newPassword", "newPassword"],
    ["confirmPassword", "confirmPassword"],
  ]
);

interface ProfileProps {
  name: string;
}

const Edit: NextPage<ProfileProps> = () => {
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );
  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  const {
    register: edit,
    handleSubmit: editHandleSubmit,
    formState: { errors: editErrors },
  } = useForm<EditData>({ resolver: yupResolver(editSchema) });

  const handleEdit = (data: EditData) => {
    console.log(data);
  };

  const data = user;

  return (
    <Flex
      as="main"
      display={"flex"}
      h="100vh"
      w="100vw"
      px="50px"
      py="30px"
      justifyContent="space-between"
      position="relative"
    >
      <Head>
        <title>Editar</title>
        <meta
          name="Pagina de edição de dados do usuário"
          content="Pagina de edição de dados do usuário"
        />
      </Head>

      <Flex w="100%">
        {/* Column 1 - Menu */}
        <MenuProfile path="Mudar conta" />

        {/* Column 2 - Content */}
        <Flex
          w={"calc(100% - 20rem)"}
          flexDir="column"
          px="3%"
          py="2%"
          ml="20rem"
        >
          <Flex p="15px" borderRadius="15px" bg={background} color={"white"}>
            <Heading fontWeight="normal" letterSpacing="tight">
              Editar dados {" "}
              <Flex fontWeight="bold" display="inline-flex">
                {user.name.split(" ")[0]}?
              </Flex>
            </Heading>
          </Flex>

          <Flex
            w="100%"
            p="30px"
            bg={background}
            borderRadius="20px"
            h={"34rem"}
            my="50px"
            flexDir="column"
            justifyContent="space-between"
            color={"white"}
            fontWeight="bold"
          >
            <Text fontSize="xl" mx="auto" mb={3}>
              Informações
            </Text>
            <Flex wrap={"wrap"} gap="3.2rem" justifyContent="center">
              <Flex alignItems="center" direction={"column"} w="20%">
                <Text mr={3}>nome:</Text>
                <FormControl>
                  <Input
                    defaultValue={data.name}
                    variant={"flushed"}
                    isInvalid={!!editErrors.name}
                    mb={3}
                    {...edit("name")}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        editHandleSubmit(handleEdit)();
                      }
                    }}
                    color="white"
                    _placeholder={{
                      color: "#bbbaba",
                    }}
                  />
                  <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                    {editErrors.name?.message || ""}
                  </ErrorMessage>
                </FormControl>
              </Flex>
              <Flex alignItems="center" direction={"column"} w="20%">
                <Text>email:</Text>
                <FormControl>
                  <Input
                    defaultValue={data.email}
                    variant={"flushed"}
                    isInvalid={!!editErrors.email}
                    mb={3}
                    {...edit("email")}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        editHandleSubmit(handleEdit)();
                      }
                    }}
                    color="white"
                    _placeholder={{
                      color: "#bbbaba",
                    }}
                  />
                  <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                    {editErrors.email?.message || ""}
                  </ErrorMessage>
                </FormControl>
              </Flex>
              <Flex alignItems="center" direction={"column"} w="10%">
                <Text>team:</Text>
                <FormControl>
                  <Input
                    textAlign="center"
                    defaultValue={data.team}
                    variant={"flushed"}
                    isInvalid={!!editErrors.team}
                    mb={3}
                    {...edit("team")}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        editHandleSubmit(handleEdit)();
                      }
                    }}
                    color="white"
                    _placeholder={{
                      color: "#bbbaba",
                    }}
                  />
                  <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                    {editErrors.team?.message || ""}
                  </ErrorMessage>
                </FormControl>
              </Flex>
              <Flex alignItems="center" direction={"column"} w="10%">
                <Text>chapter:</Text>
                <FormControl>
                  <Input
                    defaultValue={data.chapter}
                    textAlign="center"
                    variant={"flushed"}
                    isInvalid={!!editErrors.chapter}
                    mb={3}
                    {...edit("chapter")}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        editHandleSubmit(handleEdit)();
                      }
                    }}
                    color="white"
                    _placeholder={{
                      color: "#bbbaba",
                    }}
                  />
                  <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                    {editErrors.chapter?.message || ""}
                  </ErrorMessage>
                </FormControl>
              </Flex>
              <Flex alignItems="center" direction={"column"} w="10%">
                <Text>role:</Text>
                <FormControl>
                  <Input
                    textAlign="center"
                    defaultValue={data.role}
                    variant={"flushed"}
                    isInvalid={!!editErrors.role}
                    mb={3}
                    {...edit("role")}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        editHandleSubmit(handleEdit)();
                      }
                    }}
                    color="white"
                    _placeholder={{
                      color: "#bbbaba",
                    }}
                  />
                  <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                    {editErrors.role?.message || ""}
                  </ErrorMessage>
                </FormControl>
              </Flex>
              <Flex
                wrap={"wrap"}
                gap="3.2rem"
                justifyContent={"center"}
                w="100%"
              >
                <Flex alignItems="center" direction={"column"} w="20%">
                  <Text>senha atual:</Text>
                  <FormControl>
                    <Input
                      variant={"flushed"}
                      isInvalid={!!editErrors.password}
                      mb={3}
                      {...edit("password")}
                      type="password"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          editHandleSubmit(handleEdit)();
                        }
                      }}
                      color="white"
                      _placeholder={{
                        color: "#bbbaba",
                      }}
                    />
                    <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                      {editErrors.password?.message || ""}
                    </ErrorMessage>
                  </FormControl>
                </Flex>
                <Flex alignItems="center" direction={"column"} w="20%">
                  <Text>nova senha:</Text>
                  <FormControl>
                    <Input
                      variant={"flushed"}
                      isInvalid={!!editErrors.newPassword}
                      mb={3}
                      {...edit("newPassword")}
                      type="password"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          editHandleSubmit(handleEdit)();
                        }
                      }}
                      color="white"
                      _placeholder={{
                        color: "#bbbaba",
                      }}
                    />
                    <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                      {editErrors.newPassword?.message || ""}
                    </ErrorMessage>
                  </FormControl>
                </Flex>
                <Flex alignItems="center" direction={"column"} w="20%">
                  <Text>confirmar senha:</Text>
                  <FormControl>
                    <Input
                      variant={"flushed"}
                      isInvalid={!!editErrors.confirmPassword}
                      mb={3}
                      {...edit("confirmPassword")}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          editHandleSubmit(handleEdit)();
                        }
                      }}
                      color="white"
                      type="password"
                      _placeholder={{
                        color: "#bbbaba",
                      }}
                    />
                    <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                      {editErrors.confirmPassword?.message || ""}
                    </ErrorMessage>
                  </FormControl>
                </Flex>
              </Flex>
            </Flex>

            <Button
              background={buttonBackground}
              _hover={{ background: buttonHover, color: buttonColor }}
              color="white"
              variant="ghost"
              w={"100%"}
              onClick={editHandleSubmit(handleEdit)}
              mt={7}
            >
              editar
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <AsideMenu direction="column"/>
    </Flex>
  );
};

export default Edit;
