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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import RadioCard from "components/RadioCard/RadioCard";
import { obj } from "components/obj/obj";
import React from "react";

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
  Computacionais: 0
}

const StepsForm = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const colorButtonSend = useColorModeValue("#8e6dd1", "#fff");
  const buttonSendColorMode = useColorModeValue("#fff", "#5030DD");
  const buttonSendHover = useColorModeValue("#000000", "#fff");
  const buttonColorHover = useColorModeValue("#fff", "#000000");

  const [valueButton, setValueButton] = useState(false);
  const [questionaryVerify, setQuestionaryVerify] = useState('false');
  const [quantity, setQuantity] = useState(0);

  const changeValueRadio = (value: string) => {
    setValueButton(true);
    console.log(value);

    if (value === "Sim"){
      console.log('proxima questao')
      setQuestionaryVerify('question')
    } else {
      console.log('proximo step')
      setQuestionaryVerify('step')
    }
  }

  const { value, getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "option",
    defaultValue: "none",
    onChange: changeValueRadio,
  });

  const group = getRootProps();

  return (
    <Flex as="section" display={"flex"} flexDir={"column"} width="100%" minHeight="100%" justify={"space-evenly"}>
      <Progress
        colorScheme="green"
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
      <Steps activeStep={activeStep} height={"1%"}>
        {steps.map(({ label, Content }, index) => (
          <Step label={label} key={label} height={"1%"}>
              <Flex display={"flex"} flexDir={"column"} alignItems={"center"} mt={"10"} height={"60%"}>
                <FormLabel display={"flex"} justifyContent={"center"}>
                  <Heading as="h2" size="lg" marginBottom={4} textAlign={"center"} width={"60%"}>
                    
                    {Content[eval(`respostas.${label}`)]}
                  </Heading>
                </FormLabel>
                <Button
          bgColor={buttonSendColorMode}
          color={colorButtonSend}
          letterSpacing="tight"
          _hover={{ background: buttonSendHover, color: buttonColorHover }}
          hidden={!valueButton}
          mt={"100"}
          ml={"1"}
          onClick={() => {
            if (questionaryVerify === "question"){
              setQuantity(quantity + 1);
              setValueButton(false);
              if (eval(`respostas.${label}`) < Content.length - 1) {
                eval(`respostas.${label}++`);
              } else {
                eval(`respostas.${label}++`);
                nextStep();
              }
            } else if (questionaryVerify === "step"){
              setQuantity(quantity + Content.length - eval(`respostas.${label}`));
              console.log('mandando pro proximo step!')
              nextStep()
            }
            console.log("clicaram")
            setValue('none')
            setValueButton(false)
            setQuestionaryVerify('false')
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
          <Button mx="auto" mt={6} size="sm" onClick={() => {
            console.log(respostas)
            reset();
            }}>
            Ir para o perfil
          </Button>
        </Flex>
      ) : ""}

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
          <HStack color="#fff" spacing="80px" {...group} >
            <RadioCard {...getRadioProps({value: 'Sim'})}>Sim</RadioCard>
            <RadioCard {...getRadioProps({value: 'Não'})}>Não</RadioCard>
          </HStack>
        </RadioGroup>
      </FormControl>
        ) : ''}
    </Flex>
  );
};

export default StepsForm;
