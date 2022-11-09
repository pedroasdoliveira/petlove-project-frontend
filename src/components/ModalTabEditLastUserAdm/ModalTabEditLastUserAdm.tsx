import { Flex, Text, Select, Button, Divider, Input } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { api } from "services";
import { useEffect, useState } from "react";
import { ResultType, SpecialtiesType } from "types/interfaces";

interface Props {
  value: ResultType;
  handleUserEspeciality: (params: any) => void;
  specialties: SpecialtiesType[] | undefined;
  colorOption: string;
  handleUserValidate: (params: any) => void;
  requisition: boolean;
  setRequisition: (params: any) => void;
  userValidate: string;
  buttonColorReverse: string;
  buttonColorReverseHover: string;
  userEspeciality: string;
  handleGetUsers: () => void;
  onClose: () => void;
  isOpen: boolean;
  setUserValidate: (params: string) => void;
}

const ModalTabEditLastUserAdm = ({
  value,
  handleUserEspeciality,
  specialties,
  colorOption,
  handleUserValidate,
  requisition,
  setRequisition,
  userValidate,
  buttonColorReverse,
  buttonColorReverseHover,
  userEspeciality,
  handleGetUsers,
  onClose,
  isOpen,
  setUserValidate,
}: Props) => {
  const [userTest, setUserTest] = useState({} as any);

  const handleUserTest = (event: any): void => {
    if (isNaN(event.target.value)) {
      toast.error("Digite um número");
      return;
    }
    if (event.target.value > 5 || event.target.value < 0) {
      toast.error("A nota deve ser entre 0 e 5");
      return;
    }
    const number = +event.target.value;
    setUserTest({
      ...userTest,
      [event.target.name]: number,
    });
  };

  useEffect(() => {
    setUserTest({
      system: value.system,
      technology: value.technology,
      person: value.person,
      influence: value.influence,
      process: value.process,
    });
    setUserValidate("");
  }, [isOpen, value]);

  return (
    <Flex w="100%" h={"100%"}>
      <Flex flexDirection="column" gap={"1.5rem"} w="50%">
        <Text fontSize="1.5rem" fontWeight={"bold"}>
          Teste recente
        </Text>
        <Flex
          w={"100%"}
          alignItems="center"
          justifyContent={"center"}
          gap="0.5rem"
        >
          <Text fontWeight={"bold"}>Sistema:</Text>
          <Input
            onChange={handleUserTest}
            name="system"
            value={userTest.system}
            w="20%"
          />
        </Flex>
        <Flex
          w={"100%"}
          alignItems="center"
          justifyContent={"center"}
          gap="0.5rem"
        >
          <Text fontWeight={"bold"}>Pessoa:</Text>

          <Input
            onChange={handleUserTest}
            value={userTest.person}
            name="person"
            w="20%"
          />
        </Flex>
        <Flex
          w={"100%"}
          alignItems="center"
          justifyContent={"center"}
          gap="0.5rem"
        >
          <Text fontWeight={"bold"}>Tecnologia:</Text>

          <Input
            onChange={handleUserTest}
            name="technology"
            value={userTest.technology}
            w="20%"
          />
        </Flex>
        <Flex
          w={"100%"}
          alignItems="center"
          justifyContent={"center"}
          gap="0.5rem"
        >
          <Text fontWeight={"bold"}>Processos:</Text>

          <Input
            onChange={handleUserTest}
            name="process"
            value={userTest.process}
            w="20%"
          />
        </Flex>
        <Flex
          w={"100%"}
          alignItems="center"
          justifyContent={"center"}
          gap="0.5rem"
        >
          <Text fontWeight={"bold"}>Influencia:</Text>

          <Input
            onChange={handleUserTest}
            name="influence"
            value={userTest.influence}
            w="20%"
          />
        </Flex>
      </Flex>

      <Divider orientation="vertical" />

      <Flex w={"50%"} h="10%" direction="column">
        <Flex
          gap={"1rem"}
          w="100%"
          justifyContent="end"
          textAlign={"center"}
          alignItems="center"
          direction="column"
        >
          <Text fontSize="1.5rem" fontWeight={"bold"}>
            Nova função:
          </Text>
          <Select
            isRequired={true}
            onChange={handleUserEspeciality}
            defaultValue={value.nextRole}
            w={"60%"}
          >
            {specialties?.map((speciality: SpecialtiesType) => (
              <option
                key={speciality.id}
                value={speciality.performance}
                style={{
                  background: colorOption,
                  color: "white",
                }}
              >
                {speciality.performance}
              </option>
            ))}
          </Select>
          <Select
            isRequired={true}
            onChange={handleUserValidate}
            defaultValue={""}
            w={"60%"}
          >
            <option
              disabled={true}
              value={""}
              style={{
                background: colorOption,
                color: "#c0c0c0",
              }}
            >
              Aprovado?
            </option>
            <option
              value="Sim"
              style={{
                background: colorOption,
                color: "white",
              }}
            >
              Sim
            </option>
            <option
              value="Não"
              style={{
                background: colorOption,
                color: "white",
              }}
            >
              Não
            </option>
          </Select>

          <Button
            isLoading={requisition}
            background={buttonColorReverse}
            _hover={{
              background: buttonColorReverseHover,
            }}
            onClick={() => {
              if (userValidate !== "") {
                const token = localStorage.getItem("token");

                const headers = {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                };

                const data = {
                  nextRole: userEspeciality,
                  isValided: userValidate,
                  ...userTest,
                };

                api
                  .patch(`/Result/${value.id}`, data, headers)
                  .then(() => {
                    toast.success("Função atualizada com sucesso!");
                    setRequisition(false);
                    handleGetUsers();
                    onClose();
                  })
                  .catch(() => {
                    toast.error("Erro ao atualizar função!");
                    setRequisition(false);
                  });
              } else {
                toast.error("Selecione se foi aprovado ou não!");
              }
            }}
          >
            Validar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ModalTabEditLastUserAdm;
