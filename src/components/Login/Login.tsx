import {
  Button,
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
  const buttonBackground = useColorModeValue("#472dba", "#5030dd");
  const buttonHover = useColorModeValue("#000000", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  const {
    register: login,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    console.log(data);
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
          />

          <ErrorMessage>{loginErrors.email?.message || ""}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            placeholder="Sua senha..."
            variant={"flushed"}
            isInvalid={!!loginErrors.password}
            mb={3}
            type="password"
            {...login("password")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                loginHandleSubmit(handleLogin)();
              }
            }}
          />
          <ErrorMessage>{loginErrors.password?.message || ""}</ErrorMessage>
        </FormControl>
        <Button
          background={buttonBackground}
          _hover={{ background: buttonHover, color: buttonColor }}
          color="#b2aec2"
          variant="ghost"
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
