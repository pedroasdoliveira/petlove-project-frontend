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
  Progress,
  FormLabel,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RadioCard from "components/RadioCard/RadioCard";
import { obj } from "components/obj/obj";
import React from "react";
import Link from "next/link";
import { api } from "services";
import toast from "react-hot-toast";

const steps = [
  { label: "Sistemas", Content: obj.sistemas },
  { label: "Processos", Content: obj.processos },
  { label: "Pessoas", Content: obj.pessoas },
  { label: "Ferramentarias", Content: obj.ferramentarias },
  { label: "Design", Content: obj.designs },
  { label: "Teste", Content: obj.testes },
  { label: "Computacionais", Content: obj.computacionais },
];

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
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

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

  const { value, getRootProps, getRadioProps, setValue } = useRadioGroup({
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
          obj.computacionais.length +
          obj.designs.length +
          obj.ferramentarias.length +
          obj.pessoas.length +
          obj.processos.length +
          obj.sistemas.length +
          obj.testes.length
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
        {steps.map(({ label, Content }, index) => (
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
                  {Content[eval(`respostas.${label}`)] &&
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
                    Content[eval(`respostas.${label}`)]
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
                      quantity + Content.length - eval(`respostas.${label}`)
                    );
                    console.log("mandando pro proximo step!");
                    nextStep();
                  }
                  console.log("clicaram");
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
              onClick={() => {
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

                api.post("/Result", data, headers).then((response) => {
                  console.log(response);
                  setQuantity(0);
                  toast.success("Resultado enviado com sucesso!");          
                }).catch((error) => {
                  console.log(error);
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
