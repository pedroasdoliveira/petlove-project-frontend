import { useEffect, useState } from "react";
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
  Progress,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RadioCard from "../../components/RadioCard/RadioCard";
import React from "react";
import Link from "next/link";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useTest } from "../../contexts/testQuests";
import { useUsers } from "../../contexts/Users";
import { useAuth } from "../../contexts/Auth";

const respostas = {
  Sistemas: 0,
  Processos: 0,
  Pessoas: 0,
  Ferramentarias: 0,
  Design: 0,
  Teste: 0,
  Computacionais: 0,
};

const StepsForm = () => {
  const { nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const { test }: any = useTest();
  const { handleGetUsers } = useUsers();
  const { requisition, setRequisition } = useAuth();

  const steps = [
    { label: "Sistemas", Content: test?.system },
    { label: "Processos", Content: test?.process },
    { label: "Pessoas", Content: test?.person },
    { label: "Ferramentarias", Content: test?.toolshop },
    { label: "Design", Content: test?.design },
    { label: "Teste", Content: test?.test },
    { label: "Computacionais", Content: test?.computationalFundamentals },
  ];

  const handleReset = () => {
    respostas.Sistemas = 0;
    respostas.Processos = 0;
    respostas.Pessoas = 0;
    respostas.Ferramentarias = 0;
    respostas.Design = 0;
    respostas.Teste = 0;
    respostas.Computacionais = 0;
    reset();
  };

  useEffect(() => {
    handleReset();
  }, []);

  const colorButtonSend = useColorModeValue("#3d1194", "#fff");
  const buttonSendColorMode = useColorModeValue("#fff", "#5030DD");
  const buttonSendHover = useColorModeValue("#000000", "#fff");
  const buttonColorHover = useColorModeValue("#fff", "#000000");
  const linkColor = useColorModeValue("#3f3f3f", "#adadad");

  const [valueButton, setValueButton] = useState(false);
  const [questionaryVerify, setQuestionaryVerify] = useState("false");
  const [quantity, setQuantity] = useState(0);

  const changeValueRadio = (value: string) => {
    setValueButton(true);

    if (value === "Sim") {
      setQuestionaryVerify("question");
    } else {
      setQuestionaryVerify("step");
    }
  };

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "option",
    defaultValue: "none",
    onChange: changeValueRadio,
  });

  const group = getRootProps();

  return (
    <Flex
      as="section"
      display={"flex"}
      flexDir={"column"}
      width="100%"
      minHeight="100%"
      justify={"space-evenly"}
    >
      <Progress
        colorScheme="green"
        borderRadius="10px"
        size="sm"
        value={quantity}
        max={
          test?.system?.length +
          test?.person?.length +
          test?.toolshop?.length +
          test?.design?.length +
          test?.test?.length +
          test?.computationalFundamentals?.length +
          test?.process?.length
        }
        marginBottom={12}
      />
      <Steps
        activeStep={activeStep}
        height={"1%"}
        colorScheme="green"
        borderRadius="10px"
        textColor={"#10cc19"}
        color={useColorModeValue("#cc1010", "#1d1d31")}
        borderColor={useColorModeValue("#10cc19", "#1d1d31")}
        borderBlockEndColor={useColorModeValue("#10cc19", "#1d1d31")}
        textStyle={{
          color: useColorModeValue("#10cc19", "#1d1d31"),
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        {steps.map(({ label, Content }) => (
          <Step label={label} key={label} height={"1%"}>
            <Flex
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              mt={"10"}
              height={"60%"}
            >
              <FormLabel display={"flex"} justifyContent={"center"}>
                <Heading
                  as="h2"
                  size="lg"
                  marginBottom={4}
                  textAlign={"center"}
                  width={"60%"}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDir={"column"}
                >
                  {Content?.[eval(`respostas.${label}`)] &&
                  Content?.[eval(`respostas.${label}`)].match(
                    /https?:\/\/[^\s]+|www.?[^\s]+/g,
                  ) ? (
                    <>
                      {Content?.[eval(`respostas.${label}`)].replace(
                        /https?:\/\/[^\s]+|www.?[^\s]+/g,
                        "",
                      )}
                      <ChakraLink
                        href={
                          Content?.[eval(`respostas.${label}`)].match(
                            /https?:\/\/[^\s]+|www.?[^\s]+/g,
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
                mt={"100"}
                ml={"1"}
                onClick={() => {
                  if (questionaryVerify === "question") {
                    setQuantity(quantity + 1);
                    setValueButton(false);
                    if (eval(`respostas.${label}`) < Content.length - 1) {
                      eval(`respostas.${label}++`);
                    } else {
                      eval(`respostas.${label}++`);
                      nextStep();
                    }
                  } else if (questionaryVerify === "step") {
                    setQuantity(
                      quantity + Content.length - eval(`respostas.${label}`),
                    );
                    nextStep();
                  }
                  setValue("none");
                  setValueButton(false);
                  setQuestionaryVerify("false");
                }}
              >
                Next {questionaryVerify} <ArrowForwardIcon w={8} h={5} />
              </Button>
            </Flex>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDir="column">
          <Heading fontSize="xl" textAlign="center">
            Teste Concluido
          </Heading>
          <Link href={"/Profile"}>
            <Button
              mx="auto"
              mt={6}
              size="sm"
              isLoading={requisition}
              onClick={() => {
                setRequisition(true);
                const token = localStorage.getItem("token");

                const headers = {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                };

                const data = {
                  toolshop: respostas.Ferramentarias,
                  design: respostas.Design,
                  test: respostas.Teste,
                  computationalFundamentals: respostas.Computacionais,
                  person: respostas.Pessoas,
                  process: respostas.Processos,
                  system: respostas.Sistemas,
                };

                api
                  .post("/Result", data, headers)
                  .then(() => {
                    setQuantity(0);
                    handleReset();
                    handleGetUsers();
                    setRequisition(false);
                    toast.success("Resultado enviado com sucesso!");
                  })
                  .catch((err) => {
                    handleReset();
                    setRequisition(false);
                    if(err.response.data.message === "Insufficient completion time!"){
                      toast.error("Tempo de conclusão insuficiente! Aguarde 3 meses para refazer o teste.");
                      return;
                    };
                    if(err.response.data.message === "Last test not validated!"){
                      toast.error("O último teste ainda não foi validado! Aguarde a validação para refazer o teste.");
                      return;
                    };
                    toast.error("Erro ao enviar resultado!");
                  });
              }}
            >
              Ir para o perfil
            </Button>
          </Link>
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
};

export default StepsForm;
