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
  Icon,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/Auth";
import { useUsers } from "../../contexts/Users";
import { ErrorMessage } from "../../style/style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { api } from "../../services";
import * as yup from "yup";
import Image from "next/image";
import axios from "axios";
import ProfileIcon from "../../../public/icon/Profile_Icon.svg";
import { MdAddAPhoto } from "react-icons/md";
import Infinity from "../../../public/icon/Infinity.svg";

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
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmailNotification(user?.emailNotification);
    setImage(user?.profilePicture ?? ProfileIcon);
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
      profilePicture: image,
    };

    api
      .patch(`/User/${user?.email}`, dataToSend, headers)
      .then(() => {
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
      <Flex flexDir="column" justifyContent="center" overflow="auto">
        <Flex
          direction={"column"}
          w="100%"
          flexDir="row"
          justifyContent="space-evenly"
          mt={5}
          mb={9}
        >
          {/* Email */}
          <Flex gap="1rem" direction={"column"} w="23%">
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

          {/* Foto de perfil */}
          <Flex
            flexDir="column"
            alignItems="center"
            w="8rem"
            h="8rem"
            position="relative"
          >
            <Text textAlign="center" mb={"1rem"} w="10rem">
              Trocar foto de perfil:
            </Text>

            <Input
              type="file"
              w="20%"
              isDisabled={loading}
              style={{ display: "none" }}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                //verifica se o file não é imagem
                if (!file?.type.match(/image.*/)) {
                  toast.error("Arquivo não é uma imagem");
                  return;
                }

                //verifica se o tamanho do arquivo é maior que 5mb
                if (file.size > 5 * 1024 * 1024) {
                  toast.error("Arquivo muito grande");
                  return;
                }

                if (file) {
                  setLoading(true);
                  const formData = new FormData();
                  formData.append("image", file);
                  formData.append(
                    "album",
                    process.env.NEXT_PUBLIC_CLIENT_ALBUM as string
                  );

                  axios
                    .post("https://api.imgur.com/3/image", formData, {
                      headers: {
                        Authorization: process.env
                          .NEXT_PUBLIC_CLIENT_ID as string,
                      },
                    })
                    .then((response) => {
                      setImage(response.data.data.link);
                      setLoading(false);
                    })
                    .catch(() => {
                      toast.error("Erro ao enviar imagem");
                      setLoading(false);
                    });
                }
              }}
            />

            <Flex
              position="absolute"
              zIndex={1}
              minW="20%"
              minH="20%"
              p="0.4rem"
              borderRadius="full"
              bg={buttonBackground}
              bottom="1"
              right="3"
            >
              <Icon
                as={MdAddAPhoto}
                width={"1.2rem"}
                height={"1.2rem"}
                cursor={loading ? "not-allowed" : "pointer"}
                onClick={() => {
                  const input = document.querySelector(
                    'input[type="file"]'
                  ) as HTMLInputElement;
                  if (loading) {
                    return;
                  }

                  input.click();
                }}
              />
            </Flex>

            <Image
              src={loading ? Infinity : image}
              alt="Imagem de perfil"
              width={"89%"}
              height={"89%"}
              objectFit={"cover"}
              style={{ borderRadius: "50%", background: "#dee0e3" }}
            />
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
        >
          {/* Input senha atual + alterar */}
          <Flex
            flexDir={{ md: "row", sm: "column" }}
            gap="3.2rem"
            justifyContent={"center"}
            alignItems="center"
            w="100%"
            mb="2"
          >
            {/* Senha atual */}
            <Flex
              alignItems="center"
              direction={{ sm: "row", md: "column" }}
              w={{ md: "35%", sm: "85%" }}
              justify={{ sm: "center" }}
            >
              <Text
                w={{ sm: "250px", md: "auto" }}
                alignSelf={{ sm: "flex-end", md: "center" }}
              >
                senha atual:
              </Text>
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

            {/* Alterar */}
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              w="100%"
              border="1px"
              borderColor={
                editErrors.newPassword || editErrors.confirmPassword
                  ? "red"
                  : buttonBackground
              }
              borderRadius="1rem"
              px={{ md: "0", sm: "2" }}
            >
              <Text>Alterar senha</Text>
              <Flex
                flexDir={{ sm: "column" }}
                justifyContent="center"
                w="100%"
                mt="1rem"
              >
                <Flex
                  w="100%"
                  flexDir={{ sm: "column", md: "row" }}
                  justifyContent="space-evenly"
                >
                  {/* Nova senha */}
                  <Flex
                    direction={{ sm: "row", md: "column" }}
                    w={{ md: "40%", sm: "100%" }}
                  >
                    <Text
                      w={{ sm: "250px", md: "auto" }}
                      alignSelf={{ sm: "flex-end", md: "center" }}
                    >
                      nova senha:
                    </Text>
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

                  {/* Confirmar senha */}
                  <Flex
                    alignItems="center"
                    direction={{ sm: "row", md: "column" }}
                    w={{ md: "40%", sm: "100%" }}
                  >
                    <Text
                      w={{ sm: "250px", md: "auto" }}
                      alignSelf={{ sm: "flex-end", md: "center" }}
                    >
                      confirmar senha:
                    </Text>
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
                  </Flex>
                </Flex>

                {/* Checkbox */}
                <Flex
                  justifyContent={{ sm: "center", md: "end" }}
                  width="100%"
                  mt={2}
                  px={10}
                >
                  <Checkbox
                    colorScheme="purple"
                    mt={1}
                    onChange={() => {
                      setViewPassword(!viewPassword);
                    }}
                  >
                    Mostrar senha
                  </Checkbox>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Button Form */}
      <Button
        background={buttonBackground}
        _hover={{ background: buttonHover, color: buttonColor }}
        color="white"
        variant="ghost"
        isLoading={requisition || loading}
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
