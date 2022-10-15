import {
  Button,
  Checkbox,
  CircularProgress,
  Flex,
  FormControl,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ErrorMessage } from "pages/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "services";
import Router from "next/router";
import toast from "react-hot-toast";
import { useAuth } from "contexts/Auth";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
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
});

const LoginComponent: NextPage = () => {
  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  const { login: loginAuth, requisition, setRequisition } = useAuth();

  const [viewPassword, setViewPassword] = useState(false);

  const {
    register: login,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
    reset,
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    setRequisition(true);
    api
      .post("/auth", data)
      .then((response) => {
        const headers = {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        };

        api.get(`User/${data.email}`, headers).then((res) => {
          const user = res.data;
          loginAuth!({ token: response.data.token, user: user });
          setRequisition(false);
          reset();
          Router.push("/Homepage");
        });
      })
      .catch((error) => {
        if (error.response.data.message === "User not verified") {
          toast.error("Usuário não verificado");
        } else {
          toast.error("Email ou senha incorretos");
        }
        setRequisition(false);
      });
  };

  return (
    <>
      <Heading mb={6} textAlign={"center"} cursor="default">
        Login
      </Heading>
      <form>
        <FormControl>
          <Input
            placeholder="Seu email..."
            variant={"flushed"}
            isInvalid={!!loginErrors.email}
            mb={3}
            type="email"
            {...login("email")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                loginHandleSubmit(handleLogin)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />

          <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
            {loginErrors.email?.message || ""}
          </ErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            placeholder="Sua senha..."
            variant={"flushed"}
            isInvalid={!!loginErrors.password}
            mb={3}
            type={viewPassword ? "text" : "password"}
            {...login("password")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                loginHandleSubmit(handleLogin)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
            {loginErrors.password?.message || ""}
          </ErrorMessage>
          <Flex justifyContent="end" width="100%" mt={2}>
            <Checkbox
              colorScheme="purple"
              color={useColorModeValue("#230d88", "#5030dd")}
              mb={2}
              onChange={() => {
                setViewPassword(!viewPassword);
              }}
            >
              Mostrar senha
            </Checkbox>
          </Flex>
        </FormControl>
        <Button
          background={buttonBackground}
          _hover={{ background: buttonHover, color: buttonColor }}
          color="white"
          variant="ghost"
          isLoading={requisition}
          w={"100%"}
          onClick={loginHandleSubmit(handleLogin)}
          mt={7}
        >
          Log In
        </Button>
      </form>
    </>
  );
};

export default LoginComponent;
