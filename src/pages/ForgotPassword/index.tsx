import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ErrorMessage } from "../../style/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import Router from "next/router";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/Auth";
import { useToggle } from "../../hooks/useToggle";
import { ToggleMode } from "../../types/interfaces";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Head from "next/head";

interface ForgotPasswordData {
  email: string;
}

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Entre com um email válido")
    .required("Email é obrigatório"),
});

const ForgotPassword: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const { toggle, setToggle } = useToggle() as ToggleMode;

  const formBackground = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)",
  );
  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  const { requisition, setRequisition } = useAuth();

  const {
    register: forgotPassword,
    handleSubmit: forgotPasswordHandleSubmit,
    formState: { errors: forgotPasswordErrors },
    reset,
  } = useForm<ForgotPasswordData>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotPassword = (data: ForgotPasswordData) => {
    setRequisition(true);
    api
      .get(`User/send/${data.email}`)
      .then((response) => {
        setRequisition(false);
        reset();
        toast.success(
          "Email para redefinição de senha enviado com sucesso! Verifique sua caixa de entrada.",
        );
        Router.push("/");
      })
      .catch((error) => {
        toast.error("Erro ao enviar email para redefinição de senha!");
        setRequisition(false);
      });
  };

  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Head>
        <title>Enviar email - Self Awareness</title>
        <meta
          name="Page for sending email forgot password"
          content="Send email forgot password"
        />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>

      <Flex
        direction={"column"}
        background={formBackground}
        w={"650px"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={"5rem"} textAlign={"center"} cursor="default" size={"lg"}>
          Enviar email para alteração de senha
        </Heading>
        <FormControl>
          <Input
            placeholder="Seu email..."
            variant={"flushed"}
            isInvalid={!!forgotPasswordErrors.email}
            mb={3}
            type="text"
            {...forgotPassword("email")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                forgotPasswordHandleSubmit(handleForgotPassword)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
            {forgotPasswordErrors.email?.message || ""}
          </ErrorMessage>
        </FormControl>
        <Button
          background={buttonBackground}
          _hover={{ background: buttonHover, color: buttonColor }}
          color="white"
          variant="ghost"
          isLoading={requisition}
          w={"100%"}
          onClick={forgotPasswordHandleSubmit(handleForgotPassword)}
          mt={7}
        >
          Enviar
        </Button>

        <Box
          position={"absolute"}
          top={2}
          right={2}
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode();
            setToggle(!toggle);
          }}
        >
          {toggle ? <SunIcon /> : <MoonIcon />}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ForgotPassword;
