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
  Input,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RadioCard from "components/RadioCard/RadioCard";
import { obj, specialities } from "components/obj/obj";
import React from "react";
import Link from "next/link";
import LastRadarUserAdm from "components/Graphics/LastRadarUserAdm";

const steps = [
  { label: "Sistemas", Content: obj.sistemas },
  { label: "Processos", Content: obj.processos },
  { label: "Pessoas", Content: obj.pessoas },
  { label: "Ferramentarias", Content: obj.ferramentarias },
  { label: "Design", Content: obj.designs },
  { label: "Teste", Content: obj.testes },
  { label: "Computacionais", Content: obj.computacionais },
];

const StepsAdmForm = ({ lastTest, respostas, handleResetRespostas }: any) => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const colorButtonSend = useColorModeValue("#3d1194", "#fff");
  const buttonSendColorMode = useColorModeValue("#fff", "#5030DD");
  const buttonSendHover = useColorModeValue("#000000", "#fff");
  const buttonColorHover = useColorModeValue("#fff", "#000000");
  const linkColor = useColorModeValue("#3f3f3f", "#adadad");
  const stepsColor = useColorModeValue("#cc1010", "#1d1d31");
  const stepsColorText = useColorModeValue("#10cc19", "#1d1d31");

  const [valueButton, setValueButton] = useState(false);
  const [questionaryVerify, setQuestionaryVerify] = useState("false");
  const [quantity, setQuantity] = useState(0);
  const [hidden, setHidden] = useState(true);

  const [userEspeciality, setUserEspeciality] = useState("");
  const [userValidate, setUserValidate] = useState("");

  const handleUserEspeciality = (event: any) => {
    setUserEspeciality(event.target.value);
  };

  const handleUserValidate = (event: any) => {
    setUserValidate(event.target.value);
  };

  const changeValueRadio = (value: string) => {
    setValueButton(true);
    console.log(value);

    if (value === "Sim") {
      console.log("proxima questao");
      setQuestionaryVerify("question");
    } else {
      console.log("proximo step");
      setQuestionaryVerify("step");
    }
  };

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const { value, getRootProps, getRadioProps, setValue } = useRadioGroup({
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
          {steps.map(({ label, Content }, index) => (
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
                  my={"1rem"}
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
              Validação concluída!
            </Heading>

            <Button
              mx="auto"
              mt={6}
              size="sm"
              onClick={() => {
                console.log(respostas);
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
          <Flex w={"50%"} h="100%">
            <LastRadarUserAdm testUser={lastTest} type="user" />
          </Flex>
          <Flex w={"50%"} h="100%">
            <LastRadarUserAdm testUser={respostas} type="review" />
          </Flex>
        </Flex>
        <Flex w={"100%"} h="10%" justifyContent={"space-evenly"}>
          <Button
            onClick={() => {
              handleResetRespostas();
              reset();
              handleHidden();
            }}
          >
            Voltar
          </Button>
          <Flex gap={"1rem"}>
            <Select isRequired={true} onChange={handleUserEspeciality}>
              {specialities.map((speciality) => (
                <option
                  key={speciality.id}
                  selected={
                    lastTest.nextRole === speciality.name ? true : false
                  }
                  value={speciality.name}
                >
                  {speciality.name}
                </option>
              ))}
            </Select>

            <Select
              isRequired={true}
              onChange={handleUserValidate}
              defaultValue={"null"}
              w={"12%"}
            >
              <option disabled={true} value={"null"}>
                Aprovado?
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>

            <Button
              onClick={() => {
                // mostrar role que o usuario selecionou no select, no caso agora so conectar com api
                console.log(userEspeciality, lastTest.userId);
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