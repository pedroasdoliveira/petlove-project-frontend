import {
  Button,
  Flex,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ErrorMessage } from "../../../style/style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/Users";
import { useAuth } from "contexts/Auth";

interface Props {
  user: any;
  specialtyss: any;
  onClose: () => void;
}

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

const editSchema = yup.object().shape({
  email: yup
    .string()
    .email("Entre com um email válido")
    .required("Email é obrigatório"),

  name: yup
    .string()
    .min(15, "Nome deve ter no mínimo 15 caracteres")
    .max(40, "Nome deve ter no máximo 40 caracteres")
    .required("Nome é obrigatório"),

  team: yup.string().required("Time é obrigatório"),
});

const ModalTabEditAdm = ({ user, specialtyss, onClose }: Props) => {
  const [userRole, setUserRole] = useState(user.role);
  const [userChapter, setUserChapter] = useState(user.chapter);
  const { handleGetUsers } = useUsers();
  const { requisition, setRequisition } = useAuth();

  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");

  const buttonColorReverse = useColorModeValue(
    "rgba(6, 11, 40, 0.94)",
    "#3B49DA"
  );
  const buttonColorReverseHover = useColorModeValue(
    "#313bad",
    "rgba(13, 24, 83, 0.94)"
  );

  const {
    register: edit,
    handleSubmit: editHandleSubmit,
    formState: { errors: editErrors },
    reset,
  } = useForm<EditData>({ resolver: yupResolver(editSchema) });

  const handleEdit = (data: EditData): void => {
    if (userRole === null) {
      return alert("Selecione uma função");
    }

    if (userChapter === null) {
      return alert("Selecione um chapter");
    }

    setRequisition(true);

    data.role = userRole;
    data.chapter = userChapter;

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .patch(`/User/${user.email}`, data, headers)
      .then(() => {
        toast.success("Usuário editado com sucesso!");
        handleGetUsers();
        setRequisition(false);
        reset();
        onClose();
      })
      .catch(() => {
        toast.error("Erro ao editar usuário!");
        setRequisition(false);
      });
  };
  return (
    <form>
      <Flex flexDir="column" justifyContent="center">
        {/* Input name  */}
        <Text
          fontSize="xl"
          mx="auto"
          mb={1}
          textAlign="center"
          mt={2}
          fontWeight="bold"
        >
          Editar informações:
        </Text>

        <Flex
          flexDir="row"
          gap="3.2rem"
          justifyContent={"center"}
          w="100%"
          mt={"2rem"}
        >
          {/* Input senha atual + nova senha + confirmar senha */}
          <Flex alignItems="center" direction={"column"} w="20%">
            <Text>Nome:</Text>
            <FormControl>
              <Input
                defaultValue={user.name}
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
            <Text>Email:</Text>
            <FormControl>
              <Input
                defaultValue={user.email}
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
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-around"
          mb={8}
          mt="4rem"
        >
          {/* Input team + chapter + role */}
          <Flex alignItems="center" direction={"column"} w="10%">
            <Text>Time:</Text>
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
          <Flex direction={"column"} w="10%">
            <Text>Chapter:</Text>
            <FormControl>
              <Menu>
                <MenuButton as={Button} colorScheme="blue">
                  {userChapter !== null ? userChapter : "Selecione"}
                </MenuButton>
                <MenuList
                  minWidth="240px"
                  style={{
                    background: colorOption,
                    color: "white",
                  }}
                >
                  <MenuOptionGroup
                    type="radio"
                    defaultValue={userChapter}
                    onChange={setUserChapter}
                  >
                    <MenuItemOption
                      value={"backend"}
                      _focus={{
                        background: "gray.600",
                      }}
                    >
                      Backend
                    </MenuItemOption>
                    <MenuItemOption
                      value={"frontend"}
                      _focus={{
                        background: "gray.600",
                      }}
                    >
                      Frontend
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </FormControl>
          </Flex>
          <Flex direction={"column"} w="10%">
            <Text>Função:</Text>
            <FormControl>
              <Menu>
                <MenuButton as={Button} colorScheme="blue">
                  {userRole !== null ? userRole : "Selecione"}
                </MenuButton>
                <MenuList
                  minWidth="240px"
                  style={{
                    background: colorOption,
                    color: "white",
                  }}
                >
                  <MenuOptionGroup
                    type="radio"
                    defaultValue={userRole}
                    onChange={setUserRole}
                  >
                    {specialtyss?.map((speciality: any) => (
                      <MenuItemOption
                        key={speciality.id}
                        value={speciality.performance}
                        _focus={{
                          background: "gray.600",
                        }}
                      >
                        {speciality.performance}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>

      {/* Button Form */}
      <Flex justifyContent="center" alignItems="center" mt={"3rem"}>
        <Button
          isLoading={requisition}
          background={buttonColorReverse}
          _hover={{
            background: buttonColorReverseHover,
          }}
          color="white"
          variant="solid"
          w={"80%"}
          onClick={editHandleSubmit(handleEdit)}
        >
          editar
        </Button>
      </Flex>
    </form>
  );
};

export default ModalTabEditAdm;
