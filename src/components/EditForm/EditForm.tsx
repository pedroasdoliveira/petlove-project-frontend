import {
  Flex,
  FormControl,
  Input,
  useColorModeValue,
  Button,
  Text,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "contexts/Auth";
import { useUsers } from "contexts/Users";
import { ErrorMessage } from "style/style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { api } from "services";
import * as yup from "yup";

interface EditData {
  name: string;
  password: string;
  newPassword?: string;
  confirmPassword?: string;
}

const editSchema = yup.object().shape(
  {
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
  },
  [
    ["newPassword", "newPassword"],
    ["confirmPassword", "confirmPassword"],
  ]
);

const EditForm = () => {
  const { user, handleGetUsers } = useUsers();
  const { requisition, setRequisition } = useAuth();
  const [viewPassword, setViewPassword] = useState(false);
  const [emailNotification, setEmailNotification] = useState("");

  useEffect(() => {
    setEmailNotification(user?.emailNotification);
  }, [user]);

  const {
    register: edit,
    handleSubmit: editHandleSubmit,
    formState: { errors: editErrors },
    reset,
  } = useForm<EditData>({ resolver: yupResolver(editSchema) });

  const handleEdit = (data: EditData) => {
    setRequisition(true);
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!data.newPassword) {
      delete data.newPassword;
      delete data.confirmPassword;
    }

    const dataToSend = {
      ...data,
      emailNotification,
    };

    api
      .patch(`/User/${user.email}`, dataToSend, headers)
      .then((response) => {
        toast.success("Dados alterados com sucesso!");
        handleGetUsers();
        setRequisition(false);
        reset();
      })
      .catch((error) => {
        toast.error("Erro ao alterar dados!");
        console.log(error);
        console.log(dataToSend);
        setRequisition(false);
      });
  };

  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  return (
    <>
      <Flex flexDir="column" justifyContent="center">
        {/* Input name  */}
        <Flex
          flexDir="row"
          alignItems="center"
          justifyContent="space-evenly"
          mb={8}
        ></Flex>
        <Flex alignItems="center" justifyContent="space-evenly" mb={8}></Flex>

        <Flex flexDir="row" gap="3.2rem" justifyContent={"center"} w="100%">
          {/* Input senha atual + nova senha + confirmar senha */}
          <Flex alignItems="center" direction={"column"} w="20%">
            <Text>senha atual:</Text>
            <FormControl>
              <Input
                variant={"flushed"}
                isInvalid={!!editErrors.password}
                mb={3}
                {...edit("password")}
                type={viewPassword ? "text" : "password"}
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
                type={viewPassword ? "text" : "password"}
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
                type={viewPassword ? "text" : "password"}
                _placeholder={{
                  color: "#bbbaba",
                }}
              />
              <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                {editErrors.confirmPassword?.message || ""}
              </ErrorMessage>
            </FormControl>
            <Flex justifyContent="end" width="100%" mt={2}>
              <Checkbox
                colorScheme="purple"
                mb={2}
                mt={3}
                onChange={() => {
                  setViewPassword(!viewPassword);
                }}
              >
                Mostrar senha
              </Checkbox>
            </Flex>
          </Flex>
        </Flex>
        <Flex ml={"2rem"} gap="1rem" direction={"column"} w="23%">
          {user?.isAdmin && (
            <>
              <Text textAlign="center">Receber emails:</Text>
              <RadioGroup
                onChange={setEmailNotification}
                value={emailNotification}
              >
                <Stack>
                  <Radio value="all">Todos</Radio>
                  <Radio value="team">Somente do meu time</Radio>
                  <Radio value="none">Nenhum</Radio>
                </Stack>
              </RadioGroup>
            </>
          )}
        </Flex>
      </Flex>

      {/* Button Form */}
      <Button
        background={buttonBackground}
        _hover={{ background: buttonHover, color: buttonColor }}
        color="white"
        variant="ghost"
        isLoading={requisition}
        w={"100%"}
        onClick={editHandleSubmit(handleEdit)}
        mt={7}
      >
        editar
      </Button>
    </>
  );
};

export default EditForm;
