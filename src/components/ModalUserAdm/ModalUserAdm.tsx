import {
  Badge,
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
import { useSpecialties } from "../../contexts/specialties";
import ModalTabDataAdm from "components/ModalTabDataAdm/ModalTabDataAdm";
import ModalTabSpecialtyAdm from "components/ModalTabSpecialtyAdm/ModalTabDataAdm";
import ModalTabEditAdm from "components/ModalTabEditAdm/ModalTabEditAdm";
import { UserTypes, ResultType } from "types/interfaces";

interface Props {
  user: UserTypes;
  value: ResultType;
}

const ModalLastUserAdm = ({ value, user }: Props) => {
  const { specialties } = useSpecialties();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonColor = useColorModeValue(
    "linear-gradient(111.58deg, #313baf 21.73%, rgba(45, 56, 175, 0.49) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgba(10, 14, 35, 0.49) 100%)"
  );

  const background = useColorModeValue(
    "linear-gradient(111.58deg, #3B49DA 21.73%, rgb(59, 72, 218) 52.68%)",
    "linear-gradient(97.85deg, rgba(6, 11, 40, 0.94) 20.22%, rgb(10, 14, 35) 100%)"
  );

  const colorModal = useColorModeValue("whiteAlpha", "yellow");
  const colorHeader = useColorModeValue("aqua", "gray");

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
            <Text>
              {user.role === null &&
                user.chapter === null &&
                user.team === null && (
                  <Badge colorScheme="green" variant="solid" fontSize="0.8em">
                    Novo
                  </Badge>
                )}
            </Text>
            <Text>{user.name} </Text>
            {user.role === null ? (
              <Text fontSize={"17px"} color={colorHeader}>
                Contratado
              </Text>
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.role}
              </Text>
            )}
            {user.role === null ? (
              ""
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.team}
              </Text>
            )}
            {user.role === null ? (
              ""
            ) : (
              <Text fontSize={"17px"} color={colorHeader}>
                {user.chapter}
              </Text>
            )}
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
                  <Tab>Editar</Tab>
                </Flex>
              </TabList>
              <TabPanels w={"100%"} h={"100%"}>
                <TabPanel w={"100%"} h={"100%"} overflowY="auto">
                  <ModalTabDataAdm user={user} />
                </TabPanel>
                <TabPanel w={"100%"} h={"100%"}>
                  <ModalTabSpecialtyAdm
                    user={user}
                    specialties={specialties}
                    value={value}
                  />
                </TabPanel>
                <TabPanel>
                  <ModalTabEditAdm
                    user={user}
                    specialties={specialties}
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
