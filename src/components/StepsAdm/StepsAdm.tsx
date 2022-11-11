import { useState } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  Flex,
  Heading,
  Button,
  FormControl,
  RadioGroup,
  HStack,
  useRadioGroup,
  useColorModeValue,
  FormLabel,
  Link as ChakraLink,
  Select,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RadioCard from "../../components/RadioCard/RadioCard";
import React from "react";
import LastRadarUserAdm from "../../components/Graphics/LastRadarUserAdm";
import toast from "react-hot-toast";
import { api } from "../../services";
import { useUsers } from "../../contexts/Users";
import { useSpecialties } from "../../contexts/specialties";
import { useTest } from "../../contexts/testQuests";
import { useAuth } from "../../contexts/Auth";
import {
  ResultType,
  ResultReviewType,
  StepsType,
  SpecialtiesType,
} from "types/interfaces";

interface Props {
  lastTest: ResultType;
  respostas: ResultReviewType;
  handleResetRespostas: () => void;
  onClose: () => void;
}

const StepsAdmForm = ({
  lastTest,
  respostas,
  handleResetRespostas,
  onClose,
}: Props) => {
  const { specialties } = useSpecialties();
  const { test } = useTest();
  const { requisition, setRequisition } = useAuth();

  const { handleGetUsers } = useUsers();
  const { nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const colorButtonSend = useColorModeValue("#3d1194", "#fff");
  const buttonSendColorMode = useColorModeValue("#fff", "#5030DD");
  const buttonSendHover = useColorModeValue("#000000", "#fff");
  const buttonColorHover = useColorModeValue("#fff", "#000000");
  const linkColor = useColorModeValue("#3f3f3f", "#adadad");
  const stepsColor = useColorModeValue("#cc1010", "#1d1d31");
  const stepsColorText = useColorModeValue("#10cc19", "#1d1d31");

  const buttonColorReverse = useColorModeValue(
    "rgba(6, 11, 40, 0.94)",
    "#3B49DA"
  );
  const buttonColorReverseHover = useColorModeValue(
    "#313bad",
    "rgba(13, 24, 83, 0.94)"
  );
  const colorOption = useColorModeValue("#3B49DA", "rgba(6, 11, 40, 0.94)");

  const steps = [
    { label: "Sistemas", Content: test?.system },
    { label: "Processos", Content: test?.process },
    { label: "Pessoas", Content: test?.person },
    { label: "Ferramentarias", Content: test?.toolshop },
    { label: "Design", Content: test?.design },
    { label: "Teste", Content: test?.test },
    { label: "Computacionais", Content: test?.computationalFundamentals },
  ];

  const [valueButton, setValueButton] = useState(false);
  const [questionaryVerify, setQuestionaryVerify] = useState("false");
  const [quantity, setQuantity] = useState(0);
  const [hidden, setHidden] = useState(true);

  const [userEspeciality, setUserEspeciality] = useState(lastTest.nextRole);
  const [userValidate, setUserValidate] = useState("");

  const handleUserEspeciality = (event: any): void => {
    setUserEspeciality(event.target.value);
  };

  const handleUserValidate = (event: any): void => {
    setUserValidate(event.target.value);
  };

  const changeValueRadio = (value: string): void => {
    setValueButton(true);

    if (value === "Sim") {
      setQuestionaryVerify("question");
    } else {
      setQuestionaryVerify("step");
    }
  };

  const handleHidden = (): void => {
    setHidden(!hidden);
  };

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "option",
    defaultValue: "none",
    onChange: changeValueRadio,
  });

  const group = getRootProps();

  if (hidden) {
    return (
      <Flex
        as="section"
        display={"flex"}
        flexDir={"column"}
        width="100%"
        justify={"space-evenly"}
        align={"center"}
      >
        <Steps
          activeStep={activeStep}
          height={"1%"}
          colorScheme="green"
          mb={"4rem"}
          borderRadius="10px"
          textColor={"#10cc19"}
          color={stepsColor}
          borderColor={stepsColorText}
          borderBlockEndColor={stepsColorText}
          textStyle={{
            color: stepsColorText,
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {steps.map(({ label, Content }: StepsType) => (
            <Step label={label} key={label} height={"1%"}>
              <Flex
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"100%"}
                height={"40%"}
              >
                <FormLabel display={"flex"} justifyContent={"center"}>
                  <Heading
                    as="h2"
                    size="lg"
                    marginBottom={4}
                    textAlign={"center"}
                    width={"90%"}
                    display={"flex"}
                    justifyContent={"center"}
                    flexDir={"column"}
                  >
                    {Content?.[eval(`respostas.${label}`)] &&
                    Content[eval(`respostas.${label}`)].match(
                      /https?:\/\/[^\s]+|www.?[^\s]+/g
                    ) ? (
                      <>
                        {Content[eval(`respostas.${label}`)].replace(
                          /https?:\/\/[^\s]+|www.?[^\s]+/g,
                          ""
                        )}
                        <ChakraLink
                          href={
                            Content[eval(`respostas.${label}`)].match(
                              /https?:\/\/[^\s]+|www.?[^\s]+/g
                            ) as unknown as string
                          }
                          target="_blank"
                          rel="noreferrer"
                          mt={5}
                          color={linkColor}
                          textDecoration={"underline"}
                        >
                          Link
                        </ChakraLink>
                      </>
                    ) : (
                      Content?.[eval(`respostas.${label}`)]
                    )}
                  </Heading>
                </FormLabel>
                <Button
                  bgColor={buttonSendColorMode}
                  color={colorButtonSend}
                  letterSpacing="tight"
                  _hover={{
                    background: buttonSendHover,
                    color: buttonColorHover,
                  }}
                  hidden={!valueButton}
                  position={"absolute"}
                  bottom={"16.3rem"}
                  ml={"1"}
                  onClick={() => {
                    if (questionaryVerify === "question") {
                      setQuantity(quantity + 1);
                      setValueButton(false);
                      if (eval(`respostas.${label}`) < Content?.length! - 1) {
                        eval(`respostas.${label}++`);
                      } else {
                        eval(`respostas.${label}++`);
                        nextStep();
                      }
                    } else if (questionaryVerify === "step") {
                      setQuantity(
                        quantity + Content?.length! - eval(`respostas.${label}`)
                      );
                      nextStep();
                    }
                    setValue("none");
                    setValueButton(false);
                    setQuestionaryVerify("false");
                  }}
                >
                  {questionaryVerify === "question"
                    ? "Próxima questão"
                    : "Próximo passo"}{" "}
                  <ArrowForwardIcon w={8} h={5} />
                </Button>
              </Flex>
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width="100%" flexDir="column">
            <Heading fontSize="xl" textAlign="center">
              Validação concluída!
            </Heading>

            <Button
              mx="auto"
              mt={6}
              background={buttonColorReverse}
              _hover={{
                background: buttonColorReverseHover,
              }}
              size="sm"
              onClick={() => {
                setQuantity(0);
                handleHidden();
              }}
            >
              Mostrar teste
            </Button>
          </Flex>
        ) : (
          ""
        )}

        {
          //aq em baixo são os botao sim ou não
        }
        {activeStep !== steps.length ? (
          <FormControl
            as="fieldset"
            display="flex"
            alignItems="center"
            flexDir="column"
            mt={"3rem"}
          >
            <RadioGroup defaultValue="none" mb={10} display="flex">
              <HStack color="#fff" spacing="80px" {...group}>
                <RadioCard {...getRadioProps({ value: "Sim" })}>Sim</RadioCard>
                <RadioCard {...getRadioProps({ value: "Não" })}>Não</RadioCard>
              </HStack>
            </RadioGroup>
          </FormControl>
        ) : (
          ""
        )}
      </Flex>
    );
  } else {
    return (
      <Flex w={"100%"} h="100%" direction={"column"} alignItems="center">
        <Flex w={"100%"} h="90%" justifyContent="center">
          <Flex
            w={"100%"}
            h="99%"
            style={{
              background: "rgba(6, 11, 40, 0.94)",
              borderRadius: "10px",
            }}
          >
            <Flex w={"50%"} h="100%">
              <LastRadarUserAdm testUser={lastTest} type="user" />
            </Flex>
            <Flex w={"50%"} h="100%">
              <LastRadarUserAdm testUser={respostas} type="review" />
            </Flex>
          </Flex>
        </Flex>
        <Flex w={"100%"} h="10%" justifyContent={"space-evenly"}>
          <Button
            onClick={() => {
              handleResetRespostas();
              reset();
              handleHidden();
            }}
            background={buttonColorReverse}
            _hover={{
              background: buttonColorReverseHover,
            }}
          >
            Voltar
          </Button>
          <Flex gap={"1rem"}>
            <Select w="80%" isRequired={true} onChange={handleUserEspeciality}>
              {specialties?.map((speciality: SpecialtiesType) => (
                <option
                  key={speciality.id}
                  selected={
                    lastTest.nextRole === speciality.name ? true : false
                  }
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
              w={"80%"}
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
              w="40%"
              isLoading={requisition}
              background={buttonColorReverse}
              _hover={{
                background: buttonColorReverseHover,
              }}
              onClick={() => {
                if (userValidate !== "") {
                  setRequisition(true);

                  const token = localStorage.getItem("token");

                  const headers = {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  };

                  const data = {
                    nextRole: userEspeciality,
                    isValided: userValidate,
                    system: respostas.Sistemas,
                    technology: +(
                      ((respostas.Ferramentarias || 0) +
                        (respostas.Design || 0) +
                        (respostas.Teste || 0) +
                        (respostas.Computacionais || 0)) *
                      (5 / 12)
                    ).toFixed(2),
                    person: respostas.Pessoas,
                    influence: +(
                      ((respostas.Sistemas || 0) +
                        (respostas.Processos || 0) +
                        2 * (respostas.Pessoas || 0)) /
                      4
                    ).toFixed(2),
                    process: respostas.Processos,
                  };

                  api
                    .patch(`/Result/${lastTest.id}`, data, headers)
                    .then(() => {
                      toast.success("Função atualizada com sucesso!");
                      handleGetUsers();
                      setRequisition(false);
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
  }
};

export default StepsAdmForm;
