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
import { ErrorMessage } from "style/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "services";
import Router from "next/router";
import toast from "react-hot-toast";
import { useAuth } from "contexts/Auth";
import { useState } from "react";

interface ChangePasswordData {
  password: string;
  confirmPassword: string;
}

const changePasswordSchema = yup.object().shape({
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
});

const ChangePasswordComponent = ({ query }: any) => {
  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  const { login: loginAuth, requisition, setRequisition } = useAuth();

  const [viewPassword, setViewPassword] = useState(false);

  const {
    register: changePassword,
    handleSubmit: changePasswordHandleSubmit,
    formState: { errors: changePasswordErrors },
    reset,
  } = useForm<ChangePasswordData>({
    resolver: yupResolver(changePasswordSchema),
  });

  const handleChangePassword = (data: ChangePasswordData) => {
    setRequisition(true);
    api
      .patch(`User/change/password/${query?.[0]}/${query?.[1]}`, data)
      .then((response) => {
        setRequisition(false);
        reset();
        toast.success("Senha alterada com sucesso! Faça login para continuar");
        Router.push("/");
      })
      .catch((error) => {
        toast.error("Erro ao alterar senha");
        setRequisition(false);
      });
  };

  return (
    <>
      <Heading mb={6} textAlign={"center"} cursor="default">
        Alterar senha
      </Heading>
      <form>
        <FormControl>
          <Input
            placeholder="Nova senha..."
            variant={"flushed"}
            isInvalid={!!changePasswordErrors.password}
            mb={3}
            type={viewPassword ? "text" : "password"}
            {...changePassword("password")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                changePasswordHandleSubmit(handleChangePassword)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
            {changePasswordErrors.password?.message || ""}
          </ErrorMessage>
        </FormControl>
        <FormControl>
          <Input
            placeholder="Confirme a senha..."
            variant={"flushed"}
            isInvalid={!!changePasswordErrors.confirmPassword}
            mb={3}
            type={viewPassword ? "text" : "password"}
            {...changePassword("confirmPassword")}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                changePasswordHandleSubmit(handleChangePassword)();
              }
            }}
            color="white"
            _placeholder={{
              color: "#bbbaba",
            }}
          />
          <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
            {changePasswordErrors.confirmPassword?.message || ""}
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
          onClick={changePasswordHandleSubmit(handleChangePassword)}
          mt={7}
        >
          Enviar
        </Button>
      </form>
    </>
  );
};

export default ChangePasswordComponent;
