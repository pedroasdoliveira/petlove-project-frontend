import {
  Flex,
  FormControl,
  Input,
  useColorModeValue,
  Button,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { user } from "components/obj/obj";
import { ErrorMessage } from "pages/style";
import { useForm } from "react-hook-form";
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
  const {
    register: edit,
    handleSubmit: editHandleSubmit,
    formState: { errors: editErrors },
  } = useForm<EditData>({ resolver: yupResolver(editSchema) });

  const handleEdit = (data: EditData) => {
    console.log(data);
  };

  const buttonBackground = useColorModeValue("#230d88", "#5030dd");
  const buttonHover = useColorModeValue("#383838", "#dee0e3");
  const buttonColor = useColorModeValue("#dee0e3", "#000000");

  return (
    <>
      <Flex flexDir="column" justifyContent="center">
        {/* Input name + email */}
        <Flex
          flexDir={{ md: "row", sm: "column" }}
          alignItems="center"
          justifyContent="space-evenly"
          mb={8}
        >
          <Flex
            alignItems="center"
            direction={{ sm: "row", md: "column" }}
            w={{ md: "35%", sm: "85%" }}
          >
            <Text mr={3}>nome:</Text>
            <FormControl>
              <Input
                defaultValue={user.name}
                variant={"flushed"}
                isInvalid={!!editErrors.name}
                mb={3}
                textAlign="center"
                {...edit("name")}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    editHandleSubmit(handleEdit)();
                  }
                }}
                color="white"
                _placeholder={{
                  color: "#bbbaba",
                  textAlign: "center",
                }}
              />
              <ErrorMessage color={useColorModeValue("#ffee00", "red")}>
                {editErrors.name?.message || ""}
              </ErrorMessage>
            </FormControl>
          </Flex>

          <Flex
            alignItems="center"
            direction={{ sm: "row", md: "column" }}
            w={{ md: "35%", sm: "85%" }}
          >
            <Text>email:</Text>
            <FormControl>
              <Input
                defaultValue={user.email}
                variant={"flushed"}
                isInvalid={!!editErrors.email}
                mb={3}
                textAlign="center"
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
        </Flex>
        {/* Input team + chapter + role */}
        <Flex alignItems="center" justifyContent="space-evenly" mb={8}>
          <Flex
            alignItems="center"
            direction={"column"}
            w={{ md: "10%", sm: "20%" }}
          >
            <Text>team:</Text>
            <FormControl>
              <Input
                textAlign="center"
                defaultValue={user.team}
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
          <Flex
            alignItems="center"
            direction={"column"}
            w={{ md: "10%", sm: "20%" }}
          >
            <Text>chapter:</Text>
            <FormControl>
              <Input
                defaultValue={user.chapter}
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
          <Flex
            alignItems="center"
            direction={"column"}
            w={{ md: "10%", sm: "20%" }}
          >
            <Text>role:</Text>
            <FormControl>
              <Input
                textAlign="center"
                defaultValue={user.role}
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
        </Flex>

        {/* Input senha atual + nova senha + confirmar senha */}
        <Flex
          flexDir={{ md: "row", sm: "column" }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Flex
            alignItems="center"
            justify={{ sm: "space-between" }}
            direction={{ sm: "row", md: "column" }}
            w={{ md: "30%", sm: "85%" }}
          >
            <Text w={{ sm: "250px", md: "auto" }}>senha atual:</Text>
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
          <Flex
            alignItems="center"
            direction={{ sm: "row", md: "column" }}
            w={{ md: "30%", sm: "85%" }}
          >
            <Text w={{ sm: "250px", md: "auto" }}>nova senha:</Text>
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
          <Flex
            alignItems="center"
            direction={{ sm: "row", md: "column" }}
            w={{ md: "30%", sm: "85%" }}
          >
            <Text w={{ sm: "250px", md: "auto" }}>confirmar senha:</Text>
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

      {/* Button Form */}
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
    </>
  );
};

export default EditForm;
