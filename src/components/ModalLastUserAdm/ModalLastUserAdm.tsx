import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import StepsAdmForm from "../../components/StepsAdm/StepsAdm";
import { useState } from "react";
import { useUsers } from "../../contexts/Users";
import { useSpecialtyss } from "../../contexts/specialtyss";
import { useAuth } from "../../contexts/Auth";
import ModalTabDataLastUserAdm from "components/ModalTabDataLastUserAdm/ModalTabDataLastUserAdm";
import ModalTabSpecialtyLastUserAdm from "components/ModalTabSpecialtyLastUserAdm/ModalTabSpecialtyLastUserAdm";
import ModalTabEditLastUserAdm from "components/ModalTabEditLastUserAdm/ModalTabEditLastUserAdm";

const ModalLastUserAdm = ({ value, user }: any) => {
  const { specialtyss } = useSpecialtyss();
  const { handleGetUsers } = useUsers();
  const { requisition, setRequisition } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [userEspeciality, setUserEspeciality] = useState(value.nextRole);
  const [userValidate, setUserValidate] = useState("");

  const buttonColor = useColorModeValue(
    "linear-gradient(111.58deg, #313baf 21.73%, rgba(45, 56, 175, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );
  const buttonColorReverse = useColorModeValue(
    "rgba(6, 11, 40, 0.94)",
    "#3B49DA"
  );
  const buttonColorReverseHover = useColorModeValue(
    "#313bad",
    "rgba(13, 24, 83, 0.94)"
  );
  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgb(59, 72, 218) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgb(10, 14, 35) 100%)"
  );

  const colorModal = useColorModeValue("whiteAlpha", "yellow");
  const colorHeader = useColorModeValue("aqua", "gray");
  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");



  const handleUserEspeciality = (event: any): void => {
    setUserEspeciality(event.target.value);
  };

  const handleUserValidate = (event: any): void => {
    setUserValidate(event.target.value);
  };

  const respostas = {
    Sistemas: 0,
    Processos: 0,
    Pessoas: 0,
    Ferramentarias: 0,
    Design: 0,
    Teste: 0,
    Computacionais: 0,
  };

  const handleResetRespostas = (): void => {
    respostas.Sistemas = 0;
    respostas.Processos = 0;
    respostas.Pessoas = 0;
    respostas.Ferramentarias = 0;
    respostas.Design = 0;
    respostas.Teste = 0;
    respostas.Computacionais = 0;
  };

  return (
    <>
      <Button width={"50%"} onClick={onOpen} background={buttonColor}>
        <ExternalLinkIcon w={"25px"} h={"25px"} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent
          w={"100%"}
          h={"80%"}
          background={background}
          color={"gray.100"}
        >
          <ModalHeader display={"flex"} flexDirection={"row"} gap="1rem">
            <Text>{user.name}</Text>
            {user.role === null ? (
              <Text fontSize={"17px"} color={colorHeader}>
                Contratado
              </Text>
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.role}
              </Text>
            )}
            <Text fontSize={"17px"} color={colorHeader}>
              {user.team}
            </Text>
            <Text fontSize={"17px"} color={colorHeader}>
              {user.chapter}
            </Text>
            <Text fontSize={"17px"} color={colorHeader}>
              {user.email}
            </Text>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody w={"100%"} h={"80%"}>
            <Tabs
              variant="enclosed"
              mt={"-1rem"}
              w={"100%"}
              h={"93%"}
              colorScheme={colorModal}
            >
              <TabList justifyContent={"space-between"}>
                <Flex>
                  <Tab>Dados gerais</Tab>
                  <Tab>Comparação Especialidades</Tab>
                </Flex>
                <Flex>
                  <Tab>Editar teste</Tab>
                  <Tab>Refazer teste</Tab>
                </Flex>
              </TabList>
              <TabPanels w={"100%"} h={"100%"}>
                <TabPanel w={"100%"} h={"100%"} overflowY="auto">
                  <ModalTabDataLastUserAdm
                    user={user}
                    value={value}
                    handleUserEspeciality={handleUserEspeciality}
                    specialtyss={specialtyss}
                    colorOption={colorOption}
                    handleUserValidate={handleUserValidate}
                    requisition={requisition}
                    setRequisition={setRequisition}
                    userValidate={userValidate}
                    buttonColorReverse={buttonColorReverse}
                    buttonColorReverseHover={buttonColorReverseHover}
                    userEspeciality={userEspeciality}
                    handleGetUsers={handleGetUsers}
                    onClose={onClose}
                  />
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"}>
                  <ModalTabSpecialtyLastUserAdm
                    user={user}
                    value={value}
                    handleUserEspeciality={handleUserEspeciality}
                    specialtyss={specialtyss}
                    colorOption={colorOption}
                    handleUserValidate={handleUserValidate}
                    requisition={requisition}
                    setRequisition={setRequisition}
                    userValidate={userValidate}
                    buttonColorReverse={buttonColorReverse}
                    buttonColorReverseHover={buttonColorReverseHover}
                    userEspeciality={userEspeciality}
                    handleGetUsers={handleGetUsers}
                    onClose={onClose}
                  />
                </TabPanel>
                <TabPanel
                  w={"100%"}
                  h={"100%"}
                  textAlign="center"
                  display={"flex"}
                >
                  <ModalTabEditLastUserAdm
                    value={value}
                    handleUserEspeciality={handleUserEspeciality}
                    specialtyss={specialtyss}
                    colorOption={colorOption}
                    handleUserValidate={handleUserValidate}
                    requisition={requisition}
                    setRequisition={setRequisition}
                    userValidate={userValidate}
                    buttonColorReverse={buttonColorReverse}
                    buttonColorReverseHover={buttonColorReverseHover}
                    userEspeciality={userEspeciality}
                    handleGetUsers={handleGetUsers}
                    onClose={onClose}
                    isOpen={isOpen}
                    setUserValidate={setUserValidate}
                  />
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"} overflowY="auto">
                  <StepsAdmForm
                    lastTest={value}
                    respostas={respostas}
                    handleResetRespostas={handleResetRespostas}
                    onClose={onClose}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLastUserAdm;
