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
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import RadioCard from "components/RadioCard/RadioCard";
import { obj } from "components/SystemSteps/SystemSteps";
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
    <Flex as="section" flexDir={"column"} width="100%">
      <Progress
        colorScheme="green"
        size="sm"
        value={5}
        max={18}
        marginBottom={12}
      />
      <Steps activeStep={activeStep}>
        {steps.map(({ label, Content }, index) => (
          <Step label={label} key={label}>
              <Flex>
                <FormLabel>
                
                {Content[eval(`respostas.${label}`)]}
                </FormLabel>
              </Flex>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDir="column">
          <Heading fontSize="xl" textAlign="center">
            Teste Concluido
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            <ArrowBackIcon />
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? "Finish" : <ArrowForwardIcon />}
          </Button>
        </Flex>
      )}

      {
        //aq em baixo são os botao sim ou não
      }
      <FormControl
        as="fieldset"
        display="flex"
        alignItems="center"
        flexDir="column"
      >
        <RadioGroup defaultValue="none" mb={5} display="flex">
          <HStack color="#fff" spacing="80px" {...group} >
            <RadioCard {...getRadioProps({value: 'Sim'})}>Sim</RadioCard>
            <RadioCard {...getRadioProps({value: 'Não'})}>Não</RadioCard>
          </HStack>
        </RadioGroup>
        <Button
          bgColor={buttonSendColorMode}
          color={colorButtonSend}
          letterSpacing="tight"
          _hover={{ background: buttonSendHover, color: buttonColorHover }}
          hidden={!valueButton}
          onClick={() => {
            if (questionaryVerify === "question"){
              console.log('mandando pra proxima questão!')
            } else if (questionaryVerify === "step"){
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
      </FormControl>
    </Flex>
  );
};

export default StepsForm;
