import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CheckboxLeft, ErrorMessage } from "../../pages/style";

interface RegisterData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  team: string;
  chapter: string;
  role: string;
  isAdmin: boolean;
  terms: boolean;
}

const registerSchema = yup.object().shape({
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

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não conferem")
    .required("Confirmação de senha é obrigatória"),

  name: yup
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(40, "Nome deve ter no máximo 40 caracteres")
    .required("Nome é obrigatório"),

  team: yup.string().required("Time é obrigatório"),

  chapter: yup.string().required("Chapter é obrigatório"),

  role: yup.string().required("Cargo é obrigatório"),

  isAdmin: yup.boolean(),

  terms: yup.boolean().oneOf([true]),
});

const RegisterComponent: NextPage = () => {
  const checkboxColor = useColorModeValue("#000000", "#ffffff");
  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");
  const errorColor = useColorModeValue("#ffee00", "red");

  const {
    register: register,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerErrors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: RegisterData) => {
    console.log("register", data);
  };

  return (
    <>
      <Heading mb={6} textAlign={"center"} cursor="default">
        Registro
      </Heading>

      <form>
        <FormControl>
          <Input
            placeholder="Seu nome completo..."
            variant={"flushed"}
            isInvalid={!!registerErrors.name}
            mb={3}
            type="text"
            {...register("name")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                registerHandleSubmit(handleRegister)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage
            color={errorColor}
          >{registerErrors.name?.message || ""}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            placeholder="Seu email..."
            variant={"flushed"}
            isInvalid={!!registerErrors.email}
            mb={3}
            type="email"
            {...register("email")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                registerHandleSubmit(handleRegister)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />

          <ErrorMessage
            color={errorColor}
          >{registerErrors.email?.message || ""}</ErrorMessage>
        </FormControl>
        <FormControl mt={2.45}>
          <Input
            placeholder="Nome do time que participa..."
            variant={"flushed"}
            isInvalid={!!registerErrors.team}
            mb={3}
            type="text"
            {...register("team")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                registerHandleSubmit(handleRegister)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage
            color={errorColor}
          >{registerErrors.team?.message || ""}</ErrorMessage>
        </FormControl>
        <CheckboxLeft>
          <FormControl>
            <Input
              placeholder="Qual o seu chapter?"
              variant={"flushed"}
              isInvalid={!!registerErrors.chapter}
              mb={3}
              type="text"
              {...register("chapter")}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  registerHandleSubmit(handleRegister)();
                }
              }}
              color="white"
              _placeholder={{
                color: "#bbbaba",
              }}
            />
            <ErrorMessage
              color={errorColor}
            >{registerErrors.chapter?.message || ""}</ErrorMessage>
          </FormControl>
          <FormControl>
            <Checkbox
              size="sm"
              colorScheme={useColorModeValue("purple", "blue")}
              {...register("isAdmin")}
              color="white"
            >
              Sou gestor
            </Checkbox>
          </FormControl>
        </CheckboxLeft>
        <FormControl>
          <Input
            placeholder="Nível atual? (junior, pleno, sênior, etc)"
            variant={"flushed"}
            isInvalid={!!registerErrors.role}
            mb={3}
            type="text"
            {...register("role")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                registerHandleSubmit(handleRegister)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage
            color={errorColor}
          >{registerErrors.role?.message || ""}</ErrorMessage>
        </FormControl>
        <FormControl mt={2.45}>
          <Input
            placeholder="Sua senha..."
            variant={"flushed"}
            isInvalid={!!registerErrors.password}
            mb={3}
            type="password"
            {...register("password")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                registerHandleSubmit(handleRegister)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage
            color={errorColor}
          >{registerErrors.password?.message || ""}</ErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            placeholder="Confirme sua senha..."
            variant={"flushed"}
            isInvalid={!!registerErrors.confirmPassword}
            mb={3}
            type="password"
            {...register("confirmPassword")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                registerHandleSubmit(handleRegister)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage
            color={errorColor}
          >
            {registerErrors.confirmPassword?.message || ""}
          </ErrorMessage>
        </FormControl>
        <FormControl>
          <Flex justifyContent="center" alignItems="center">
            <Checkbox
              size="sm"
              colorScheme="red"
              color={registerErrors.terms ? `${errorColor}` : checkboxColor}
              fontWeight="bold"
              mt={3}
              {...register("terms")}
            >
              Todas as informações fornecidas são verdadeiras
            </Checkbox>
          </Flex>
        </FormControl>
        <Button
          background={buttonBackground}
          _hover={{ background: buttonHover, color: buttonColor }}
          color="white"
          variant="ghost"
          w={"100%"}
          onClick={registerHandleSubmit(handleRegister)}
          mt={3}
        >
          Inscrever-se
        </Button>
      </form>
    </>
  );
};

export default RegisterComponent;
